import React, { FC, useState } from "react";
import ModalCategories from "./ModalCategories";
import ModalTags from "./ModalTags";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import NcImage from "components/NcImage/NcImage";
import Card11 from "components/Card11/Card11";
import { CategoriesNode3, ListPosts } from "data/postCardType";
import { useQuery, gql } from "@apollo/client";
import { POSTS_SECTION_BY_FILTER__string } from "./queryGraphql";
import { ListBoxItemType } from "components/NcListBox/NcListBox";
import Card11Skeleton from "components/Card11/Card11Skeleton";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import SectionTrendingCategories from "./SectionTrendingCategories";

interface Data {
  posts: ListPosts;
}

export interface PageArchiveProps {
  className?: string;
  termId: number;
  termData: CategoriesNode3;
  isCategory?: boolean;
  isTag?: boolean;
  isDate?: boolean;
  isFormatVideo?: boolean;
  isFormatAudio?: boolean;
  //
  sectionCategoriesTrending: {
    enable: boolean;
    orderBy: "count" | "term_order" | "is_child";
    heading: string;
    subHeading: string;
    itemPerPage: string;
  };
}

// Khong de ben trong funtion. Vi de o trong se bi khoi tao lai khi re-render
const FILTERS = [
  { name: "Most Recent", value: "DATE" },
  { name: "Most Liked", value: "FAVORITES_COUNT" },
  { name: "Most Discussed", value: "COMMENT_COUNT" },
  { name: "Most Viewed", value: "VIEWS_COUNT" },
];

// Tag and category have same data type - we will use one demo data
const PageArchive: FC<PageArchiveProps> = ({
  className = "",
  termId,
  termData,
  isCategory,
  isDate,
  isFormatAudio,
  isFormatVideo,
  isTag,
  sectionCategoriesTrending,
}) => {
  const POST_PER_PAGE =
    frontendObject.allSettings?.readingSettingsPostsPerPage || 20;

  const [orderByState, setorderByState] = useState(FILTERS[0].value);
  //
  let variables = {};
  let taxonomy = "";
  //
  if (isCategory) {
    taxonomy = "CATEGORY";
  } else if (isTag) {
    taxonomy = "TAG";
  } else if (isFormatAudio || isFormatVideo) {
    taxonomy = "POSTFORMAT";
  }

  variables = {
    order: "DESC",
    field: orderByState,
    categoryIn: [termId],
    first: POST_PER_PAGE,
    taxonomy,
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

  const handleChangeFilter = (item: ListBoxItemType) => {
    setorderByState(item.value);
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
    <div className={`nc-PageArchive ${className}`} data-nc-id="PageArchive">
      {/* HEADER */}
      <div className="w-full px-2 xl:max-w-screen-2xl mx-auto">
        <div className="rounded-3xl relative aspect-w-16 aspect-h-16 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-6 overflow-hidden ">
          <NcImage
            containerClassName="absolute inset-0"
            src={
              termData.ncTaxonomyMeta.featuredImage?.sourceUrl ||
              "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
            <h2 className="inline-block align-middle text-5xl font-semibold md:text-7xl ">
              {termData.name}
            </h2>
            <span className="block mt-4 text-neutral-300">
              {termData.count || 0} Articles
            </span>
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <div>
          <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
            <div className="flex space-x-2.5">
              <ModalCategories />
              <ModalTags />
            </div>
            <div className="block my-4 border-b w-full border-neutral-100 sm:hidden"></div>
            <div className="flex justify-end">
              <ArchiveFilterListBox
                onChangeSelect={handleChangeFilter}
                lists={FILTERS}
              />
            </div>
          </div>

          {/* SECTION STATE */}
          <DataStatementBlockV2
            data={POSTS}
            error={error}
            isSkeleton={IS_SKELETON}
          />

          {/* LOOP ITEMS */}
          {IS_SKELETON || POSTS.length ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
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
