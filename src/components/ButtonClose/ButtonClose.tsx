import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import twFocusClass from "utils/twFocusClass";

export interface ButtonCloseProps {
  className?: string;
  onClick?: () => void;
  iconSize?: string;
  title?: string;
}

const ButtonClose: React.FC<ButtonCloseProps> = ({
  className = "",
  onClick = () => {},
  iconSize = "w-5 h-5",
  title = "Close",
}) => {
  return (
    <button
      className={
        `w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 ${className} ` +
        twFocusClass()
      }
      onClick={onClick}
      title={title}
    >
      <span className="sr-only">Close</span>
      <XMarkIcon className={iconSize} />
    </button>
  );
};

export default ButtonClose;
