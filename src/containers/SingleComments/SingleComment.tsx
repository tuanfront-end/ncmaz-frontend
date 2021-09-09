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
        Number(item.node.author.node.databaseId) ===
          Number(frontendObject.currentUser))
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
        <SingleCommentLists
          onClickLoadmore={handleLoadMore}
          comments={commentsWillShow}
        />
      </div>
    </div>
  );
};

export default SingleComment;
