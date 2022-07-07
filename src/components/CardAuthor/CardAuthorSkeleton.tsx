import React, { FC } from "react";
import Avatar from "components/Avatar/Avatar";
import Skeleton from "react-loading-skeleton";

export interface CardAuthorSkeletonProps {
  className?: string;
}

const CardAuthorSkeleton: FC<CardAuthorSkeletonProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-CardAuthorSkeleton flex items-center ${className}`}
      data-nc-id="CardAuthorSkeleton"
    >
      <Avatar
        sizeClass="h-10 w-10 text-base"
        containerClassName="flex-shrink-0 mr-4"
        radius="rounded-full"
        userName={"d"}
      />
      <div className="flex-grow">
        <h4
          className={`text-base text-neutral-900 dark:text-neutral-100 font-semibold`}
        >
          <Skeleton width="70%" />
        </h4>
        <span
          className={`block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400`}
        >
          <Skeleton width="40%" />
        </span>
      </div>
    </div>
  );
};

export default CardAuthorSkeleton;
