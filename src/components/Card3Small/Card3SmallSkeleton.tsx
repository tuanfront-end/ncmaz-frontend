import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card3SmallSkeletonProps {
  className?: string;
}

const Card3SmallSkeleton: FC<Card3SmallSkeletonProps> = ({
  className = "h-full",
}) => {
  return (
    <div
      className={`nc-Card3SmallSkeleton relative flex justify-between sm:items-center ${className}`}
      data-nc-id="Card3SmallSkeleton"
    >
      <div className="relative  space-y-2 flex-grow overflow-hidden">
        <Skeleton width="50%" />
        <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
          <Skeleton width="80%" />
        </h2>
      </div>

      <div
        className={`block w-20 flex-shrink-0 relative rounded-lg overflow-hidden ml-4 group`}
      >
        <div className={`w-full h-0 aspect-w-16 aspect-h-16`}>
          <NcImage
            containerClassName="absolute inset-0"
            className="nc-will-change-transform object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
            src={"."}
          />
        </div>
      </div>
    </div>
  );
};

export default Card3SmallSkeleton;
