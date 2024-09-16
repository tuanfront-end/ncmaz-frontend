import React, { FC } from "react";
import Avatar from "components/Avatar/Avatar";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

const Card1Skeleton = ({ className = "h-full" }) => {
  return (
    <div
      className={`nc-Card1Skeleton relative min-h-[95px] p-2 pr-0 sm:p-4 flex flex-row  [ nc-box-has-hover nc-dark-box-bg-has-hover ] !rounded-md sm:!rounded-2xl ${className}`}
      data-nc-id="Card1Skeleton"
    >
      <div className="flex-shrink-0 pt-1 pr-3">
        <Avatar radius="rounded-full" />
      </div>
      <div className="flex-1">
        <h3 className="nc-card-title block text-sm sm:text-base font-semibold text-neutral-800 dark:text-neutral-100">
          <Skeleton width="80%" />
        </h3>
        <Skeleton width="80%" />
      </div>

      {/* ACTIONS */}
      <div className={`block flex-shrink-0 ml-5 w-24`}>
        <div
          className={`w-full block h-0 aspect-h-16 aspect-w-16 rounded-md sm:rounded-xl overflow-hidden z-0`}
        >
          <NcImage
            containerClassName="absolute inset-0"
            className="object-cover w-full h-full group-hover:scale-105 duration-500 transition-transform"
            src={"."}
          />
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Card1Skeleton;
