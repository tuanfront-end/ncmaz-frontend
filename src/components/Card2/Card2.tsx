import React, { FC, useState } from "react";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import CardAuthor2 from "components/CardAuthor2/CardAuthor2";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import { PostNode } from "data/postCardType";
import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";
import PostFeaturedMedia from "components/PostFeaturedMedia/PostFeaturedMedia";
import { NC_IMAGE_SIZES } from "utils/getImageSizesBySizeName";

export interface Card2Props {
  className?: string;
  post: PostNode;
  size?: "normal" | "large";
  imageSizes?: NC_IMAGE_SIZES;
}

const Card2: FC<Card2Props> = ({
  className = "h-full",
  size = "normal",
  post,
  imageSizes,
}) => {
  const { title, link, date, categories, excerpt, author, ncPostMetaData } =
    post;
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`nc-Card2 group relative flex flex-col [ nc-box-has-hover nc-dark-box-bg-has-hover ] overflow-hidden z-0 ${className}`}
      data-nc-id="Card2"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <a href={link} className="absolute inset-0" />

      <div
        className={`block flex-shrink-0 relative w-full h-0 pt-[75%] ${
          size === "large" ? "flex-grow pt-[55%] " : ""
        } rounded-xl sm:rounded-b-none overflow-hidden z-0`}
      >
        <div className="absolute inset-0">
          <PostFeaturedMedia
            post={post}
            isHover={isHover}
            imageSizes={imageSizes}
          />
        </div>
      </div>

      <div
        className={`p-4 flex flex-col ${size === "large" ? " sm:p-5 " : ""}`}
      >
        <div className="sm:space-y-3">
          <CategoryBadgeList
            className="hidden sm:flex"
            categories={categories}
          />
          <h3
            className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors ${
              size === "large" ? "text-lg sm:text-2xl" : "text-base"
            }`}
          >
            <a
              href={link}
              className="line-clamp-2"
              title={title}
              dangerouslySetInnerHTML={{ __html: title || "" }}
            ></a>
          </h3>
          {excerpt && size === "large" ? (
            <div className="hidden sm:block text-neutral-500 dark:text-neutral-400 text-sm ">
              <p
                className="line-clamp-2"
                dangerouslySetInnerHTML={{ __html: excerpt }}
              ></p>
            </div>
          ) : null}
        </div>

        <CardAuthor2
          className="relative my-3 sm:my-4"
          date={date}
          author={author}
          readingTimeShortcode={ncPostMetaData.readingTimeShortcode}
          hoverReadingTime={false}
        />
        <div className="flex items-center justify-between mt-auto">
          <PostCardLikeAndComment className="relative" postData={post} />

          <PostCardDropdownShare
            href={post.link}
            image={post.featuredImage?.node.sourceUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default Card2;
