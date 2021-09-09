import React, { FC } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import CommentCard from "./CommentCard";
import { CommentNode, Comments } from "./commentType";

export interface SingleCommentListsProps {
  comments: Comments["edges"];
  onClickLoadmore: () => void;
}

const SingleCommentLists: FC<SingleCommentListsProps> = ({
  comments,
  onClickLoadmore,
}) => {
  let cmtLv1 = comments.filter((item) => !item.node.parentDatabaseId);

  const renderCommentItemChild = (comment: CommentNode) => {
    const childComments = comments.filter(
      (item) => item.node.parentDatabaseId === comment.databaseId
    );
    return (
      <li key={comment.databaseId}>
        <CommentCard size="normal" comment={comment} />
        {childComments.length ? (
          <ul className="pl-4 mt-5 space-y-5 md:pl-11">
            {childComments.map((child) => renderCommentItemChild(child.node))}
          </ul>
        ) : null}
      </li>
    );
  };

  const renderCommentItem = (comment: CommentNode) => {
    const childComments = comments.filter(
      (item) => item.node.parentDatabaseId === comment.databaseId
    );

    return (
      <li key={comment.databaseId}>
        <CommentCard comment={comment} />
        {childComments.length ? (
          <ul className="pl-4 mt-5 space-y-5 md:pl-11">
            {childComments.map((child) => renderCommentItemChild(child.node))}
          </ul>
        ) : null}
      </li>
    );
  };

  return (
    <ul className="nc-SingleCommentLists space-y-5">
      {cmtLv1.map((item) => renderCommentItem(item.node))}
      <ButtonPrimary
        onClick={onClickLoadmore}
        className="dark:bg-primary-700 w-full"
      >
        View more comments
      </ButtonPrimary>
    </ul>
  );
};

export default SingleCommentLists;
