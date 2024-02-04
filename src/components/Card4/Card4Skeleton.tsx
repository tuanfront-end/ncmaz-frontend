import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card4SkeletonProps {
  className?: string;
}

const Card4Skeleton: FC<Card4SkeletonProps> = ({ className = "h-full" }) => {
  return (
    <div
      className={`nc-Card4Skeleton relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="Card4Skeleton"
    >
      <span className="block flex-shrink-0 relative w-full aspect-w-16 aspect-h-10 rounded-t-xl overflow-hidden">
        <NcImage containerClassName="absolute inset-0" src={"."} />
        <div></div>
      </span>

      <div className="p-4 flex flex-col flex-grow">
        <div className="space-y-2.5 mb-4">
          <Skeleton width="30%" />
          <h3 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 ">
            <Skeleton width="80%" />
          </h3>
        </div>
        <div className="opacity-0 mt-auto">aaaa</div>
      </div>
    </div>
  );
};

export default Card4Skeleton;
