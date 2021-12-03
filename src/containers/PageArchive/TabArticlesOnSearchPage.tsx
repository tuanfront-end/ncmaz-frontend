import React, { FC, useEffect } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Card11 from "components/Card11/Card11";
import { ListPosts } from "data/postCardType";
import { useQuery, gql } from "@apollo/client";
import { POSTS_SECTION_BY_FILTER__string } from "./queryGraphql";
import Card11Skeleton from "components/Card11/Card11Skeleton";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import NCMAZ_TRANSLATE from "contains/translate";

interface Data {
  posts: ListPosts;
}

export interface TabArticlesOnSearchPageProps {
  searchText: string;
  orderByState: string;
  onUpdateTotal: (totalString: string) => void;
}

const TabArticlesOnSearchPage: FC<TabArticlesOnSearchPageProps> = ({
  searchText,
  orderByState,
  onUpdateTotal,
}) => {
  const POST_PER_PAGE =
    frontendObject.allSettings?.readingSettingsPostsPerPage || 20;

  //
  let variables = {};
  //

  variables = {
    order: "DESC",
    field: orderByState,
    first: POST_PER_PAGE,
    search: searchText,
  };

  const gqlQuery = gql`
    ${POSTS_SECTION_BY_FILTER__string}
  `;

  const { loading, error, data, fetchMore } = useQuery<Data>(gqlQuery, {
    notifyOnNetworkStatusChange: true,
    variables,
  });

  useEffect(() => {
    if (typeof data?.posts.pageInfo?.total !== "number") {
      return;
    }
    onUpdateTotal(`${data?.posts.edges.length} articles` || `0 articles`);
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
      {IS_SKELETON || POSTS.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8 ">
          {IS_SKELETON &&
            Array.from("88888888").map((_, index) => (
              <Card11Skeleton key={index} />
            ))}
          {POSTS.map((post) => (
            <Card11 key={post.node.id} post={post.node} />
          ))}
        </div>
      ) : null}

      {/* PAGINATIONS */}
      {data?.posts.pageInfo?.hasNextPage && (
        <div className="flex justify-center mt-12 lg:mt-16">
          <ButtonPrimary onClick={handleClickLoadmore} loading={loading}>
            {NCMAZ_TRANSLATE["showMeMore"]}
          </ButtonPrimary>
        </div>
      )}
    </div>
  );
};

export default TabArticlesOnSearchPage;
