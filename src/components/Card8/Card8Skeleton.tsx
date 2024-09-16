import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card8SkeletonProps {
  className?: string;
  ratio?: string;
}

const Card8Skeleton: FC<Card8SkeletonProps> = ({
  className = "h-full",
  ratio = "pt-[75%] sm:pt-[55%] ",
}) => {
  return (
    <div
      className={`nc-Card8Skeleton group relative [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${className}`}
      data-nc-id="Card8Skeleton"
    >
      <div className={`block w-full h-0 ${ratio} rounded-xl overflow-hidden`}>
        <NcImage containerClassName="absolute inset-0" src={"."} />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col">
        <Skeleton width="30%" />
        <h3
          className={`mt-3 relative block font-semibold text-neutral-50 text-lg sm:text-xl`}
        >
          <Skeleton width="90%" />
        </h3>
        <div className="hidden sm:block mt-2">
          <span className="opacity-0">dd</span>
        </div>
      </div>
    </div>
  );
};

export default Card8Skeleton;
