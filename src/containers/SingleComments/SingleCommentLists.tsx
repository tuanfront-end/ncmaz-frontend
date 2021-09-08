import React, { FC } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import CommentCard from "./CommentCard";
import { CommentNode, Comments } from "./commentType";

export interface SingleCommentListsProps {
  comments: Comments["edges"];
}

const SingleCommentLists: FC<SingleCommentListsProps> = ({ comments }) => {
  let cmtLv1 = comments.filter((item) => !item.node.parentDatabaseId);

  const renderCommentItemChild = (comment: CommentNode) => {
    return (
      <li key={comment.databaseId}>
        <CommentCard size="normal" comment={comment} />
        {/* {comment.children && (
          <ul className="pl-4 mt-5 space-y-5 md:pl-9">
            {comment.children.map(renderCommentItemChild)}
          </ul>
        )} */}
      </li>
    );
  };

  const renderCommentItem = (comment: CommentNode) => {
    return (
      <li key={comment.databaseId}>
        <CommentCard comment={comment} />
        {/* {comment.children && (
          <ul className="pl-4 mt-5 space-y-5 md:pl-11">
            {comment.children.map(renderCommentItemChild)}
          </ul>
        )} */}
      </li>
    );
  };

  return (
    <ul className="nc-SingleCommentLists space-y-5">
      {cmtLv1.map((item) => renderCommentItem(item.node))}
      <ButtonPrimary className="dark:bg-primary-700 w-full">
        View full comments (+117 comments)
      </ButtonPrimary>
    </ul>
  );
};

export default SingleCommentLists;
