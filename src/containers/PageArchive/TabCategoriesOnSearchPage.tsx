import React, { FC, useEffect } from "react";
import { CategoriesNode3 } from "data/postCardType";
import { gql, useQuery } from "@apollo/client";
import { GET_LIST_CATEGORIES } from "./queryGraphql";
import ButtonPrimary from "components/Button/ButtonPrimary";
import { PageInfo } from "containers/SingleComments/commentType";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import CardCategory2 from "components/CardCategory2/CardCategory2";
import CardCategory2Skeleton from "components/CardCategory2/CardCategory2Skeleton";
import NCMAZ_TRANSLATE from "contains/translate";

interface Data {
  categories: Categories;
}
interface Categories {
  edges: Edge[];
  pageInfo: PageInfo;
  __typename: string;
}
interface Edge {
  node: CategoriesNode3;
  __typename: string;
}

export interface TabCategoriesOnSearchPageProps {
  searchText: string;
  onUpdateTotal: (totalString: string) => void;
}

const TabCategoriesOnSearchPage: FC<TabCategoriesOnSearchPageProps> = ({
  searchText,
  onUpdateTotal,
}) => {
  const POST_PER_PAGE = 20;
  const Q_LIST_CATS = gql`
    ${GET_LIST_CATEGORIES}
  `;

  //
  let variables: Record<string, any> = {
    first: POST_PER_PAGE,
  };
  //
  if (!!searchText) {
    variables = {
      first: POST_PER_PAGE,
      search: searchText,
    };
  }

  const { loading, error, data, fetchMore } = useQuery<Data>(Q_LIST_CATS, {
    notifyOnNetworkStatusChange: true,
    variables,
  });

  useEffect(() => {
    if (!data?.categories) {
      return;
    }
    const s = data.categories.pageInfo.hasNextPage
      ? `${data?.categories.edges.length}+ ${NCMAZ_TRANSLATE["categories"]}`
      : `${data?.categories.edges.length} ${NCMAZ_TRANSLATE["categories"]}`;
    onUpdateTotal(s);
  }, [data]);

  // Function to update the query with the new results
  const updateQuery = (
    previousResult: Data,
    { fetchMoreResult }: { fetchMoreResult?: Data }
  ): Data => {
    if (!fetchMoreResult?.categories?.edges.length) return previousResult;
    return {
      ...fetchMoreResult,
      categories: {
        ...fetchMoreResult.categories,
        edges: [
          ...previousResult?.categories?.edges,
          ...fetchMoreResult?.categories?.edges,
        ],
      },
    };
  };

  const handleClickLoadmore = () => {
    if (!fetchMore) return;
    const existIDs = data?.categories.edges.map((item) => item.node.categoryId);
    fetchMore({
      variables: {
        exclude: existIDs,
      },
      updateQuery,
    });
  };

  const IS_SKELETON = loading && !data?.categories.edges.length;

  return (
    <div className="mt-8 lg:mt-10">
      {/* SECTION STATE */}
      <DataStatementBlockV2
        data={data?.categories.edges || []}
        isSkeleton={IS_SKELETON}
        error={error}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2.5 gap-y-4 sm:gap-6 2xl:gap-8 ">
        {IS_SKELETON &&
          Array.from("iiiiiiiiiiiiiiiiiiii").map((_, i) => (
            <CardCategory2Skeleton key={i} />
          ))}

        {(data?.categories.edges || []).map((cat) => (
          <CardCategory2 key={cat.node.id} taxonomy={cat.node} />
        ))}
      </div>

      {data?.categories.pageInfo.hasNextPage && (
        <div className="flex justify-center mt-8 sm:mt-10 xl:mt-14">
          <ButtonPrimary loading={loading} onClick={handleClickLoadmore}>
            {NCMAZ_TRANSLATE["showMeMore"]}
          </ButtonPrimary>
        </div>
      )}
    </div>
  );
};

export default TabCategoriesOnSearchPage;
