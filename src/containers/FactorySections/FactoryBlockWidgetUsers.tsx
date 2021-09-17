import React, { FC } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import { GutenbergApiAttr_BlockWidgetUsers } from "data/gutenbergAttrType";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import WidgetAuthors from "components/WidgetAuthors/WidgetAuthors";
import DataStatementBlock from "components/DataStatementBlock/DataStatementBlock";

export interface FactoryBlockTermsSliderProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockWidgetUsers;
}

const FactoryBlockWidgetUsers: FC<FactoryBlockTermsSliderProps> = ({
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
    return (
      <>
        <DataStatementBlock loading={loading} error={error} data={dataLists} />
        <WidgetAuthors authors={dataLists} heading={settings.heading} />
      </>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockWidgetUsers;
