import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import CardAuthor2 from "components/CardAuthor2/CardAuthor2";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import { PostNode } from "data/postCardType";
import PostCardLikeAction from "components/PostCardLikeAction/PostCardLikeAction";

export interface Card4Props {
  className?: string;
  post: PostNode;
  isSkeleton?: boolean;
}

const Card4: FC<Card4Props> = ({ className = "h-full", post, isSkeleton }) => {
  const {
    title,
    link,
    featuredImage,
    categories,
    author,
    date,
    ncPostMetaData,
  } = post;
  return (
    <div
      className={`nc-Card4 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="Card4"
    >
      <span className="block flex-shrink-0 relative w-full aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden">
        <NcImage
          containerClassName="absolute inset-0"
          src={isSkeleton ? "." : featuredImage?.node.sourceUrl || "."}
        />
        <div>
          {ncPostMetaData.favoriteButtonShortcode && (
            <PostCardLikeAction
              className="absolute right-2 top-2 z-[1]"
              favoriteButtonShortcode={ncPostMetaData.favoriteButtonShortcode}
            />
          )}
        </div>
      </span>

      <a href={link} className="absolute inset-0"></a>

      <div className="p-4 flex flex-col flex-grow">
        <div className="space-y-2.5 mb-4">
          <CategoryBadgeList categories={categories} />
          <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 ">
            <a href={link} className="line-clamp-2" title={title}>
              {title}
            </a>
          </h2>
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
