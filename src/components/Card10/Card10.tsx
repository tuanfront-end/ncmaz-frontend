import React, { FC, useState } from "react";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostFeaturedMedia from "components/PostFeaturedMedia/PostFeaturedMedia";
import PostCardMetaV2 from "components/PostCardMeta/PostCardMetaV2";
import { PostNode } from "data/postCardType";
import PostCardLikeAction from "components/PostCardLikeAction/PostCardLikeAction";
import { NC_IMAGE_SIZES } from "utils/getImageSizesBySizeName";

export interface Card10Props {
  className?: string;
  post: PostNode;
  ratio?: string;
  imageSizes?: NC_IMAGE_SIZES;
}

const Card10: FC<Card10Props> = ({
  className = "h-full",
  post,
  ratio = "aspect-w-7 aspect-h-5 sm:aspect-w-1 sm:aspect-h-1",
  imageSizes,
}) => {
  const { link, categories, ncPostMetaData, postId } = post;
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`nc-Card10 relative flex flex-col group ${className}`}
      data-nc-id="Card10"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <a href={link} className="block absolute inset-0"></a>

      <div
        className={`block rounded-2xl sm:rounded-3xl flex-shrink-0 relative w-full ${ratio} overflow-hidden z-0`}
      >
        <div>
          <PostFeaturedMedia
            imageSizes={imageSizes}
            post={post}
            isHover={isHover}
          />
        </div>
        <a
          href={link}
          className="block absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
        ></a>
      </div>

      <div className="hidden absolute top-3 inset-x-3 sm:flex justify-between items-start space-x-4 z-10">
        <CategoryBadgeList categories={categories} />
        <PostCardLikeAction
          postId={postId}
          favoriteButtonShortcode={ncPostMetaData.favoriteButtonShortcode || ""}
        />
      </div>

      <div className="space-y-2.5 mt-2.5 sm:mt-4 relative">
        <PostCardMetaV2 className="leading-none w-full" meta={post} />
      </div>
    </div>
  );
};

export default Card10;
