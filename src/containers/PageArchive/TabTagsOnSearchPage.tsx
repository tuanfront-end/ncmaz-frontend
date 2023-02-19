import React, { FC, useEffect } from "react";
import { TagNode3 } from "data/postCardType";
import { gql, useQuery } from "@apollo/client";
import { GET_LIST_TAGS } from "./queryGraphql";
import ButtonPrimary from "components/Button/ButtonPrimary";
import { PageInfo } from "containers/SingleComments/commentType";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import Skeleton from "react-loading-skeleton";
import Tag from "components/Tag/Tag";
import NCMAZ_TRANSLATE from "contains/translate";

interface Data {
  tags: Tags;
}
interface Tags {
  edges: Edge[];
  pageInfo: PageInfo;
  __typename: string;
}
interface Edge {
  node: TagNode3;
  __typename: string;
}

export interface TabTagsOnSearchPageProps {
  searchText: string;
  onUpdateTotal: (totalString: string) => void;
}

const TabTagsOnSearchPage: FC<TabTagsOnSearchPageProps> = ({
  searchText,
  onUpdateTotal,
}) => {
  const POST_PER_PAGE = 30;

  const Q_LIST_CATS = gql`
    ${GET_LIST_TAGS}
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
    if (!data?.tags) {
      return;
    }
    const s = data.tags.pageInfo.hasNextPage
      ? `${data?.tags.edges.length}+ ${NCMAZ_TRANSLATE["tags"]}`
      : `${data?.tags.edges.length} ${NCMAZ_TRANSLATE["tags"]}`;
    onUpdateTotal(s);
  }, [data]);

  // Function to update the query with the new results
  const updateQuery = (
    previousResult: Data,
    { fetchMoreResult }: { fetchMoreResult?: Data }
  ): Data => {
    if (!fetchMoreResult?.tags?.edges.length) return previousResult;
    return {
      ...fetchMoreResult,
      tags: {
        ...fetchMoreResult.tags,
        edges: [
          ...previousResult?.tags?.edges,
          ...fetchMoreResult?.tags?.edges,
        ],
      },
    };
  };

  const handleClickLoadmore = () => {
    if (!fetchMore) return;
    const existIDs = data?.tags.edges.map((item) => item.node.tagId);
    fetchMore({
      variables: {
        exclude: existIDs,
      },
      updateQuery,
    });
  };

  const IS_SKELETON = loading && !data?.tags.edges.length;

  return (
    <div className="mt-8 lg:mt-10">
      {/* SECTION STATE */}
      <DataStatementBlockV2
        data={data?.tags.edges || []}
        isSkeleton={IS_SKELETON}
        error={error}
      />

      <div className="w-full flex flex-wrap dark:text-neutral-200">
        {IS_SKELETON &&
          Array.from("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii").map((_, i) => (
            <Skeleton
              key={i}
              height="38px"
              className="mr-2.5 mb-2"
              width="90px"
            />
          ))}

        {(data?.tags.edges || []).map((tag) => (
          <Tag key={tag.node.id} tag={tag.node} className="mr-2 mb-2" />
        ))}
      </div>

      {data?.tags.pageInfo.hasNextPage && (
        <div className="flex justify-center mt-8 sm:mt-10 xl:mt-14">
          <ButtonPrimary loading={loading} onClick={handleClickLoadmore}>
            {NCMAZ_TRANSLATE["showMeMore"]}
          </ButtonPrimary>
        </div>
      )}
    </div>
  );
};

export default TabTagsOnSearchPage;
