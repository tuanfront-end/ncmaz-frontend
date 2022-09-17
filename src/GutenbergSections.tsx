import React, { Suspense } from "react";
import ErrorBoundary from "ErrorBoundary";

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
  const renderSwichBlocks = (domNode: Element, index: number) => {
    const sectionIndex = index;
    const apiAttrStr = domNode.getAttribute("data-nc-gutenberg-section-api");

    if (!apiAttrStr) {
      return null;
    }
    const apiAttr: any = JSON.parse(apiAttrStr);

    const attrSectionType =
      domNode.getAttribute("data-nc-gutenberg-section-type") || "";

    switch (attrSectionType) {
      case "block-magazine":
        return (
          <ErrorBoundary key={index}>
            <FactoryBlockMagazine
              sectionIndex={sectionIndex}
              domNode={domNode}
              apiSettings={apiAttr}
            />
          </ErrorBoundary>
        );

      case "block-posts-slider":
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

      case "block-posts-grid":
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

      case "block-terms-slider":
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

      case "block-terms-grid":
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

      case "block-users-slider":
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

      case "block-users-grid":
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

      case "block-videos":
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

      case "block-widget-posts":
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

      case "block-widget-users":
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

      case "block-widget-terms":
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

      default:
        return null;
    }
  };

  return <>{Array.from(gutenbergDomNodes).map(renderSwichBlocks)}</>;
};

export default GutenbergSections;
