import React, { FC } from "react";
import ReactDOM from "react-dom";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { GutenbergApiAttr_BlockWidgetUsers } from "data/gutenbergAttrType";
import WidgetAuthors from "components/WidgetAuthors/WidgetAuthors";
import { GraphQlPageInfo } from "data/types";
import { AuthorNode } from "data/postCardType";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import {
  GQL_QUERY_GET_USERS_BY_FILTER,
  GQL_QUERY_GET_USERS_BY_SPECIFIC,
} from "contains/contants";
import useGqlQuerySection from "hooks/useGqlQuerySection";

interface Data {
  users: Users;
}
interface Users {
  edges: Edge[];
  pageInfo: GraphQlPageInfo;
  __typename: string;
}
interface Edge {
  node: AuthorNode;
  __typename: string;
}

export interface FactoryBlockWidgetUsersProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockWidgetUsers;
  sectionIndex: number;
}

const FactoryBlockWidgetUsers: FC<FactoryBlockWidgetUsersProps> = ({
  className = "",
  domNode,
  apiSettings,
  sectionIndex,
}) => {
  const { graphQLvariables, settings } = apiSettings;

  let GQL_QUERY__string = "";
  if (graphQLvariables.queryString === "GQL_QUERY_GET_USERS_BY_SPECIFIC") {
    GQL_QUERY__string = GQL_QUERY_GET_USERS_BY_SPECIFIC;
  }
  if (graphQLvariables.queryString === "GQL_QUERY_GET_USERS_BY_FILTER") {
    GQL_QUERY__string = GQL_QUERY_GET_USERS_BY_FILTER;
  }
  const queryGql = gql`
    ${GQL_QUERY__string}
  `;

  const [gqlQueryGetPosts, { loading, error, data, fetchMore }] =
    useLazyQuery<Data>(queryGql, {
      variables: graphQLvariables.variables,
    });

  // =========================================================
  const { ref } = useGqlQuerySection(gqlQueryGetPosts, sectionIndex);

  // =========================================================

  const LISTS_DATA = data?.users.edges || [];
  const IS_SKELETON = loading && !LISTS_DATA.length;
  //

  const renderContent = () => {
    return (
      <div ref={ref}>
        <WidgetAuthors
          authors={LISTS_DATA}
          heading={settings.heading}
          isLoading={IS_SKELETON}
        />

        {/* ------------ */}
        <DataStatementBlockV2
          className="my-5"
          data={LISTS_DATA}
          error={error}
          isSkeleton={IS_SKELETON}
        />
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockWidgetUsers;
