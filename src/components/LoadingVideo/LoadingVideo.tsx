import React, { FC } from "react";

export interface LoadingVideoProps {
  className?: string;
  chilClassName?: string;
}

const LoadingVideo: FC<LoadingVideoProps> = ({
  className = "",
  chilClassName = "bg-neutral-100",
}) => {
  return (
    <div
      className={`nc-LoadingVideo lds-ellipsis lds-ellipsis-video ${className}`}
      data-nc-id="LoadingVideo"
    >
      <div className={chilClassName}></div>
      <div className={chilClassName}></div>
      <div className={chilClassName}></div>
      <div className={chilClassName}></div>
    </div>
  );
};

export default LoadingVideo;
