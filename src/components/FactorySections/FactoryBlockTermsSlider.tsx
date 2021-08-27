import React, { FC } from "react";
import ReactDOM from "react-dom";
import { DocumentNode, useQuery } from "@apollo/client";
import { NcGutenbergApiAttr_BlockTermSlider } from "App";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import {
  TERMSQUERY_FILTER,
  TERMSQUERY_FILTER_TAGS,
  TERMSQUERY_SPECIFIC,
  TERMSQUERY_SPECIFIC_TAGS,
} from "graphql/termQuery";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";

export interface FactoryBlockTermsSliderProps {
  className?: string;
  domNode: Element;
  apiSettings: NcGutenbergApiAttr_BlockTermSlider;
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
    const { hasBackground, subHeading, heading, termCardName, itemPerView } =
      apiSettings.settings;
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
