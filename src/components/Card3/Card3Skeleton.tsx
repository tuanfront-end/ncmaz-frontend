import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card3SkeletonProps {
  className?: string;
  size?: "normal" | "large";
}

const Card3Skeleton: FC<Card3SkeletonProps> = ({
  className = "h-full",
  size = "large",
}) => {
  return (
    <div
      className={`nc-Card3Skeleton relative flex flex-col-reverse sm:flex-row sm:items-center rounded-[40px] group ${className}`}
      data-nc-id="Card3Skeleton"
    >
      <div className="flex flex-col flex-grow">
        <div className="space-y-3.5 mb-4">
          <Skeleton width="30%" />
          <div>
            <h2
              className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100  ${
                size === "large" ? "text-xl" : "text-base"
              }`}
            >
              <Skeleton width="80%" />
            </h2>
            {size === "large" && (
              <div className="hidden sm:block sm:mt-2">
                <span className="text-neutral-500 dark:text-neutral-400 text-base line-clamp-1">
                  <Skeleton width="90%" />
                </span>
              </div>
            )}
          </div>

          <Skeleton width="90%" />
        </div>
        <div className="flex items-center flex-wrap justify-between mt-auto opacity-0">
          zz
        </div>
      </div>

      <div
        className={`block flex-shrink-0 ${
          size === "large"
            ? "sm:w-56 sm:ml-6 rounded-3xl"
            : "sm:w-40 sm:ml-5 rounded-2xl"
        } overflow-hidden mb-5 sm:mb-0`}
      >
        <div
          className={`w-full block h-0 aspect-h-9 sm:aspect-h-16 aspect-w-16 `}
        >
          <NcImage containerClassName="absolute inset-0" src={"."} />
        </div>
      </div>
    </div>
  );
};

export default Card3Skeleton;
