import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";
import SocialsShare from "components/SocialsShare/SocialsShare";
import SingleComment from "containers/SingleComments/SingleComment";
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

      case "SingleComment":
        return ReactDOM.createPortal(
          <SingleComment {...componentProps} />,
          dom
        );

      default:
        return null;
    }
  };

  return <>{Array.from(DOM_NODES).map(renderContent)}</>;
};

export default FactoryComponents;
