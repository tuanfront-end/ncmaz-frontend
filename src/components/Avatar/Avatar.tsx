import { avatarColors } from "contains/contants";
import React, { FC, ImgHTMLAttributes } from "react";
import getImageSizesBySizeName, {
  NC_IMAGE_SIZES,
} from "utils/getImageSizesBySizeName";

export interface AvatarProps {
  containerClassName?: string;
  sizeClass?: string;
  radius?: string;
  userName?: string;
  imgUrl?: ImgHTMLAttributes<HTMLImageElement>["src"];
  srcSet?: ImgHTMLAttributes<HTMLImageElement>["srcSet"];
  sizes?: ImgHTMLAttributes<HTMLImageElement>["sizes"];
  loading?: ImgHTMLAttributes<HTMLImageElement>["loading"];
  imageSizes?: NC_IMAGE_SIZES;
}

const Avatar: FC<AvatarProps> = ({
  containerClassName = "ring-1 ring-white/80 dark:ring-neutral-900",
  sizeClass = "h-6 w-6 text-base",
  radius = "rounded-md",
  imgUrl,
  userName,
  srcSet,
  sizes = "100px",
  loading = "lazy",
  imageSizes = "IS_SIZES",
}) => {
  let SIZES = getImageSizesBySizeName({ sizeName: imageSizes, sizes });

  const url = imgUrl && !imgUrl.includes("gravatar.com/avatar/") ? imgUrl : "";
  const name = userName || "John Doe";
  const _setBgColor = (name: string) => {
    const backgroundIndex = Math.floor(
      name.charCodeAt(0) % avatarColors.length
    );
    return avatarColors[backgroundIndex];
  };

  return (
    <div
      className={`wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden z-0 text-neutral-100 uppercase font-semibold shadow-inner ${radius} ${sizeClass} ${containerClassName}`}
      style={{ backgroundColor: url ? undefined : _setBgColor(name) }}
    >
      {url && (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={url}
          srcSet={srcSet}
          sizes={SIZES}
          alt={name}
          loading={loading}
        />
      )}
      <span className="wil-avatar__name">{name[0]}</span>
    </div>
  );
};

export default Avatar;
