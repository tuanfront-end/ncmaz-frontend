import React, { FC, useState } from "react";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostFeaturedMedia from "components/PostFeaturedMedia/PostFeaturedMedia";
import PostCardMetaV2 from "components/PostCardMeta/PostCardMetaV2";
import { PostNode } from "data/postCardType";
import PostCardLikeAction from "components/PostCardLikeAction/PostCardLikeAction";

export interface Card10V2Props {
  className?: string;
  post: PostNode;
}

const Card10V2: FC<Card10V2Props> = ({ className = "h-full", post }) => {
  const { link, categories, ncPostMetaData, postId } = post;
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`nc-Card10V2 relative flex flex-col ${className}`}
      data-nc-id="Card10V2"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden z-0">
        <div>
          <PostFeaturedMedia post={post} isHover={isHover} />
        </div>

        <a
          href={link}
          className="absolute block inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity"
        ></a>
      </div>
      <div className="absolute top-3 inset-x-3 flex justify-between items-start space-x-4 z-10">
        <CategoryBadgeList categories={categories} />
        <PostCardLikeAction
          postId={postId}
          favoriteButtonShortcode={ncPostMetaData.favoriteButtonShortcode || ""}
        />
      </div>

      <div className="space-y-2.5 mt-4 px-4">
        <PostCardMetaV2 className="leading-none" meta={post} />
      </div>
    </div>
  );
};

export default Card10V2;
