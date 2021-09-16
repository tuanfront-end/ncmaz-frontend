import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import CardAuthor2 from "components/CardAuthor2/CardAuthor2";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import { PostNode } from "data/postCardType";
import PostCardLikeAction from "components/PostCardLikeAction/PostCardLikeAction";

export interface Card7Props {
  className?: string;
  post: PostNode;
  hoverClass?: string;
  ratio?: string;
  isSkeleton?: boolean;
}

const Card7: FC<Card7Props> = ({
  className = "h-full",
  ratio = "aspect-w-5 aspect-h-5 sm:aspect-h-7",
  post,
  hoverClass = "",
  isSkeleton,
}) => {
  const {
    title,
    link,
    featuredImage,
    categories,
    author,
    date,
    postFormats,
    ncPostMetaData,
    postId,
  } = post;

  const postType = postFormats.edges[0]?.node.name;
  return (
    <div
      className={`nc-Card7 relative flex flex-col group rounded-3xl overflow-hidden ${hoverClass} ${className}`}
      data-nc-id="Card7"
    >
      {ncPostMetaData.favoriteButtonShortcode && (
        <PostCardLikeAction
          postId={postId}
          className="absolute top-3 right-3 z-10"
          favoriteButtonShortcode={ncPostMetaData.favoriteButtonShortcode}
        />
      )}
      <a href={link} className={`flex items-start relative w-full ${ratio}`}>
        <NcImage
          containerClassName="absolute inset-0 overflow-hidden"
          className="object-cover w-full h-full rounded-3xl "
          src={isSkeleton ? "." : featuredImage?.node.sourceUrl || "."}
        />
        <PostTypeFeaturedIcon
          className="absolute top-3 left-3"
          postType={postType}
          wrapSize="w-7 h-7"
          iconSize="w-4 h-4"
        />
        <span className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </a>

      <div className="absolute bottom-3 inset-x-3 p-4 bg-white dark:bg-neutral-900 flex flex-col flex-grow rounded-3xl group-hover:shadow-2xl transition-shadow">
        <a href={link} className="absolute inset-0"></a>
        <div className="space-y-2.5 mb-3">
          <CategoryBadgeList categories={categories} />
          <h2 className="block text-base font-semibold text-neutral-900 dark:text-neutral-100 ">
            <a href={link} className="line-clamp-2" title={title}>
              {title}
            </a>
          </h2>
        </div>
        <CardAuthor2
          hoverReadingTime={false}
          readingTimeShortcode={ncPostMetaData.readingTimeShortcode}
          date={date}
          author={author}
        />
      </div>
    </div>
  );
};

export default Card7;
