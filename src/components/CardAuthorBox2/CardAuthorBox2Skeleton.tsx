import React, { FC } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Avatar from "components/Avatar/Avatar";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface CardAuthorBox2SkeletonProps {
  className?: string;
}

const CardAuthorBox2Skeleton: FC<CardAuthorBox2SkeletonProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-CardAuthorBox2Skeleton flex flex-col overflow-hidden [ nc-box-has-hover nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="CardAuthorBox2Skeleton"
    >
      <div className="relative flex-shrink-0 ">
        <div>
          <NcImage
            containerClassName="flex aspect-w-8 sm:aspect-w-7 aspect-h-5 sm:aspect-h-6 w-full h-0"
            src={"."}
          />
        </div>
        <div className="absolute top-3 inset-x-3 flex">
          <div className=" py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
            <ArrowRightIcon className="w-5 h-5 text-yellow-600 " />
          </div>
        </div>
      </div>

      <div className="-mt-8 m-8 text-center">
        <Avatar
          containerClassName="ring-2 ring-white"
          sizeClass="w-16 h-16 text-2xl"
          radius="rounded-full"
          userName={"d"}
        />
        <div className="mt-3">
          <h4 className={`text-base font-medium`}>
            <Skeleton width="60%" />
          </h4>
          <span
            className={`block mt-1 text-sm text-neutral-500 dark:text-neutral-400`}
          >
            <Skeleton width="90%" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardAuthorBox2Skeleton;
