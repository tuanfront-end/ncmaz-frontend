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
