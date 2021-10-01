import React, { Suspense } from "react";
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

const FactoryBlockMagazineLazy = React.lazy(
  () => import("containers/FactorySections/FactoryBlockMagazine")
);
const FactoryBlockPostsGridLazy = React.lazy(
  () => import("containers/FactorySections/FactoryBlockPostsGrid")
);
const FactoryBlockPostsSliderLazy = React.lazy(
  () => import("containers/FactorySections/FactoryBlockPostsSlider")
);
const FactoryBlockTermsSliderLazy = React.lazy(
  () => import("containers/FactorySections/FactoryBlockTermsSlider")
);
const FactoryBlockTermsGridLazy = React.lazy(
  () => import("containers/FactorySections/FactoryBlockTermsGrid")
);
const FactoryBlockUsersSliderLazy = React.lazy(
  () => import("containers/FactorySections/FactoryBlockUsersSlider")
);
const FactoryBlockUsersGridLazy = React.lazy(
  () => import("containers/FactorySections/FactoryBlockUsersGrid")
);
const FactoryBlockVideosLazy = React.lazy(
  () => import("containers/FactorySections/FactoryBlockVideos")
);
const FactoryBlockWidgetPostsLazy = React.lazy(
  () => import("containers/FactorySections/FactoryBlockWidgetPosts")
);
const FactoryBlockWidgetUsersLazy = React.lazy(
  () => import("containers/FactorySections/FactoryBlockWidgetUsers")
);
const FactoryBlockWidgetTermsLazy = React.lazy(
  () => import("containers/FactorySections/FactoryBlockWidgetTerms")
);
//
// DOMS
const gutenbergDomNodes = document.querySelectorAll(
  "[data-nc-gutenberg-section=true]"
);

let blockMagazines: Element[] = [];
let blockPostsSlider: Element[] = [];
let blockPostsGrid: Element[] = [];
let blockTermsSlider: Element[] = [];
let blockTermsGrid: Element[] = [];
let blockUserSlider: Element[] = [];
let blockUserGrid: Element[] = [];
let blockVideos: Element[] = [];
let blockWidgetPosts: Element[] = [];
let blockWidgetUsers: Element[] = [];
let blockWidgetTerms: Element[] = [];

Array.from(gutenbergDomNodes).map((item) => {
  const attrSectionType =
    item.getAttribute("data-nc-gutenberg-section-type") || "";

  switch (attrSectionType) {
    case "block-magazine":
      blockMagazines = [...blockMagazines, item];
      break;
    case "block-posts-slider":
      blockPostsSlider = [...blockPostsSlider, item];
      break;
    case "block-posts-grid":
      blockPostsGrid = [...blockPostsGrid, item];
      break;
    case "block-terms-slider":
      blockTermsSlider = [...blockTermsSlider, item];
      break;
    case "block-terms-grid":
      blockTermsGrid = [...blockTermsGrid, item];
      break;
    case "block-users-slider":
      blockUserSlider = [...blockUserSlider, item];
      break;
    case "block-users-grid":
      blockUserGrid = [...blockUserGrid, item];
      break;
    case "block-videos":
      blockVideos = [...blockVideos, item];
      break;
    case "block-widget-posts":
      blockWidgetPosts = [...blockWidgetPosts, item];
      break;
    case "block-widget-users":
      blockWidgetUsers = [...blockWidgetUsers, item];
      break;
    case "block-widget-terms":
      blockWidgetTerms = [...blockWidgetTerms, item];
      break;
    default:
      break;
  }
});

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
          <Suspense key={index} fallback={<div />}>
            <FactoryBlockMagazineLazy
              key={index}
              domNode={domNode}
              apiSettings={apiAttr}
            />
          </Suspense>
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
          <Suspense key={index} fallback={<div />}>
            <FactoryBlockPostsSliderLazy
              key={index}
              domNode={domNode}
              apiSettings={apiAttr}
            />
          </Suspense>
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
          <Suspense key={index} fallback={<div />}>
            <FactoryBlockPostsGridLazy
              key={index}
              domNode={domNode}
              apiSettings={apiAttr}
            />
          </Suspense>
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
          <Suspense key={index} fallback={<div />}>
            <FactoryBlockTermsSliderLazy
              key={index}
              domNode={domNode}
              apiSettings={apiAttr}
            />
          </Suspense>
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
          <Suspense key={index} fallback={<div />}>
            <FactoryBlockTermsGridLazy
              key={index}
              domNode={domNode}
              apiSettings={apiAttr}
            />
          </Suspense>
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
          <Suspense key={index} fallback={<div />}>
            <FactoryBlockUsersSliderLazy
              key={index}
              domNode={domNode}
              apiSettings={apiAttr}
            />
          </Suspense>
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
          <Suspense key={index} fallback={<div />}>
            <FactoryBlockUsersGridLazy
              key={index}
              domNode={domNode}
              apiSettings={apiAttr}
            />
          </Suspense>
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
          <Suspense key={index} fallback={<div />}>
            <FactoryBlockVideosLazy
              key={index}
              domNode={domNode}
              apiSettings={apiAttr}
            />
          </Suspense>
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
          <Suspense key={index} fallback={<div />}>
            <FactoryBlockWidgetPostsLazy
              key={index}
              domNode={domNode}
              apiSettings={apiAttr}
            />
          </Suspense>
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
          <Suspense key={index} fallback={<div />}>
            <FactoryBlockWidgetUsersLazy
              key={index}
              domNode={domNode}
              apiSettings={apiAttr}
            />
          </Suspense>
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
          <Suspense key={index} fallback={<div />}>
            <FactoryBlockWidgetTermsLazy
              key={index}
              domNode={domNode}
              apiSettings={apiAttr}
            />
          </Suspense>
        );
      })}
    </>
  );
};

export default GutenbergSections;
