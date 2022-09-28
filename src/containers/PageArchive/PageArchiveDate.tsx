import React, { FC, useState, useEffect } from "react";
import ModalCategories from "./ModalCategories";
import ModalTags from "./ModalTags";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import { ListPosts } from "data/postCardType";
import { useQuery, gql } from "@apollo/client";
import { POSTS_SECTION_BY_FILTER__string } from "./queryGraphql";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import SectionTrendingCategories from "./SectionTrendingCategories";
import {
  ArchiveOrderBy,
  ARCHIVE_PAGE_FILTERS,
  SectionCategoriesTrendingArchivePageOption,
} from "./PageArchive";
import NCMAZ_TRANSLATE from "contains/translate";
import ArchiveGridPost from "./ArchiveGridPost";

interface Data {
  posts: ListPosts;
}

export interface PageArchiveDateProps {
  className?: string;
  day: number;
  monthnum: number;
  year: number;
  //
  pageTitle: string;
  //
  sectionCategoriesTrending: SectionCategoriesTrendingArchivePageOption;
}

// Khong de ben trong funtion. Vi de o trong se bi khoi tao lai khi re-render
const FILTERS = ARCHIVE_PAGE_FILTERS;

// Tag and category have same data type - we will use one demo data
const PageArchiveDate: FC<PageArchiveDateProps> = ({
  className = "",
  day,
  monthnum,
  year,
  sectionCategoriesTrending,
  pageTitle,
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

  variables = {
    order: "DESC",
    field: orderByState,
    first: POST_PER_PAGE,
    month: monthnum,
    day,
    year,
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
    <div
      className={`nc-PageArchiveDate ${className}`}
      data-nc-id="PageArchiveDate"
    >
      {/* HEADER */}

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <div>
          <h1
            className="inline-block max-w-screen-2xl text-4xl font-semibold md:text-5xl"
            dangerouslySetInnerHTML={{ __html: pageTitle }}
          ></h1>
          <div className="mt-14 flex flex-col sm:items-center sm:justify-between sm:flex-row">
            <div className="flex space-x-2.5">
              <ModalCategories />
              <ModalTags />
            </div>
            <div className="block my-4 border-b w-full border-neutral-100 sm:hidden"></div>
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
            className="my-5"
            data={POSTS}
            error={error}
            isSkeleton={IS_SKELETON}
          />

          {/* LOOP ITEMS */}
          <ArchiveGridPost is_skeleton={IS_SKELETON} posts={POSTS} />

          {/* PAGINATIONS */}
          {data?.posts.pageInfo?.hasNextPage && (
            <div className="flex justify-center mt-8 sm:mt-10 lg:mt-14">
              <ButtonPrimary onClick={handleClickLoadmore} loading={loading}>
                {NCMAZ_TRANSLATE["showMeMore"]}
              </ButtonPrimary>
            </div>
          )}
        </div>

        {sectionCategoriesTrending.enable && (
          <SectionTrendingCategories
            {...sectionCategoriesTrending}
            isCategory={false}
          />
        )}
      </div>
    </div>
  );
};

export default PageArchiveDate;
