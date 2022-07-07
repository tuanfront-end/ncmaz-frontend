import React, { FC, useState } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card11SkeletonProps {
  className?: string;
  ratio?: string;
}

const Card11Skeleton: FC<Card11SkeletonProps> = ({
  className = "h-full",
  ratio = "aspect-w-4 aspect-h-3",
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`nc-Card11Skeleton relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
    >
      <div
        className={`block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden ${ratio}`}
      >
        <div>
          <NcImage containerClassName="w-full h-full" src="." />
        </div>
      </div>
      <span className="absolute top-3 inset-x-3">
        <Skeleton width="40%" />
      </span>

      <div className="p-4 h-full flex flex-col flex-grow">
        <Skeleton />

        <h3 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3">
          <Skeleton />
        </h3>
        <div className="flex items-end justify-between mt-auto ">
          <Skeleton width="50%" />
        </div>
      </div>
    </div>
  );
};

export default Card11Skeleton;
