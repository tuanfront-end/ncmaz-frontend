import React, { FC, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { GutenbergApiAttr_BlockWidgetTerms } from "data/gutenbergAttrType";
import WidgetCategories from "components/WidgetCategories/WidgetCategories";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import {
  GQL_QUERY_GET_CATEGORIES_BY_FILTER,
  GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC,
  GQL_QUERY_GET_TAGS_BY_FILTER,
  GQL_QUERY_GET_TAGS_BY_SPECIFIC,
} from "contains/contants";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import useGqlQuerySection from "hooks/useGqlQuerySection";

export interface FactoryBlockWidgetTermsProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockWidgetTerms;
  sectionIndex: number;
}

const FactoryBlockWidgetTerms: FC<FactoryBlockWidgetTermsProps> = ({
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
  //   variables: graphQLvariables.variables,
  // });
  const [gqlQueryGetPosts, { loading, error, data, fetchMore }] = useLazyQuery(
    queryGql,
    {
      variables: graphQLvariables.variables,
    }
  );

  // =========================================================
  const { ref } = useGqlQuerySection(gqlQueryGetPosts, sectionIndex);

  // =========================================================
  const termsLists = data?.tags?.edges || data?.categories?.edges || [];
  const IS_SKELETON = loading && !termsLists.length;

  const renderContent = () => {
    return (
      <div ref={ref}>
        <WidgetCategories
          categories={termsLists}
          heading={settings.heading}
          termCardName={settings.termCardName}
          isLoading={IS_SKELETON}
        />

        <DataStatementBlockV2
          className="my-5"
          data={termsLists}
          error={error}
          isSkeleton={IS_SKELETON}
        />
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockWidgetTerms;
