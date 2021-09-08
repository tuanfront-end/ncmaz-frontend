import React, { FC, useRef, useState } from "react";
import Avatar from "components/Avatar/Avatar";
import NcDropDown from "components/NcDropDown/NcDropDown";
import twFocusClass from "utils/twFocusClass";
import ModalEditComment from "./ModalEditComment";
import ModalDeleteComment from "./ModalDeleteComment";
import ModalReportItem from "components/ModalReportItem/ModalReportItem";
import SingleCommentForm from "./SingleCommentForm";
import { CommentNode } from "./commentType";
import ncFormatDate from "utils/formatDate";

export interface CommentCardProps {
  className?: string;
  comment: CommentNode;
  size?: "large" | "normal";
}

const CommentCard: FC<CommentCardProps> = ({
  className = "",
  comment,
  size = "large",
}) => {
  const { author, databaseId, date, parentId, content } = comment;
  const actions = [
    { id: "edit", name: "Edit", icon: "las la-edit" },
    { id: "reply", name: "Reply", icon: "las la-reply" },
    { id: "report", name: "Report abuse", icon: "las la-flag" },
    { id: "delete", name: "Delete", icon: "las la-trash-alt" },
  ];

  const textareaRef = useRef(null);
  const [isReplying, setIsReplying] = useState(false);
  const [isEditting, setIsEditting] = useState(false);
  const [isReporting, setIsReporting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const openReplyForm = () => {
    setIsReplying(true);
    setTimeout(() => {
      textareaRef.current && (textareaRef.current as any).focus();
    }, 100);
  };
  const closeReplyForm = () => {
    setIsReplying(false);
  };

  const openModalEditComment = () => setIsEditting(true);
  const closeModalEditComment = () => setIsEditting(false);

  const openModalReportComment = () => setIsReporting(true);
  const closeModalReportComment = () => setIsReporting(false);

  const openModalDeleteComment = () => setIsDeleting(true);
  const closeModalDeleteComment = () => setIsDeleting(false);

  const hanldeClickDropDown = (item: typeof actions[number]) => {
    if (item.id === "reply") {
      return openReplyForm();
    }
    if (item.id === "edit") {
      return openModalEditComment();
    }
    if (item.id === "report") {
      return openModalReportComment();
    }
    if (item.id === "delete") {
      return openModalDeleteComment();
    }
    return;
  };

  const renderCommentForm = () => {
    return (
      <SingleCommentForm
        textareaRef={textareaRef}
        onClickSubmit={(id) => {
          console.log(id);
        }}
        onClickCancel={closeReplyForm}
        className="flex-grow"
        commentId={databaseId}
      />
    );
  };

  const renderButtonReply = () => {
    return (
      <div>
        <button
          className="flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 dark:hover:text-teal-500 focus:outline-none "
          title="Reply"
          onClick={openReplyForm}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[18px] w-[18px] mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
            ></path>
          </svg>
          <span className="text-xs leading-none text-neutral-900 dark:text-neutral-200">
            Reply
          </span>
        </button>
      </div>
    );
  };

  const authorAvatar =
    author.node.ncUserMeta?.featuredImage?.sourceUrl || author.node.avatar?.url;
  return (
    <>
      <div
        className={`nc-CommentCard flex ${className}`}
        data-nc-id="CommentCard"
        data-comment-id={databaseId}
        data-comment-parent-id={parentId}
      >
        <Avatar
          imgUrl={authorAvatar || ""}
          userName={author.node.username}
          sizeClass={`h-6 w-6 text-base ${
            size === "large" ? "sm:text-lg sm:h-8 sm:w-8" : ""
          }`}
          radius="rounded-full"
          containerClassName="mt-4"
        />
        <div className="flex-grow flex flex-col p-4 ml-2 text-sm border border-neutral-200 rounded-xl sm:ml-3 sm:text-base dark:border-neutral-700">
          {/* AUTHOR INFOR */}
          <div className="relative flex items-center pr-6">
            <div className="absolute -right-3 -top-3">
              <NcDropDown
                className={`p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 dark:hover:text-neutral-200 sm:hover:bg-neutral-100 dark:hover:bg-neutral-800 ${twFocusClass()}`}
                data={actions}
                onClick={hanldeClickDropDown}
              />
            </div>
            <a
              className="flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100"
              href={author.node.url}
            >
              {author.node.name}
            </a>
            <span className="mx-2">·</span>
            <span className="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm">
              {ncFormatDate(date)}
            </span>
          </div>

          {/* CONTENT */}
          <span
            className="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* ACTION LIKE REPLY */}
          {isReplying ? renderCommentForm() : renderButtonReply()}
        </div>
      </div>

      <ModalEditComment
        show={isEditting}
        comment={comment}
        onCloseModalEditComment={closeModalEditComment}
      />
      <ModalReportItem
        show={isReporting}
        id={databaseId}
        onCloseModalReportItem={closeModalReportComment}
      />
      <ModalDeleteComment
        show={isDeleting}
        commentId={databaseId}
        onCloseModalDeleteComment={closeModalDeleteComment}
      />
    </>
  );
};

export default CommentCard;
