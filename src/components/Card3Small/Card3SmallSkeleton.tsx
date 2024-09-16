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
        <h3 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
          <Skeleton width="80%" />
        </h3>
      </div>

      <div className={`block w-16 sm:w-20 flex-shrink-0 relative ml-4 group`}>
        <NcImage
          containerClassName=""
          className="object-cover aspect-1 group-hover:scale-110 transform transition-transform duration-300 rounded-lg"
          src={"."}
        />
      </div>
    </div>
  );
};

export default Card3SmallSkeleton;
