import React, { FC } from "react";
import Avatar from "components/Avatar/Avatar";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import { PostNode } from "data/postCardType";
import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";

export interface Card1Props {
  className?: string;
  post: PostNode;
}

const Card1: FC<Card1Props> = ({ className = "", post }) => {
  const { author, title, link, id } = post;
  return (
    <div
      className={`nc-Card1 relative min-h-[95px] p-4 flex flex-row hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg group border-neutral-100 dark:border-neutral-800 ${className}`}
      data-nc-id="Card1"
      data-nc-post-id={id}
    >
      <a href={link} className="absolute inset-0 rounded-lg"></a>

      <div className="flex-shrink-0 pt-1 pr-3">
        <Avatar
          imgUrl={author?.node.avatar?.url}
          userName={author?.node.username}
        />
      </div>
      <div className="flex-grow">
        <h2
          className="nc-card-title block text-base font-semibold text-neutral-800 dark:text-neutral-100"
          title={title}
        >
          <a href={link} className="line-clamp-2">
            {title}
          </a>
        </h2>
        <PostCardMeta className="mt-3" hiddenAvatar meta={post} />
      </div>

      {/* ACTIONS */}
      <PostCardDropdownShare href={post.link} />
    </div>
  );
};

export default Card1;
