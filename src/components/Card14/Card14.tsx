import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import Avatar from "components/Avatar/Avatar";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import { PostNode } from "data/postCardType";
import ncFormatDate from "utils/formatDate";

export interface Card14Props {
  className?: string;
  post: PostNode;
  hoverClass?: string;
  ratio?: string;
}

const Card14: FC<Card14Props> = ({
  className = "h-full",
  ratio = "aspect-w-5 aspect-h-5",
  post,
  hoverClass = "",
}) => {
  const { title, link, featuredImage, categories, author, date, postFormats } =
    post;
  const postType = postFormats?.edges[0]?.node.slug;
  return (
    <div
      className={`nc-Card14 relative flex flex-col group rounded-3xl overflow-hidden z-0 ${hoverClass} ${className}`}
      data-nc-id="Card14"
    >
      <a href={link} className={`flex items-start relative w-full ${ratio}`}>
        <NcImage
          containerClassName="absolute inset-0 overflow-hidden z-0"
          className="object-cover w-full h-full rounded-3xl "
          src={featuredImage?.node.sourceUrl || "."}
        />

        <span className="absolute inset-0 bg-black bg-opacity-40">
          <PostTypeFeaturedIcon
            className="absolute top-4 right-4"
            postType={postType}
            wrapSize="w-8 h-8"
            iconSize="w-4 h-4"
          />
        </span>
      </a>

      <div className="absolute top-4 inset-x-4 sm:top-5 sm:inset-x-5">
        <CategoryBadgeList itemClass="px-3 py-[6px]" categories={categories} />
      </div>

      <div className="dark absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 flex flex-col flex-grow">
        <h3 className="nc-card-title block text-base font-semibold text-white ">
          <a href={link} className="line-clamp-2" title={title}>
            {title}
          </a>
        </h3>

        <div className="p-2 sm:p-2.5 mt-4 sm:mt-5 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full flex items-center text-neutral-50 text-xs sm:text-sm font-medium">
          <a
            href={frontendObject.homeURL + author?.node.uri}
            className="relative flex items-center space-x-2"
          >
            <Avatar
              radius="rounded-full"
              containerClassName="ring-2 ring-white"
              sizeClass="h-7 w-7 text-sm"
              imgUrl={
                author?.node.ncUserMeta?.featuredImage?.sourceUrl ||
                author?.node.avatar?.url
              }
              userName={author?.node.username}
            />
            <span className="block text-white truncate">
              {author?.node.name}
            </span>
          </a>
          <>
            <span className=" mx-[6px]">·</span>
            <span className=" font-normal truncate">
              {ncFormatDate(date || "")}
            </span>
          </>
        </div>
      </div>
    </div>
  );
};

export default Card14;
