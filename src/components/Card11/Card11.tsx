import React, { FC, useState } from "react";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import PostFeaturedMedia from "components/PostFeaturedMedia/PostFeaturedMedia";
import { PostNode } from "data/postCardType";
import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";

export interface Card11Props {
  className?: string;
  post: PostNode;
  ratio?: string;
  hiddenAuthor?: boolean;
  onClickLike?: (id: number) => void;
}

const Card11: FC<Card11Props> = ({
  className = "h-full",
  post,
  hiddenAuthor = false,
  ratio = "aspect-w-4 aspect-h-3",
  onClickLike,
}) => {
  const { title, link, categories, date } = post;

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
          <PostFeaturedMedia post={post} isHover={isHover} />
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
          {!!title ? (
            <a
              href={link}
              className="line-clamp-2"
              dangerouslySetInnerHTML={{ __html: title }}
              title={title}
            ></a>
          ) : null}
        </h2>
        <div className="flex items-end justify-between mt-auto">
          <PostCardLikeAndComment
            onClickLike={onClickLike}
            className="relative"
            postData={post}
          />
          <PostCardDropdownShare href={post.link} />
        </div>
      </div>
    </div>
  );
};

export default Card11;
