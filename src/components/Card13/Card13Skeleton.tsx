import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card13SkeletonProps {
  className?: string;
}

const Card13Skeleton: FC<Card13SkeletonProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-Card13Skeleton relative flex justify-between ${className}`}
      data-nc-id="Card13Skeleton"
    >
      <div className="flex flex-col py-2 flex-grow">
        <h3 className={`nc-card-title block w-full font-semibold text-base`}>
          <Skeleton width="90%" />
        </h3>
        <span className="hidden sm:block w-full my-3 text-neutral-500 dark:text-neutral-400 ">
          <Skeleton width="80%" />
        </span>
        <div className="mt-auto ">
          <Skeleton width="30%" />
        </div>
      </div>

      <div
        className={`block relative flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5`}
      >
        <NcImage
          containerClassName="absolute inset-0 "
          className="object-cover w-full h-full rounded-xl sm:rounded-3xl"
          src={"."}
        />
      </div>
    </div>
  );
};

export default Card13Skeleton;
