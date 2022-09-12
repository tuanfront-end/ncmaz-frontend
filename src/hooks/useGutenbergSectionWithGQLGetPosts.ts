import { useEffect, useRef, useState } from "react";
import {
  GutenbergApiAttr_BlockMagazine,
  ListPostsGQLResultData,
  VariablesGutenbergGQLGetPosts,
} from "data/gutenbergAttrType";
import { PostNode } from "data/postCardType";
import {
  GQL_QUERY_GET_POSTS_BY_FILTER,
  GQL_QUERY_GET_POSTS_BY_SPECIFIC,
} from "contains/contants";
import gql from "graphql-tag";
import {
  ApolloError,
  LazyQueryResult,
  OperationVariables,
  QueryLazyOptions,
  useLazyQuery,
  DocumentNode,
} from "@apollo/client";

function useGutenbergSectionWithGQLGetPosts({
  graphQLvariables,
  graphQLData,
  hasSSrInitData,
}: {
  graphQLvariables?: VariablesGutenbergGQLGetPosts;
  graphQLData?: ListPostsGQLResultData;
  hasSSrInitData?: GutenbergApiAttr_BlockMagazine["hasSSrInitData"];
}) {
  const IS_SPECIFIC_DATA = !graphQLvariables && !!graphQLData;
  // const IS_SPECIFIC_DATA = false;
  const IS_HAS_INIT_DATA = hasSSrInitData?.hasSSrInitData;

  const [variablesFilter, setVariablesFilter] = useState(
    graphQLvariables?.variables || {}
  );
  const [tabActiveId, setTabActiveId] = useState<number>(-1);

  //
  useEffect(() => {
    if (IS_SPECIFIC_DATA) {
      return;
    }
    setVariablesFilter(graphQLvariables?.variables || {});
  }, [graphQLvariables, IS_SPECIFIC_DATA]);

  let GQL_QUERY__string = "";
  if (graphQLvariables?.queryString === "GQL_QUERY_GET_POSTS_BY_FILTER") {
    GQL_QUERY__string = GQL_QUERY_GET_POSTS_BY_FILTER;
  }
  if (graphQLvariables?.queryString === "GQL_QUERY_GET_POSTS_BY_SPECIFIC") {
    GQL_QUERY__string = GQL_QUERY_GET_POSTS_BY_SPECIFIC;
  }

  const queryGql = !IS_SPECIFIC_DATA
    ? gql`
        ${GQL_QUERY__string}
      `
    : "";

  useEffect(() => {
    if (IS_SPECIFIC_DATA) {
      return;
    }
    setVariablesFilter((variables) => {
      return {
        ...variables,
        categoryIn:
          tabActiveId === -1
            ? graphQLvariables?.variables?.categoryIn
            : [tabActiveId],
      };
    });
  }, [tabActiveId]);
  //
  //
  let data: ListPostsGQLResultData | undefined = undefined,
    loading: boolean | undefined = undefined,
    error: ApolloError | undefined,
    funcGqlQueryGetPosts: (
      options?: QueryLazyOptions<OperationVariables> | undefined
    ) => void = () => {},
    fetchMore:
      | LazyQueryResult<ListPostsGQLResultData, OperationVariables>["fetchMore"]
      | undefined;

  // -----
  if (IS_SPECIFIC_DATA) {
    data = graphQLData;
  } else {
    const [gqlQueryGetPosts, useLazyQueryResultData] =
      useLazyQuery<ListPostsGQLResultData>(queryGql as DocumentNode, {
        notifyOnNetworkStatusChange: true,
        variables: variablesFilter,
      });
    funcGqlQueryGetPosts = gqlQueryGetPosts;
    data = useLazyQueryResultData.data;
    loading = useLazyQueryResultData.loading;
    error = useLazyQueryResultData.error;
    fetchMore = useLazyQueryResultData.fetchMore;
  }
  //

  // =========================================================
  let LISTS_POSTS = data?.posts.edges || [];
  let IS_SKELETON = loading && !LISTS_POSTS.length;
  // SECTION CHUA LAM GI/HOAC CHUA VAO VIEW
  const DONOT_ANY_THING = !data && !loading && !error;

  if (tabActiveId === -1 && IS_HAS_INIT_DATA) {
    LISTS_POSTS = hasSSrInitData.initPostIDs.map((item, index) => {
      return {
        node: window.ncmazCoreVariables?.ncmazCoreInitPosts[item] as PostNode,
      };
    });
  }

  //
  // =========================================================
  return {
    IS_SKELETON,
    LISTS_POSTS,
    DONOT_ANY_THING,
    fetchMore,
    error,
    loading,
    data,
    setTabActiveId,
    tabActiveId,
    funcGqlQueryGetPosts: IS_HAS_INIT_DATA ? () => {} : funcGqlQueryGetPosts,
  };
}

export default useGutenbergSectionWithGQLGetPosts;
