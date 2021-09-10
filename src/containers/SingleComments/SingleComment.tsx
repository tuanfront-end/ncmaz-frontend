import { useQuery, gql, ApolloError, useMutation } from "@apollo/client";
import ButtonPrimary from "components/Button/ButtonPrimary";
import React, { FC } from "react";
import { CommentNode, Comments, PageInfo } from "./commentType";
import { COMMENT_QUERY, CREATE_COMMENT_QUERY } from "./queryGraphql";
import SingleCommentForm, { CommentFormData } from "./SingleCommentForm";
import SingleCommentLists from "./SingleCommentLists";

export interface SingleCommentProps {
  commentCount: number;
  postID: number;
  currentUserId?: number;
}

let DATA_LISTS: { node: CommentNode }[] = [];

const SingleComment: FC<SingleCommentProps> = ({
  commentCount,
  postID,
  currentUserId,
}) => {
  //
  let GQL_QUERY__string = COMMENT_QUERY;
  let variables = {};
  //

  // HIEN TAI GRAPHQL CHUA HO TRO PAGINATION CHO CAC FILTER orderBy
  variables = {
    first: 100,
    contentId: Number(postID),
  };

  const gqlQuery = gql`
    ${GQL_QUERY__string}
  `;

  const {
    loading,
    error,
    data,
    fetchMore,
  }: {
    loading?: boolean;
    error?: ApolloError;
    data?: {
      comments?: Comments;
    };
    fetchMore: any;
  } = useQuery(gqlQuery, {
    variables,
  });

  if (data) {
    DATA_LISTS = data?.comments?.edges || [];
  }

  // GET
  const commentsWillShow = DATA_LISTS.filter((item) => {
    return (
      item.node.approved ||
      (!item.node.approved &&
        frontendObject.currentUser?.databaseId &&
        Number(item.node.author.node.databaseId) ===
          Number(frontendObject.currentUser?.databaseId))
    );
  });

  const pageInfo = data?.comments?.pageInfo;

  const handleLoadMore = () => {
    if (pageInfo?.hasNextPage) {
      fetchMore({
        variables: {
          after: pageInfo.endCursor,
        },
      });
    }
  };

  const [createCommentGraphFunc, createCommentGraphProgress] = useMutation(
    gql(CREATE_COMMENT_QUERY)
  );

  console.log(1122, { createCommentGraphProgress });

  const hanldeClickSubmitForm = ({
    commentId,
    formData,
  }: {
    commentId: number;
    formData: CommentFormData;
  }) => {
    createCommentGraphFunc({
      variables: {
        content: formData.textareaValue,
        authorEmail: formData.inputAuthorEmail,
        authorUrl: null,
        author: formData.inputAuthorName,
        parent: commentId,
        commentOn: postID || frontendObject.currentObject.id,
      },
    });
  };

  return (
    <div>
      {/* COMMENT FORM */}
      <div className="max-w-screen-md mx-auto pt-5">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
          Responses ({commentCount})
        </h3>
        {createCommentGraphProgress.error && (
          <pre className="my-1 text-xs italic text-red-500 max-w-full overflow-auto">
            <code>
              Submission error:{" "}
              {createCommentGraphProgress.error.message ||
                JSON.stringify(createCommentGraphProgress.error.message)}
            </code>
          </pre>
        )}
        <SingleCommentForm
          onClickSubmit={hanldeClickSubmitForm}
          onClickCancel={(id) => console.log(id)}
        />
      </div>

      {/* COMMENTS LIST */}
      <div className="max-w-screen-md mx-auto mt-10">
        <SingleCommentLists comments={commentsWillShow} />
        {pageInfo?.hasNextPage && (
          <ButtonPrimary
            onClick={handleLoadMore}
            className="dark:bg-primary-700 w-full mt-5"
          >
            View more comments
          </ButtonPrimary>
        )}
      </div>
    </div>
  );
};

export default SingleComment;
