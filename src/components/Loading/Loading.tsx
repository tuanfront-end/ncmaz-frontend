import React, { FC } from "react";

interface LoadingProps {
  className?: string;
  childClassName?: string;
}

const Loading: FC<LoadingProps> = ({
  className = "",
  childClassName = "bg-neutral-500 dark:bg-neutral-100",
}) => {
  return (
    <div className={`lds-ellipsis ${className}`}>
      <div className={childClassName}></div>
      <div className={childClassName}></div>
      <div className={childClassName}></div>
      <div className={childClassName}></div>
    </div>
  );
};

export default Loading;
