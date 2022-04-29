import React, { FC } from "react";
import NcModal from "components/NcModal/NcModal";
import { CategoriesNode3 } from "data/postCardType";
import { useLazyQuery, gql } from "@apollo/client";
import { GET_LIST_CATEGORIES_NO_PARENT } from "./queryGraphql";
import ButtonPrimary from "components/Button/ButtonPrimary";
import CardCategory1 from "components/CardCategory1/CardCategory1";
import { PageInfo } from "containers/SingleComments/commentType";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import CardCategory1Skeleton from "components/CardCategory1/CardCategory1Skeleton";
import NCMAZ_TRANSLATE from "contains/translate";

interface Data {
  categories: Categories;
}
export interface Categories {
  edges: Edge[];
  pageInfo: PageInfo;
  __typename: string;
}
interface Edge {
  node: CategoriesNode3;
  __typename: string;
}

export interface ModalCategoriesProps {}

const ModalCategories: FC<ModalCategoriesProps> = () => {
  const POST_PER_PAGE = 20;
  const Q_LIST_CATS = gql`
    ${GET_LIST_CATEGORIES_NO_PARENT}
  `;

  const [getListCats, { loading, error, data, fetchMore }] = useLazyQuery<Data>(
    Q_LIST_CATS,
    { notifyOnNetworkStatusChange: true }
  );

  const handleClickOpen = () => {
    if (data?.categories.edges.length) {
      return;
    }
    getListCats({
      variables: { first: POST_PER_PAGE, orderby: null, hideEmpty: true },
    });
  };

  // Function to update the query with the new results
  const updateQuery = (
    previousResult: Data,
    { fetchMoreResult }: { fetchMoreResult?: Data }
  ): Data => {
    if (!fetchMoreResult?.categories?.edges.length) {
      return previousResult;
    }
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
    fetchMore({
      variables: {
        first: POST_PER_PAGE,
        after: data?.categories.pageInfo.endCursor || null,
      },
      updateQuery,
    });
  };

  const IS_SKELETON = loading && !data?.categories.edges.length;

  const renderModalContent = () => {
    return (
      <div className="flex flex-col items-center space-y-8">
        {/* SECTION STATE */}
        <DataStatementBlockV2
          data={data?.categories.edges || []}
          isSkeleton={IS_SKELETON}
          error={error}
        />

        <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 sm:py-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4 xl:md:grid-cols-5">
          {IS_SKELETON &&
            Array.from("iiiiiiiiiiiiiiiiiiii").map((_, i) => (
              <CardCategory1Skeleton key={i} />
            ))}

          {(data?.categories.edges || []).map((cat) => (
            <CardCategory1
              key={cat.node.id}
              taxonomy={cat.node}
              size="normal"
            />
          ))}
        </div>

        {data?.categories.pageInfo.hasNextPage && (
          <ButtonPrimary loading={loading} onClick={handleClickLoadmore}>
            {NCMAZ_TRANSLATE["showMeMore"]}
          </ButtonPrimary>
        )}
      </div>
    );
  };

  return (
    <div className="nc-ModalCats">
      <NcModal
        onOpenModal={handleClickOpen}
        triggerText={
          <span>
            <span className="hidden sm:inline">
              {NCMAZ_TRANSLATE["otherCategories"]}
            </span>{" "}
            <span className="inline sm:hidden">
              {NCMAZ_TRANSLATE["categories"]}
            </span>
          </span>
        }
        modalTitle={NCMAZ_TRANSLATE["discoverOtherCategories"]}
        renderContent={renderModalContent}
      />
    </div>
  );
};

export default ModalCategories;
