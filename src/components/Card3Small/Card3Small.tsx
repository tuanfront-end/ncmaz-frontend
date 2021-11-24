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
        <PostCardMeta className="w-full" meta={{ ...post }} />
        <h2 className="nc-card-title block text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100">
          <a href={link} className="line-clamp-2" title={title}>
            {title}
          </a>
        </h2>
      </div>

      <a
        href={link}
        title={title}
        className={`block w-20 flex-shrink-0 relative rounded-lg overflow-hidden ml-4 group`}
      >
        <div className={`w-full h-0 aspect-w-16 aspect-h-16`}>
          <NcImage
            containerClassName="absolute inset-0"
            className="nc-will-change-transform object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
            src={featuredImage?.node.sourceUrl || "."}
            title={title}
          />
        </div>
      </a>
    </div>
  );
};

export default Card3Small;
