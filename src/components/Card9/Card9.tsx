import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import PostFeaturedMedia from "components/PostFeaturedMedia/PostFeaturedMedia";
import { PostNode } from "data/postCardType";
import ncFormatDate from "utils/formatDate";
import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";

export interface Card9Props {
  className?: string;
  ratio?: string;
  post: PostNode;
  hoverClass?: string;
}

const Card9: FC<Card9Props> = ({
  className = "h-full",
  ratio = "aspect-w-6 aspect-h-5 sm:aspect-w-3 sm:aspect-h-4",
  post,
  hoverClass = "",
}) => {
  const { title, link, featuredImage, categories, author, date, postFormats } =
    post;

  const renderMeta = () => {
    return (
      <div className="inline-flex items-center text-xs text-neutral-300">
        <a href={link} className="block relative overflow-hidden">
          <h3 className="block text-base sm:text-lg font-semibold text-white ">
            <span className="line-clamp-2" title={title}>
              {title}
            </span>
          </h3>
          <div className="flex mt-2.5 truncate">
            <span className="block text-neutral-200 hover:text-white font-medium truncate">
              {author?.node.name}
            </span>
            <span className="mx-[6px] font-medium">·</span>
            <span className="font-normal flex-shrink-0">
              {ncFormatDate(date || "")}
            </span>
          </div>
        </a>
      </div>
    );
  };

  return (
    <div
      className={`nc-Card9 relative flex flex-col group rounded-3xl overflow-hidden z-0 ${hoverClass} ${className}`}
      data-nc-id="Card9"
    >
      <div className="absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-30 duration-300">
        <PostCardLikeAndComment className="relative" postData={post} />
        <PostCardDropdownShare
          panelMenusClass="w-52 right-0 top-0 origin-top-right"
          href={post.link}
        />
      </div>
      <div className={`flex items-start relative w-full ${ratio}`}></div>
      {postFormats?.edges[0]?.node.slug === "post-format-audio" ? (
        <div className="absolute inset-0">
          <PostFeaturedMedia post={post} />
        </div>
      ) : (
        <a href={link}>
          <NcImage
            containerClassName="absolute inset-0 rounded-3xl"
            className="object-cover w-full h-full rounded-3xl"
            src={featuredImage?.node.sourceUrl || "."}
          />
          <PostTypeFeaturedIcon
            className="absolute top-3 left-3 group-hover:hidden"
            postType={postFormats?.edges[0]?.node.slug}
            wrapSize="w-7 h-7"
            iconSize="w-4 h-4"
          />
          <span className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </a>
      )}
      <a
        href={link}
        className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"
      ></a>
      <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow">
        <a href={link} className="absolute inset-0"></a>
        <div className="mb-3">
          <CategoryBadgeList categories={categories} />
        </div>
        {renderMeta()}
      </div>
    </div>
  );
};

export default Card9;
