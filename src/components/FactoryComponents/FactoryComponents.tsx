import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";
import SocialsShare from "components/SocialsShare/SocialsShare";
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
    let componentProps = JSON.parse(
      dom.getAttribute("data-component-props") || ""
    );
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

      // TAM THOI KHONG DUNG CAI NAY -- XIN CAM ON --
      // case "SingleComment":
      //   return ReactDOM.createPortal(
      //     <SingleComment {...componentProps} />,
      //     dom
      //   );

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

      default:
        return null;
    }
  };

  return <>{Array.from(DOM_NODES).map(renderContent)}</>;
};

export default FactoryComponents;
