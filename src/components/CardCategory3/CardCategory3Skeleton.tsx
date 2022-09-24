import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface CardCategory3SkeletonProps {
  className?: string;
}

const CardCategory3Skeleton: FC<CardCategory3SkeletonProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-CardCategory3Skeleton flex flex-col ${className}`}
      data-nc-id="CardCategory3Skeleton"
    >
      <div
        className={`flex-shrink-0 relative w-full aspect-w-5 aspect-h-4 sm:aspect-h-5 h-0 rounded-2xl overflow-hidden z-0 group`}
      >
        <NcImage src={"."} className="object-cover w-full h-full rounded-2xl" />
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>
      <div className="mt-4 truncate">
        <h4
          className={`text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-semibold truncate`}
        >
          <Skeleton />
        </h4>
        <span
          className={`block mt-2 text-sm text-neutral-6000 dark:text-neutral-400`}
        >
          <Skeleton width="30%" />
        </span>
      </div>
    </div>
  );
};

export default CardCategory3Skeleton;
