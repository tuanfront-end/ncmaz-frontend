import React, { FC } from "react";
import PostCardCommentBtn from "components/PostCardCommentBtn/PostCardCommentBtn";
import PostCardLikeContainer from "containers/PostCardLikeContainer/PostCardLikeContainer";
import { PostNode } from "data/postCardType";
import PostCardLikeAction from "components/PostCardLikeAction/PostCardLikeAction";

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
      {/* <button
        className="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs focus:outline-none text-rose-600 bg-rose-50 dark:bg-rose-100"
        title="Liked"
        data-nc-id="PostCardLikeAction"
      >
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="ml-1 text-rose-600">3.4k</span>
      </button> */}
      {/* <PostCardLikeAction
      {...args}
      isLiked={isLiked()}
      likeCount={getLikeCount()}
      postId={postId}
      onClickLike={handleClickLike}
    />
      <PostCardLikeContainer
        className={itemClass}
        // like={postData.like}
        like={{
          count: 9999,
          isLiked: true,
        }}
        onClickLike={onClickLike}
        postId={postData.postId}
      /> */}
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
