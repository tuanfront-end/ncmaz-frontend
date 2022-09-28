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
  const postType = postFormats?.edges[0]?.node.slug;

  return (
    <div
      className={`nc-Card6 relative flex group flex-row items-center p-3 sm:p-4 [ nc-box-has-hover nc-dark-box-bg-has-hover ] !rounded-md sm:!rounded-2xl ${className}`}
      data-nc-id="Card6"
    >
      <a href={link} className="absolute inset-0 z-0"></a>
      <div className="flex flex-col flex-grow">
        <div className="space-y-2 sm:space-y-3 sm:mb-4">
          <CategoryBadgeList categories={categories} />
          <h3
            className={`block font-semibold text-sm sm:text-base nc-card-title`}
          >
            <a
              href={link}
              className="line-clamp-2 "
              title={title}
              dangerouslySetInnerHTML={{ __html: title || "" }}
            ></a>
          </h3>
          <PostCardMeta meta={{ ...post }} />
        </div>
        <div className="hidden sm:flex items-center flex-wrap justify-between mt-auto">
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

      <div className={`flex-shrink-0 ml-3 w-4/12 sm:w-24 md:w-40`}>
        <a
          href={link}
          className={`w-full block h-0 aspect-h-16 aspect-w-16 rounded-md sm:rounded-xl overflow-hidden z-0`}
        >
          <NcImage
            containerClassName="absolute inset-0"
            className="object-cover w-full h-full group-hover:scale-105 duration-500 transition-transform"
            src={featuredImage?.node.sourceUrl || "."}
            srcSet={featuredImage?.node.srcSet}
            alt={title}
            imageSizes="MEDIUM"
          />
          <span>
            <PostTypeFeaturedIcon
              className="absolute left-1 bottom-1 sm:left-2 sm:bottom-2"
              postType={postType}
              wrapSize="w-6 h-6 sm:w-7 sm:h-7"
              iconSize="w-3 h-3 sm:w-3.5 sm:h-3.5"
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Card6;
