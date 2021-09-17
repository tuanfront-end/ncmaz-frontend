import React, { FC } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import { GutenbergApiAttr_BlockTermGrid } from "data/gutenbergAttrType";
import DataStatementBlock from "components/DataStatementBlock/DataStatementBlock";

export interface FactoryBlockTermsGridProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockTermGrid;
}

const FactoryBlockTermsGrid: FC<FactoryBlockTermsGridProps> = ({
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

  const termsLists = data?.tags?.edges || data?.categories?.edges || [];

  const renderContent = () => {
    const {
      hasBackground,
      subHeading,
      heading,
      termCardName,
      gridClass,
      gridClassCustom,
      blockLayoutStyle,
    } = settings;
    const isBg = hasBackground;

    return (
      <div
        className={`nc-FactoryBlockTermsGrid relative  ${
          isBg ? "py-16" : ""
        }  ${className}`}
      >
        {isBg && <BackgroundSection />}

        {/* ------------ */}
        <DataStatementBlock loading={loading} error={error} data={termsLists} />
        {/* ------------ */}

        {termsLists.length && (
          <SectionGridCategoryBox
            categories={termsLists}
            heading={heading}
            subHeading={subHeading}
            headingCenter={blockLayoutStyle === "layout-1"}
            categoryCardType={termCardName}
            gridClass={!!gridClassCustom ? gridClassCustom : gridClass}
          />
        )}
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockTermsGrid;
