import { gql, useLazyQuery } from "@apollo/client";
import Alert from "components/Alert/Alert";
import CircleLoading from "components/Loading/CircleLoading";
import { GQL_QUERY_GET_POST_BY_DATABASE_ID } from "contains/contants";
import NCMAZ_TRANSLATE from "contains/translate";
import { PostNodeFullData } from "data/postCardType";
import React, { FC, Suspense, useEffect } from "react";

const CreateNewPostEditorLazy = React.lazy(
  () => import("./CreateNewPostEditor")
);
const UpdatePostEditorLazy = React.lazy(() => import("./UpdatePostEditor"));
interface Data {
  post: PostNodeFullData;
}

interface Props {
  action?: "edit" | "create";
  postDatabaseID?: number;
}

const PostSubmissionEditor: FC<Props> = ({
  action = "create",
  postDatabaseID,
}) => {
  const Q_POST_BY_ID = gql`
    ${GQL_QUERY_GET_POST_BY_DATABASE_ID}
  `;

  const [getPostByDataBaseID, { error, data, loading }] = useLazyQuery<Data>(
    Q_POST_BY_ID,
    { notifyOnNetworkStatusChange: true }
  );

  useEffect(() => {
    if (action === "edit" && !!postDatabaseID) {
      getPostByDataBaseID({ variables: { postId: Number(postDatabaseID) } });
    }
  }, []);

  if (action === "edit" && !!postDatabaseID) {
    if (error) {
      return (
        <Alert type="error">
          <div
            dangerouslySetInnerHTML={{
              __html: `${error.message}
          <a
            class="underline ml-2"
            href="javascript:window.location.href=window.location.href"
          >
            Reload
          </a>`,
            }}
          ></div>
        </Alert>
      );
    }
    if (loading) {
      return <CircleLoading />;
    }
    if (!data) {
      return <Alert>{NCMAZ_TRANSLATE["somethingWentWrong"]}</Alert>;
    }
    return (
      <Suspense fallback={<div />}>
        <UpdatePostEditorLazy postNode={data.post} />
      </Suspense>
    );
  }

  if (action === "create") {
    return (
      <Suspense fallback={<div />}>
        <CreateNewPostEditorLazy />
      </Suspense>
    );
  }

  return null;
};

export default PostSubmissionEditor;
