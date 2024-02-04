import React, { FC, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { PostNode } from "data/postCardType";
import Heading from "components/Heading/Heading";
import HeaderSectionFilter, {
  HeaderSectionFilterTabItem,
} from "components/HeaderSectionFilter/HeaderSectionFilter";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import Glide from "@glidejs/glide";
import Card4 from "components/Card4/Card4";
import Card7 from "components/Card7/Card7";
import Card9 from "components/Card9/Card9";
import Card10 from "components/Card10/Card10";
import Card10V2 from "components/Card10/Card10V2";
import Card11 from "components/Card11/Card11";
import NextPrev from "components/NextPrev/NextPrev";
import Card14 from "components/Card14/Card14";
import { GutenbergApiAttr_BlockPostsSlider } from "data/gutenbergAttrType";
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
import Card3 from "components/Card3/Card3";
import Card15Podcast from "components/Card15Podcast/Card15Podcast";

export interface FactoryBlockPostsSliderProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockPostsSlider;
  sectionIndex: number;
}

const FactoryBlockPostsSlider: FC<FactoryBlockPostsSliderProps> = ({
  className = "",
  domNode,
  apiSettings,
  sectionIndex,
}) => {
  const sliderRef = useRef(null);
  const { graphQLvariables, settings, graphQLData, hasSSrInitData } =
    apiSettings;

  //
  const {
    funcGqlQueryGetPosts,
    loading,
    IS_SKELETON,
    LISTS_POSTS,
    DONOT_ANY_THING,
    data,
    error,
    fetchMore,
    setTabActiveId,
    tabActiveId,
  } = useGutenbergSectionWithGQLGetPosts({
    graphQLData,
    graphQLvariables,
    hasSSrInitData,
  });

  //
  let ref: React.RefObject<HTMLDivElement> | null = null;
  ref = useGqlQuerySection(funcGqlQueryGetPosts, sectionIndex, tabActiveId).ref;

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

  const enableNexPrevOnFoot =
    settings.blockLayoutStyle === "layout-2" ||
    (settings.showFilterTab && !!settings?.categories?.length);

  // ==================== GLIDE SLIDER SETTING ====================
  const perView = settings.itemPerView || 5;
  const sliderConfiguration: Partial<Glide.Options> = {
    direction:
      document.querySelector("html")?.getAttribute("dir") === "rtl"
        ? "rtl"
        : "ltr",
    // data from gutenberg slider settings
    perView: perView,
    startAt: IS_SKELETON || DONOT_ANY_THING ? 0 : settings.sliderStartAt,
    hoverpause: settings.sliderHoverpause,
    animationDuration: settings.sliderAnimationDuration || undefined,
    rewind: settings.sliderRewind || true,
    autoplay:
      IS_SKELETON || DONOT_ANY_THING
        ? false
        : settings.sliderAutoplayTime || false,
    // end data from gutenberg slider settings
    gap: 32,
    bound: true,
    breakpoints: {
      1440: {
        gap: 24,
      },
      1280: {
        perView: perView - 1,
        gap: 24,
      },
      1023: {
        perView: perView - 2 || 1.2,
        gap: 24,
      },
      767: {
        perView: perView - 2 || 1.2,
        gap: 20,
      },
      639: {
        perView: 1.2,
        gap: 20,
      },
    },
  };

  useEffect(() => {
    if (!sliderRef.current) {
      return () => {};
    }

    const slider = new Glide(sliderRef.current, sliderConfiguration);
    slider.mount();
    return () => {
      slider.destroy();
    };
  }, [LISTS_POSTS, sliderRef, settings]);

  const renderPostComponent = (post: PostNode, index: number) => {
    const IMAGE_SIZES: NC_IMAGE_SIZES | undefined =
      perView >= 3 ? "MEDIUM" : undefined;

    switch (apiSettings.settings.postCardName) {
      case "card1":
        return <Card1 key={post.id} post={post} />;
      case "card2":
        return <Card2 imageSizes={IMAGE_SIZES} key={post.id} post={post} />;
      case "card3":
        return (
          <div className="w-full h-full" key={post.id}>
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
            ratio="pt-[100%]"
            key={post.id}
            post={post}
            imageSizes={IMAGE_SIZES}
          />
        );
      case "card9":
        return <Card9 key={post.id} post={post} imageSizes={IMAGE_SIZES} />;
      case "card10":
        return (
          <Card10
            ratio="aspect-w-1 aspect-h-1 "
            key={post.id}
            post={post}
            imageSizes={IMAGE_SIZES}
          />
        );
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

  const renderCardLoading = (index: number) => {
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
        return <Card8Skeleton ratio="pt-[100%] " key={index} />;
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
    const { heading, subHeading, blockLayoutStyle } = apiSettings.settings;
    if (blockLayoutStyle === "layout-1") {
      return (
        <Heading desc={subHeading} hasNextPrev>
          {heading}
        </Heading>
      );
    }
    return (
      <Heading desc={subHeading} isCenter>
        {heading}
      </Heading>
    );
  };

  const renderContent = () => {
    const {
      hasBackground,
      subHeading,
      heading,
      showFilterTab,
      categories,
      viewMoreHref,
    } = settings;
    const isBg = hasBackground;

    return (
      <div
        className={`nc-FactoryBlockPostsSlider relative  ${
          isBg ? "py-14 sm:py-16" : ""
        }  ${className}`}
        ref={ref}
      >
        {isBg && <BackgroundSection />}

        <div className={`relative `} ref={sliderRef}>
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

          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {IS_SKELETON
                ? [1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
                    <li
                      key={index}
                      className={`glide__slide ${
                        enableNexPrevOnFoot ? "sm:pb-10 xl:pb-12" : ""
                      }`}
                    >
                      {renderCardLoading(index)}
                    </li>
                  ))
                : LISTS_POSTS.map((item, index) => (
                    <li
                      key={index}
                      className={`glide__slide !h-auto ${
                        enableNexPrevOnFoot ? "sm:pb-10 xl:pb-12" : ""
                      }`}
                    >
                      {renderPostComponent(item.node, index)}
                    </li>
                  ))}
            </ul>
          </div>

          {/* ------------ */}
          <DataStatementBlockV2
            className="my-5"
            data={LISTS_POSTS}
            error={error}
            isSkeleton={IS_SKELETON}
          />

          {/* ------------ */}

          {enableNexPrevOnFoot && (
            <NextPrev
              btnClassName="w-12 h-12"
              containerClassName="hidden sm:flex justify-center"
            />
          )}
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockPostsSlider;
