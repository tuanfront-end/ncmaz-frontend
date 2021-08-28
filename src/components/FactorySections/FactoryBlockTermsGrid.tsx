import React, { FC } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import { GutenbergApiAttr_BlockTermGrid } from "data/gutenbergAttrType";

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
        className={`nc-FactoryBlockTermsGrid relative container ${
          isBg ? "py-16" : ""
        }  ${className}`}
      >
        {isBg && <BackgroundSection />}

        {/* ------------ */}
        {!termsLists.length && !loading && (
          <span className="text-lg block">Nothing we found!</span>
        )}
        {loading && !termsLists.length && (
          <span className="text-lg"> LOADING .............</span>
        )}

        {error && (
          <pre className="text-xs">
            <code>{JSON.stringify(error)}</code>
          </pre>
        )}
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
