import React, { FC, useEffect } from "react";
import { ListPosts } from "../../data/postCardType";
import { useQuery, gql } from "@apollo/client";
import { POSTS_SECTION_BY_SEARCH_NO_FILTER__string } from "../../containers/PageArchive/queryGraphql";
import NCMAZ_TRANSLATE from "contains/translate";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import Card3SmallSkeleton from "components/Card3Small/Card3SmallSkeleton";
import Card3Small from "components/Card3Small/Card3Small";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";

interface Data {
  posts: ListPosts;
}

export interface PostOnSearchProps {
  searchText: string;
}

const PostOnSearch: FC<PostOnSearchProps> = ({ searchText }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const loadmoreRef = React.useRef<HTMLDivElement>(null);

  //
  const POST_PER_PAGE = 15;

  //
  let variables = {};
  let QUERY_STRING__XXX = "";
  //
  QUERY_STRING__XXX = POSTS_SECTION_BY_SEARCH_NO_FILTER__string;
  variables = {
    first: POST_PER_PAGE,
    search: searchText,
  };

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
    //
  };

  const IS_SKELETON = loading && !POSTS.length;

  return (
    <div className="bg-white dark:bg-neutral-800">
      <div
        ref={containerRef}
        className="max-h-[70vh] overflow-y-auto border-t border-neutral-200 dark:border-neutral-700"
      >
        {/* SECTION STATE */}
        <DataStatementBlockV2
          className="my-5 flex justify-center"
          data={POSTS}
          error={error}
          isSkeleton={IS_SKELETON}
        />

        {/* LOOP ITEMS */}
        {IS_SKELETON || POSTS.length ? (
          <div className="grid grid-cols-1 divide-y divide-neutral-200 dark:divide-neutral-700">
            {POSTS.map((post) => (
              <Card3Small
                key={post.node.id}
                className="p-4 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                post={post.node}
              />
            ))}

            <div ref={loadmoreRef} className="hidden"></div>

            {loading &&
              Array.from("88888888").map((_, index) => {
                return <Card3SmallSkeleton className={`p-4 `} key={index} />;
              })}

            {/* PAGINATIONS */}
            {data?.posts.pageInfo?.hasNextPage && (
              <div className="p-4">
                <ButtonPrimary
                  className="inline-flex"
                  sizeClass="px-4 py-2 sm:py-2.5"
                  fontSize="text-xs sm:text-sm font-medium"
                  onClick={handleClickLoadmore}
                  loading={loading}
                >
                  {NCMAZ_TRANSLATE["showMeMore"]}
                </ButtonPrimary>
              </div>
            )}
          </div>
        ) : null}
      </div>

      <div className="flex justify-between space-x-1 p-3 sm:p-4 border-t border-neutral-200 dark:border-neutral-700">
        <ButtonSecondary
          className="ml-auto"
          sizeClass="px-4 py-2 sm:py-2.5"
          fontSize="text-xs sm:text-sm font-medium"
          type="submit"
        >
          {NCMAZ_TRANSLATE["Go to search page"]}
        </ButtonSecondary>
      </div>
    </div>
  );
};

export default PostOnSearch;
