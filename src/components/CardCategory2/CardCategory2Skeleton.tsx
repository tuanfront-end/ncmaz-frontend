import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import { CategoriesNode3 } from "data/postCardType";
import Skeleton from "react-loading-skeleton";

export interface CardCategory2SkeletonProps {
  className?: string;
}

const CardCategory2Skeleton: FC<CardCategory2SkeletonProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-CardCategory2Skeleton relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ]  ${className}`}
      data-nc-id="CardCategory2Skeleton"
    >
      <NcImage
        containerClassName={`flex-shrink-0 w-20 h-20 rounded-full overflow-hidden`}
        src={"."}
      />
      <div className="mt-3 w-full">
        <h4 className={`text-base sm:text-lg font-semibold `}>
          <Skeleton width="80%" />
        </h4>
        <span
          className={`block w-full mt-[2px] text-sm text-neutral-500 dark:text-neutral-400`}
        >
          <Skeleton width="60%" />
        </span>
      </div>
    </div>
  );
};

export default CardCategory2Skeleton;
