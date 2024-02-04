import React, { FC, useEffect } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import { ListPosts } from "data/postCardType";
import { useQuery, gql } from "@apollo/client";
import {
  POSTS_SECTION_BY_FILTER__string,
  POSTS_SECTION_BY_SEARCH_NO_FILTER__string,
} from "./queryGraphql";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import NCMAZ_TRANSLATE from "contains/translate";
import ArchiveGridPost from "./ArchiveGridPost";

interface Data {
  posts: ListPosts;
}

export interface TabArticlesOnSearchPageProps {
  searchText: string;
  orderByState: string;
  onUpdateTotal: (totalString: string) => void;
  isSmallContainer?: boolean;
}

const TabArticlesOnSearchPage: FC<TabArticlesOnSearchPageProps> = ({
  searchText,
  orderByState,
  onUpdateTotal,
  isSmallContainer = false,
}) => {
  const POST_PER_PAGE =
    frontendObject.allSettings?.readingSettingsPostsPerPage || 20;

  //
  let variables = {};
  let QUERY_STRING__XXX = "";
  //
  if (!!orderByState) {
    QUERY_STRING__XXX = POSTS_SECTION_BY_FILTER__string;
    variables = {
      order: "DESC",
      field: orderByState,
      first: POST_PER_PAGE,
      search: searchText,
    };
  } else {
    QUERY_STRING__XXX = POSTS_SECTION_BY_SEARCH_NO_FILTER__string;
    variables = {
      first: POST_PER_PAGE,
      search: searchText,
    };
  }

  const gqlQuery = gql`
    ${QUERY_STRING__XXX}
  `;

  const { loading, error, data, fetchMore } = useQuery<Data>(gqlQuery, {
    notifyOnNetworkStatusChange: true,
    variables,
  });

  useEffect(() => {
    if (typeof data?.posts.pageInfo?.total !== "number") {
      return;
    }
    onUpdateTotal(
      `${data?.posts.edges.length} ${NCMAZ_TRANSLATE["articles"]}` ||
        `0 ${NCMAZ_TRANSLATE["articles"]}`
    );
  }, [data]);

  const POSTS = data?.posts.edges || [];

  // Function to update the query with the new results
  const updateQuery = (
    previousResult: Data,
    { fetchMoreResult }: { fetchMoreResult?: Data }
  ): Data => {
    if (!fetchMoreResult?.posts?.edges.length) return previousResult;
    return {
      ...fetchMoreResult,
      posts: {
        ...fetchMoreResult.posts,
        edges: [
          ...previousResult?.posts?.edges,
          ...fetchMoreResult?.posts?.edges,
        ],
      },
    };
  };

  const handleClickLoadmore = () => {
    if (!fetchMore) return;
    const notIn = POSTS.map((item) => item.node.postId);
    fetchMore({
      variables: {
        first: POST_PER_PAGE,
        notIn,
      },
      updateQuery,
    });
  };

  const IS_SKELETON = loading && !POSTS.length;

  return (
    <div className="mt-8 lg:mt-10">
      {/* SECTION STATE */}
      <DataStatementBlockV2
        className="my-5"
        data={POSTS}
        error={error}
        isSkeleton={IS_SKELETON}
      />

      {/* LOOP ITEMS */}
      <ArchiveGridPost
        isSmallContainer={isSmallContainer}
        className=""
        is_skeleton={IS_SKELETON}
        posts={POSTS}
      />

      {/* PAGINATIONS */}
      {data?.posts.pageInfo?.hasNextPage && (
        <div className="flex justify-center mt-8 sm:mt-10 xl:mt-14">
          <ButtonPrimary onClick={handleClickLoadmore} loading={loading}>
            {NCMAZ_TRANSLATE["showMeMore"]}
          </ButtonPrimary>
        </div>
      )}
    </div>
  );
};

export default TabArticlesOnSearchPage;
