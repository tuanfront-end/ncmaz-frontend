import React, { FC, useState } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card10SkeletonProps {
  className?: string;
  ratio?: string;
}

const Card10Skeleton: FC<Card10SkeletonProps> = ({
  className = "h-full",
  ratio = "aspect-w-8 aspect-h-5 sm:aspect-w-4 sm:aspect-h-3",
}) => {
  return (
    <div
      className={`nc-Card10Skeleton relative flex flex-col ${className}`}
      data-nc-id="Card10Skeleton"
    >
      <div
        className={`block  group rounded-3xl flex-shrink-0 relative w-full ${ratio} overflow-hidden z-0`}
      >
        <NcImage src="." />

        <span className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </div>
      <div className="absolute top-3 inset-x-3 flex justify-between items-start space-x-4">
        <Skeleton />
      </div>

      <div className="space-y-2.5 mt-4">
        <Skeleton />
        <Skeleton width="70%" />
      </div>
    </div>
  );
};

export default Card10Skeleton;
