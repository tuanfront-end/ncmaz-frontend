import React, { FC } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";
import { GutenbergApiAttr_BlockWidgetTerms } from "data/gutenbergAttrType";
import WidgetCategories from "components/WidgetCategories/WidgetCategories";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";

export interface FactoryBlockWidgetTermsProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockWidgetTerms;
}

const FactoryBlockWidgetTerms: FC<FactoryBlockWidgetTermsProps> = ({
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
  const IS_SKELETON = loading && !termsLists.length;

  const renderContent = () => {
    return (
      <>
        <WidgetCategories
          categories={termsLists}
          heading={settings.heading}
          termCardName={settings.termCardName}
          isLoading={IS_SKELETON}
        />

        <DataStatementBlockV2
          className="my-5"
          data={termsLists}
          error={error}
          isSkeleton={IS_SKELETON}
        />
      </>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockWidgetTerms;
