import React, { FC } from "react";
import PostCardCommentBtn from "components/PostCardCommentBtn/PostCardCommentBtn";
import { PostNode } from "data/postCardType";

export interface PostCardLikeAndCommentProps {
  className?: string;
  itemClass?: string;
  postData: Pick<
    PostNode,
    "postId" | "link" | "commentCount" | "ncPostMetaData"
  >;
  hiddenCommentOnMobile?: boolean;
  onClickLike?: (id: number) => void;
}

const PostCardLikeAndComment: FC<PostCardLikeAndCommentProps> = ({
  className = "",
  itemClass = "px-3 h-8 text-xs",
  hiddenCommentOnMobile = true,
  postData,
  onClickLike = () => {},
}) => {
  return (
    <div
      className={`nc-PostCardLikeAndComment flex items-center space-x-2 ${className}`}
      data-nc-id="PostCardLikeAndComment"
    >
      <div
        dangerouslySetInnerHTML={{
          __html: postData?.ncPostMetaData?.favoriteButtonShortcode || "",
        }}
      />

      <PostCardCommentBtn
        href={postData.link}
        commentCount={postData.commentCount || 0}
        className={`${
          hiddenCommentOnMobile ? "hidden sm:flex" : "flex"
        }  ${itemClass}`}
      />
    </div>
  );
};

export default PostCardLikeAndComment;
