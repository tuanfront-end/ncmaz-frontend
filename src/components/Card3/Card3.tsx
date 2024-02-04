import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import { PostNode } from "data/postCardType";
import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";
import checkPostStandHasFeaturedImage from "utils/checkPostStandHasFeaturedImage";

export interface Card3Props {
  className?: string;
  post: PostNode;
}

const Card3: FC<Card3Props> = ({ className = "h-full", post }) => {
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
  const standardHasFeaturedImage = checkPostStandHasFeaturedImage(post);

  return (
    <div
      className={`nc-Card3 relative flex sm:items-center group p-2 sm:p-5 2xl:p-5 [ nc-box-has-hover nc-dark-box-bg-has-hover ] !rounded-lg sm:!rounded-3xl ${className}`}
    >
      <a href={link} className="absolute inset-0"></a>
      <div className="flex flex-col flex-1">
        <div className="space-y-2 sm:space-y-3.5 sm:mb-4">
          <CategoryBadgeList categories={categories} />
          <div>
            <h3 className="nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base lg:text-xl">
              <a
                href={link}
                className="line-clamp-2"
                title={title}
                dangerouslySetInnerHTML={{ __html: title || "" }}
              ></a>
            </h3>
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
        <div className="hidden sm:flex rtl:sm:flex-row-reverse items-center flex-wrap justify-between mt-auto">
          <PostCardLikeAndComment postData={post} />
          <div className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 ">
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

      {standardHasFeaturedImage && (
        <div className="block flex-shrink-0 ms-2.5 sm:ms-5 w-4/12 max-w-[120px] sm:max-w-none sm:w-44 2xl:w-56">
          <a
            href={link}
            className="w-full block h-0 aspect-h-16 aspect-w-16 rounded-lg sm:rounded-2xl overflow-hidden z-0"
          >
            <NcImage
              containerClassName="absolute inset-0"
              className="object-cover w-full h-full group-hover:scale-105 duration-500 transition-transform"
              src={featuredImage?.node.sourceUrl || "."}
              srcSet={featuredImage?.node.srcSet}
              imageSizes="MEDIUM"
              alt={title}
            />
            <span>
              <PostTypeFeaturedIcon
                className="absolute left-1 bottom-1 sm:left-2 sm:bottom-2"
                postType={postType}
                wrapSize="w-6 h-6 sm:w-8 sm:h-8"
                iconSize="w-3 h-3 sm:w-4 sm:h-4"
              />
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Card3;
