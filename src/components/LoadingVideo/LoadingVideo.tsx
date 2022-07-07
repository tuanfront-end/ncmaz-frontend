import React, { FC } from "react";

export interface LoadingVideoProps {
  className?: string;
  childClassName?: string;
}

const LoadingVideo: FC<LoadingVideoProps> = ({
  className = "",
  childClassName = "bg-neutral-100",
}) => {
  return (
    <div
      className={`nc-LoadingVideo lds-ellipsis lds-ellipsis-video ${className}`}
      data-nc-id="LoadingVideo"
    >
      <div className={childClassName}></div>
      <div className={childClassName}></div>
      <div className={childClassName}></div>
      <div className={childClassName}></div>
    </div>
  );
};

export default LoadingVideo;
