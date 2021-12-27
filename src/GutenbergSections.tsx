import ErrorBoundary from "ErrorBoundary";
import React, { Suspense } from "react";

import FactoryBlockMagazine from "containers/FactorySections/FactoryBlockMagazine";

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

const GutenbergSections = () => {
  // DECLARE INIT NUMBER SECTION
  let sectionIndex = 0;
  return (
    <>
      {Array.from(gutenbergDomNodes).map((domNode, index) => {
        const apiAttrStr = domNode.getAttribute(
          "data-nc-gutenberg-section-api"
        );
        if (!apiAttrStr) return null;
        const apiAttr: any = JSON.parse(apiAttrStr);

        const attrSectionType =
          domNode.getAttribute("data-nc-gutenberg-section-type") || "";

        // ===========================================
        if (attrSectionType === "block-magazine") {
          sectionIndex += 1;
          return (
            <ErrorBoundary key={index}>
              <FactoryBlockMagazine
                sectionIndex={sectionIndex}
                domNode={domNode}
                apiSettings={apiAttr}
              />
            </ErrorBoundary>
          );
        }
        // ===========================================
        if (attrSectionType === "block-posts-slider") {
          sectionIndex += 1;
          return (
            <ErrorBoundary key={index}>
              <Suspense key={index} fallback={<div />}>
                <FactoryBlockPostsSliderLazy
                  sectionIndex={sectionIndex}
                  key={index}
                  domNode={domNode}
                  apiSettings={apiAttr}
                />
              </Suspense>
            </ErrorBoundary>
          );
        }
        // ===========================================
        if (attrSectionType === "block-posts-grid") {
          sectionIndex += 1;
          return (
            <ErrorBoundary key={index}>
              <Suspense key={index} fallback={<div />}>
                <FactoryBlockPostsGridLazy
                  sectionIndex={sectionIndex}
                  key={index}
                  domNode={domNode}
                  apiSettings={apiAttr}
                />
              </Suspense>
            </ErrorBoundary>
          );
        }
        // ===========================================
        if (attrSectionType === "block-terms-slider") {
          sectionIndex += 1;
          return (
            <ErrorBoundary key={index}>
              <Suspense key={index} fallback={<div />}>
                <FactoryBlockTermsSliderLazy
                  sectionIndex={sectionIndex}
                  key={index}
                  domNode={domNode}
                  apiSettings={apiAttr}
                />
              </Suspense>
            </ErrorBoundary>
          );
        }
        // ===========================================
        if (attrSectionType === "block-terms-grid") {
          sectionIndex += 1;
          return (
            <ErrorBoundary key={index}>
              <Suspense key={index} fallback={<div />}>
                <FactoryBlockTermsGridLazy
                  sectionIndex={sectionIndex}
                  key={index}
                  domNode={domNode}
                  apiSettings={apiAttr}
                />
              </Suspense>
            </ErrorBoundary>
          );
        }
        // ===========================================
        if (attrSectionType === "block-users-slider") {
          sectionIndex += 1;
          return (
            <ErrorBoundary key={index}>
              <Suspense key={index} fallback={<div />}>
                <FactoryBlockUsersSliderLazy
                  sectionIndex={sectionIndex}
                  key={index}
                  domNode={domNode}
                  apiSettings={apiAttr}
                />
              </Suspense>
            </ErrorBoundary>
          );
        }
        // ===========================================
        if (attrSectionType === "block-users-grid") {
          sectionIndex += 1;
          return (
            <ErrorBoundary key={index}>
              <Suspense key={index} fallback={<div />}>
                <FactoryBlockUsersGridLazy
                  sectionIndex={sectionIndex}
                  key={index}
                  domNode={domNode}
                  apiSettings={apiAttr}
                />
              </Suspense>
            </ErrorBoundary>
          );
        }
        // ===========================================
        if (attrSectionType === "block-videos") {
          return (
            <ErrorBoundary key={index}>
              <Suspense key={index} fallback={<div />}>
                <FactoryBlockVideosLazy
                  key={index}
                  domNode={domNode}
                  apiSettings={apiAttr}
                />
              </Suspense>
            </ErrorBoundary>
          );
        }
        // ===========================================
        if (attrSectionType === "block-widget-posts") {
          sectionIndex += 1;
          return (
            <ErrorBoundary key={index}>
              <Suspense key={index} fallback={<div />}>
                <FactoryBlockWidgetPostsLazy
                  sectionIndex={sectionIndex}
                  key={index}
                  domNode={domNode}
                  apiSettings={apiAttr}
                />
              </Suspense>
            </ErrorBoundary>
          );
        }
        // ===========================================
        if (attrSectionType === "block-widget-users") {
          sectionIndex += 1;
          return (
            <ErrorBoundary key={index}>
              <Suspense key={index} fallback={<div />}>
                <FactoryBlockWidgetUsersLazy
                  sectionIndex={sectionIndex}
                  key={index}
                  domNode={domNode}
                  apiSettings={apiAttr}
                />
              </Suspense>
            </ErrorBoundary>
          );
        }
        // ===========================================
        if (attrSectionType === "block-widget-terms") {
          sectionIndex += 1;
          return (
            <ErrorBoundary key={index}>
              <Suspense key={index} fallback={<div />}>
                <FactoryBlockWidgetTermsLazy
                  sectionIndex={sectionIndex}
                  key={index}
                  domNode={domNode}
                  apiSettings={apiAttr}
                />
              </Suspense>
            </ErrorBoundary>
          );
        }
        return null;
      })}
    </>
  );
};

export default GutenbergSections;
