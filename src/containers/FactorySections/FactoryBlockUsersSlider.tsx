import React, { FC } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import { GutenbergAttr__BlockUsersSlider } from "data/gutenbergAttrType";
import SectionSliderNewAuthors from "components/SectionSliderNewAuthors/SectionSliderNewAuthors";
import { PageInfo } from "containers/SingleComments/commentType";
import { AuthorNode } from "data/postCardType";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";

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
}

const FactoryBlockUsersSlider: FC<FactoryBlockUsersSliderSliderProps> = ({
  className = "",
  domNode,
  apiSettings,
}) => {
  const { graphQLvariables, settings } = apiSettings;

  const queryGql = gql`
    ${graphQLvariables.queryString}
  `;

  //
  const { loading, error, data } = useQuery<Data>(queryGql, {
    notifyOnNetworkStatusChange: true,
    variables: graphQLvariables.variables,
  });
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
      >
        {hasBackground && <BackgroundSection />}

        {/* ------------ */}
        <SectionSliderNewAuthors
          authorCardName={userCardName}
          blockLayoutStyle={blockLayoutStyle}
          itemPerView={itemPerView}
          authorNodes={LISTS_DATA}
          authorNodesLoading={[1, 1, 1, 1, 1, , 1, 1, 1]}
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
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockUsersSlider;
