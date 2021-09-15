import React, { FC } from "react";

export interface LoadingVideoProps {
  className?: string;
}

const LoadingVideo: FC<LoadingVideoProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-LoadingVideo lds-ellipsis lds-ellipsis-video ${className}`}
      data-nc-id="LoadingVideo"
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingVideo;
