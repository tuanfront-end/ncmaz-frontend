import React, { FC, useState } from "react";
import { PostNode } from "data/postCardType";
import NcImage from "components/NcImage/NcImage";
import PostCardLikeAction from "components/PostCardLikeAction/PostCardLikeAction";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import Badge from "components/Badge/Badge";
import Skeleton from "react-loading-skeleton";

export interface Card18Props {
  className?: string;
  isSkeleton?: boolean;
  post: PostNode;
}

const Card18: FC<Card18Props> = ({
  className = "h-full",
  post,
  isSkeleton,
}) => {
  const {
    link,
    categories,
    ncPostMetaData,
    title,
    featuredImage,
    postFormats,
  } = post;
  const postType = postFormats.edges[0]?.node.name;

  return (
    <div
      className={`nc-Card18 group relative flex flex-col ${className}`}
      data-nc-id="Card18"
    >
      <div className="w-full block h-0 aspect-h-9 aspect-w-12 rounded-2xl overflow-hidden">
        <NcImage
          containerClassName="absolute inset-0 "
          src={isSkeleton ? "." : featuredImage?.node.sourceUrl || "."}
          alt={title}
        />
        <span>
          <PostTypeFeaturedIcon
            className="absolute left-1.5 bottom-1.5"
            postType={postType}
            wrapSize="w-8 h-8"
            iconSize="w-4 h-4"
          />
        </span>
        <div className="bg-transparent group-hover:bg-gray-900/30 transform transition-colors"></div>
      </div>
      <div className="absolute top-1.5 inset-x-1.5 hidden group-hover:flex justify-between ">
        <Badge
          className={`relative z-10`}
          name={categories.edges[0]?.node?.name}
          href={categories.edges[0]?.node?.link}
          // color={item.color as any}
        />
        <PostCardLikeAction
          className="relative z-10 small"
          favoriteButtonShortcode={ncPostMetaData.favoriteButtonShortcode || ""}
        />
      </div>

      <h2 className={`block mt-2 mx-2 font-medium text-sm`}>
        {isSkeleton ? (
          <>
            <Skeleton />
            <Skeleton width="60%" />
          </>
        ) : (
          <span
            className="line-clamp-2"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
      </h2>
      <a href={link} className={`absolute inset-0`} />
    </div>
  );
};

export default Card18;
