import React from "react";
import FactoryBlockMagazine from "containers/FactorySections/FactoryBlockMagazine";
import FactoryBlockPostsGrid from "containers/FactorySections/FactoryBlockPostsGrid";
import FactoryBlockPostsSlider from "containers/FactorySections/FactoryBlockPostsSlider";
import FactoryBlockTermsSlider from "containers/FactorySections/FactoryBlockTermsSlider";
import FactoryBlockTermsGrid from "containers/FactorySections/FactoryBlockTermsGrid";
import {
  GutenbergApiAttr_BlockTermGrid,
  GutenbergApiAttr_BlockTermSlider,
  GutenbergAttr__BlockUsersGrid,
  GutenbergAttr__BlockUsersSlider,
  GutenbergApiAttr_BlockMagazine,
  GutenbergApiAttr_BlockPostsGrid,
  GutenbergApiAttr_BlockPostsSlider,
  GutenbergApiAttr_BlockVideos,
  GutenbergApiAttr_BlockWidgetPots,
  GutenbergApiAttr_BlockWidgetUsers,
  GutenbergApiAttr_BlockWidgetTerms,
} from "data/gutenbergAttrType";
import FactoryBlockUsersSlider from "containers/FactorySections/FactoryBlockUsersSlider";
import FactoryBlockUsersGrid from "containers/FactorySections/FactoryBlockUsersGrid";
import FactoryBlockVideos from "containers/FactorySections/FactoryBlockVideos";
import FactoryBlockWidgetPosts from "containers/FactorySections/FactoryBlockWidgetPosts";
import FactoryBlockWidgetUsers from "containers/FactorySections/FactoryBlockWidgetUsers";
import FactoryBlockWidgetTerms from "containers/FactorySections/FactoryBlockWidgetTerms";

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

// =====================TERMS========================================
// block-terms-slider
const blockTermsSlider = Array.from(gutenbergDomNodes).filter(
  (selector) =>
    selector.getAttribute("data-nc-gutenberg-section-type") ===
    "block-terms-slider"
);
// block-terms-grid
const blockTermsGrid = Array.from(gutenbergDomNodes).filter(
  (selector) =>
    selector.getAttribute("data-nc-gutenberg-section-type") ===
    "block-terms-grid"
);

//
// =====================USERS========================================
// block-use slider
const blockUserSlider = Array.from(gutenbergDomNodes).filter(
  (selector) =>
    selector.getAttribute("data-nc-gutenberg-section-type") ===
    "block-users-slider"
);
// block-user grid
const blockUserGrid = Array.from(gutenbergDomNodes).filter(
  (selector) =>
    selector.getAttribute("data-nc-gutenberg-section-type") ===
    "block-users-grid"
);
//

// =====================VIDEOS========================================
// block-use slider
const blockVideos = Array.from(gutenbergDomNodes).filter(
  (selector) =>
    selector.getAttribute("data-nc-gutenberg-section-type") === "block-videos"
);

// =====================WIDGETS========================================
// block-use slider
const blockWidgetPosts = Array.from(gutenbergDomNodes).filter(
  (selector) =>
    selector.getAttribute("data-nc-gutenberg-section-type") ===
    "block-widget-posts"
);
// block-use slider
const blockWidgetUsers = Array.from(gutenbergDomNodes).filter(
  (selector) =>
    selector.getAttribute("data-nc-gutenberg-section-type") ===
    "block-widget-users"
);
// block-use slider
const blockWidgetTerms = Array.from(gutenbergDomNodes).filter(
  (selector) =>
    selector.getAttribute("data-nc-gutenberg-section-type") ===
    "block-widget-terms"
);

