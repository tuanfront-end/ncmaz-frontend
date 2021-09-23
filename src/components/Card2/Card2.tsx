import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import SocialsShare from "components/SocialsShare/SocialsShare";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import CardAuthor2 from "components/CardAuthor2/CardAuthor2";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import { PostNode } from "data/postCardType";
import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";

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

  return (
    <div
      className={`nc-Card2 group relative flex flex-col  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${className}`}
      data-nc-id="Card2"
    >
      <span className="block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] rounded-xl sm:rounded-b-none overflow-hidden">
        <NcImage
          containerClassName="absolute inset-0"
          src={featuredImage?.node.sourceUrl || "."}
          alt={title}
        />
        <PostTypeFeaturedIcon
          className="absolute bottom-2 left-2"
          postType={postFormats?.edges[0]?.node.name}
          wrapSize="w-8 h-8"
          iconSize="w-4 h-4"
        />
      </span>

      <SocialsShare className="absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300" />
      <a href={link} className="absolute inset-0" />

      <div className="p-4 sm:p-5 flex flex-col">
        <div className="space-y-3">
          <CategoryBadgeList categories={categories} />
          <h2
            className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors ${
              size === "large" ? "text-lg sm:text-2xl" : "text-base"
            }`}
          >
            <a href={link} className="line-clamp-2" title={title}>
              {title}
            </a>
          </h2>
          <div
            className="block text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          ></div>
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

          <PostCardDropdownShare />
        </div>
      </div>
    </div>
  );
};

export default Card2;
