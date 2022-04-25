import React, { FC } from "react";
import MenuItemImage from "./MenuItemImage";
import "./MenuItem.scss";

interface Props {
  icon: string;
  title: string;
  action: (args?: any) => void;
  isActive?: () => boolean;
}

const MenuItem: FC<Props> = ({ icon, action, title, isActive }) => {
  if (title === "dropdowMore") {
    return (
      <button
        className={`ml-auto menu-item${
          isActive && isActive() ? " is-active" : ""
        }`}
        onClick={action}
        title={title}
      >
        <div dangerouslySetInnerHTML={{ __html: icon }}></div>
      </button>
    );
  }

  if (title === "image") {
    return (
      <MenuItemImage action={action}>
        <button
          className={`menu-item${isActive && isActive() ? " is-active" : ""}`}
          onClick={action}
          title={title}
        >
          <div dangerouslySetInnerHTML={{ __html: icon }}></div>
        </button>
      </MenuItemImage>
    );
  }

  return (
    <button
      className={`menu-item${isActive && isActive() ? " is-active" : ""}`}
      onClick={action}
      title={title}
    >
      <div dangerouslySetInnerHTML={{ __html: icon }}></div>
    </button>
  );
};
export default MenuItem;
