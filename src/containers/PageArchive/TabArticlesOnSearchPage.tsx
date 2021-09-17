import React, { FC, useState } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import Card11 from "components/Card11/Card11";
import { ListPosts } from "data/postCardType";
import { useQuery, gql } from "@apollo/client";
import { POSTS_SECTION_BY_FILTER__string } from "./queryGraphql";
import { ListBoxItemType } from "components/NcListBox/NcListBox";
import Card11Skeleton from "components/Card11/Card11Skeleton";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import SectionTrendingCategories from "./SectionTrendingCategories";
import {
  ARCHIVE_PAGE_FILTERS,
  SectionCategoriesTrendingArchivePageOption,
} from "./PageArchive";
import ButtonCircle from "components/Button/ButtonCircle";
import Input from "components/Input/Input";
import NcImage from "components/NcImage/NcImage";
import Nav from "components/Nav/Nav";
import NavItem from "components/NavItem/NavItem";
import TabCategoriesOnSearchPage from "./TabCategoriesOnSearchPage";

interface Data {
  posts: ListPosts;
}

export interface TabArticlesOnSearchPageProps {
  searchText: string;
  orderByState: string;
}

const TabArticlesOnSearchPage: FC<TabArticlesOnSearchPageProps> = ({
  searchText,
  orderByState,
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 ">
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
            Show me more
          </ButtonPrimary>
        </div>
      )}
    </div>
  );
};

export default TabArticlesOnSearchPage;
