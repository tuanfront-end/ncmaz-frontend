import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card19SkeletonProps {
  className?: string;
}

const Card19Skeleton: FC<Card19SkeletonProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-Card19Skeleton group relative flex flex-col ${className}`}
      data-nc-id="Card19Skeleton"
    >
      <div className="block flex-shrink-0 relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden">
        <NcImage containerClassName="absolute inset-0" src={"."} />
      </div>

      <div className=" mt-5 pr-2 flex flex-col">
        <h3
          className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-base sm:text-lg`}
        >
          <Skeleton width="70%" />
        </h3>
        <span className="hidden sm:block mt-3 text-neutral-500 dark:text-neutral-400">
          <Skeleton width="80%" />
        </span>
        <div className="mt-3">
          <Skeleton width="30%" />
        </div>
      </div>
    </div>
  );
};

export default Card19Skeleton;
