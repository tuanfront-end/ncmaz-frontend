import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card14SkeletonProps {
  className?: string;
  hoverClass?: string;
  ratio?: string;
}

const Card14Skeleton: FC<Card14SkeletonProps> = ({
  className = "h-full",
  ratio = "aspect-w-5 aspect-h-5",
  hoverClass = "",
}) => {
  return (
    <div
      className={`nc-Card14Skeleton relative flex flex-col group rounded-3xl overflow-hidden ${hoverClass} ${className}`}
      data-nc-id="Card14Skeleton"
    >
      <div className={`flex items-start relative w-full ${ratio}`}>
        <NcImage
          containerClassName="absolute inset-0 overflow-hidden"
          className="object-cover w-full h-full rounded-3xl "
          src={"."}
        />
      </div>

      <div className="absolute top-4 inset-x-4 sm:top-5 sm:inset-x-5">
        <Skeleton width="30%" />
      </div>

      <div className="dark absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 flex flex-col flex-grow">
        <h3 className="nc-card-title block text-base font-semibold text-white ">
          <Skeleton width="80%" />
        </h3>

        <div className="p-2 sm:p-2.5 mt-4 sm:mt-5 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full flex items-center text-neutral-50 text-xs sm:text-sm font-medium">
          <div className="relative flex items-center space-x-2">
            <Skeleton width="30%" />
          </div>
          <>
            <span className=" mx-[6px]">·</span>
            <Skeleton width="20%" />
          </>
        </div>
      </div>
    </div>
  );
};

export default Card14Skeleton;
