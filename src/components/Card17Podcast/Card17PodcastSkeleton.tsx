import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card17PodcastSkeletonProps {
  className?: string;
}

const Card17PodcastSkeleton: FC<Card17PodcastSkeletonProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-Card17PodcastSkeleton relative flex items-center justify-between p-2.5 space-x-5 rounded-full bg-neutral-100 dark:bg-neutral-800 dark:bg-opacity-30 hover:shadow-xl transition-shadow ${className}`}
      data-nc-id="Card17PodcastSkeleton"
    >
      <div className="flex  items-center space-x-4">
        <div className="block flex-shrink-0 w-11 h-11 sm:w-16 sm:h-16 relative rounded-full overflow-hidden shadow-lg">
          <NcImage
            containerClassName="absolute inset-0"
            className="object-cover w-full h-full "
            src={"."}
          />
        </div>
        <div className="flex flex-col flex-grow">
          <h3 className={`block font-semibold text-lg`}>
            <Skeleton />
          </h3>
          <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
            <Skeleton width="40%" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card17PodcastSkeleton;
