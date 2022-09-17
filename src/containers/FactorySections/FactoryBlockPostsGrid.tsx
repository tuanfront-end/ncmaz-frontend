import React, { FC, useState } from "react";
import ReactDOM from "react-dom";
import { PostNode } from "data/postCardType";
import Heading from "components/Heading/Heading";
import HeaderSectionFilter, {
  HeaderSectionFilterTabItem,
} from "components/HeaderSectionFilter/HeaderSectionFilter";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import Card4 from "components/Card4/Card4";
import Card7 from "components/Card7/Card7";
import Card9 from "components/Card9/Card9";
import Card10 from "components/Card10/Card10";
import Card10V2 from "components/Card10/Card10V2";
import Card11 from "components/Card11/Card11";
import Card14 from "components/Card14/Card14";
import Card15Podcast from "components/Card15Podcast/Card15Podcast";
import Card3 from "components/Card3/Card3";
import ButtonPrimary from "components/Button/ButtonPrimary";
import {
  GutenbergApiAttr_BlockPostsGrid,
  ListPostsGQLResultData,
} from "data/gutenbergAttrType";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import Card3Skeleton from "components/Card3/Card3Skeleton";
import Card4Skeleton from "components/Card4/Card4Skeleton";
import Card7Skeleton from "components/Card7/Card7Skeleton";
import Card9Skeleton from "components/Card9/Card9Skeleton";
import Card10V2Skeleton from "components/Card10/Card10V2Skeleton";
import Card10Skeleton from "components/Card10/Card10Skeleton";
import Card11Skeleton from "components/Card11/Card11Skeleton";
import Card14Skeleton from "components/Card14/Card14Skeleton";
import Card15PodcastSkeleton from "components/Card15Podcast/Card15PodcastSkeleton";
import NCMAZ_TRANSLATE from "contains/translate";
import useGqlQuerySection from "hooks/useGqlQuerySection";
import useGutenbergSectionWithGQLGetPosts from "hooks/useGutenbergSectionWithGQLGetPosts";

export interface FactoryBlockPostsGridProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockPostsGrid;
  sectionIndex: number;
}

