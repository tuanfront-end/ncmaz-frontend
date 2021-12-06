import NavAccountDropdown from "components/NavAccountDropdown/NavAccountDropdown";
import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";
import SearchDropdown from "components/SearchDropdown/SearchDropdown";
import SocialsShare from "components/SocialsShare/SocialsShare";
import SwitchDarkMode from "components/SwitchDarkMode/SwitchDarkMode";
import ErrorBoundary from "ErrorBoundary";

import React, { FC, Suspense } from "react";
import ReactDOM from "react-dom";

//
const HeaderSingleAudioLazy = React.lazy(
  () => import("components/HeaderSingleAudio/HeaderSingleAudio")
);
const HeaderSingleGalleryLazy = React.lazy(
  () => import("components/HeaderSingleGallery/HeaderSingleGallery")
);
const HeaderSingleVideoLazy = React.lazy(
  () => import("components/HeaderSingleVideo/HeaderSingleVideo")
);
const PageArchiveDateLazy = React.lazy(
  () => import("containers/PageArchive/PageArchiveDate")
);
const PageSearchLazy = React.lazy(
  () => import("containers/PageArchive/PageSearch")
);
const SingleMoreFromAuthorGridPostsLazy = React.lazy(
  () =>
    import(
      "containers/SingleMoreFromAuthorGridPosts/SingleMoreFromAuthorGridPosts"
    )
);
const SingleRelatedGridPostsLazy = React.lazy(
  () => import("containers/SingleRelatedGridPosts/SingleRelatedGridPosts")
);
const PageArchiveAuthorLazy = React.lazy(
  () => import("containers/PageArchive/PageArchiveAuthor")
);
const PageArchiveLazy = React.lazy(
  () => import("containers/PageArchive/PageArchive")
);
//

export interface FactoryComponentsProps {}

const DOM_NODES = document.querySelectorAll("[data-is-react-component] ");

const FactoryComponents: FC<FactoryComponentsProps> = ({}) => {
  //
  if (!DOM_NODES || !DOM_NODES.length) {
    return null;
  }
  //

  const renderContent = (dom: Element, index: number) => {
    const conponentName = dom.getAttribute("data-is-react-component");
    if (!dom || !conponentName) {
      return null;
    }

    let componentProps = dom.getAttribute("data-component-props")
      ? JSON.parse(dom.getAttribute("data-component-props") || "")
      : {};
    if (typeof componentProps !== "object") {
      componentProps = [];
    }

    switch (conponentName) {
      case "PostCardDropdownShare":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <PostCardDropdownShare {...componentProps} />
          </ErrorBoundary>,
          dom
        );

      case "SocialsShare":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <SocialsShare {...componentProps} />
          </ErrorBoundary>,
          dom
        );

      case "SingleRelatedGridPosts":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <Suspense fallback={<div />}>
              <SingleRelatedGridPostsLazy {...componentProps} />
            </Suspense>
          </ErrorBoundary>,
          dom
        );

      case "SingleMoreFromAuthorGridPosts":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <Suspense fallback={<div />}>
              <SingleMoreFromAuthorGridPostsLazy {...componentProps} />
            </Suspense>
          </ErrorBoundary>,
          dom
        );

      case "HeaderSingleGallery":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <Suspense fallback={<div />}>
              <HeaderSingleGalleryLazy {...componentProps} />
            </Suspense>
          </ErrorBoundary>,
          dom
        );

      case "HeaderSingleVideo":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <Suspense fallback={<div />}>
              <HeaderSingleVideoLazy {...componentProps} />
            </Suspense>
          </ErrorBoundary>,
          dom
        );

      case "HeaderSingleAudio":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <Suspense fallback={<div />}>
              <HeaderSingleAudioLazy {...componentProps} />
            </Suspense>
          </ErrorBoundary>,
          dom
        );

      case "PageArchive":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <Suspense fallback={<div />}>
              <PageArchiveLazy {...componentProps} />
            </Suspense>
          </ErrorBoundary>,
          dom
        );

      case "PageArchiveDate":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <Suspense fallback={<div />}>
              <PageArchiveDateLazy {...componentProps} />
            </Suspense>
          </ErrorBoundary>,
          dom
        );

      case "PageArchiveAuthor":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <Suspense fallback={<div />}>
              <PageArchiveAuthorLazy {...componentProps} />
            </Suspense>
          </ErrorBoundary>,
          dom
        );

      case "PageSearch":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <Suspense fallback={<div />}>
              <PageSearchLazy {...componentProps} />
            </Suspense>
          </ErrorBoundary>,
          dom
        );

      case "SwitchDarkMode":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <SwitchDarkMode {...componentProps} />
          </ErrorBoundary>,
          dom
        );

      case "SearchDropdown":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <SearchDropdown {...componentProps} />
          </ErrorBoundary>,
          dom
        );

      case "NavAccountDropdown":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <NavAccountDropdown {...componentProps} />
          </ErrorBoundary>,
          dom
        );

      default:
        return null;
    }
  };

  return <>{Array.from(DOM_NODES).map(renderContent)}</>;
};

export default FactoryComponents;
