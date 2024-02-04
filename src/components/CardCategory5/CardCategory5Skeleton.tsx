import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Badge from "components/Badge/Badge";
import Skeleton from "react-loading-skeleton";

export interface CardCategory5SkeletonProps {
  className?: string;
}

const CardCategory5Skeleton: FC<CardCategory5SkeletonProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-CardCategory5Skeleton relative block group ${className}`}
      data-nc-id="CardCategory5Skeleton"
    >
      <div
        className={`flex-shrink-0 relative w-full aspect-w-7 aspect-h-5 h-0 rounded-2xl sm:rounded-3xl overflow-hidden group`}
      >
        <NcImage src={"."} className="object-cover w-full h-full rounded-2xl" />
        <span className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></span>
      </div>
      <Badge
        className="absolute top-3 right-3"
        color={"pink"}
        name={
          <div>
            <i className="ml-3 las la-arrow-right"></i>
          </div>
        }
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h4
          className={`text-base font-medium px-4 py-2 sm:px-6 sm:py-3 bg-white text-neutral-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-full border-2 border-white border-opacity-60`}
        >
          <Skeleton width="100px" />
        </h4>
      </div>
    </div>
  );
};

export default CardCategory5Skeleton;
