import { useQuery, gql, ApolloError } from "@apollo/client";
import React, { FC } from "react";
import { CommentNode, Comments, PageInfo } from "./commentType";
import { COMMENT_QUERY } from "./queryGraphql";
import SingleCommentForm from "./SingleCommentForm";
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
    first: 10,
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

  const pageInfo: PageInfo | {} = data?.comments?.pageInfo || {};

  return (
    <div>
      {/* COMMENT FORM */}
      <div className="max-w-screen-md mx-auto pt-5">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
          Responses ({commentCount})
        </h3>
        <SingleCommentForm
          onClickSubmit={(id) => console.log(id)}
          onClickCancel={(id) => console.log(id)}
        />
      </div>

      {/* COMMENTS LIST */}
      <div className="max-w-screen-md mx-auto mt-10">
        <SingleCommentLists comments={DATA_LISTS} />
      </div>
    </div>
  );
};

export default SingleComment;
