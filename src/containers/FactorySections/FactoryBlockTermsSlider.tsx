import React, { FC } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import { GutenbergApiAttr_BlockTermSlider } from "data/gutenbergAttrType";
import DataStatementBlock from "components/DataStatementBlock/DataStatementBlock";

export interface FactoryBlockTermsSliderProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockTermSlider;
}

const FactoryBlockTermsSlider: FC<FactoryBlockTermsSliderProps> = ({
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
    const { hasBackground, subHeading, heading, termCardName, itemPerView } =
      settings;
    const isBg = hasBackground;

    return (
      <div
        className={`nc-FactoryBlockTermsSlider relative ${
          isBg ? "py-16" : ""
        }  ${className}`}
      >
        {isBg && <BackgroundSection />}

        {/* ------------ */}
        <DataStatementBlock loading={loading} error={error} data={termsLists} />
        {/* ------------ */}

        {termsLists.length && (
          <SectionSliderNewCategories
            categories={termsLists}
            heading={heading}
            subHeading={subHeading}
            categoryCardType={termCardName}
            itemPerRow={itemPerView}
          />
        )}
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockTermsSlider;
