import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import Skeleton from "react-loading-skeleton";

export interface Card10V3SkeletonProps {
  className?: string;
  galleryType?: 1 | 2;
}

const Card10V3Skeleton: FC<Card10V3SkeletonProps> = ({
  className = "h-full",
  galleryType = 1,
}) => {
  const renderGallery2 = () => {
    return (
      <div className="w-full h-full grid grid-rows-2 gap-2">
        <div className="grid grid-cols-3 gap-2 ">
          <NcImage
            containerClassName="relative col-span-2"
            className="absolute inset-0 object-cover w-full h-full"
            src={"."}
          />
          <NcImage
            containerClassName="relative"
            className="absolute inset-0 object-cover w-full h-full"
            src={"."}
          />
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          <NcImage
            containerClassName="relative"
            className="absolute inset-0 object-cover w-full h-full"
            src={"."}
          />
          <NcImage
            containerClassName="relative col-span-2"
            className="absolute inset-0 object-cover w-full h-full"
            src={"."}
          />
        </div>
      </div>
    );
  };

  const renderGallery = () => {
    return (
      <div className="w-full h-full grid grid-cols-3 gap-2">
        <div className="grid ">
          <NcImage
            containerClassName="relative"
            className="absolute inset-0 object-cover w-full h-full"
            src={"."}
          />
        </div>
        <div className="grid grid-rows-2 gap-2">
          <NcImage
            containerClassName="relative"
            className="absolute inset-0 object-cover w-full h-full"
            src={"."}
          />
          <NcImage
            containerClassName="relative"
            className="absolute inset-0 object-cover w-full h-full"
            src={"."}
          />
        </div>
        <div className="grid ">
          <NcImage
            containerClassName="relative"
            className="absolute inset-0 object-cover w-full h-full"
            src={"."}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-Card10V3Skeleton group relative flex flex-col ${className}`}
      data-nc-id="Card10V3Skeleton"
    >
      <div className="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-16 sm:aspect-h-9 overflow-hidden">
        <div>{galleryType === 1 ? renderGallery() : renderGallery2()}</div>
      </div>
      <div className="absolute top-3 inset-x-3 flex justify-between items-start space-x-4">
        <Skeleton width="30%" />
      </div>

      <div className="space-y-2.5 mt-4 px-4">
        <h3 className="nc-card-title block sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 ">
          <Skeleton width="80%" />
        </h3>
        <Skeleton width="40%" />
        <div className="opacity-0">aa</div>
      </div>
    </div>
  );
};

export default Card10V3Skeleton;
