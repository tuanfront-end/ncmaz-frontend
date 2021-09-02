import React, { FC, useState } from "react";
import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import PostFeaturedMedia from "components/PostFeaturedMedia/PostFeaturedMedia";
import { PostNode } from "data/postCardType";
import NcImage from "components/NcImage/NcImage";
import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";
import PostCardReadingTime from "components/PostCardReadingTime/PostCardReadingTime";

export interface Card11Props {
  className?: string;
  post: PostNode;
  isSkeleton?: boolean;
  ratio?: string;
  hiddenAuthor?: boolean;
}

const Card11: FC<Card11Props> = ({
  className = "h-full",
  post,
  hiddenAuthor = false,
  ratio = "aspect-w-4 aspect-h-3",
  isSkeleton,
}) => {
  const { title, link, categories, date, ncPostMetaData } = post;

  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="Card11"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden ${ratio}`}
      >
        <div>
          {isSkeleton ? (
            <NcImage src="." />
          ) : (
            <PostFeaturedMedia post={post} isHover={isHover} />
          )}
        </div>
      </div>
      <a href={link} className="absolute inset-0"></a>
      <span className="absolute top-3 inset-x-3">
        <CategoryBadgeList categories={categories} />
      </span>

      <div className="p-4 h-full flex flex-col flex-grow">
        {!hiddenAuthor ? (
          <PostCardMeta meta={post} />
        ) : (
          <span className="text-xs text-neutral-500">{date}</span>
        )}
        <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3">
          <a href={link} className="line-clamp-2" title={title}>
            {title}
          </a>
        </h2>
        <div className="flex items-end justify-between mt-auto">
          <PostCardLikeAndComment className="relative" postData={post} />
          <PostCardDropdownShare />
        </div>
      </div>
    </div>
  );
};

export default Card11;
