import React, { FC } from "react";
import ReactDOM from "react-dom";
import { DocumentNode, useQuery } from "@apollo/client";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import {
  TERMSQUERY_FILTER,
  TERMSQUERY_FILTER_TAGS,
  TERMSQUERY_SPECIFIC,
  TERMSQUERY_SPECIFIC_TAGS,
} from "graphql/termQuery";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import { NcGutenbergApiAttr_BlockTermGrid } from "data/gutenbergAttrType";

export interface FactoryBlockTermsSliderProps {
  className?: string;
  domNode: Element;
  apiSettings: NcGutenbergApiAttr_BlockTermGrid;
}

const FactoryBlockTermsSlider: FC<FactoryBlockTermsSliderProps> = ({
  className = "",
  domNode,
  apiSettings,
}) => {
  let variables = {};
  let TERMSQUERY: DocumentNode;

  const { typeOfTerm } = apiSettings;

  // CATEGORIES
  if (typeOfTerm === "category") {
    if (apiSettings.option === "by_filter") {
      variables = {
        order: apiSettings.params.order,
        orderby: apiSettings.params.orderby,
        first: Number(apiSettings.params.per_page),
      };
      TERMSQUERY = TERMSQUERY_FILTER;
    } else {
      variables = {
        termTaxonomId: apiSettings.params.termIds,
      };
      TERMSQUERY = TERMSQUERY_SPECIFIC;
    }
  }

  // TAGS;
  if (typeOfTerm === "tag") {
    if (apiSettings.option === "by_filter") {
      variables = {
        order: apiSettings.params.order,
        orderby: apiSettings.params.orderby,
        first: Number(apiSettings.params.per_page),
      };
      TERMSQUERY = TERMSQUERY_FILTER_TAGS;
    } else {
      variables = { termTaxonomId: apiSettings.params.termIds };
      TERMSQUERY = TERMSQUERY_SPECIFIC_TAGS;
    }
  }

  // @ts-ignore
  const { loading, error, data } = useQuery(TERMSQUERY, { variables });

  const termsLists = data?.tags?.edges || data?.categories?.edges || [];
  const renderContent = () => {
    const {
      hasBackground,
      subHeading,
      heading,
      termCardName,
      gridClass,
      gridClassCustom,
      blockLayoutType,
    } = apiSettings.settings;
    const isBg = hasBackground;

    return (
      <div
        className={`nc-FactoryBlockTermsSlider relative container ${
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
            headingCenter={blockLayoutType === "type-2"}
            categoryCardType={termCardName}
            gridClass={!!gridClassCustom ? gridClassCustom : gridClass}
          />
        )}
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockTermsSlider;
