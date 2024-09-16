import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card3SkeletonProps {
  className?: string;
}

const Card3Skeleton: FC<Card3SkeletonProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-Card3Skeleton relative flex items-center sm:p-5 2xl:p-5 [ nc-box-has-hover nc-dark-box-bg-has-hover ] group ${className}`}
      data-nc-id="Card3Skeleton"
    >
      <div className="flex flex-col flex-grow overflow-hidden">
        <div className="space-y-3.5 mb-4">
          <Skeleton width="30%" />
          <div>
            <h3
              className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 text-xl`}
            >
              <Skeleton width="80%" />
            </h3>
            <div className="hidden sm:block sm:mt-2">
              <span className="text-neutral-500 dark:text-neutral-400 text-base line-clamp-1">
                <Skeleton width="90%" />
              </span>
            </div>
          </div>

          <Skeleton width="90%" />
        </div>
        <div className="flex items-center flex-wrap justify-between mt-auto opacity-0">
          zz
        </div>
      </div>

      <div
        className={`block flex-shrink-0 ml-5 w-20 sm:w-44 2xl:w-56 overflow-hidden`}
      >
        <div
          className={`w-full block h-0 aspect-h-16 aspect-w-16 rounded-md sm:rounded-2xl overflow-hidden`}
        >
          <NcImage containerClassName="absolute inset-0" src={"."} />
        </div>
      </div>
    </div>
  );
};

export default Card3Skeleton;
