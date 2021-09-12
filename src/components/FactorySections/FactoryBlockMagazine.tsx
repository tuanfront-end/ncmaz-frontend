import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";

import Heading from "components/Heading/Heading";
import HeaderSectionFilter, {
  HeaderSectionFilterTabItem,
} from "components/HeaderSectionFilter/HeaderSectionFilter";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionMagazine1 from "components/SectionMagazines/SectionMagazine1";
import SectionMagazine2 from "components/SectionMagazines/SectionMagazine2";
import SectionMagazine3 from "components/SectionMagazines/SectionMagazine3";
import SectionMagazine4 from "components/SectionMagazines/SectionMagazine4";
import SectionMagazine5 from "components/SectionMagazines/SectionMagazine5";
import SectionMagazine6 from "components/SectionMagazines/SectionMagazine6";
import SectionMagazine7 from "components/SectionMagazines/SectionMagazine7";
import SectionMagazine8 from "components/SectionMagazines/SectionMagazine8";
import SectionMagazine9 from "components/SectionMagazines/SectionMagazine9";
import SectionLargeSlider from "components/SectionMagazines/SectionLargeSlider";
import { GutenbergApiAttr_BlockMagazine } from "data/gutenbergAttrType";
import { ListPosts } from "data/postCardType";
import EmptyState from "components/EmptyState/EmptyState";
import Loading from "components/Loading/Loading";
import DataStatementBlock from "components/DataStatementBlock/DataStatementBlock";

export interface FactoryBlockMagazineProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockMagazine;
}

let LISTS_POSTS: ListPosts = {
  edges: [],
};

const FactoryBlockMagazine: FC<FactoryBlockMagazineProps> = ({
  className = "",
  domNode,
  apiSettings,
}) => {
  const { graphQLvariables, settings } = apiSettings;

  const [tabActiveId, setTabActiveId] = useState<number>(-1);
  const [variablesFilter, setVariablesFilter] = useState(
    graphQLvariables.variables || {}
  );

  //
  useEffect(() => {
    setVariablesFilter(graphQLvariables.variables);
  }, [graphQLvariables]);

  const queryGql = gql`
    ${graphQLvariables.queryString}
  `;

  useEffect(() => {
    setVariablesFilter((variables) => {
      return {
        ...variables,
        categoryIn:
          tabActiveId === -1
            ? graphQLvariables.variables?.categoryIn
            : [tabActiveId],
      };
    });
  }, [tabActiveId]);

  const { loading, error, data } = useQuery(queryGql, {
    variables: variablesFilter,
  });

  //
  if (data) {
    LISTS_POSTS = data?.posts;
  }

  const handleClickTab = (item: -1 | HeaderSectionFilterTabItem) => {
    if (item === -1) {
      setTabActiveId(item);
      return;
    }
    if (item.id === tabActiveId) {
      return;
    }
    setTabActiveId(item.id);
  };

  const renderLayoutType = () => {
    switch (apiSettings.settings.sectionName) {
      case "magazine-1":
        return (
          <SectionMagazine1
            isLoading={loading}
            activePosts={LISTS_POSTS.edges}
          />
        );
      case "magazine-2":
        return (
          <SectionMagazine2
            isLoading={loading}
            activePosts={LISTS_POSTS.edges}
          />
        );
      case "magazine-3":
        return (
          <SectionMagazine3
            isLoading={loading}
            activePosts={LISTS_POSTS.edges}
          />
        );
      case "magazine-4":
        return (
          <SectionMagazine4
            isLoading={loading}
            activePosts={LISTS_POSTS.edges}
          />
        );
      case "magazine-5":
        return (
          <SectionMagazine5
            isLoading={loading}
            activePosts={LISTS_POSTS.edges}
          />
        );
      case "magazine-6":
        return (
          <SectionMagazine6
            isLoading={loading}
            activePosts={LISTS_POSTS.edges}
          />
        );
      case "magazine-7":
        return (
          <SectionMagazine7
            isLoading={loading}
            activePosts={LISTS_POSTS.edges}
          />
        );
      case "magazine-8":
        return (
          <SectionMagazine8
            isLoading={loading}
            activePosts={LISTS_POSTS.edges}
          />
        );
      case "magazine-9":
        return (
          <SectionMagazine9
            isLoading={loading}
            activePosts={LISTS_POSTS.edges}
          />
        );
      case "large-slider":
        return (
          <SectionLargeSlider
            isLoading={loading}
            activePosts={LISTS_POSTS.edges}
          />
        );

      default:
        return (
          <SectionMagazine1
            isLoading={loading}
            activePosts={LISTS_POSTS.edges}
          />
        );
    }
  };

  const renderContent = () => {
    const {
      hasBackground,
      showFilterTab,
      categories,
      viewMoreHref,
      heading,
      subHeading,
    } = settings;
    const isBg = hasBackground;
    return (
      <div
        className={`nc-FactoryBlockMagazine relative ${
          isBg ? "py-16" : ""
        }  ${className}`}
      >
        {isBg && <BackgroundSection />}

        {showFilterTab ? (
          <HeaderSectionFilter
            tabActiveId={tabActiveId}
            tabs={categories}
            viewMoreHref={viewMoreHref}
            heading={heading}
            subHeading={subHeading}
            onClickTab={handleClickTab}
          />
        ) : (
          <Heading desc={subHeading}>{heading}</Heading>
        )}

        <DataStatementBlock
          loading={loading}
          error={error}
          data={LISTS_POSTS.edges}
        />
        {/* {loading && !LISTS_POSTS.edges.length && (
          <div className="flex justify-center">
            <Loading />
          </div>
        )}
        {error && (
          <pre className="text-xs">
            <code>{JSON.stringify(error)}</code>
          </pre>
        )}

        {!LISTS_POSTS.edges.length && !loading && <EmptyState />} */}

        {renderLayoutType()}
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockMagazine;
