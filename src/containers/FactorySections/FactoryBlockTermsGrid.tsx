import React, { FC, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import { GutenbergApiAttr_BlockTermGrid } from "data/gutenbergAttrType";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import {
  GQL_QUERY_GET_CATEGORIES_BY_FILTER,
  GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC,
  GQL_QUERY_GET_TAGS_BY_FILTER,
  GQL_QUERY_GET_TAGS_BY_SPECIFIC,
} from "contains/contants";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import useGqlQuerySection from "hooks/useGqlQuerySection";

export interface FactoryBlockTermsGridProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockTermGrid;
  sectionIndex: number;
}

const FactoryBlockTermsGrid: FC<FactoryBlockTermsGridProps> = ({
  className = "",
  domNode,
  apiSettings,
  sectionIndex,
}) => {
  const { graphQLvariables, settings } = apiSettings;

  let GQL_QUERY__string = "";
  if (graphQLvariables.queryString === "GQL_QUERY_GET_CATEGORIES_BY_FILTER") {
    GQL_QUERY__string = GQL_QUERY_GET_CATEGORIES_BY_FILTER;
  }
  if (graphQLvariables.queryString === "GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC") {
    GQL_QUERY__string = GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC;
  }
  if (graphQLvariables.queryString === "GQL_QUERY_GET_TAGS_BY_FILTER") {
    GQL_QUERY__string = GQL_QUERY_GET_TAGS_BY_FILTER;
  }
  if (graphQLvariables.queryString === "GQL_QUERY_GET_TAGS_BY_SPECIFIC") {
    GQL_QUERY__string = GQL_QUERY_GET_TAGS_BY_SPECIFIC;
  }
  const queryGql = gql`
    ${GQL_QUERY__string}
  `;
  // const { loading, error, data } = useQuery(queryGql, {
  //   notifyOnNetworkStatusChange: true,
  //   variables: graphQLvariables.variables,
  // } );

  const [gqlQueryGetPosts, { loading, error, data, fetchMore }] = useLazyQuery(
    queryGql,
    {
      notifyOnNetworkStatusChange: true,
      variables: graphQLvariables.variables,
    }
  );

  // =========================================================
  const { ref } = useGqlQuerySection(gqlQueryGetPosts, sectionIndex);

  // =========================================================

  const termsLists = data?.tags?.edges || data?.categories?.edges || [];
  const IS_SKELETON = loading && !termsLists.length;

  const renderContent = () => {
    const {
      hasBackground,
      subHeading,
      heading,
      termCardName,
      gridClass,
      gridClassCustom,
      blockLayoutStyle,
    } = settings;
    const isBg = hasBackground;

    return (
      <div
        className={`nc-FactoryBlockTermsGrid relative  ${
          isBg ? "py-16" : ""
        }  ${className}`}
        ref={ref}
      >
        <h2 className="text-3xl font-bold underline">--{sectionIndex}</h2>
        {isBg && <BackgroundSection />}

        <div className="relative">
          {/* ------------ */}
          <SectionGridCategoryBox
            categories={termsLists}
            heading={heading}
            subHeading={subHeading}
            headingCenter={blockLayoutStyle === "layout-1"}
            categoryCardType={termCardName}
            gridClass={!!gridClassCustom ? gridClassCustom : gridClass}
            isLoadingSkeleton={IS_SKELETON}
          />

          {/* ------------ */}
          <DataStatementBlockV2
            data={termsLists}
            isSkeleton={IS_SKELETON}
            error={error}
          />
          {/* ------------ */}
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockTermsGrid;
