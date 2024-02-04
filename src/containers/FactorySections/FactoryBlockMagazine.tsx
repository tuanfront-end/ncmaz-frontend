import React, { FC, Suspense } from "react";
import ReactDOM from "react-dom";
import Heading from "components/Heading/Heading";
import HeaderSectionFilter, {
  HeaderSectionFilterTabItem,
} from "components/HeaderSectionFilter/HeaderSectionFilter";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import { GutenbergApiAttr_BlockMagazine } from "data/gutenbergAttrType";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import useGqlQuerySection from "hooks/useGqlQuerySection";
import useGutenbergSectionWithGQLGetPosts from "hooks/useGutenbergSectionWithGQLGetPosts";

//
const SectionMagazine1Lazy = React.lazy(
  () => import("components/SectionMagazines/SectionMagazine1")
);
const SectionMagazine2Lazy = React.lazy(
  () => import("components/SectionMagazines/SectionMagazine2")
);
const SectionMagazine3Lazy = React.lazy(
  () => import("components/SectionMagazines/SectionMagazine3")
);
const SectionMagazine4Lazy = React.lazy(
  () => import("components/SectionMagazines/SectionMagazine4")
);
const SectionMagazine5Lazy = React.lazy(
  () => import("components/SectionMagazines/SectionMagazine5")
);
const SectionMagazine6Lazy = React.lazy(
  () => import("components/SectionMagazines/SectionMagazine6")
);
const SectionMagazine7Lazy = React.lazy(
  () => import("components/SectionMagazines/SectionMagazine7")
);
const SectionMagazine8Lazy = React.lazy(
  () => import("components/SectionMagazines/SectionMagazine8")
);
const SectionMagazine9Lazy = React.lazy(
  () => import("components/SectionMagazines/SectionMagazine9")
);
const SectionLargeSliderLazy = React.lazy(
  () => import("components/SectionMagazines/SectionLargeSlider")
);
//

export interface FactoryBlockMagazineProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockMagazine;
  sectionIndex: number;
}

const FactoryBlockMagazine: FC<FactoryBlockMagazineProps> = ({
  className = "",
  domNode,
  apiSettings,
  sectionIndex,
}) => {
  // NEU get posts by specific thi se co data graphQLData - Neu get posts by filter thi ko co data ma can request graphQLvariables
  const { graphQLvariables, settings, graphQLData, hasSSrInitData } =
    apiSettings;

  //
  const {
    funcGqlQueryGetPosts,
    IS_SKELETON,
    LISTS_POSTS,
    error,
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

  //
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

  const renderLayoutType = () => {
    switch (apiSettings.settings.sectionName) {
      case "magazine-1":
        return (
          <Suspense fallback={<div />}>
            <SectionMagazine1Lazy
              isLoading={IS_SKELETON}
              listPosts={LISTS_POSTS}
            />
          </Suspense>
        );
      case "magazine-2":
        return (
          <Suspense fallback={<div />}>
            <SectionMagazine2Lazy
              isLoading={IS_SKELETON}
              listPosts={LISTS_POSTS}
            />
          </Suspense>
        );
      case "magazine-3":
        return (
          <Suspense fallback={<div />}>
            <SectionMagazine3Lazy
              isLoading={IS_SKELETON}
              listPosts={LISTS_POSTS}
            />
          </Suspense>
        );
      case "magazine-4":
        return (
          <Suspense fallback={<div />}>
            <SectionMagazine4Lazy
              isLoading={IS_SKELETON}
              listPosts={LISTS_POSTS}
            />
          </Suspense>
        );
      case "magazine-5":
        return (
          <Suspense fallback={<div />}>
            <SectionMagazine5Lazy
              isLoading={IS_SKELETON}
              listPosts={LISTS_POSTS}
            />
          </Suspense>
        );
      case "magazine-6":
        return (
          <Suspense fallback={<div />}>
            <SectionMagazine6Lazy
              isLoading={IS_SKELETON}
              listPosts={LISTS_POSTS}
            />
          </Suspense>
        );
      case "magazine-7":
        return (
          <Suspense fallback={<div />}>
            <SectionMagazine7Lazy
              isLoading={IS_SKELETON}
              listPosts={LISTS_POSTS}
            />
          </Suspense>
        );
      case "magazine-8":
        return (
          <Suspense fallback={<div />}>
            <SectionMagazine8Lazy
              isLoading={IS_SKELETON}
              listPosts={LISTS_POSTS}
            />
          </Suspense>
        );
      case "magazine-9":
        return (
          <Suspense fallback={<div />}>
            <SectionMagazine9Lazy
              isLoading={IS_SKELETON}
              listPosts={LISTS_POSTS}
            />
          </Suspense>
        );
      case "large-slider":
        return (
          <Suspense fallback={<div />}>
            <SectionLargeSliderLazy
              isLoading={IS_SKELETON}
              listPosts={LISTS_POSTS}
            />
          </Suspense>
        );

      default:
        return (
          <Suspense fallback={<div />}>
            <SectionMagazine1Lazy
              isLoading={IS_SKELETON}
              listPosts={LISTS_POSTS}
            />
          </Suspense>
        );
    }
  };

  const renderContent = () => {
    const {
      hasBackground,
      showFilterTab,
      categories,
      viewMoreHref,
      heading,
      subHeading,
    } = settings;
    const isBg = hasBackground;
    return (
      <div
        className={`nc-FactoryBlockMagazine relative ${
          isBg ? "py-14 sm:py-16" : ""
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
            <Heading desc={subHeading}>{heading}</Heading>
          )}

          <DataStatementBlockV2
            className="my-5"
            data={LISTS_POSTS}
            error={error}
            isSkeleton={IS_SKELETON}
          />

          {renderLayoutType()}
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockMagazine;
