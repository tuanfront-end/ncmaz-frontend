import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card6SkeletonProps {
  className?: string;
}

const Card6Skeleton: FC<Card6SkeletonProps> = ({ className = "h-full" }) => {
  return (
    <div
      className={`nc-Card6 relative flex group flex-row items-center p-3 sm:p-4 [ nc-box-has-hover nc-dark-box-bg-has-hover ] !rounded-md sm:!rounded-2xl ${className}`}
      data-nc-id="Card6Skeleton"
    >
      <div className="flex flex-col flex-grow">
        <div className="space-y-1.5 sm:space-y-3 mb-2 sm:mb-4">
          <Skeleton width="30%" />
          <h3 className={`block font-semibold text-sm sm:text-base`}>
            <Skeleton width="80%" />
          </h3>
          <div className="opacity-0">meta</div>
        </div>
        <div className="opacity-0">me</div>
      </div>

      <div
        className={`block relative flex-shrink-0 w-20 h-20 sm:w-40 sm:h-full ml-5 rounded-2xl overflow-hidden `}
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
