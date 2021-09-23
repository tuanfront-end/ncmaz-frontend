import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import SocialsShare from "components/SocialsShare/SocialsShare";
import Skeleton from "react-loading-skeleton";

export interface Card12SkeletonProps {
  className?: string;
}

const Card12Skeleton: FC<Card12SkeletonProps> = ({ className = "h-full" }) => {
  return (
    <div
      className={`nc-Card12Skeleton group relative flex flex-col ${className}`}
      data-nc-id="Card12Skeleton"
    >
      <div className="block flex-shrink-0 flex-grow relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden">
        <NcImage containerClassName="absolute inset-0" src={"."} />
      </div>

      <SocialsShare className="absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300" />

      <div className=" mt-8 pr-10 flex flex-col">
        <h2
          className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl`}
        >
          <Skeleton width="70%" />
        </h2>
        <span className="hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400">
          <Skeleton width="80%" />
        </span>
        <div className="mt-5">
          <Skeleton width="30%" />
        </div>
      </div>
    </div>
  );
};

export default Card12Skeleton;
