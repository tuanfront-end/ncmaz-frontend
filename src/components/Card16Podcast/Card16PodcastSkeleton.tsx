import React, { FC } from "react";
import musicWave from "images/musicWave.png";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card16PodcastSkeletonProps {
  className?: string;
  ratio?: string;
}

const Card16PodcastSkeleton: FC<Card16PodcastSkeletonProps> = ({
  className = "h-full",
  ratio = "aspect-w-3 xl:aspect-w-4 aspect-h-3",
}) => {
  return (
    <div
      className={`nc-Card16PodcastSkeleton relative flex flex-col ${className}`}
      data-nc-id="Card16PodcastSkeleton"
    >
      <div
        className={`block flex-shrink-0 relative w-full rounded-3xl overflow-hidden ${ratio}`}
      >
        <NcImage src={"."} />
        <span className="bg-neutral-900 bg-opacity-30"></span>
      </div>

      {/* ABSOLUTE */}
      <span className="absolute top-3 inset-x-3">
        <Skeleton width="30%" />
      </span>

      {/* MAIN CONTENT */}
      <div className="w-11/12 transform -mt-32 ">
        <div className="px-5 flex items-center space-x-4">
          <div className="flex-grow ">
            <img src={musicWave} alt="musicWave" />
          </div>
        </div>
        <div className="p-5 mt-5 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl rounded-3xl rounded-tl-none flex flex-col flex-grow ">
          <h3 className="nc-card-title block text-xl font-semibold text-neutral-900 dark:text-neutral-100 ">
            <Skeleton />
          </h3>
          <span className="block text-sm text-neutral-500 dark:text-neutral-400 mt-3 mb-5">
            <Skeleton width="80%" />
          </span>
          <div className="opacity-0">aa</div>
        </div>
      </div>
    </div>
  );
};

export default Card16PodcastSkeleton;
