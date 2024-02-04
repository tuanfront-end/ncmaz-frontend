import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import { PostNode } from "data/postCardType";

export interface Card3SmallProps {
  className?: string;
  post: PostNode;
}

const Card3Small: FC<Card3SmallProps> = ({ className = "h-full", post }) => {
  const { title, link, featuredImage } = post;

  return (
    <div
      className={`nc-Card3Small relative flex justify-between sm:items-center ${className}`}
      data-nc-id="Card3Small"
    >
      <a href={link} className=" absolute inset-0" title={title}></a>
      <div className="grid grid-cols-1 relative space-y-2 overflow-hidden flex-grow">
        <PostCardMeta meta={{ ...post }} />
        <h3 className="nc-card-title block text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100">
          <a
            href={link}
            className="line-clamp-2"
            title={title}
            dangerouslySetInnerHTML={{ __html: title || "" }}
          ></a>
        </h3>
      </div>

      <a
        href={link}
        title={title}
        className={`block w-16 sm:w-20 flex-shrink-0 relative ml-4 `}
      >
        <NcImage
          containerClassName=""
          className="object-cover aspect-1 rounded-lg hover:opacity-90 transition-opacity"
          src={featuredImage?.node.sourceUrl || "."}
          srcSet={featuredImage?.node.srcSet}
          alt={title}
        />
      </a>
    </div>
  );
};

export default Card3Small;
