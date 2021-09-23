import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card6SkeletonProps {
  className?: string;
}

const Card6Skeleton: FC<Card6SkeletonProps> = ({ className = "h-full" }) => {
  return (
    <div
      className={`nc-Card6Skeleton relative flex group flex-col-reverse sm:flex-row sm:items-center p-4  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="Card6Skeleton"
    >
      <div className="flex flex-col flex-grow">
        <div className="space-y-3 mb-4">
          <Skeleton width="30%" />
          <h2 className={`block font-semibold text-base`}>
            <Skeleton width="80%" />
          </h2>
          <div className="opacity-0">meta</div>
        </div>
        <div className="opacity-0">me</div>
      </div>

      <div
        className={`block relative flex-shrink-0 w-full sm:w-40 h-40 sm:h-full sm:ml-5 rounded-2xl overflow-hidden mb-5 sm:mb-0 `}
      >
        <NcImage
          containerClassName="absolute inset-0"
          className="object-cover w-full h-full"
          src={"."}
        />
      </div>
    </div>
  );
};

export default Card6Skeleton;