const FactoryBlockPostsGrid: FC<FactoryBlockPostsGridProps> = ({
  className = "",
  domNode,
  apiSettings,
  sectionIndex,
}) => {
  // NEU get posts by specific thi se co data graphQLData - Neu get posts by filter thi ko co data ma can request graphQLvariables
  const { graphQLvariables, settings, graphQLData, hasSSrInitData } =
    apiSettings;
  //
  const [firstClickLoadMore, setFirstClickLoadMore] = useState(false);
  //
  //
  const {
    funcGqlQueryGetPosts,
    loading,
    IS_SKELETON,
    LISTS_POSTS,
    data,
    error,
    fetchMore,
    setTabActiveId,
    tabActiveId,
    funcGqlGetPostsForAllHasInitData,
  } = useGutenbergSectionWithGQLGetPosts({
    graphQLData,
    graphQLvariables,
    hasSSrInitData,
  });
  //

  let ref: React.RefObject<HTMLDivElement> | null = null;
  ref = useGqlQuerySection(funcGqlQueryGetPosts, sectionIndex, tabActiveId).ref;

  //

  const IS_HAS_INIT_DATA = hasSSrInitData?.hasSSrInitData;
  const IS_HAS_INIT_DATA_NEXT_PAGE = hasSSrInitData?.initPageInfo?.hasNextPage;
  // const LISTS_POSTS_INIT = hasSSrInitData?.initPostIDs.map((item) => {
  //   return {
  //     node: window.ncmazCoreVariables?.ncmazCoreInitPosts[item] as PostNode,
  //   };
  // });

  // //
  // let MY_LISTS_POSTS = LISTS_POSTS;
  // //
  // if (tabActiveId === -1 && IS_HAS_INIT_DATA) {
  //   MY_LISTS_POSTS = LISTS_POSTS_INIT || [];
  //   if (IS_HAS_INIT_DATA_NEXT_PAGE && firstClickLoadMore) {
  //     MY_LISTS_POSTS = [...(LISTS_POSTS_INIT || []), ...LISTS_POSTS];
  //   }
  // }

  let MY_LISTS_POSTS = LISTS_POSTS;
  //
  const {
    hasBackground,
    heading,
    subHeading,
    viewMoreHref,
    gridClass,
    gridClassCustom,
    showFilterTab,
    blockLayoutStyle,
    enableLoadMoreButton,
    loadMoreButtonHref,
    filterDataBy,
    categories,
  } = settings;

  const handleClickTab = (item: -1 | HeaderSectionFilterTabItem) => {
    if (item === -1) {
      setTabActiveId(item);
      return;
    }
    if (item.id === tabActiveId) {
      return;
    }
    setTabActiveId(item.id);
  };

  // Function to update the query with the new results
  const updateQuery = (
    previousResult: ListPostsGQLResultData,
    { fetchMoreResult }: { fetchMoreResult?: ListPostsGQLResultData }
  ): ListPostsGQLResultData => {
    if (!fetchMoreResult?.posts?.edges.length) {
      return previousResult;
    }
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

  const handleClickLoadmoreBtn = (e: React.MouseEvent<any, MouseEvent>) => {
    if (!fetchMore || filterDataBy === "by_specific" || !!loadMoreButtonHref) {
      return;
    }
    e.preventDefault();
    const notIn = MY_LISTS_POSTS.map((item) => item.node.postId);

    // IF ELSE này để thực hiện load more cho block khi có dữ liệu initData
    if (IS_HAS_INIT_DATA && tabActiveId === -1 && !firstClickLoadMore) {
      funcGqlGetPostsForAllHasInitData({
        variables: { notIn },
      });
      setFirstClickLoadMore(true);
      return;
    }

    fetchMore({
      variables: { notIn },
      updateQuery,
    });
  };

  const renderCard = (post: PostNode) => {
    switch (apiSettings.settings.postCardName) {
      case "card3":
        return (
          <div className="w-full" key={post.id}>
            <Card3 post={post} className="mb-3 sm:mb-0" />
          </div>
        );
      case "card4":
        return <Card4 key={post.id} post={post} />;
      case "card7":
        return (
          <Card7 key={post.id} post={post} ratio="aspect-w-5 aspect-h-5" />
        );
      case "card9":
        return <Card9 key={post.id} post={post} />;
      case "card10":
        return <Card10 key={post.id} post={post} />;
      case "card10V2":
        return <Card10V2 key={post.id} post={post} />;
      case "card11":
        return <Card11 key={post.id} post={post} />;
      case "card14":
        return <Card14 key={post.id} post={post} />;
      case "card15Podcast":
        return <Card15Podcast key={post.id} post={post} />;
      default:
        return null;
    }
  };

  const renderCardLoading = (_: any, index: number) => {
    switch (apiSettings.settings.postCardName) {
      case "card3":
        return (
          <Card3Skeleton
            key={index}
            className="p-3 sm:p-5 2xl:p-6 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ]"
          />
        );
      case "card4":
        return <Card4Skeleton key={index} />;
      case "card7":
        return <Card7Skeleton key={index} ratio="aspect-w-5 aspect-h-5" />;
      case "card9":
        return <Card9Skeleton key={index} />;
      case "card10":
        return <Card10Skeleton key={index} />;
      case "card10V2":
        return <Card10V2Skeleton key={index} />;
      case "card11":
        return <Card11Skeleton key={index} />;
      case "card14":
        return <Card14Skeleton key={index} />;
      case "card15Podcast":
        return <Card15PodcastSkeleton key={index} />;
      default:
        return null;
    }
  };

  const renderHeading = () => {
    if (blockLayoutStyle === "layout-1") {
      return <Heading desc={subHeading}>{heading}</Heading>;
    }
    return (
      <Heading desc={subHeading} isCenter>
        {heading}
      </Heading>
    );
  };

  const renderButtonLoadmore = () => {
    //
    let isShowLoadmoreBtn = false;
    if (tabActiveId === -1) {
      if (IS_HAS_INIT_DATA && !firstClickLoadMore) {
        isShowLoadmoreBtn = !!IS_HAS_INIT_DATA && !!IS_HAS_INIT_DATA_NEXT_PAGE;
      } else {
        isShowLoadmoreBtn = loading || !!data?.posts.pageInfo?.hasNextPage;
      }
    } else {
      isShowLoadmoreBtn = !!data?.posts.pageInfo?.hasNextPage;
    }

    if (!enableLoadMoreButton) {
      return null;
    }

    if (!!loadMoreButtonHref) {
      return (
        <div className="flex mt-12 md:mt-14 justify-center items-center">
          <ButtonPrimary href={loadMoreButtonHref}>
            {NCMAZ_TRANSLATE["showMeMore"]}
          </ButtonPrimary>
        </div>
      );
    }

    if (filterDataBy === "by_specific" || !isShowLoadmoreBtn) {
      return null;
    }

    return (
      <div className="flex mt-12 md:mt-14 justify-center items-center">
        <ButtonPrimary onClick={handleClickLoadmoreBtn} loading={loading}>
          {NCMAZ_TRANSLATE["showMeMore"]}
        </ButtonPrimary>
      </div>
    );
  };

  const renderContent = () => {
    const isBg = hasBackground;

    return (
      <div
        className={`nc-FactoryBlockPostsGrid relative ${
          isBg ? "py-16" : ""
        }  ${className}`}
        ref={ref}
      >
        {isBg && <BackgroundSection />}

        <div className="relative">
          {showFilterTab && !!categories?.length ? (
            <HeaderSectionFilter
              tabActiveId={tabActiveId}
              tabs={categories}
              viewMoreHref={viewMoreHref}
              heading={heading}
              subHeading={subHeading}
              onClickTab={handleClickTab}
            />
          ) : (
            renderHeading()
          )}
          <div
            className={`grid grid-cols-1 gap-6 2xl:gap-8 ${
              !!gridClassCustom ? gridClassCustom : gridClass
            }`}
          >
            {IS_SKELETON
              ? Array.from(
                  Array(Number(settings.expectedNumberResults || 8) || 8).keys()
                ).map(renderCardLoading)
              : MY_LISTS_POSTS.map((post) => renderCard(post.node))}
          </div>

          {/* ------------ */}
          <DataStatementBlockV2
            className="my-5"
            data={MY_LISTS_POSTS}
            error={error}
            isSkeleton={IS_SKELETON}
          />
          {/* ------------ */}

          {renderButtonLoadmore()}
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockPostsGrid;
