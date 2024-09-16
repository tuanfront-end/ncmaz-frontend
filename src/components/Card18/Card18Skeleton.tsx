import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import Skeleton from "react-loading-skeleton";

export interface Card18SkeletonProps {
  className?: string;
}

const Card18Skeleton: FC<Card18SkeletonProps> = ({ className = "h-full" }) => {
  return (
    <div
      className={`nc-Card18Skeleton group relative flex flex-col ${className}`}
      data-nc-id="Card18Skeleton"
    >
      <div className="w-full block h-0 aspect-h-5 aspect-w-7 rounded-2xl overflow-hidden">
        <NcImage containerClassName="absolute inset-0 " src={"."} />
        <div>
          <PostTypeFeaturedIcon
            className="absolute left-1.5 bottom-1.5"
            wrapSize="w-8 h-8"
            iconSize="w-4 h-4"
          />
        </div>
        <div className="bg-transparent group-hover:bg-gray-900/30 transform transition-colors"></div>
      </div>
      <div className="absolute top-1.5 inset-x-1.5 flex justify-between ">
        <Skeleton width="40%" />
      </div>

      <h3 className={`block mt-3 font-medium text-sm`}>
        <Skeleton width="90%" />
        <Skeleton width="80%" />
      </h3>
      <span className="text-xs mt-1.5">
        <Skeleton width="40%" />
      </span>
    </div>
  );
};

export default Card18Skeleton;
