import HeaderSingleAudio from "components/HeaderSingleAudio/HeaderSingleAudio";
import HeaderSingleGallery from "components/HeaderSingleGallery/HeaderSingleGallery";
import HeaderSingleVideo from "components/HeaderSingleVideo/HeaderSingleVideo";
import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";
import SocialsShare from "components/SocialsShare/SocialsShare";
import SwitchDarkMode from "components/SwitchDarkMode/SwitchDarkMode";
import PageArchive from "containers/PageArchive/PageArchive";
import PageArchiveAuthor from "containers/PageArchive/PageArchiveAuthor";
import PageArchiveDate from "containers/PageArchive/PageArchiveDate";
import PageSearch from "containers/PageArchive/PageSearch";
import SingleMoreFromAuthorGridPosts from "containers/SingleMoreFromAuthorGridPosts/SingleMoreFromAuthorGridPosts";
import SingleRelatedGridPosts from "containers/SingleRelatedGridPosts/SingleRelatedGridPosts";
import React, { FC } from "react";
import ReactDOM from "react-dom";

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
          <SingleRelatedGridPosts {...componentProps} />,
          dom
        );

      case "SingleMoreFromAuthorGridPosts":
        return ReactDOM.createPortal(
          <SingleMoreFromAuthorGridPosts {...componentProps} />,
          dom
        );

      case "HeaderSingleGallery":
        return ReactDOM.createPortal(
          <HeaderSingleGallery {...componentProps} />,
          dom
        );

      case "HeaderSingleVideo":
        return ReactDOM.createPortal(
          <HeaderSingleVideo {...componentProps} />,
          dom
        );

      case "HeaderSingleAudio":
        return ReactDOM.createPortal(
          <HeaderSingleAudio {...componentProps} />,
          dom
        );

      case "PageArchive":
        return ReactDOM.createPortal(<PageArchive {...componentProps} />, dom);

      case "PageArchiveDate":
        return ReactDOM.createPortal(
          <PageArchiveDate {...componentProps} />,
          dom
        );

      case "PageArchiveAuthor":
        return ReactDOM.createPortal(
          <PageArchiveAuthor {...componentProps} />,
          dom
        );

      case "PageSearch":
        return ReactDOM.createPortal(<PageSearch {...componentProps} />, dom);

      case "SwitchDarkMode":
        return ReactDOM.createPortal(
          <SwitchDarkMode {...componentProps} />,
          dom
        );

      default:
        return null;
    }
  };

  return <>{Array.from(DOM_NODES).map(renderContent)}</>;
};

export default FactoryComponents;
