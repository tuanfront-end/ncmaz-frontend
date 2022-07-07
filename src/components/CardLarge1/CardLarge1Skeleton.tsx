import NcImage from "components/NcImage/NcImage";
import NextPrev from "components/NextPrev/NextPrev";
import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";

export interface CardLarge1SkeletonProps {
  className?: string;
}

const CardLarge1Skeleton: FC<CardLarge1SkeletonProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-CardLarge1Skeleton relative flex flex-col-reverse md:flex-row justify-end ${className}`}
    >
      <div className="md:absolute z-10 md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 w-full -mt-8 md:mt-0 px-3 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5">
        <div>
          <div className="p-4 sm:p-8 xl:py-14 md:px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 --  nc-dark-box-bg">
            <Skeleton width="20%" />

            <h2 className="nc-card-title text-xl sm:text-2xl font-semibold ">
              <Skeleton width="80%" />
            </h2>
            <div>
              <span className="opacity-0">22</span>
            </div>

            <div className=" mt-auto">
              <Skeleton width="100%" />
            </div>
          </div>
        </div>
        <div className="p-4 sm:pt-8 sm:px-10">
          <NextPrev btnClassName="w-11 h-11 text-xl" />
        </div>
      </div>
      <div className="w-full md:w-4/5 lg:w-2/3">
        <div>
          <NcImage
            containerClassName="aspect-w-16 aspect-h-12 sm:aspect-h-9 md:aspect-h-14 lg:aspect-h-10 2xl:aspect-h-9 relative"
            className="absolute inset-0 object-cover rounded-3xl"
            src={"."}
          />
        </div>
      </div>
    </div>
  );
};

export default CardLarge1Skeleton;
