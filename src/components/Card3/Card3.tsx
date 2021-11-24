import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import { PostNode } from "data/postCardType";
import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";

export interface Card3Props {
  className?: string;
  post: PostNode;
}

const Card3: FC<Card3Props> = ({ className = "", post }) => {
  const {
    title,
    link,
    featuredImage,
    excerpt,
    categories,
    postFormats,
    ncPostMetaData,
  } = post;

  const postType = postFormats?.edges[0]?.node.slug;

  return (
    <div
      className={`nc-Card3 relative flex sm:items-center rounded-3xl group sm:p-5 2xl:p-6 [ sm:nc-box-has-hover ] [ sm:nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="Card3"
    >
      <a href={link} className="absolute inset-0"></a>
      <div className="flex flex-col flex-grow overflow-hidden">
        <div className="space-y-2 sm:space-y-3.5 mb-3 sm:mb-4">
          <CategoryBadgeList categories={categories} />
          <div>
            <h2
              className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base lg:text-xl`}
            >
              <a href={link} className="line-clamp-2" title={title}>
                {title}
              </a>
            </h2>
            {excerpt && (
              <div className="hidden sm:block sm:mt-2">
                <span
                  className="text-neutral-500 dark:text-neutral-400 text-base line-clamp-1"
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                />
              </div>
            )}
          </div>

          <PostCardMeta className="w-full" meta={{ ...post }} />
        </div>
        <div className="flex items-center flex-wrap justify-between mt-auto">
          <PostCardLikeAndComment postData={post} />
          <div className="flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ">
            <span
              dangerouslySetInnerHTML={{
                __html: ncPostMetaData.readingTimeShortcode || "",
              }}
            />
            <PostCardDropdownShare href={post.link} />
          </div>
        </div>
      </div>

      <div
        className={`block flex-shrink-0 ml-5 w-20 sm:w-44 2xl:w-56 overflow-hidden`}
      >
        <a
          href={link}
          className={`w-full block h-0 aspect-h-16 aspect-w-16 rounded-md sm:rounded-2xl overflow-hidden`}
        >
          <NcImage
            containerClassName="absolute inset-0"
            src={featuredImage?.node.sourceUrl || "."}
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
        </a>
      </div>
    </div>
  );
};

export default Card3;
