import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";
import { ListPosts, PostNode } from "data/postCardType";
import { GutenbergApiAttr_BlockWidgetPots } from "data/gutenbergAttrType";
import WidgetPosts from "components/WidgetPosts/WidgetPosts";
import DataStatementBlock from "components/DataStatementBlock/DataStatementBlock";

export interface FactoryBlockPostsGridProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockWidgetPots;
}

let LISTS_POSTS: ListPosts = {
  edges: [],
};

const FactoryBlockWidgetPosts: FC<FactoryBlockPostsGridProps> = ({
  domNode,
  apiSettings,
}) => {
  const { graphQLvariables, settings } = apiSettings;

  const queryGql = gql`
    ${graphQLvariables.queryString}
  `;

  const { loading, error, data } = useQuery(queryGql, {
    variables: graphQLvariables.variables,
  });

  //
  if (data) {
    LISTS_POSTS = data?.posts;
  }

  const renderContent = () => {
    return (
      <>
        <DataStatementBlock
          loading={loading}
          error={error}
          data={LISTS_POSTS.edges}
        />
        <WidgetPosts posts={LISTS_POSTS.edges} heading={settings.heading} />
      </>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockWidgetPosts;
