import React, { FC } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import { GutenbergApiAttr_BlockWidgetTerms } from "data/gutenbergAttrType";
import WidgetCategories from "components/WidgetCategories/WidgetCategories";

export interface FactoryBlockTermsGridProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockWidgetTerms;
}

const FactoryBlockWidgetTerms: FC<FactoryBlockTermsGridProps> = ({
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

  return ReactDOM.createPortal(
    <WidgetCategories
      categories={termsLists}
      heading={settings.heading}
      termCardName={settings.termCardName}
    />,
    domNode
  );
};

export default FactoryBlockWidgetTerms;
