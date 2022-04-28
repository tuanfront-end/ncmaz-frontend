import React, { FC } from "react";
import MenuItemImage from "./MenuItemImage";
import "./MenuItem.scss";
import MenuItemLink from "./MenuItemLink";
import { Editor } from "@tiptap/react";

interface Props {
  icon: string;
  title: string;
  action: (args?: any) => void;
  isActive?: () => boolean;
  className?: string;
  editor: Editor;
}

const MenuItem: FC<Props> = ({
  icon,
  action,
  title,
  isActive,
  className = "flex-shrink-0 mr-2",
  editor,
}) => {
  if (title === "image") {
    return (
      <MenuItemImage action={action}>
        <button
          className={`menu-item ${className} ${
            isActive && isActive() ? " is-active" : ""
          }`}
          // onClick={action}
          title={title}
        >
          <div
            className="menu-item-svg"
            dangerouslySetInnerHTML={{ __html: icon }}
          ></div>
        </button>
      </MenuItemImage>
    );
  }

  if (title === "Link") {
    return (
      <MenuItemLink action={action} editor={editor}>
        <button
          className={`menu-item ${className} ${
            isActive && isActive() ? " is-active" : ""
          }`}
          // onClick={action}
          title={title}
        >
          <div
            className="menu-item-svg"
            dangerouslySetInnerHTML={{ __html: icon }}
          ></div>
        </button>
      </MenuItemLink>
    );
  }

  return (
    <button
      className={`menu-item ${className} ${
        isActive && isActive() ? " is-active" : ""
      }`}
      onClick={action}
      title={title}
    >
      <div
        className="menu-item-svg"
        dangerouslySetInnerHTML={{ __html: icon }}
      ></div>
    </button>
  );
};
export default MenuItem;
