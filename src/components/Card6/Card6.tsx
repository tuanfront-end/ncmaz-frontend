import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import { PostNode } from "data/postCardType";
import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";

export interface Card6Props {
  className?: string;
  post: PostNode;
}

const Card6: FC<Card6Props> = ({ className = "h-full", post }) => {
  const {
    title,
    link,
    featuredImage,
    categories,
    postFormats,
    ncPostMetaData,
  } = post;

  return (
    <div
      className={`nc-Card6 relative flex group flex-row items-center p-0 sm:p-4 mb-2.5 sm:mb-0 [ sm:nc-box-has-hover ] [ sm:nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="Card6"
    >
      <a href={link} className="absolute inset-0 z-0"></a>
      <div className="flex flex-col flex-grow">
        <div className="space-y-1.5 sm:space-y-3 mb-2 sm:mb-4">
          <CategoryBadgeList categories={categories} />
          <h3 className={`block font-semibold text-sm sm:text-base`}>
            <a href={link} className="line-clamp-2" title={title}>
              {title}
            </a>
          </h3>
          <PostCardMeta meta={{ ...post }} />
        </div>
        <div className="flex items-center flex-wrap justify-between mt-auto">
          <PostCardLikeAndComment className="relative" postData={post} />
          <div className="flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ">
            <span
              dangerouslySetInnerHTML={{
                __html: ncPostMetaData.readingTimeShortcode || "",
              }}
            />
            <PostCardDropdownShare
              href={post.link}
              image={post.featuredImage?.node.sourceUrl}
            />
          </div>
        </div>
      </div>

      <a
        href={link}
        className={`block relative flex-shrink-0 w-20 h-20 sm:w-40 sm:h-full ml-5 rounded-2xl overflow-hidden `}
      >
        <NcImage
          containerClassName="absolute inset-0"
          className="object-cover w-full h-full"
          src={featuredImage?.node.sourceUrl || "."}
          alt={title}
        />
        <span className="absolute bottom-1 left-1">
          <PostTypeFeaturedIcon
            wrapSize="h-7 w-7"
            iconSize="h-4 w-4"
            postType={postFormats?.edges[0]?.node.slug}
          />
        </span>
      </a>
    </div>
  );
};

export default Card6;
