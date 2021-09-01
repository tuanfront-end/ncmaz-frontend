import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";
import { ListPosts, PostNode } from "data/postCardType";
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
import { GutenbergApiAttr_BlockWidgetPots } from "data/gutenbergAttrType";
import EmptyState from "components/EmptyState/EmptyState";
import WidgetPosts from "components/WidgetPosts/WidgetPosts";

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

  return ReactDOM.createPortal(
    <WidgetPosts posts={LISTS_POSTS.edges} heading={settings.heading} />,
    domNode
  );
};

export default FactoryBlockWidgetPosts;
