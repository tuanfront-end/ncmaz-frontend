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
import Card1 from "components/Card1/Card1";
import Card2 from "components/Card2/Card2";
import Card5 from "components/Card5/Card5";
import Card6 from "components/Card6/Card6";
import Card8 from "components/Card8/Card8";
import Card12 from "components/Card12/Card12";
import Card13 from "components/Card13/Card13";
import Card16Podcast from "components/Card16Podcast/Card16Podcast";
import Card17Podcast from "components/Card17Podcast/Card17Podcast";
import Card18 from "components/Card18/Card18";
import Card19 from "components/Card19/Card19";
import Card1Skeleton from "components/Card1/Card1Skeleton";
import Card2Skeleton from "components/Card2/Card2Skeleton";
import Card6Skeleton from "components/Card6/Card6Skeleton";
import Card5Skeleton from "components/Card5/Card5Skeleton";
import Card8Skeleton from "components/Card8/Card8Skeleton";
import Card12Skeleton from "components/Card12/Card12Skeleton";
import Card13Skeleton from "components/Card13/Card13Skeleton";
import Card16PodcastSkeleton from "components/Card16Podcast/Card16PodcastSkeleton";
import Card17PodcastSkeleton from "components/Card17Podcast/Card17PodcastSkeleton";
import Card18Skeleton from "components/Card18/Card18Skeleton";
import Card19Skeleton from "components/Card19/Card19Skeleton";
import { NC_IMAGE_SIZES } from "utils/getImageSizesBySizeName";

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

  const GRID_CLASSNAME = !!gridClassCustom ? gridClassCustom : gridClass;

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

  const renderCard = (post: PostNode, index: number) => {
    const IMAGE_SIZES: NC_IMAGE_SIZES | undefined =
      GRID_CLASSNAME.includes("-col-3") || GRID_CLASSNAME.includes("-col-4")
        ? "MEDIUM"
        : undefined;

    switch (apiSettings.settings.postCardName) {
      case "card1":
        return <Card1 key={post.id} post={post} />;
      case "card2":
        return <Card2 imageSizes={IMAGE_SIZES} key={post.id} post={post} />;
      case "card3":
        return (
          <div className="w-full" key={post.id}>
            <Card3 post={post} />
          </div>
        );
      case "card4":
        return <Card4 key={post.id} post={post} imageSizes={IMAGE_SIZES} />;
      case "card5":
        return <Card5 key={post.id} post={post} index={index + 1} />;
      case "card6":
        return <Card6 key={post.id} post={post} />;
      case "card7":
        return <Card7 key={post.id} post={post} imageSizes={IMAGE_SIZES} />;
      case "card8":
        return (
          <Card8
            hasExcerpt={false}
            ratio="pt-[75%] sm:pt-[100%]"
            key={post.id}
            post={post}
            imageSizes={IMAGE_SIZES}
          />
        );
      case "card9":
        return <Card9 key={post.id} post={post} imageSizes={IMAGE_SIZES} />;
      case "card10":
        return <Card10 key={post.id} post={post} imageSizes={IMAGE_SIZES} />;
      case "card10V2":
        return <Card10V2 key={post.id} post={post} imageSizes={IMAGE_SIZES} />;
      case "card11":
        return <Card11 key={post.id} post={post} imageSizes={IMAGE_SIZES} />;
      case "card12":
        return <Card12 key={post.id} post={post} imageSizes={IMAGE_SIZES} />;
      case "card13":
        return <Card13 key={post.id} post={post} />;
      case "card14":
        return <Card14 key={post.id} post={post} imageSizes={IMAGE_SIZES} />;
      case "card15Podcast":
        return <Card15Podcast key={post.id} post={post} />;
      case "card16Podcast":
        return (
          <Card16Podcast key={post.id} post={post} imageSizes={IMAGE_SIZES} />
        );
      case "card17Podcast":
        return <Card17Podcast key={post.id} post={post} />;
      case "card18":
        return <Card18 key={post.id} post={post} imageSizes={IMAGE_SIZES} />;
      case "card19":
        return <Card19 key={post.id} post={post} imageSizes={IMAGE_SIZES} />;
      default:
        return null;
    }
  };

  const renderCardLoading = (_: any, index: number) => {
    switch (apiSettings.settings.postCardName) {
      case "card1":
        return <Card1Skeleton key={index} />;
      case "card2":
        return <Card2Skeleton key={index} />;
      case "card3":
        return <Card3Skeleton key={index} />;
      case "card4":
        return <Card4Skeleton key={index} />;
      case "card5":
        return <Card5Skeleton key={index} index={index + 1} />;
      case "card6":
        return <Card6Skeleton key={index} />;
      case "card7":
        return <Card7Skeleton key={index} />;
      case "card8":
        return <Card8Skeleton ratio="pt-[75%] sm:pt-[100%]" key={index} />;
      case "card9":
        return <Card9Skeleton key={index} />;
      case "card10":
        return <Card10Skeleton ratio="aspect-w-1 aspect-h-1 " key={index} />;
      case "card10V2":
        return <Card10V2Skeleton key={index} />;
      case "card11":
        return <Card11Skeleton key={index} />;
      case "card12":
        return <Card12Skeleton key={index} />;
      case "card13":
        return <Card13Skeleton key={index} />;
      case "card14":
        return <Card14Skeleton key={index} />;
      case "card15Podcast":
        return <Card15PodcastSkeleton key={index} />;
      case "card16Podcast":
        return <Card16PodcastSkeleton key={index} />;
      case "card17Podcast":
        return <Card17PodcastSkeleton key={index} />;
      case "card18":
        return <Card18Skeleton key={index} />;
      case "card19":
        return <Card19Skeleton key={index} />;
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
        <div className="flex mt-8 sm:mt-10 lg:mt-14 justify-center items-center">
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
      <div className="flex mt-8 sm:mt-10 lg:mt-14 justify-center items-center">
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
            className={`grid grid-cols-1 gap-x-2.5 gap-y-4 sm:gap-6 2xl:gap-8 ${GRID_CLASSNAME}`}
          >
            {IS_SKELETON
              ? Array.from(
                  Array(Number(settings.expectedNumberResults || 8) || 8).keys()
                ).map(renderCardLoading)
              : MY_LISTS_POSTS.map((post, index) =>
                  renderCard(post.node, index)
                )}
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
