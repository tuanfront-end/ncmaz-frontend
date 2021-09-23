import React, { FC } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";
import { GutenbergApiAttr_BlockWidgetUsers } from "data/gutenbergAttrType";
import WidgetAuthors from "components/WidgetAuthors/WidgetAuthors";
import DataStatementBlock from "components/DataStatementBlock/DataStatementBlock";
import { GraphQlPageInfo } from "data/types";
import { AuthorNode } from "data/postCardType";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";

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
}

const FactoryBlockWidgetUsers: FC<FactoryBlockWidgetUsersProps> = ({
  className = "",
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

  const LISTS_DATA = data?.users.edges || [];
  const IS_SKELETON = loading && !LISTS_DATA.length;
  //

  const renderContent = () => {
    return (
      <>
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
      </>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockWidgetUsers;
