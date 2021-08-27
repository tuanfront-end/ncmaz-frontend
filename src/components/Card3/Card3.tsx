import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import { PostNode } from "data/postCardType";

export interface Card3Props {
  className?: string;
  post: PostNode;
  size?: "normal" | "large";
}

const Card3: FC<Card3Props> = ({
  className = "h-full",
  size = "large",
  post,
}) => {
  const { title, link, featuredImage, excerpt, categories, postFormats } = post;

  const postType = postFormats.edges[0]?.node.name;

  return (
    <div
      className={`nc-Card3 relative flex flex-col-reverse sm:flex-row sm:items-center rounded-[40px] group ${className}`}
      data-nc-id="Card3"
    >
      <a href={link} className="absolute inset-0"></a>
      <div className="flex flex-col flex-grow">
        <div className="space-y-3.5 mb-4">
          <CategoryBadgeList categories={categories} />
          <div>
            <h2
              className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100  ${
                size === "large" ? "text-xl" : "text-base"
              }`}
            >
              <a href={link} className="line-clamp-2" title={title}>
                {title}
              </a>
            </h2>
            {size === "large" && (
              <div className="hidden sm:block sm:mt-2">
                <span className="text-neutral-500 dark:text-neutral-400 text-base line-clamp-1">
                  {excerpt}
                </span>
              </div>
            )}
          </div>

          <PostCardMeta meta={{ ...post }} />
        </div>
        <div className="flex items-center flex-wrap justify-between mt-auto">
          <PostCardLikeAndComment postData={post} />
          <PostCardSaveAction postData={post} readingTime={999} />
        </div>
      </div>

      <div
        className={`block flex-shrink-0 ${
          size === "large"
            ? "sm:w-56 sm:ml-6 rounded-3xl"
            : "sm:w-40 sm:ml-5 rounded-2xl"
        } overflow-hidden mb-5 sm:mb-0`}
      >
        <div className={`w-full h-0 aspect-h-9 sm:aspect-h-16 aspect-w-16 `}>
          <NcImage
            containerClassName="absolute inset-0"
            src={featuredImage?.node.sourceUrl}
            alt={title}
          />
          <span>
            <PostTypeFeaturedIcon
              className="absolute left-2 bottom-2"
              postType={postType}
              wrapSize="w-8 h-8"
              iconSize="w-4 h-4"
            />
          </span>
        </div>
        <a href={link} className="absolute inset-0"></a>
      </div>
    </div>
  );
};

export default Card3;
