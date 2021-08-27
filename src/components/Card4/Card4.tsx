import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import CardAuthor2 from "components/CardAuthor2/CardAuthor2";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import { PostNode } from "data/postCardType";

export interface Card4Props {
  className?: string;
  post: PostNode;
}

const Card4: FC<Card4Props> = ({ className = "h-full", post }) => {
  const { title, link, featuredImage, categories, author, date } = post;

  return (
    <div
      className={`nc-Card4 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="Card4"
    >
      <span className="block flex-shrink-0 relative w-full aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden">
        <NcImage
          containerClassName="absolute inset-0"
          src={featuredImage?.node.sourceUrl}
        />
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
          <CardAuthor2 readingTime={999} date={date} author={author} />
          <PostCardSaveAction postData={post} />
        </div>
      </div>
    </div>
  );
};

export default Card4;
