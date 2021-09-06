import React from "react";
import { FC } from "react";

export interface PostCardLikeActionProps {
  favoriteButtonShortcode: string;
  className?: string;
}

const PostCardLikeAction: FC<PostCardLikeActionProps> = ({
  favoriteButtonShortcode,
  className = "relative",
}) => {
  return (
    <div
      className={`ncmaz-button-like-post ${className}`}
      dangerouslySetInnerHTML={{
        __html: favoriteButtonShortcode,
      }}
    />
  );
};

export default PostCardLikeAction;
