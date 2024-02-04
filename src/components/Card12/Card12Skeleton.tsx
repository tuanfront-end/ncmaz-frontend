import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card12SkeletonProps {
  className?: string;
}

const Card12Skeleton: FC<Card12SkeletonProps> = ({ className = "h-full" }) => {
  return (
    <div
      className={`nc-Card12Skeleton group relative flex flex-col ${className}`}
      data-nc-id="Card12Skeleton"
    >
      <div className="block flex-shrink-0 relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden">
        <NcImage containerClassName="absolute inset-0" src={"."} />
      </div>

      <div className=" mt-8 pr-10 flex flex-col">
        <h3
          className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl`}
        >
          <Skeleton width="70%" />
        </h3>
        <span className="hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400">
          <Skeleton width="80%" />
        </span>
        <div className="mt-5">
          <Skeleton width="30%" />
        </div>
      </div>
    </div>
  );
};

export default Card12Skeleton;
