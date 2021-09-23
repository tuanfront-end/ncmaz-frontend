import React, { FC } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";
import { ListPosts } from "data/postCardType";
import { GutenbergApiAttr_BlockWidgetPots } from "data/gutenbergAttrType";
import WidgetPosts from "components/WidgetPosts/WidgetPosts";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";

interface Data {
  posts: ListPosts;
}

export interface FactoryBlockWidgetPostsProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockWidgetPots;
}

const FactoryBlockWidgetPosts: FC<FactoryBlockWidgetPostsProps> = ({
  domNode,
  apiSettings,
}) => {
  const { graphQLvariables, settings } = apiSettings;

  const queryGql = gql`
    ${graphQLvariables.queryString}
  `;

  const { loading, error, data } = useQuery<Data>(queryGql, {
    variables: graphQLvariables.variables,
  });

  //
  const LISTS_POSTS = data?.posts.edges || [];
  const IS_SKELETON = loading && !LISTS_POSTS.length;
  //

  const renderContent = () => {
    return (
      <>
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
      </>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockWidgetPosts;
