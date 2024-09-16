import { FC } from "react";
import MenuItemImage from "./MenuItemImage";
import "./MenuItem.scss";
import NCMAZ_TRANSLATE from "contains/translate";

interface Props {
  icon: string;
  title: string;
  action: (args?: any) => void;
  isActive?: () => boolean;
  className?: string;
}

const MenuItem: FC<Props> = ({
  icon,
  action,
  title,
  isActive,
  className = "flex-shrink-0 mr-2",
}) => {
  if (title === NCMAZ_TRANSLATE["Image"]) {
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
