import React, { FC } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import { GutenbergAttr__BlockUsersSlider } from "data/gutenbergAttrType";
import SectionSliderNewAuthors, {
  SectionSliderNewAuthorsProps,
} from "components/SectionSliderNewAuthors/SectionSliderNewAuthors";
import DataStatementBlock from "components/DataStatementBlock/DataStatementBlock";

export interface FactoryBlockTermsSliderProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergAttr__BlockUsersSlider;
}

const FactoryBlockUsersSlider: FC<FactoryBlockTermsSliderProps> = ({
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
      itemPerView,
      userCardName,
      blockLayoutStyle,
    } = settings;

    return (
      <div
        className={`nc-FactoryBlockUsersSlider relative ${
          hasBackground ? "py-16" : ""
        }  ${className}`}
      >
        {hasBackground && <BackgroundSection />}

        {/* ------------ */}
        <DataStatementBlock loading={loading} error={error} data={dataLists} />
        {/* ------------ */}

        {dataLists.length && (
          <SectionSliderNewAuthors
            authorCardName={userCardName}
            blockLayoutStyle={blockLayoutStyle}
            itemPerView={itemPerView}
            authorNodes={dataLists}
            heading={heading}
            subHeading={subHeading}
          />
        )}
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockUsersSlider;
