import React, { FC, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { ListPosts } from "data/postCardType";
import { GutenbergApiAttr_BlockWidgetPots } from "data/gutenbergAttrType";
import WidgetPosts from "components/WidgetPosts/WidgetPosts";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import {
  GQL_QUERY_GET_POSTS_BY_FILTER,
  GQL_QUERY_GET_POSTS_BY_SPECIFIC,
} from "contains/contants";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import useGqlQuerySection from "hooks/useGqlQuerySection";

interface Data {
  posts: ListPosts;
}

export interface FactoryBlockWidgetPostsProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockWidgetPots;
  sectionIndex: number;
}

const FactoryBlockWidgetPosts: FC<FactoryBlockWidgetPostsProps> = ({
  domNode,
  apiSettings,
  sectionIndex,
}) => {
  const { graphQLvariables, settings } = apiSettings;

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

  // const { loading, error, data } = useQuery<Data>(queryGql, {
  //   variables: graphQLvariables.variables,
  // } );

  const [gqlQueryGetPosts, { loading, error, data, fetchMore }] =
    useLazyQuery<Data>(queryGql, {
      variables: graphQLvariables.variables,
    });

  // =========================================================
  const { ref } = useGqlQuerySection(gqlQueryGetPosts, sectionIndex);

  // =========================================================
  //
  const LISTS_POSTS = data?.posts.edges || [];
  const IS_SKELETON = loading && !LISTS_POSTS.length;
  //

  const renderContent = () => {
    return (
      <div ref={ref}>
        <WidgetPosts
          posts={LISTS_POSTS}
          isLoading={IS_SKELETON}
          heading={settings.heading}
        />
        <DataStatementBlockV2
          className="my-5"
          data={LISTS_POSTS}
          error={error}
          isSkeleton={IS_SKELETON}
        />
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockWidgetPosts;
