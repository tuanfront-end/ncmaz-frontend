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
      className={`nc-Card3SmallSkeleton relative flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center ${className}`}
      data-nc-id="Card3SmallSkeleton"
    >
      <div className="relative flex-grow space-y-2">
        <Skeleton width="50%" />
        <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
          <Skeleton width="80%" />
        </h2>
      </div>

      <div
        className={`block sm:w-20 flex-shrink-0 relative rounded-lg overflow-hidden mb-5 sm:ml-4 sm:mb-0 group`}
      >
        <div className={`w-full h-0 aspect-w-16 aspect-h-9 sm:aspect-h-16`}>
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
