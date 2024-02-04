import React, { FC } from "react";
import Badge from "components/Badge/Badge";
import Skeleton from "react-loading-skeleton";

export interface Card5SkeletonProps {
  className?: string;

  index?: number;
}

const Card5Skeleton: FC<Card5SkeletonProps> = ({ className = "", index }) => {
  let INDEX = "";
  if (typeof index === "number") {
    INDEX = index < 10 ? `#0${index}` : `#${index}`;
  }

  return (
    <div
      className={`nc-Card5Skeleton relative p-5 group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="Card5Skeleton"
    >
      <div className="flex flex-col">
        <div>
          {INDEX ? (
            <Badge
              color={
                index == 1
                  ? "blue"
                  : index == 2
                  ? "red"
                  : index == 3
                  ? "yellow"
                  : "gray"
              }
              name={INDEX}
              className="!text-sm px-3.5 py-1.5 "
            />
          ) : null}
        </div>
        <h3 className="block text-base font-semibold text-neutral-800 dark:text-neutral-300 my-4">
          <Skeleton width="80%" />
        </h3>
        <div className="mt-auto">
          <Skeleton width="80%" />
        </div>
      </div>
    </div>
  );
};

export default Card5Skeleton;
