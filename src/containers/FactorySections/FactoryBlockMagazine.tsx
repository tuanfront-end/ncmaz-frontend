import React, { FC, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
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
import { ListPosts } from "data/postCardType";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import {
  GQL_QUERY_GET_POSTS_BY_FILTER,
  GQL_QUERY_GET_POSTS_BY_SPECIFIC,
} from "contains/contants";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import useGqlQuerySection from "hooks/useGqlQuerySection";

export interface FactoryBlockMagazineProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockMagazine;
  sectionIndex: number;
}

interface Data {
  posts: ListPosts;
}

const FactoryBlockMagazine: FC<FactoryBlockMagazineProps> = ({
  className = "",
  domNode,
  apiSettings,
  sectionIndex,
}) => {
  const { graphQLvariables, settings } = apiSettings;

  const [tabActiveId, setTabActiveId] = useState<number>(-1);
  const [variablesFilter, setVariablesFilter] = useState(
    graphQLvariables.variables || {}
  );

  //

  useEffect(() => {
    setVariablesFilter(graphQLvariables.variables);
  }, [graphQLvariables]);

  let GQL_QUERY__string = "";
  if (graphQLvariables.queryString === "GQL_QUERY_GET_POSTS_BY_FILTER") {
    GQL_QUERY__string = GQL_QUERY_GET_POSTS_BY_FILTER;
  }
  if (graphQLvariables.queryString === "GQL_QUERY_GET_POSTS_BY_SPECIFIC") {
    GQL_QUERY__string = GQL_QUERY_GET_POSTS_BY_SPECIFIC;
  }

  const queryGql = gql`
    ${GQL_QUERY__string}
  `;

  useEffect(() => {
    setVariablesFilter((variables) => {
      return {
        ...variables,
        categoryIn:
          tabActiveId === -1
            ? graphQLvariables.variables?.categoryIn
            : [tabActiveId],
      };
    });
  }, [tabActiveId]);

  const [gqlQueryGetPosts, { loading, error, data }] = useLazyQuery<Data>(
    queryGql,
    {
      notifyOnNetworkStatusChange: true,
      variables: variablesFilter,
    }
  );

  // =========================================================
  const { ref } = useGqlQuerySection(gqlQueryGetPosts, sectionIndex);
  // =========================================================
  //
  const LISTS_POSTS = data?.posts.edges || [];
  const IS_SKELETON = loading && !LISTS_POSTS.length;

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
        <h2 className="text-3xl font-bold underline">--{sectionIndex}</h2>
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
