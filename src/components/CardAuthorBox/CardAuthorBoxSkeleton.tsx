import React, { FC } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Avatar from "components/Avatar/Avatar";
import Skeleton from "react-loading-skeleton";

export interface CardAuthorBoxSkeletonProps {
  className?: string;
}

const CardAuthorBoxSkeleton: FC<CardAuthorBoxSkeletonProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-CardAuthorBoxSkeleton flex flex-col items-center justify-center text-center px-3 py-5 sm:px-6 sm:py-7  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="CardAuthorBoxSkeleton"
    >
      <Avatar
        sizeClass="w-20 h-20 text-2xl"
        radius="rounded-full"
        userName={"d"}
      />
      <div className="mt-3">
        <h4 className={`text-base font-medium`}>
          <Skeleton />
        </h4>
        <span
          className={`block mt-1 text-sm text-neutral-500 dark:text-neutral-400`}
        >
          <Skeleton />
        </span>
      </div>
      <div className="py-2 px-4 mt-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
        <ArrowRightIcon className="w-5 h-5 text-yellow-600 " />
      </div>
    </div>
  );
};

export default CardAuthorBoxSkeleton;
