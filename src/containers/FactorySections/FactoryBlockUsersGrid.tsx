import React, { FC } from "react";
import ReactDOM from "react-dom";
import { gql, useLazyQuery } from "@apollo/client";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import { GutenbergAttr__BlockUsersGrid } from "data/gutenbergAttrType";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
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

export interface FactoryBlockUsersGridProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergAttr__BlockUsersGrid;
  sectionIndex: number;
}

const FactoryBlockUsersGrid: FC<FactoryBlockUsersGridProps> = ({
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
      notifyOnNetworkStatusChange: true,
      variables: graphQLvariables.variables,
    });

  // =========================================================
  const { ref } = useGqlQuerySection(gqlQueryGetPosts, sectionIndex);

  // =========================================================

  //

  //
  const LISTS_DATA = data?.users.edges || [];
  const IS_SKELETON = loading && !LISTS_DATA.length;

  const renderContent = () => {
    const {
      hasBackground,
      subHeading,
      heading,
      gridClass,
      gridClassCustom,
      userCardName,
      blockLayoutStyle,
    } = settings;

    return (
      <div
        className={`nc-FactoryBlockUsersGrid relative ${
          hasBackground ? "py-16" : ""
        }  ${className}`}
        ref={ref}
      >
        {hasBackground && <BackgroundSection />}

        <div className="relative">
          {/* ------------ */}
          <SectionGridAuthorBox
            authorCardName={userCardName}
            blockLayoutStyle={blockLayoutStyle}
            authorNodes={LISTS_DATA}
            authorNodesLoading={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
            heading={heading}
            subHeading={subHeading}
            gridClass={!!gridClassCustom ? gridClassCustom : gridClass}
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
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockUsersGrid;
