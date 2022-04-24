import React, { FC, ReactNode, useEffect, useState } from "react";
import "./MenuItem.scss";
import MenuItemImage from "./MenuItemImage";

interface Props {
  icon: string;
  title: string;
  action: (args?: any) => void;
  isActive?: () => boolean;
}

const MenuItem: FC<Props> = ({ icon, action, title, isActive }) => {
  if (title === "image") {
    return (
      <MenuItemImage
        icon={icon}
        title={title}
        action={action}
        isActive={isActive}
      ></MenuItemImage>
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
