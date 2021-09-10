import { useQuery, gql, ApolloError, useMutation } from "@apollo/client";
import ButtonPrimary from "components/Button/ButtonPrimary";
import React, { FC, useEffect, useState } from "react";
import ncNanoId from "utils/ncNanoId";
import { CommentNode, Comments, PageInfo } from "./commentType";
import { COMMENT_QUERY, CREATE_COMMENT_QUERY } from "./queryGraphql";
import SingleCommentForm, { CommentFormData } from "./SingleCommentForm";
import SingleCommentLists from "./SingleCommentLists";

export interface SingleCommentProps {
  commentCount: number;
  postID: number;
}

// DEMO COMMENT ADDED
const DEMO_COMMENT_ADDED: { node: CommentNode } = {
  node: {
    parentDatabaseId: 0,
    isRestricted: false,
    approved: true, // or false,
    author: {
      node: {
        name: "afafe",
        url: "",
        id: String(ncNanoId()),
        email: "zzzzzz3254353536464646sfsfsrfsfezz@gmail.com",
        databaseId: Date.now(),
      },
    },
    commentId: Date.now(),
    databaseId: Date.now(),
    content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    date: "2021-09-10 09:33:03",
    type: "comment",
  },
};

const SingleComment: FC<SingleCommentProps> = ({ commentCount, postID }) => {
  const [stateListPosts, setStateListPosts] = useState<{ node: CommentNode }[]>(
    []
  );
  //
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

  useEffect(() => {
    if (!data) return;
    setStateListPosts(data?.comments?.edges || []);
  }, [data]);

  // GET
  let COMMENTS_WILL_SHOW = stateListPosts.filter((item) => {
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

  //
  //
  // TOI MUON THEM DU LIEU KHI BAM SUBMIT CREATE NEW COMMENT
  //
  const [createCommentGraphFunc, createCommentGraphProgress] = useMutation(
    gql(CREATE_COMMENT_QUERY)
  );
  //
  //

  useEffect(() => {
    if (!createCommentGraphProgress.data) return;
    if (!!createCommentGraphProgress.error) return;
    if (!createCommentGraphProgress.data?.createComment?.success) return;
    // --------- IS SUCCESS --------------
    // TRUONG HOP 1 ---- LOGED IN
    if (!!frontendObject.currentUser?.userId) {
      const newCommentItem = {
        node: createCommentGraphProgress.data?.createComment?.comment || {},
      };
      setStateListPosts((state) => [newCommentItem, ...state]);
    } else {
      // TRUONG HOP 2 ---- NOT YET LOGIn
    }
  }, [createCommentGraphProgress.data]);

  console.log(222, { stateListPosts });
  //
  //

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
        {!!createCommentGraphProgress.data?.createComment?.success && (
          <span className="my-1 text-xs italic text-green-500">
            Thanks. Your submission has been succeeded!
          </span>
        )}

        {/* Your comment is awaiting moderation. This is a preview; your comment will be visible after it has been approved. */}
        {createCommentGraphProgress.error && (
          <pre className="my-1 text-xs italic text-red-500 max-w-full overflow-auto">
            <code
              dangerouslySetInnerHTML={{
                __html: `Submission error: ${
                  createCommentGraphProgress.error.message ||
                  JSON.stringify(createCommentGraphProgress.error.message)
                }`,
              }}
            />
          </pre>
        )}
        <SingleCommentForm
          onClickSubmit={hanldeClickSubmitForm}
          onClickCancel={(id) => console.log(id)}
        />
      </div>

      {/* COMMENTS LIST */}
      <div className="max-w-screen-md mx-auto mt-10">
        <SingleCommentLists comments={COMMENTS_WILL_SHOW} />
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
