import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import SocialsShare from "components/SocialsShare/SocialsShare";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import { PostNode } from "data/postCardType";
import { NC_IMAGE_SIZES } from "utils/getImageSizesBySizeName";

export interface Card12Props {
  className?: string;
  post: PostNode;
  imageSizes?: NC_IMAGE_SIZES;
}

const Card12: FC<Card12Props> = ({
  className = "h-full",
  post,
  imageSizes,
}) => {
  const { title, link, featuredImage, excerpt, postFormats } = post;

  return (
    <div
      className={`nc-Card12 group relative flex flex-col ${className}`}
      data-nc-id="Card12"
    >
      <a
        href={link}
        className="block flex-shrink-0 relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden z-0"
      >
        <NcImage
          containerClassName="absolute inset-0"
          src={featuredImage?.node.sourceUrl || "."}
          srcSet={featuredImage?.node.srcSet}
          imageSizes={imageSizes || "MEDIUM_LARGE"}
          alt={title}
        />
        <span>
          <PostTypeFeaturedIcon
            className="absolute bottom-2 left-2"
            postType={postFormats?.edges[0]?.node.slug}
            wrapSize="w-8 h-8"
            iconSize="w-4 h-4"
          />
        </span>
      </a>

      <SocialsShare
        href={link}
        className="absolute hidden md:grid gap-0.5 right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300"
      />

      <div className="mt-4 sm:mt-8 max-w-xl flex flex-col">
        <h3
          className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-base sm:text-lg lg:text-2xl`}
        >
          <a
            href={link}
            className="line-clamp-2"
            title={title}
            dangerouslySetInnerHTML={{ __html: title || "" }}
          ></a>
        </h3>
        {excerpt && (
          <span className="hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400">
            <span
              className="line-clamp-2"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
          </span>
        )}
        <PostCardMeta className="mt-2 sm:mt-5" meta={post} />
      </div>
    </div>
  );
};

export default Card12;
