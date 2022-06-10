import React, { FC, useRef } from "react";
import ReactDOM from "react-dom";
import Heading from "components/Heading/Heading";
import HeaderSectionFilter, {
  HeaderSectionFilterTabItem,
} from "components/HeaderSectionFilter/HeaderSectionFilter";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionMagazine1 from "components/SectionMagazines/SectionMagazine1";
import SectionMagazine2 from "components/SectionMagazines/SectionMagazine2";
import SectionMagazine3 from "components/SectionMagazines/SectionMagazine3";
import SectionMagazine4 from "components/SectionMagazines/SectionMagazine4";
import SectionMagazine5 from "components/SectionMagazines/SectionMagazine5";
import SectionMagazine6 from "components/SectionMagazines/SectionMagazine6";
import SectionMagazine7 from "components/SectionMagazines/SectionMagazine7";
import SectionMagazine8 from "components/SectionMagazines/SectionMagazine8";
import SectionMagazine9 from "components/SectionMagazines/SectionMagazine9";
import SectionLargeSlider from "components/SectionMagazines/SectionLargeSlider";
import { GutenbergApiAttr_BlockMagazine } from "data/gutenbergAttrType";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import useGqlQuerySection from "hooks/useGqlQuerySection";
import useGutenbergSectionWithGQLGetPosts from "hooks/useGutenbergSectionWithGQLGetPosts";

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
  const { graphQLvariables, settings, graphQLData } = apiSettings;

  const IS_SPECIFIC_DATA = !graphQLvariables && !!graphQLData;

  //
  console.log(2232323232323232, { sectionIndex, domNode });

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
  } = useGutenbergSectionWithGQLGetPosts({
    graphQLData,
    graphQLvariables,
  });

  //
  let ref: React.RefObject<HTMLDivElement> | null = null;
  if (IS_SPECIFIC_DATA) {
    ref = useRef<HTMLDivElement>(null);
  } else {
    ref = useGqlQuerySection(funcGqlQueryGetPosts, sectionIndex).ref;
  }

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
          <SectionMagazine1 isLoading={IS_SKELETON} listPosts={LISTS_POSTS} />
        );
      case "magazine-2":
        return (
          <SectionMagazine2 isLoading={IS_SKELETON} listPosts={LISTS_POSTS} />
        );
      case "magazine-3":
        return (
          <SectionMagazine3 isLoading={IS_SKELETON} listPosts={LISTS_POSTS} />
        );
      case "magazine-4":
        return (
          <SectionMagazine4 isLoading={IS_SKELETON} listPosts={LISTS_POSTS} />
        );
      case "magazine-5":
        return (
          <SectionMagazine5 isLoading={IS_SKELETON} listPosts={LISTS_POSTS} />
        );
      case "magazine-6":
        return (
          <SectionMagazine6 isLoading={IS_SKELETON} listPosts={LISTS_POSTS} />
        );
      case "magazine-7":
        return (
          <SectionMagazine7 isLoading={IS_SKELETON} listPosts={LISTS_POSTS} />
        );
      case "magazine-8":
        return (
          <SectionMagazine8 isLoading={IS_SKELETON} listPosts={LISTS_POSTS} />
        );
      case "magazine-9":
        return (
          <SectionMagazine9 isLoading={IS_SKELETON} listPosts={LISTS_POSTS} />
        );
      case "large-slider":
        return (
          <SectionLargeSlider isLoading={IS_SKELETON} listPosts={LISTS_POSTS} />
        );

      default:
        return (
          <SectionMagazine1 isLoading={IS_SKELETON} listPosts={LISTS_POSTS} />
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
          isBg ? "py-16" : ""
        }  ${className}`}
        ref={ref}
      >
        {isBg && <BackgroundSection />}

        <div className="relative">
          {showFilterTab ? (
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
