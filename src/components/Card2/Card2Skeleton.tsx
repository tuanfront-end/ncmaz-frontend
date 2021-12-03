import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import Skeleton from "react-loading-skeleton";

export interface Card2SkeletonProps {
  className?: string;
  size?: "normal" | "large";
}

const Card2Skeleton: FC<Card2SkeletonProps> = ({
  className = "h-full",
  size = "normal",
}) => {
  return (
    <div
      className={`nc-Card2Skeleton group relative flex flex-col  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${className}`}
      data-nc-id="Card2Skeleton"
    >
      <span className="block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] rounded-xl sm:rounded-b-none overflow-hidden">
        <NcImage containerClassName="absolute inset-0" src={"."} />
        <PostTypeFeaturedIcon
          className="absolute bottom-2 left-2"
          wrapSize="w-8 h-8"
          iconSize="w-4 h-4"
        />
      </span>

      <div className="p-4 sm:p-5 flex flex-col">
        <div className="space-y-3">
          <Skeleton width="30%" />
          <h3
            className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors ${
              size === "large" ? "text-lg sm:text-2xl" : "text-base"
            }`}
          >
            <Skeleton width="90%" />
          </h3>
          <div className="block text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2">
            <Skeleton width="70%" />
          </div>
        </div>

        <div className="opacity-0">xx</div>
        <div className="opacity-0">xx</div>
      </div>
    </div>
  );
};

export default Card2Skeleton;
