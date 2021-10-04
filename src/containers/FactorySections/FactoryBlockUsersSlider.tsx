import React, { FC, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import { GutenbergAttr__BlockUsersSlider } from "data/gutenbergAttrType";
import SectionSliderNewAuthors from "components/SectionSliderNewAuthors/SectionSliderNewAuthors";
import { PageInfo } from "containers/SingleComments/commentType";
import { AuthorNode } from "data/postCardType";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import ncNanoId from "utils/ncNanoId";
import {
  GQL_QUERY_GET_USERS_BY_FILTER,
  GQL_QUERY_GET_USERS_BY_SPECIFIC,
} from "contains/contants";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import useGqlQuerySection from "hooks/useGqlQuerySection";

interface Data {
  users: Users;
}
interface Users {
  edges: Edge[];
  pageInfo: PageInfo;
  __typename: string;
}
interface Edge {
  node: AuthorNode;
  __typename: string;
}

export interface FactoryBlockUsersSliderSliderProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergAttr__BlockUsersSlider;
  sectionIndex: number;
}

const FactoryBlockUsersSlider: FC<FactoryBlockUsersSliderSliderProps> = ({
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

  //
  // const { loading, error, data } = useQuery<Data>(queryGql, {
  //   notifyOnNetworkStatusChange: true,
  //   variables: graphQLvariables.variables,
  // });

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
      itemPerView,
      userCardName,
      blockLayoutStyle,
    } = settings;

    return (
      <div
        className={`nc-FactoryBlockUsersSlider relative ${
          hasBackground ? "py-16" : ""
        }  ${className}`}
        ref={ref}
      >
        <h2 className="text-3xl font-bold underline">--{sectionIndex}</h2>
        {hasBackground && <BackgroundSection />}

        <div className="relative">
          {/* ------------ */}
          <SectionSliderNewAuthors
            authorCardName={userCardName}
            blockLayoutStyle={blockLayoutStyle}
            itemPerView={itemPerView}
            authorNodes={LISTS_DATA}
            heading={heading}
            subHeading={subHeading}
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

export default FactoryBlockUsersSlider;
