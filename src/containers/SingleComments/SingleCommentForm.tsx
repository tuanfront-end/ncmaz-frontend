import React, { FC, useEffect, useState } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import Textarea from "components/Textarea/Textarea";
import Input from "components/Input/Input";

export interface SingleCommentFormProps {
  className?: string;
  commentId?: number;
  onClickSubmit: ({
    commentId,
    formData,
  }: {
    commentId: number;
    formData: CommentFormData;
  }) => void;
  onClickCancel: (id?: number) => void;
  textareaRef?: React.MutableRefObject<null>;
  defaultValue?: string;
  rows?: number;
}

export interface CommentFormData {
  textareaValue: string;
  inputAuthorName: string;
  inputAuthorEmail: string;
}

const SingleCommentForm: FC<SingleCommentFormProps> = ({
  className = "mt-5",
  commentId = 0,
  onClickSubmit,
  onClickCancel,
  textareaRef,
  defaultValue = "",
  rows = 4,
}) => {
  const [textareaValue, setTextareaValue] = useState(defaultValue);
  const [inputAuthorName, setInputAuthorName] = useState("");
  const [inputAuthorEmail, setInputAuthorEmail] = useState("");

  useEffect(() => {
    setTextareaValue(defaultValue);
  }, [defaultValue]);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClickSubmit({
      commentId,
      formData: {
        textareaValue,
        inputAuthorName,
        inputAuthorEmail,
      },
    });
  };

  return (
    <form
      action="#"
      className={`nc-SingleCommentForm ${className}`}
      onSubmit={handleSubmitForm}
    >
      <Textarea
        name="singel-comment-textarea"
        placeholder="Add to discussion"
        ref={textareaRef}
        onChange={(e) => setTextareaValue(e.target.value)}
        required={true}
        defaultValue={textareaValue}
        rows={rows}
      />
      {!frontendObject.currentUser && (
        <div className="grid grid-cols-2 gap-2 mt-2">
          <label className="block" htmlFor="singel-comment-authorName">
            <label htmlFor="singel-comment-authorName">Name</label>
            <Input
              className="mt-1"
              id="singel-comment-authorName"
              placeholder="Your name"
              name="singel-comment-authorName"
              rounded="rounded-2xl"
              defaultValue={inputAuthorName}
              onChange={(e) => setInputAuthorName(e.target.value)}
            />
          </label>

          <label className="block" htmlFor="singel-comment-authorEmail">
            <label htmlFor="singel-comment-authorEmail">Email</label>
            <Input
              className="mt-1"
              placeholder="Your email"
              id="singel-comment-authorEmail"
              name="singel-comment-authorEmail"
              rounded="rounded-2xl"
              defaultValue={inputAuthorEmail}
              onChange={(e) => setInputAuthorEmail(e.target.value)}
            />
          </label>
        </div>
      )}
      <div className="mt-3 space-x-3">
        <ButtonPrimary type="submit">Submit</ButtonPrimary>
        <ButtonSecondary type="button" onClick={() => onClickCancel(commentId)}>
          Cancel
        </ButtonSecondary>
      </div>
    </form>
  );
};

export default SingleCommentForm;
