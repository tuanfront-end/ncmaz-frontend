import React, { FC } from "react";
import Avatar from "components/Avatar/Avatar";
import { PostNode } from "data/postCardType";
import ncFormatDate from "utils/formatDate";

export interface PostCardMetaProps {
  className?: string;
  meta: Pick<PostNode, "date" | "author">;
  hiddenAvatar?: boolean;
  size?: "large" | "normal";
}

const PostCardMeta: FC<PostCardMetaProps> = ({
  className = "leading-none",
  meta,
  hiddenAvatar = false,
  size = "normal",
}) => {
  const { date, author } = meta;
  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center text-neutral-800 dark:text-neutral-200 ${
        size === "normal" ? "text-xs" : "text-base"
      } ${className}`}
      data-nc-id="PostCardMeta"
    >
      <a
        href={frontendObject.homeURL + author?.node.uri}
        className="relative flex items-center space-x-2 truncate"
      >
        {!hiddenAvatar && (
          <Avatar
            radius="rounded-full"
            sizeClass={
              size === "normal" ? "h-7 w-7 text-sm" : "h-10 w-10 text-xl"
            }
            imgUrl={
              author?.node.ncUserMeta?.featuredImage?.sourceUrl ||
              author?.node?.avatar?.url
            }
            userName={author?.node.username}
          />
        )}
        <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium py-1 truncate">
          {author?.node.name}
        </span>
      </a>
      <>
        <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
          ·
        </span>
        <span className="text-neutral-500 dark:text-neutral-400 font-normal flex-shrink-0">
          {date ? ncFormatDate(date) : null}
        </span>
      </>
    </div>
  );
};

export default PostCardMeta;
