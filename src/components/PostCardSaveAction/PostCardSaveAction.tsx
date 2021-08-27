import BookmarkContainer from "containers/BookmarkContainer/BookmarkContainer";
import { PostNode } from "data/postCardType";
import React, { FC } from "react";

export interface PostCardSaveActionProps {
  className?: string;
  classBgIcon?: string;
  readingTime?: number;
  hidenReadingTime?: boolean;
  postData: PostNode;
}

const PostCardSaveAction: FC<PostCardSaveActionProps> = ({
  className = "",
  hidenReadingTime = false,
  classBgIcon,
  readingTime,
  postData,
}) => {
  const { postId } = postData;

  return (
    <div
      className={`nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ${className}`}
      data-nc-id="PostCardSaveAction"
    >
      {!hidenReadingTime && !!readingTime && (
        <span>{readingTime} min read</span>
      )}

      <BookmarkContainer
        // initBookmarked={bookmark.isBookmarked}
        initBookmarked
        containerClassName={classBgIcon}
        postId={postId}
      />
    </div>
  );
};

export default PostCardSaveAction;
