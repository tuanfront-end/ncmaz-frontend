import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card9SkeletonProps {
  className?: string;
  ratio?: string;
  hoverClass?: string;
}

const Card9Skeleton: FC<Card9SkeletonProps> = ({
  className = "h-full",
  ratio = "aspect-w-4 aspect-h-3 sm:aspect-w-5 sm:aspect-h-6",
  hoverClass = "",
}) => {
  return (
    <div
      className={`nc-Card9Skeleton relative flex flex-col group rounded-3xl overflow-hidden ${hoverClass} ${className}`}
      data-nc-id="Card9Skeleton"
    >
      <div className={`flex items-start relative w-full ${ratio}`}></div>
      <div>
        <NcImage
          containerClassName="absolute inset-0 rounded-3xl"
          className="object-cover w-full h-full rounded-3xl"
          src={"."}
        />
      </div>

      <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow">
        <div className="mb-3">
          <Skeleton width="90%" />
          <Skeleton width="50%" />
        </div>
      </div>
    </div>
  );
};

export default Card9Skeleton;
