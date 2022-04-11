import React, { FC, useState } from "react";
import CardAuthor2 from "components/CardAuthor2/CardAuthor2";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import { PostNode } from "data/postCardType";
import PostCardLikeAction from "components/PostCardLikeAction/PostCardLikeAction";
import PostFeaturedMedia from "components/PostFeaturedMedia/PostFeaturedMedia";

export interface Card4Props {
  className?: string;
  post: PostNode;
}

const Card4: FC<Card4Props> = ({ className = "h-full", post }) => {
  const {
    title,
    link,
    featuredImage,
    categories,
    author,
    date,
    ncPostMetaData,
    postId,
  } = post;
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`nc-Card4 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="Card4"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="block flex-shrink-0 relative w-full aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden z-0">
        <div className="absolute inset-0">
          <PostFeaturedMedia post={post} isHover={isHover} />
        </div>
        <div>
          {ncPostMetaData.favoriteButtonShortcode && (
            <PostCardLikeAction
              postId={postId}
              className="absolute right-2 top-2 z-[1]"
              favoriteButtonShortcode={ncPostMetaData.favoriteButtonShortcode}
            />
          )}
        </div>
      </div>

      <a href={link} className="absolute inset-0"></a>

      <div className="p-4 flex flex-col flex-grow">
        <div className="space-y-2.5 mb-4">
          <CategoryBadgeList categories={categories} />
          <h3 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 ">
            <a
              href={link}
              className="line-clamp-2"
              title={title}
              dangerouslySetInnerHTML={{ __html: title || "" }}
            ></a>
          </h3>
        </div>
        <div className="flex items-end justify-between mt-auto">
          <CardAuthor2
            readingTimeShortcode={ncPostMetaData.readingTimeShortcode}
            hoverReadingTime={false}
            date={date}
            author={author}
          />
        </div>
      </div>
    </div>
  );
};

export default Card4;
