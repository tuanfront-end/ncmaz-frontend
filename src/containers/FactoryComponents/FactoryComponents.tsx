import ErrorBoundary from "ErrorBoundary";
import React, { FC, Suspense } from "react";
import ReactDOM from "react-dom";

//
const SwitchDarkModeLazy = React.lazy(
  () => import("components/SwitchDarkMode/SwitchDarkMode")
);
const SocialsShareLazy = React.lazy(
  () => import("components/SocialsShare/SocialsShare")
);
const SearchDropdownLazy = React.lazy(
  () => import("components/SearchDropdown/SearchDropdown")
);
const PostCardDropdownShareLazy = React.lazy(
  () => import("components/PostCardDropdownShare/PostCardDropdownShare")
);
const NcDropDownLazy = React.lazy(
  () => import("components/NcDropDown/NcDropDown")
);
const NavAccountDropdownLazy = React.lazy(
  () => import("components/NavAccountDropdown/NavAccountDropdown")
);
//
const NcmazAccountPageLazy = React.lazy(
  () => import("containers/NcmazAccountPage/NcmazAccountPage")
);
const PostSubmissionEditorLazy = React.lazy(
  () => import("components/PostSubmissionEditor/PostSubmissionEditor")
);

const PostMoreActionDropdownLazy = React.lazy(
  () => import("components/PostMoreActionDropdown")
);
const AlertLazy = React.lazy(() => import("components/Alert/Alert"));
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
      case "NcmazAccountPage":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <Suspense fallback={<div />}>
              <NcmazAccountPageLazy {...componentProps} />
            </Suspense>
          </ErrorBoundary>,
          dom
        );
      case "PostMoreActionDropdown":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <Suspense fallback={<div />}>
              <PostMoreActionDropdownLazy {...componentProps} />
            </Suspense>
          </ErrorBoundary>,
          dom
        );
      case "Alert":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <Suspense fallback={<div />}>
              <AlertLazy {...componentProps} />
            </Suspense>
          </ErrorBoundary>,
          dom
        );
      case "TiptapEditorPostSubmission":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <Suspense fallback={<div />}>
              <PostSubmissionEditorLazy {...componentProps} />
            </Suspense>
          </ErrorBoundary>,
          dom
        );
      case "PostCardDropdownShare":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <Suspense fallback={<div />}>
              <PostCardDropdownShareLazy {...componentProps} />
            </Suspense>
          </ErrorBoundary>,
          dom
        );

      case "NcDropDown":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <Suspense fallback={<div />}>
              <NcDropDownLazy {...componentProps} />
            </Suspense>
          </ErrorBoundary>,
          dom
        );

      case "SocialsShare":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <Suspense fallback={<div />}>
              <SocialsShareLazy {...componentProps} />
            </Suspense>
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
            <Suspense fallback={<div />}>
              <SwitchDarkModeLazy {...componentProps} />
            </Suspense>
          </ErrorBoundary>,
          dom
        );

      case "SearchDropdown":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <Suspense fallback={<div />}>
              <SearchDropdownLazy {...componentProps} />
            </Suspense>
          </ErrorBoundary>,
          dom
        );

      case "NavAccountDropdown":
        return ReactDOM.createPortal(
          <ErrorBoundary key={index}>
            <Suspense fallback={<div />}>
              <NavAccountDropdownLazy {...componentProps} />
            </Suspense>
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
