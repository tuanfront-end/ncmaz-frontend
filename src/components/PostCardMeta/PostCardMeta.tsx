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
      className={`nc-PostCardMeta inline-flex items-center text-neutral-800 dark:text-neutral-200 overflow-hidden ${
        size === "normal" ? "text-xs" : "text-base"
      } ${className}`}
      data-nc-id="PostCardMeta"
    >
      <a
        href={frontendObject.homeURL + author?.node.uri}
        className="flex-shrink-0 relative flex items-center space-x-2 "
      >
        {!hiddenAvatar && (
          <Avatar
            radius="rounded-full"
            sizeClass={
              size === "normal"
                ? "h-5 w-5 sm:h-7 sm:w-7 text-xs sm:text-sm"
                : "h-8 w-8 sm:h-10 sm:w-10 text-base sm:text-xl"
            }
            imgUrl={
              author?.node.ncUserMeta?.featuredImage?.sourceUrl ||
              author?.node?.avatar?.url
            }
            srcSet={
              author?.node.ncUserMeta?.featuredImage?.sourceUrl
                ? author?.node.ncUserMeta?.featuredImage?.srcSet
                : undefined
            }
            userName={author?.node.username}
          />
        )}
        <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium ">
          <span className="line-clamp-1"> {author?.node.name}</span>
        </span>
      </a>
      <>
        <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
          ·
        </span>
        <span className="text-neutral-500 dark:text-neutral-400 font-normal ">
          <span className="line-clamp-1">
            {date ? ncFormatDate(date) : null}
          </span>
        </span>
      </>
    </div>
  );
};

export default PostCardMeta;
