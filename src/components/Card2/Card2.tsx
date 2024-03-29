import React, { FC, useState } from "react";
import NcImage from "components/NcImage/NcImage";
import SocialsShare from "components/SocialsShare/SocialsShare";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import CardAuthor2 from "components/CardAuthor2/CardAuthor2";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import { PostNode } from "data/postCardType";
import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";
import PostFeaturedMedia from "components/PostFeaturedMedia/PostFeaturedMedia";

export interface Card2Props {
  className?: string;
  post: PostNode;
  size?: "normal" | "large";
}

const Card2: FC<Card2Props> = ({
  className = "h-full",
  size = "normal",
  post,
}) => {
  const {
    featuredImage,
    title,
    link,
    date,
    categories,
    excerpt,
    author,
    postFormats,
    ncPostMetaData,
  } = post;
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`nc-Card2 group relative flex flex-col  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${className}`}
      data-nc-id="Card2"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span className="block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] rounded-xl sm:rounded-b-none overflow-hidden z-0">
        <div className="absolute inset-0">
          <PostFeaturedMedia post={post} isHover={isHover} />
        </div>
      </span>

      <SocialsShare
        href={link}
        className="absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300"
      />
      <a href={link} className="absolute inset-0" />

      <div className="p-4 sm:p-5 flex flex-col">
        <div className="space-y-3">
          <CategoryBadgeList categories={categories} />
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
          {excerpt ? (
            <div
              className="block text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            ></div>
          ) : null}
        </div>

        <CardAuthor2
          className="relative my-4"
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
