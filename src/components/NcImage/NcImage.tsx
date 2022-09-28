import React, { FC, ImgHTMLAttributes } from "react";
import getImageSizesBySizeName, {
  NC_IMAGE_SIZES,
} from "utils/getImageSizesBySizeName";
import PlaceIcon from "./PlaceIcon";

export interface NcImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  imageSizes?: NC_IMAGE_SIZES;
}

const NcImage: FC<NcImageProps> = ({
  containerClassName = "",
  alt = "nc-imgs",
  className = "object-cover w-full h-full",
  loading = "lazy",
  src,
  sizes,
  imageSizes = window.innerWidth < 475 ? "MEDIUM" : "MEDIUM_LARGE",
  ...args
}) => {
  let SIZES = getImageSizesBySizeName({ sizeName: imageSizes, sizes });

  const renderLoadingPlaceholder = () => {
    return (
      <div
        className={`${className} flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500`}
      >
        <div className="h-2/4 max-w-[50%]">
          <PlaceIcon />
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-NcImage ${containerClassName} overflow-hidden z-0`}
      data-nc-id="NcImage"
    >
      {!!src && src.includes("http") ? (
        <img
          src={src}
          alt={alt}
          className={className}
          loading={loading}
          {...args}
          sizes={SIZES}
          // srcSet="http://localhost/wordpress-1/wp-content/uploads/2022/09/1650732.jpg 960w, http://localhost/wordpress-1/wp-content/uploads/2022/09/1650732-240x300.jpg 240w, http://localhost/wordpress-1/wp-content/uploads/2022/09/1650732-819x1024.jpg 819w, http://localhost/wordpress-1/wp-content/uploads/2022/09/1650732-768x960.jpg 768w"
        ></img>
      ) : (
        renderLoadingPlaceholder()
      )}
    </div>
  );
};

export default NcImage;
