import React, { FC } from "react";
import ReactDOM from "react-dom";
import { gql, useLazyQuery } from "@apollo/client";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import { GutenbergApiAttr_BlockTermSlider } from "data/gutenbergAttrType";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import {
  GQL_QUERY_GET_CATEGORIES_BY_FILTER,
  GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC,
  GQL_QUERY_GET_TAGS_BY_FILTER,
  GQL_QUERY_GET_TAGS_BY_SPECIFIC,
} from "contains/contants";
import useGqlQuerySection from "hooks/useGqlQuerySection";

export interface FactoryBlockTermsSliderProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockTermSlider;
  sectionIndex: number;
}

const FactoryBlockTermsSlider: FC<FactoryBlockTermsSliderProps> = ({
  className = "",
  domNode,
  apiSettings,
  sectionIndex,
}) => {
  const { graphQLvariables, settings } = apiSettings;

  let GQL_QUERY__string = "";
  if (graphQLvariables.queryString === "GQL_QUERY_GET_CATEGORIES_BY_FILTER") {
    GQL_QUERY__string = GQL_QUERY_GET_CATEGORIES_BY_FILTER;
  }
  if (graphQLvariables.queryString === "GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC") {
    GQL_QUERY__string = GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC;
  }
  if (graphQLvariables.queryString === "GQL_QUERY_GET_TAGS_BY_FILTER") {
    GQL_QUERY__string = GQL_QUERY_GET_TAGS_BY_FILTER;
  }
  if (graphQLvariables.queryString === "GQL_QUERY_GET_TAGS_BY_SPECIFIC") {
    GQL_QUERY__string = GQL_QUERY_GET_TAGS_BY_SPECIFIC;
  }
  const queryGql = gql`
    ${GQL_QUERY__string}
  `;

  const [gqlQueryGetPosts, { loading, error, data, fetchMore }] = useLazyQuery(
    queryGql,
    {
      notifyOnNetworkStatusChange: true,
      variables: graphQLvariables.variables,
    }
  );

  // =========================================================
  const { ref } = useGqlQuerySection(gqlQueryGetPosts, sectionIndex);

  // =========================================================

  //
  const termsLists = data?.tags?.edges || data?.categories?.edges || [];
  const IS_SKELETON = loading && !termsLists.length;

  const renderContent = () => {
    const { hasBackground, subHeading, heading, termCardName, itemPerView } =
      settings;
    const isBg = hasBackground;

    return (
      <div
        className={`nc-FactoryBlockTermsSlider relative ${
          isBg ? "py-16" : ""
        }  ${className}`}
        ref={ref}
      >
        {isBg && <BackgroundSection />}

        <div className="relative">
          <SectionSliderNewCategories
            categories={termsLists}
            heading={heading}
            subHeading={subHeading}
            categoryCardType={termCardName}
            itemPerRow={itemPerView}
            isLoading={IS_SKELETON}
          />

          {/* ------------ */}
          <DataStatementBlockV2
            data={termsLists}
            isSkeleton={IS_SKELETON}
            error={error}
          />
          {/* ------------ */}
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockTermsSlider;
