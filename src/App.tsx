import FactoryBlockMagazine from "components/FactorySections/FactoryBlockMagazine";
import FactoryBlockPostsGrid from "components/FactorySections/FactoryBlockPostsGrid";
import FactoryBlockPostsSlider from "components/FactorySections/FactoryBlockPostsSlider";
import MediaRunningContainer from "containers/MediaRunningContainer/MediaRunningContainer";
import React from "react";

// DOMS
const gutenbergDomNodes = document.querySelectorAll(
  "[data-nc-gutenberg-section=true]"
);

// block-magazine
const blockMagazines = Array.from(gutenbergDomNodes).filter(
  (selector) =>
    selector.getAttribute("data-nc-gutenberg-section-type") === "block-magazine"
);

// block-posts-slider
const blockPostsSlider = Array.from(gutenbergDomNodes).filter(
  (selector) =>
    selector.getAttribute("data-nc-gutenberg-section-type") ===
    "block-posts-slider"
);

// block-posts-grid
const blockPostsGrid = Array.from(gutenbergDomNodes).filter(
  (selector) =>
    selector.getAttribute("data-nc-gutenberg-section-type") ===
    "block-posts-grid"
);

export interface ApiParamPostByFilter {
  authors: string[];
  categories: string[];
  tags: string[];
  orderBy: string;
  order: string;
  per_page: number;
}
export interface ApiParamPostSpecific {
  slug: string[];
}

interface GutenbergAttr__BlockMagazine_BySpecific {
  blockName: "nc-block-magazine";
  endpoint: string;
  params: ApiParamPostSpecific;
  option: "by_post_specific";
  settings: {
    sectionName: string;
    heading: string;
    subHeading: string;
    hasBackground: boolean;
  };
}

interface GutenbergAttr__BlockMagazine_ByFilter {
  blockName: "nc-block-magazine";
  endpoint: string;
  params: ApiParamPostByFilter;
  option: "by_filter";
  settings: {
    sectionName: string;
    heading: string;
    subHeading: string;
    hasBackground: boolean;
    showFilterTab: boolean;
    viewMoreHref: string;
    categoriesFilter: {
      count: number;
      id: number;
      link: string;
      name: string;
      slug: string;
    }[];
  };
}

// =========================_BlockPostsSlider============================================
interface GutenbergAttr__BlockPostsSlider_BySpecific {
  blockName: "nc-block-posts-slider";
  endpoint: string;
  params: ApiParamPostSpecific;
  option: "by_post_specific";
  settings: {
    itemPerView: number;
    postCardName: string;
    blockLayoutType: "type-1" | "type-2";
    heading: string;
    subHeading: string;
    hasBackground: boolean;
  };
}

interface GutenbergAttr__BlockPostsSlider_ByFilter {
  blockName: "nc-block-posts-slider";
  endpoint: string;
  params: ApiParamPostByFilter;
  option: "by_filter";
  settings: {
    itemPerView: number;
    postCardName: string;
    blockLayoutType: "type-1" | "type-2";
    heading: string;
    subHeading: string;
    hasBackground: boolean;
    showFilterTab: boolean;
    viewMoreHref: string;
    categoriesFilter: {
      count: number;
      id: number;
      link: string;
      name: string;
      slug: string;
    }[];
  };
}

// =========================_BlockPostsGrid============================================
interface GutenbergAttr__BlockPostsGrid_BySpecific {
  blockName: "nc-block-posts-grid";
  endpoint: string;
  params: ApiParamPostSpecific;
  option: "by_post_specific";
  settings: {
    gridClass: string;
    postCardName:
      | "card3"
      | "card4"
      | "card7"
      | "card9"
      | "card10"
      | "card10V2"
      | "card11"
      | "card14"
      | "card15Podcast";
    blockLayoutType: "type-1" | "type-2";
    heading: string;
    subHeading: string;
    viewMoreHref: string;
    hasBackground: boolean;
  };
}

interface GutenbergAttr__BlockPostsGrid_ByFilter {
  blockName: "nc-block-posts-grid";
  endpoint: string;
  params: ApiParamPostByFilter;
  option: "by_filter";
  settings: {
    gridClass: string;
    postCardName:
      | "card3"
      | "card4"
      | "card7"
      | "card9"
      | "card10"
      | "card10V2"
      | "card11"
      | "card14"
      | "card15Podcast";
    blockLayoutType: "type-1" | "type-2";
    heading: string;
    subHeading: string;
    hasBackground: boolean;
    showFilterTab: boolean;
    viewMoreHref: string;
    categoriesFilter: {
      count: number;
      id: number;
      link: string;
      name: string;
      slug: string;
    }[];
  };
}

export type NcGutenbergApiAttr_BlockMagazine =
  | GutenbergAttr__BlockMagazine_ByFilter
  | GutenbergAttr__BlockMagazine_BySpecific;

export type NcGutenbergApiAttr_BlockPostsSlider =
  | GutenbergAttr__BlockPostsSlider_BySpecific
  | GutenbergAttr__BlockPostsSlider_ByFilter;

export type NcGutenbergApiAttr_BlockPostsGrid =
  | GutenbergAttr__BlockPostsGrid_BySpecific
  | GutenbergAttr__BlockPostsGrid_ByFilter;

function App() {
  return (
    <>
      {/* ----- RENDER BLOCK MAGAZINE ----- */}
      {blockMagazines.map((domNode, index) => {
        const apiAttrStr = domNode.getAttribute(
          "data-nc-gutenberg-section-api"
        );
        if (!apiAttrStr) return null;
        const apiAttr: NcGutenbergApiAttr_BlockMagazine =
          JSON.parse(apiAttrStr);
        return (
          <FactoryBlockMagazine
            key={index}
            domNode={domNode}
            apiSettings={apiAttr}
          />
        );
      })}

      {/* ----- RENDER BLOCK POSTS SLIDER ----- */}
      {blockPostsSlider.map((domNode, index) => {
        const apiAttrStr = domNode.getAttribute(
          "data-nc-gutenberg-section-api"
        );
        if (!apiAttrStr) return null;
        const apiAttr: NcGutenbergApiAttr_BlockPostsSlider =
          JSON.parse(apiAttrStr);
        return (
          <FactoryBlockPostsSlider
            key={index}
            domNode={domNode}
            apiSettings={apiAttr}
          />
        );
      })}

      {/* ----- RENDER BLOCK POSTS GRID ----- */}
      {blockPostsGrid.map((domNode, index) => {
        const apiAttrStr = domNode.getAttribute(
          "data-nc-gutenberg-section-api"
        );
        if (!apiAttrStr) return null;
        const apiAttr: NcGutenbergApiAttr_BlockPostsGrid =
          JSON.parse(apiAttrStr);
        return (
          <FactoryBlockPostsGrid
            key={index}
            domNode={domNode}
            apiSettings={apiAttr}
          />
        );
      })}

      {/* ---------- */}
      <MediaRunningContainer />
    </>
  );
}

export default App;
