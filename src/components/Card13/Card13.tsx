import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import { PostNode } from "data/postCardType";

export interface Card13Props {
  className?: string;
  post: PostNode;
  isSkeleton?: boolean;
}

const Card13: FC<Card13Props> = ({ className = "", post, isSkeleton }) => {
  const { title, link, excerpt, featuredImage, date, postFormats } = post;

  return (
    <div
      className={`nc-Card13 relative flex justify-between ${className}`}
      data-nc-id="Card13"
    >
      <div className="flex flex-col py-2">
        <h2 className={`nc-card-title block font-semibold text-base`}>
          <a href={link} className="line-clamp-2" title={title}>
            {title}
          </a>
        </h2>
        {excerpt && (
          <span className="hidden sm:block my-3 text-neutral-500 dark:text-neutral-400 ">
            <span
              className="line-clamp-2"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
          </span>
        )}
        <span className="mt-4 block sm:hidden text-sm text-neutral-500 ">
          {date}
        </span>
        <div className="mt-auto hidden sm:block">
          <PostCardMeta meta={{ ...post }} />
        </div>
      </div>

      <a
        href={link}
        className={`block relative flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5`}
      >
        <NcImage
          containerClassName="absolute inset-0 "
          className="object-cover w-full h-full rounded-xl sm:rounded-3xl"
          src={isSkeleton ? "." : featuredImage?.node.sourceUrl}
          alt={title}
        />
        <PostTypeFeaturedIcon
          className="absolute bottom-2 left-2"
          postType={postFormats.edges[0]?.node.name}
          wrapSize="w-8 h-8"
          iconSize="w-4 h-4"
        />
      </a>
    </div>
  );
};

export default Card13;
