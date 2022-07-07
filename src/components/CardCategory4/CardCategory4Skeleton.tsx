import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Badge from "components/Badge/Badge";
import Skeleton from "react-loading-skeleton";

export interface CardCategory4SkeletonProps {
  className?: string;
  index?: string;
}

const CardCategory4Skeleton: FC<CardCategory4SkeletonProps> = ({
  className = "",
  index,
}) => {
  return (
    <div
      className={`nc-CardCategory4Skeleton flex flex-col ${className}`}
      data-nc-id="CardCategory4Skeleton"
    >
      <div
        className={`flex-shrink-0 relative w-full aspect-w-7 aspect-h-5 h-0 rounded-3xl overflow-hidden group`}
      >
        <NcImage src={"."} className="object-cover w-full h-full rounded-2xl" />
        <div>
          {index && (
            <Badge
              color={"pink"}
              name={index}
              className="absolute top-3 left-3"
            />
          )}
        </div>
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>

      <div className="flex items-center mt-5">
        <div
          className={`flex-shrink-0 w-10 h-10 bg-pink-500 rounded-full`}
        ></div>
        <div className="ml-3 truncate flex-grow">
          <h3
            className={`text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate`}
          >
            <Skeleton width="90%" />
          </h3>
          <span
            className={`block mt-1 text-sm text-neutral-6000 dark:text-neutral-400`}
          >
            <Skeleton width="30%" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardCategory4Skeleton;
