import FactoryBlockMagazine from "components/FactorySections/FactoryBlockMagazine";
import FactoryBlockPostsGrid from "components/FactorySections/FactoryBlockPostsGrid";
import FactoryBlockPostsSlider from "components/FactorySections/FactoryBlockPostsSlider";
import FactoryBlockTermsSlider from "components/FactorySections/FactoryBlockTermsSlider";
import FactoryBlockTermsGrid from "components/FactorySections/FactoryBlockTermsGrid";
import MediaRunningContainer from "containers/MediaRunningContainer/MediaRunningContainer";
import {
  NcGutenbergApiAttr_BlockMagazine,
  NcGutenbergApiAttr_BlockPostsGrid,
  NcGutenbergApiAttr_BlockPostsSlider,
  NcGutenbergApiAttr_BlockTermGrid,
  NcGutenbergApiAttr_BlockTermSlider,
} from "data/gutenbergAttrType";
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

      {/* ----- RENDER BLOCK TERMS SLIDER ----- */}
      {blockTermsSlider.map((domNode, index) => {
        const apiAttrStr = domNode.getAttribute(
          "data-nc-gutenberg-section-api"
        );
        if (!apiAttrStr) return null;
        const apiAttr: NcGutenbergApiAttr_BlockTermSlider =
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
        const apiAttr: NcGutenbergApiAttr_BlockTermGrid =
          JSON.parse(apiAttrStr);
        return (
          <FactoryBlockTermsGrid
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
