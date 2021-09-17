import React, { FC } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import { GutenbergAttr__BlockUsersGrid } from "data/gutenbergAttrType";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import DataStatementBlock from "components/DataStatementBlock/DataStatementBlock";

export interface FactoryBlockTermsSliderProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergAttr__BlockUsersGrid;
}

const FactoryBlockUsersGrid: FC<FactoryBlockTermsSliderProps> = ({
  className = "",
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

  const dataLists = data?.users?.edges || [];
  //

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
        className={`nc-FactoryBlockUsersGrid relative  ${
          hasBackground ? "py-16" : ""
        }  ${className}`}
      >
        {hasBackground && <BackgroundSection />}

        {/* ------------ */}
        <DataStatementBlock loading={loading} error={error} data={dataLists} />
        {/* ------------ */}

        {dataLists.length && (
          <SectionGridAuthorBox
            authorCardName={userCardName}
            blockLayoutStyle={blockLayoutStyle}
            authorNodes={dataLists}
            heading={heading}
            subHeading={subHeading}
            gridClass={!!gridClassCustom ? gridClassCustom : gridClass}
          />
        )}
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockUsersGrid;
