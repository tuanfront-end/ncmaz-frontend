import React, { FC } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";
import { GutenbergApiAttr_BlockWidgetTerms } from "data/gutenbergAttrType";
import WidgetCategories from "components/WidgetCategories/WidgetCategories";
import DataStatementBlock from "components/DataStatementBlock/DataStatementBlock";

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

  const renderContent = () => {
    return (
      <>
        <DataStatementBlock loading={loading} error={error} data={termsLists} />
        <WidgetCategories
          categories={termsLists}
          heading={settings.heading}
          termCardName={settings.termCardName}
        />
      </>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockWidgetTerms;
