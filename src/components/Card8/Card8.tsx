import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import SocialsShare from "components/SocialsShare/SocialsShare";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import { PostNode } from "data/postCardType";
import { NC_IMAGE_SIZES } from "utils/getImageSizesBySizeName";

export interface Card8Props {
  className?: string;
  ratio?: string;
  post: PostNode;
  hasExcerpt?: boolean;
  imageSizes?: NC_IMAGE_SIZES;
}

const Card8: FC<Card8Props> = ({
  className = "h-full",
  post,
  ratio = "pt-[75%] sm:pt-[55%] ",
  hasExcerpt = true,
  imageSizes,
}) => {
  const { title, link, featuredImage, excerpt, categories, postFormats } = post;

  return (
    <div
      className={`nc-Card8 group relative [ nc-box-has-hover nc-dark-box-bg-has-hover ] overflow-hidden z-0 ${className}`}
      data-nc-id="Card8"
    >
      <SocialsShare
        href={link}
        className="absolute hidden md:grid gap-0.5 right-4 top-4 opacity-0 z-10 group-hover:opacity-100 transition-opacity duration-300"
      />
      <a
        href={link}
        className={`block w-full h-0 ${ratio} rounded-xl overflow-hidden z-0`}
      >
        <NcImage
          containerClassName="absolute inset-0"
          src={featuredImage?.node.sourceUrl || "."}
          srcSet={featuredImage?.node.srcSet}
          imageSizes={imageSizes}
          alt={title}
        />
        <PostTypeFeaturedIcon
          className="absolute top-4 left-4"
          postType={postFormats?.edges[0]?.node.slug}
          wrapSize="w-8 h-8"
          iconSize="w-4 h-4"
        />
      </a>
      <a
        href={link}
        className="absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-t from-black/50"
      ></a>
      <div className="absolute z-10 inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col">
        <a href={link} className="absolute inset-0" />
        <CategoryBadgeList categories={categories} />
        <h3
          className={`mt-3.5 relative block font-semibold text-white text-lg sm:text-xl nc-card-title`}
        >
          <a
            href={link}
            className="line-clamp-2 "
            title={title}
            dangerouslySetInnerHTML={{ __html: title || "" }}
          ></a>
        </h3>
        {hasExcerpt && (
          <div className="hidden sm:block mt-3">
            <span
              className="text-neutral-200 text-sm line-clamp-2"
              dangerouslySetInnerHTML={{ __html: excerpt || "" }}
            ></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card8;
