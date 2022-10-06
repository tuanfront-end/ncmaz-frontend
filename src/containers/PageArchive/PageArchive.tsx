import React, { FC, useEffect, useState } from "react";
import ModalCategories from "./ModalCategories";
import ModalTags from "./ModalTags";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import NcImage from "components/NcImage/NcImage";
import { CategoriesNode3, ListPosts } from "data/postCardType";
import { useQuery, gql } from "@apollo/client";
import { POSTS_SECTION_BY_FILTER__string } from "./queryGraphql";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import SectionTrendingCategories from "./SectionTrendingCategories";
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
  termId: number;
  termData: TermData;
  isCategory?: boolean;
  isTag?: boolean;
  isFormatVideo?: boolean;
  isFormatAudio?: boolean;
  //
  sectionCategoriesTrending: SectionCategoriesTrendingArchivePageOption;
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
  termData,
  isCategory,
  isFormatAudio,
  isFormatVideo,
  isTag,
  sectionCategoriesTrending,
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
    <div
      className={`nc-PageArchive mt-4 sm:mt-7 ${className}`}
      data-nc-id="PageArchive"
    >
      {/* HEADER */}
      <div className="w-full px-2 xl:max-w-screen-2xl mx-auto">
        <div className="rounded-3xl relative aspect-w-16 aspect-h-12 sm:aspect-h-8 lg:aspect-h-7 xl:aspect-h-5 overflow-hidden ">
          <NcImage
            containerClassName="absolute inset-0"
            src={
              termData.ncTaxonomyMeta.featuredImage?.sourceUrl ||
              frontendObject.archivePageCoverImgDefault ||
              "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
            srcSet={termData.ncTaxonomyMeta.featuredImage?.srcSet}
            imageSizes="_1536X1536"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center text-center">
            <h1 className="inline-block align-middle text-4xl sm:text-5xl font-semibold md:text-7xl">
              {isTag ? "#" : ""}
              {termData.name}
            </h1>
            {termData.description && (
              <div
                className="hidden md:block max-w-xl text-sm mt-3 text-neutral-100"
                dangerouslySetInnerHTML={{ __html: termData.description }}
              ></div>
            )}
            <span className="block mt-2 sm:mt-4 text-neutral-200">
              {`${termData.count || 0} ${NCMAZ_TRANSLATE["articles"]}`}
            </span>
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}
      {termData.description && (
        <div
          className="container block md:hidden max-w-xl text-sm mt-4"
          dangerouslySetInnerHTML={{ __html: termData.description }}
        ></div>
      )}
      <div className="container py-16 lg:pb-24 space-y-16 lg:space-y-24">
        <div>
          <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
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
            className="my-10"
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
            parentId={Number(termId)}
            isCategory={!!isCategory}
          />
        )}
      </div>
    </div>
  );
};

export default PageArchive;
