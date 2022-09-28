import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card7SkeletonProps {
  className?: string;
  hoverClass?: string;
  ratio?: string;
}

const Card7Skeleton: FC<Card7SkeletonProps> = ({
  className = "h-full",
  ratio = "aspect-h-5 aspect-w-5 sm:aspect-h-6",
  hoverClass = "",
}) => {
  return (
    <div
      className={`nc-Card7Skeleton relative flex flex-col group rounded-3xl overflow-hidden ${hoverClass} ${className}`}
      data-nc-id="Card7Skeleton"
    >
      <div className={`flex items-start relative w-full ${ratio}`}>
        <NcImage
          containerClassName="absolute inset-0 overflow-hidden"
          className="object-cover w-full h-full rounded-3xl "
          src={"."}
        />

        <span className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </div>

      <div className="absolute bottom-3 inset-x-3 p-4 bg-white dark:bg-neutral-900 flex flex-col flex-grow rounded-3xl group-hover:shadow-2xl transition-shadow">
        <div className="space-y-2.5 mb-3">
          <Skeleton width="30%" />
          <h3 className="block text-base font-semibold text-neutral-900 dark:text-neutral-100 ">
            <Skeleton width="80%" />
          </h3>
        </div>
        <div className="opacity-0">aa</div>
      </div>
    </div>
  );
};

export default Card7Skeleton;
