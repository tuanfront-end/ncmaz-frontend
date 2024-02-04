import React, { FC, useState } from "react";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import PostFeaturedMedia from "components/PostFeaturedMedia/PostFeaturedMedia";
import { PostNode } from "data/postCardType";
import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";
import PostMoreActionDropdown from "components/PostMoreActionDropdown";
import checkCurrentUserCanEditPostById from "utils/checkCurrentUserCanEditPostById";
import { useAppSelector } from "app/hooks";
import { selectRecentPostsDeleted } from "app/postsDeleted/postsDeleted";
import { NC_IMAGE_SIZES } from "utils/getImageSizesBySizeName";
import checkPostStandHasFeaturedImage from "utils/checkPostStandHasFeaturedImage";

export interface Card11Props {
  className?: string;
  post: PostNode;
  ratio?: string;
  hiddenAuthor?: boolean;
  onClickLike?: (id: number) => void;
  imageSizes?: NC_IMAGE_SIZES;
}

const Card11: FC<Card11Props> = ({
  className = "h-full",
  post,
  hiddenAuthor = false,
  ratio = "aspect-w-8 aspect-h-5 sm:aspect-w-4 sm:aspect-h-3",
  onClickLike,
  imageSizes,
}) => {
  const { title, link, categories, date, author, featuredImage, postFormats } =
    post;

  const recentPostsDeleted = useAppSelector(selectRecentPostsDeleted);

  const [isHover, setIsHover] = useState(false);

  // POST DATABASE_ID not id from wpgrapql
  if (recentPostsDeleted.includes(post.postId)) {
    return null;
  }

  const standardHasFeaturedImage = checkPostStandHasFeaturedImage(post);

  return (
    <div
      className={`nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="Card11"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <a href={link} className="block absolute inset-0"></a>
      {standardHasFeaturedImage && (
        <div
          className={`block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden z-0 ${ratio}`}
        >
          <div>
            <PostFeaturedMedia
              imageSizes={imageSizes}
              post={post}
              isHover={isHover}
            />
          </div>
        </div>
      )}
      <div
        className={`top-3 inset-x-3 z-10 ${
          standardHasFeaturedImage ? "absolute" : "m-3"
        }`}
      >
        <CategoryBadgeList categories={categories} />
      </div>

      <div className="p-4 h-full flex flex-col flex-grow">
        {!hiddenAuthor ? (
          <PostCardMeta meta={post} />
        ) : (
          <span className="text-xs text-neutral-500">{date}</span>
        )}
        <h3 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3">
          {!!title ? (
            <a
              href={link}
              className="line-clamp-2"
              dangerouslySetInnerHTML={{ __html: title || "" }}
              title={title}
            ></a>
          ) : null}
        </h3>
        <div className="flex rtl:flex-row-reverse items-end justify-between gap-2 mt-auto">
          <PostCardLikeAndComment
            onClickLike={onClickLike}
            className="relative"
            postData={post}
            hiddenCommentOnMobile={false}
          />
          <div className="flex flex-1 rtl:flex-row-reverse justify-end items-center gap-2 ">
            <PostCardDropdownShare
              href={post.link}
              image={post.featuredImage?.node.sourceUrl}
            />
            {checkCurrentUserCanEditPostById(author) && (
              <PostMoreActionDropdown
                postDataBaseId={post.postId}
                href={post.link}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card11;
