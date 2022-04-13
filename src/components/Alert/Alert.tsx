import React from "react";
import ButtonClose from "components/ButtonClose/ButtonClose";
import { InformationCircleIcon } from "@heroicons/react/solid";

export interface AlertProps {
  containerClassName?: string;
  type?: "default" | "warning" | "info" | "success" | "error";
  children?: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  children = "Alert Text",
  containerClassName = "",
  type = "default",
}) => {
  let classes = containerClassName;
  switch (type) {
    case "default":
      classes += " text-neutral-900 bg-neutral-100";
      break;
    case "info":
      classes += " bg-blue-100 text-blue-900";
      break;
    case "success":
      classes += " bg-green-100 text-green-900";
      break;
    case "error":
      classes += " bg-red-100 text-red-900";
      break;
    case "warning":
      classes += " bg-yellow-100 text-yellow-900";
      break;
    default:
      break;
  }

  return (
    <div
      className={`ttnc-alert relative flex items-center px-6 py-4 rounded-lg ${classes}`}
    >
      <InformationCircleIcon className="w-6 h-6 mr-2" />
      {children}
      <ButtonClose className="absolute top-1/2 transform -translate-y-1/2 right-4" />
    </div>
  );
};
