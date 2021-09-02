import React from "react";
import { FC } from "react";

export interface PostCardReadingTimeProps {
  readingTimeShortcode: string;
  className?: string;
}

const PostCardReadingTime: FC<PostCardReadingTimeProps> = ({
  readingTimeShortcode,
  className = "",
}) => {
  if (!readingTimeShortcode) return null;
  return (
    <div
      className={`${className} text-xs text-neutral-700 dark:text-neutral-300 `}
      dangerouslySetInnerHTML={{
        __html: readingTimeShortcode || "",
      }}
    />
  );
};

export default PostCardReadingTime;
