import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card10V2SkeletonProps {
  className?: string;
}

const Card10V2Skeleton: FC<Card10V2SkeletonProps> = ({
  className = "h-full",
}) => {
  return (
    <div
      className={`nc-Card10V2Skeleton relative flex flex-col ${className}`}
      data-nc-id="Card10V2Skeleton"
    >
      <div className="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-9 overflow-hidden">
        <NcImage src="." />x
      </div>
      <div className="absolute top-3 inset-x-3 flex justify-between items-start space-x-4">
        <Skeleton width="30%" />
      </div>

      <div className="space-y-2.5 mt-4 px-4 flex space-x-3 items-center">
        <div className="flex-shrink-0 w-10 h-10 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
        <div className="flex-grow text-sm">
          <Skeleton width="80%" />
          <span className="text-xs">
            <Skeleton width="50%" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card10V2Skeleton;
