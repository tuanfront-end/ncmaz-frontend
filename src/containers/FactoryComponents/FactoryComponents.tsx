import NavAccountDropdown from "components/NavAccountDropdown/NavAccountDropdown";
import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";
import SearchDropdown from "components/SearchDropdown/SearchDropdown";
import SocialsShare from "components/SocialsShare/SocialsShare";
import SwitchDarkMode from "components/SwitchDarkMode/SwitchDarkMode";

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
          <PostCardDropdownShare {...componentProps} />,
          dom
        );

      case "SocialsShare":
        return ReactDOM.createPortal(<SocialsShare {...componentProps} />, dom);

      case "SingleRelatedGridPosts":
        return ReactDOM.createPortal(
          <Suspense fallback={<div />}>
            <SingleRelatedGridPostsLazy {...componentProps} />
          </Suspense>,
          dom
        );

      case "SingleMoreFromAuthorGridPosts":
        return ReactDOM.createPortal(
          <Suspense fallback={<div />}>
            <SingleMoreFromAuthorGridPostsLazy {...componentProps} />
          </Suspense>,
          dom
        );

      case "HeaderSingleGallery":
        return ReactDOM.createPortal(
          <Suspense fallback={<div />}>
            <HeaderSingleGalleryLazy {...componentProps} />
          </Suspense>,
          dom
        );

      case "HeaderSingleVideo":
        return ReactDOM.createPortal(
          <Suspense fallback={<div />}>
            <HeaderSingleVideoLazy {...componentProps} />
          </Suspense>,
          dom
        );

      case "HeaderSingleAudio":
        return ReactDOM.createPortal(
          <Suspense fallback={<div />}>
            <HeaderSingleAudioLazy {...componentProps} />
          </Suspense>,
          dom
        );

      case "PageArchive":
        return ReactDOM.createPortal(
          <Suspense fallback={<div />}>
            <PageArchiveLazy {...componentProps} />
          </Suspense>,
          dom
        );

      case "PageArchiveDate":
        return ReactDOM.createPortal(
          <Suspense fallback={<div />}>
            <PageArchiveDateLazy {...componentProps} />
          </Suspense>,
          dom
        );

      case "PageArchiveAuthor":
        return ReactDOM.createPortal(
          <Suspense fallback={<div />}>
            <PageArchiveAuthorLazy {...componentProps} />
          </Suspense>,
          dom
        );

      case "PageSearch":
        return ReactDOM.createPortal(
          <Suspense fallback={<div />}>
            <PageSearchLazy {...componentProps} />
          </Suspense>,
          dom
        );

      case "SwitchDarkMode":
        return ReactDOM.createPortal(
          <SwitchDarkMode {...componentProps} />,
          dom
        );

      case "SearchDropdown":
        return ReactDOM.createPortal(
          <SearchDropdown {...componentProps} />,
          dom
        );

      case "NavAccountDropdown":
        return ReactDOM.createPortal(
          <NavAccountDropdown {...componentProps} />,
          dom
        );

      default:
        return null;
    }
  };

  return <>{Array.from(DOM_NODES).map(renderContent)}</>;
};

export default FactoryComponents;