const GutenbergSections = () => {
  return (
    <>
      {/* ----- RENDER BLOCK MAGAZINE ----- */}
      {blockMagazines.map((domNode, index) => {
        const apiAttrStr = domNode.getAttribute(
          "data-nc-gutenberg-section-api"
        );
        if (!apiAttrStr) return null;
        const apiAttr: GutenbergApiAttr_BlockMagazine = JSON.parse(apiAttrStr);
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
        const apiAttr: GutenbergApiAttr_BlockPostsSlider =
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
        const apiAttr: GutenbergApiAttr_BlockPostsGrid = JSON.parse(apiAttrStr);
        return (
          <FactoryBlockPostsGrid
            key={index}
            domNode={domNode}
            apiSettings={apiAttr}
          />
        );
      })}

      {/* ----- RENDER BLOCK TERMS SLIDER ----- */}
      {blockTermsSlider.map((domNode, index) => {
        const apiAttrStr = domNode.getAttribute(
          "data-nc-gutenberg-section-api"
        );
        if (!apiAttrStr) return null;
        const apiAttr: GutenbergApiAttr_BlockTermSlider =
          JSON.parse(apiAttrStr);
        return (
          <FactoryBlockTermsSlider
            key={index}
            domNode={domNode}
            apiSettings={apiAttr}
          />
        );
      })}

      {/* ----- RENDER BLOCK TERMS GRID ----- */}
      {blockTermsGrid.map((domNode, index) => {
        const apiAttrStr = domNode.getAttribute(
          "data-nc-gutenberg-section-api"
        );
        if (!apiAttrStr) return null;
        const apiAttr: GutenbergApiAttr_BlockTermGrid = JSON.parse(apiAttrStr);
        return (
          <FactoryBlockTermsGrid
            key={index}
            domNode={domNode}
            apiSettings={apiAttr}
          />
        );
      })}

      {/* ----- RENDER BLOCK USERS SLIDER ----- */}
      {blockUserSlider.map((domNode, index) => {
        const apiAttrStr = domNode.getAttribute(
          "data-nc-gutenberg-section-api"
        );
        if (!apiAttrStr) return null;
        const apiAttr: GutenbergAttr__BlockUsersSlider = JSON.parse(apiAttrStr);
        return (
          <FactoryBlockUsersSlider
            key={index}
            domNode={domNode}
            apiSettings={apiAttr}
          />
        );
      })}

      {/* ----- RENDER BLOCK USERS GRID ----- */}
      {blockUserGrid.map((domNode, index) => {
        const apiAttrStr = domNode.getAttribute(
          "data-nc-gutenberg-section-api"
        );
        if (!apiAttrStr) return null;
        const apiAttr: GutenbergAttr__BlockUsersGrid = JSON.parse(apiAttrStr);
        return (
          <FactoryBlockUsersGrid
            key={index}
            domNode={domNode}
            apiSettings={apiAttr}
          />
        );
      })}

      {/* ----- RENDER BLOCK USERS GRID ----- */}
      {blockVideos.map((domNode, index) => {
        const apiAttrStr = domNode.getAttribute(
          "data-nc-gutenberg-section-api"
        );
        if (!apiAttrStr) return null;
        const apiAttr: GutenbergApiAttr_BlockVideos = JSON.parse(apiAttrStr);
        return (
          <FactoryBlockVideos
            key={index}
            domNode={domNode}
            apiSettings={apiAttr}
          />
        );
      })}

      {/* ----- RENDER BLOCK WIDGET POSTS ----- */}
      {blockWidgetPosts.map((domNode, index) => {
        const apiAttrStr = domNode.getAttribute(
          "data-nc-gutenberg-section-api"
        );
        if (!apiAttrStr) return null;
        const apiAttr: GutenbergApiAttr_BlockWidgetPots =
          JSON.parse(apiAttrStr);
        return (
          <FactoryBlockWidgetPosts
            key={index}
            domNode={domNode}
            apiSettings={apiAttr}
          />
        );
      })}

      {/* ----- RENDER BLOCK WIDGET USERS ----- */}
      {blockWidgetUsers.map((domNode, index) => {
        const apiAttrStr = domNode.getAttribute(
          "data-nc-gutenberg-section-api"
        );
        if (!apiAttrStr) return null;
        const apiAttr: GutenbergApiAttr_BlockWidgetUsers =
          JSON.parse(apiAttrStr);
        return (
          <FactoryBlockWidgetUsers
            key={index}
            domNode={domNode}
            apiSettings={apiAttr}
          />
        );
      })}
      {/* ----- RENDER BLOCK WIDGET USERS ----- */}
      {blockWidgetTerms.map((domNode, index) => {
        const apiAttrStr = domNode.getAttribute(
          "data-nc-gutenberg-section-api"
        );
        if (!apiAttrStr) return null;
        const apiAttr: GutenbergApiAttr_BlockWidgetTerms =
          JSON.parse(apiAttrStr);
        return (
          <FactoryBlockWidgetTerms
            key={index}
            domNode={domNode}
            apiSettings={apiAttr}
          />
        );
      })}
    </>
  );
};

export default GutenbergSections;
