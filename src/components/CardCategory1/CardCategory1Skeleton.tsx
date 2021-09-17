import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface CardCategory1SkeletonProps {
  className?: string;
  size?: "large" | "normal";
}

const CardCategory1Skeleton: FC<CardCategory1SkeletonProps> = ({
  className = "",
  size = "normal",
}) => {
  return (
    <div
      className={`nc-CardCategory1Skeleton flex items-center ${className}`}
      data-nc-id="CardCategory1Skeleton"
    >
      <NcImage
        containerClassName={`flex-shrink-0 ${
          size === "large" ? "w-20 h-20" : "w-12 h-12"
        } rounded-lg mr-4 overflow-hidden`}
        src={"."}
      />
      <div className="flex-grow">
        <h2
          className={`${
            size === "large" ? "text-lg" : "text-base"
          } nc-card-title text-neutral-900 dark:text-neutral-100 font-semibold`}
        >
          <Skeleton width="90%" />
        </h2>
        <span
          className={`${
            size === "large" ? "text-sm" : "text-xs"
          } block mt-[2px] text-neutral-500 dark:text-neutral-400`}
        >
          <Skeleton width="60%" />
        </span>
      </div>
    </div>
  );
};

export default CardCategory1Skeleton;