import React, { FC } from "react";
import { PostNode } from "data/postCardType";
import NcImage from "components/NcImage/NcImage";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import Badge from "components/Badge/Badge";
import { NC_IMAGE_SIZES } from "utils/getImageSizesBySizeName";
import ncFormatDate from "utils/formatDate";

export interface Card18Props {
  className?: string;
  post: PostNode;
  imageSizes?: NC_IMAGE_SIZES;
}

const Card18: FC<Card18Props> = ({
  className = "h-full",
  post,
  imageSizes = "MEDIUM",
}) => {
  const { link, title, featuredImage, postFormats, date } = post;
  const postType = postFormats?.edges[0]?.node.slug;

  return (
    <div
      className={`nc-Card18 group relative flex flex-col ${className}`}
      data-nc-id="Card18"
    >
      <div className="w-full block h-0 aspect-h-5 aspect-w-7 rounded-xl overflow-hidden z-0">
        <NcImage
          containerClassName="absolute inset-0 "
          src={featuredImage?.node.sourceUrl || "."}
          srcSet={featuredImage?.node.srcSet}
          imageSizes={imageSizes}
          alt={title}
        />
        <div>
          <PostTypeFeaturedIcon
            className="absolute left-1.5 bottom-1.5"
            postType={postType}
            wrapSize="w-8 h-8"
            iconSize="w-4 h-4"
          />
        </div>
        <div className="bg-transparent group-hover:bg-gray-900/30 transform transition-colors"></div>
        <div></div>
      </div>

      <div className="px-1 pt-3">
        <h3 className={`block font-semibold text-sm`}>
          <span
            className="line-clamp-2"
            dangerouslySetInnerHTML={{ __html: title || "" }}
          />
        </h3>

        <span className="block mt-2.5 font-normal truncate text-neutral-500 dark:text-neutral-300 text-xs">
          {ncFormatDate(date || "")}
        </span>
      </div>
      <a href={link} className={`absolute inset-0`} />
    </div>
  );
};

export default Card18;
