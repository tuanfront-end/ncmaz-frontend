import React, { FC, useState } from "react";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostFeaturedMedia from "components/PostFeaturedMedia/PostFeaturedMedia";
import PostCardMetaV2 from "components/PostCardMeta/PostCardMetaV2";
import { PostNode } from "data/postCardType";
import PostCardLikeAction from "components/PostCardLikeAction/PostCardLikeAction";
import { NC_IMAGE_SIZES } from "utils/getImageSizesBySizeName";

export interface Card10V2Props {
  className?: string;
  post: PostNode;
  imageSizes?: NC_IMAGE_SIZES;
}

const Card10V2: FC<Card10V2Props> = ({
  className = "h-full",
  post,
  imageSizes,
}) => {
  const { link, categories, ncPostMetaData, postId } = post;
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`nc-Card10V2 relative flex flex-col ${className}`}
      data-nc-id="Card10V2"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="block group rounded-xl sm:rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-9 overflow-hidden z-0">
        <div>
          <PostFeaturedMedia
            imageSizes={imageSizes}
            post={post}
            isHover={isHover}
          />
        </div>

        <a
          href={link}
          className="absolute block inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity"
        ></a>
      </div>
      <div className="hidden absolute top-3 inset-x-3 sm:flex justify-between items-start space-x-4 z-10">
        <CategoryBadgeList categories={categories} />
        <PostCardLikeAction
          postId={postId}
          favoriteButtonShortcode={ncPostMetaData.favoriteButtonShortcode || ""}
        />
      </div>

      <div className="space-y-2.5 mt-4 sm:px-2.5">
        <PostCardMetaV2 className="leading-none" meta={post} />
      </div>
    </div>
  );
};

export default Card10V2;
