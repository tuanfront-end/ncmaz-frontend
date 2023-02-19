import React, { FC, useEffect, useState } from "react";
import ModalCategories from "./ModalCategories";
import ModalTags from "./ModalTags";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import { CategoriesNode3, ListPosts } from "data/postCardType";
import { useQuery, gql } from "@apollo/client";
import { POSTS_SECTION_BY_FILTER__string } from "./queryGraphql";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import NCMAZ_TRANSLATE from "contains/translate";
import ArchiveGridPost from "./ArchiveGridPost";

interface Data {
  posts: ListPosts;
}

export interface SectionCategoriesTrendingArchivePageOption {
  enable: boolean;
  orderBy: "count" | "term_order" | "is_child";
  heading: string;
  subHeading: string;
  itemPerPage: string;
}

interface TermData extends CategoriesNode3 {
  description: string;
}
export interface PageArchiveProps {
  className?: string;
  enableSidebar?: boolean;
  termId: number;
  isTag?: boolean;
}

// Khong de ben trong funtion. Vi de o trong se bi khoi tao lai khi re-render
export type ArchiveOrderBy =
  | "DATE"
  | "FAVORITES_COUNT"
  | "COMMENT_COUNT"
  | "VIEWS_COUNT";

export const ARCHIVE_PAGE_FILTERS: {
  name: string;
  value: ArchiveOrderBy;
}[] = window.frontendObject.isActivePluginFavorites
  ? [
      { name: NCMAZ_TRANSLATE["mostRecent"], value: "DATE" },
      { name: NCMAZ_TRANSLATE["mostLiked"], value: "FAVORITES_COUNT" },
      { name: NCMAZ_TRANSLATE["mostDiscussed"], value: "COMMENT_COUNT" },
      { name: NCMAZ_TRANSLATE["mostViewed"], value: "VIEWS_COUNT" },
    ]
  : [
      { name: NCMAZ_TRANSLATE["mostRecent"], value: "DATE" },
      { name: NCMAZ_TRANSLATE["mostDiscussed"], value: "COMMENT_COUNT" },
      { name: NCMAZ_TRANSLATE["mostViewed"], value: "VIEWS_COUNT" },
    ];

const FILTERS = ARCHIVE_PAGE_FILTERS;

// Tag and category have same data type - we will use one demo data
const PageArchive: FC<PageArchiveProps> = ({
  className = "",
  termId,
  isTag,
  enableSidebar = false,
}) => {
  const POST_PER_PAGE =
    frontendObject.allSettings?.readingSettingsPostsPerPage || 20;

  const [orderByState, setorderByState] = useState(FILTERS[0].value);
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const orderByParam = urlParams.get("orderBy");
    const orderByParamCorrect: ArchiveOrderBy[] = [
      "COMMENT_COUNT",
      "DATE",
      "FAVORITES_COUNT",
      "VIEWS_COUNT",
    ];

    if (
      !orderByParam ||
      !orderByParamCorrect.includes(orderByParam as ArchiveOrderBy)
    ) {
      return;
    }

    setorderByState((orderByParam as ArchiveOrderBy) || "DATE");
  }, []);
  //
  let variables = {};
  //
  if (isTag) {
    variables = {
      order: "DESC",
      field: orderByState,
      tagIn: [termId],
      first: POST_PER_PAGE,
    };
  } else {
    variables = {
      order: "DESC",
      field: orderByState,
      categoryIn: [termId],
      first: POST_PER_PAGE,
    };
  }
  //

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

  const handleChangeFilter = (item: typeof ARCHIVE_PAGE_FILTERS[number]) => {
    setorderByState(item.value);
    let queryParams = new URLSearchParams(window.location.search);
    queryParams.set("orderBy", item.value);
    history.replaceState(null, "", `?${queryParams.toString()}`);
  };

  const handleClickLoadmore = () => {
    if (!fetchMore) return;
    const notIn = POSTS.map((item) => item.node.postId);
    fetchMore({
      variables: {
        first: POST_PER_PAGE,
        notIn,
        // after: data?.posts.pageInfo?.endCursor || null,
      },
      updateQuery,
    });
  };

  const IS_SKELETON = loading && !POSTS.length;

  return (
    <>
      <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
        <div className="flex space-x-2.5">
          <ModalCategories />
          <ModalTags />
        </div>
        <div className="block my-4 border-b w-full border-neutral-100 dark:border-neutral-500 sm:hidden"></div>
        <div className="flex justify-end">
          <ArchiveFilterListBox
            onChangeSelect={handleChangeFilter as any}
            lists={FILTERS}
            defaultValue={orderByState}
          />
        </div>
      </div>

      {/* SECTION STATE */}
      <DataStatementBlockV2
        className="my-10"
        data={POSTS}
        error={error}
        isSkeleton={IS_SKELETON}
      />

      {/* LOOP ITEMS */}
      <ArchiveGridPost
        isSmallContainer={enableSidebar}
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
    </>
  );
};

export default PageArchive;
