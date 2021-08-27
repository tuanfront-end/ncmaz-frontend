import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useQuery } from "@apollo/client";
import {
  POSTS_SECTION_BY_FILTER,
  POSTS_SECTION_SPECIFIC,
} from "graphql/getPosts";
import { NcGutenbergApiAttr_BlockMagazine } from "App";
import { ListPosts } from "data/postCardType";
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

export interface FactoryBlockMagazineProps {
  className?: string;
  domNode: Element;
  apiSettings: NcGutenbergApiAttr_BlockMagazine;
}

//
let listPosts = {
  edges: [],
};

const FactoryBlockMagazine: FC<FactoryBlockMagazineProps> = ({
  className = "",
  domNode,
  apiSettings,
}) => {
  if (apiSettings.blockName !== "nc-block-magazine") return null;

  const [tabActiveId, setTabActiveId] = useState<number>(-1);
  const [variablesFilter, setVariablesFilter] = useState({});

  useEffect(() => {
    const variables =
      apiSettings.option === "by_post_specific"
        ? { nameIn: apiSettings.params.slug }
        : {
            categoryIn: apiSettings.params.categories || [],
            tagIn: apiSettings.params?.tags || [],
            authorIn: apiSettings.params?.authors || [],
            order: apiSettings.params?.order,
            field: apiSettings.params?.orderBy,
            last: null,
            first: apiSettings.params.per_page,
            before: null,
            after: null,
          };
    setVariablesFilter(variables);
  }, []);

  useEffect(() => {
    if (apiSettings.option === "by_post_specific") {
      return;
    }
    setVariablesFilter((variables) => {
      return {
        ...variables,
        categoryIn:
          tabActiveId === -1 ? apiSettings.params.categories : [tabActiveId],
      };
    });
  }, [tabActiveId]);

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

  const { loading, error, data } = useQuery(
    apiSettings.option === "by_post_specific"
      ? POSTS_SECTION_SPECIFIC
      : POSTS_SECTION_BY_FILTER,
    {
      variables: variablesFilter,
    }
  );

  //
  if (data) {
    listPosts = data?.posts;
  }

  const renderLayoutType = () => {
    switch (apiSettings.settings.sectionName) {
      case "magazine-1":
        return (
          <SectionMagazine1 isLoading={loading} activePosts={listPosts.edges} />
        );
      case "magazine-2":
        return (
          <SectionMagazine2 isLoading={loading} activePosts={listPosts.edges} />
        );
      case "magazine-3":
        return (
          <SectionMagazine3 isLoading={loading} activePosts={listPosts.edges} />
        );
      case "magazine-4":
        return (
          <SectionMagazine4 isLoading={loading} activePosts={listPosts.edges} />
        );
      case "magazine-5":
        return (
          <SectionMagazine5 isLoading={loading} activePosts={listPosts.edges} />
        );
      case "magazine-6":
        return (
          <SectionMagazine6 isLoading={loading} activePosts={listPosts.edges} />
        );
      case "magazine-7":
        return (
          <SectionMagazine7 isLoading={loading} activePosts={listPosts.edges} />
        );
      case "magazine-8":
        return (
          <SectionMagazine8 isLoading={loading} activePosts={listPosts.edges} />
        );
      case "magazine-9":
        return (
          <SectionMagazine9 isLoading={loading} activePosts={listPosts.edges} />
        );
      case "large-slider":
        return (
          <SectionLargeSlider
            isLoading={loading}
            activePosts={listPosts.edges}
          />
        );

      default:
        return (
          <SectionMagazine1 isLoading={loading} activePosts={listPosts.edges} />
        );
    }
  };

  const renderContent = () => {
    const isBg = apiSettings.settings.hasBackground;
    return (
      <div
        className={`nc-FactoryBlockMagazine relative container ${
          isBg ? "py-16" : ""
        }  ${className}`}
      >
        {isBg && <BackgroundSection />}

        {apiSettings.option === "by_filter" &&
        apiSettings.settings.showFilterTab ? (
          <HeaderSectionFilter
            tabActiveId={tabActiveId}
            tabs={apiSettings.settings.categoriesFilter}
            viewMoreHref={apiSettings.settings.viewMoreHref}
            heading={apiSettings.settings.heading}
            subHeading={apiSettings.settings.subHeading}
            onClickTab={handleClickTab}
          />
        ) : (
          <Heading desc={apiSettings.settings.subHeading}>
            {apiSettings.settings.heading}
          </Heading>
        )}

        {loading && !listPosts.edges.length && (
          <span className="text-lg"> LOADING .............</span>
        )}
        {error && (
          <pre className="text-xs">
            <code>{JSON.stringify(error)}</code>
          </pre>
        )}

        {!listPosts.edges.length && !loading && (
          <span className="text-lg block">Nothing we found!</span>
        )}

        {renderLayoutType()}
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockMagazine;
