import { useEffect, useState } from "react";
import {
  GutenbergApiAttr_BlockMagazine,
  ListPostsGQLResultData,
  VariablesGutenbergGQLGetPosts,
} from "data/gutenbergAttrType";
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
  //
  const IS_HAS_INIT_DATA = hasSSrInitData?.hasSSrInitData;

  const VARIABLE_FILTER_ROOT = graphQLvariables?.variables || {};

  const [variablesFilter, setVariablesFilter] = useState(VARIABLE_FILTER_ROOT);
  const [tabActiveId, setTabActiveId] = useState<number>(-1);

  //
  useEffect(() => {
    setVariablesFilter(VARIABLE_FILTER_ROOT);
  }, [graphQLvariables]);

  useEffect(() => {
    if (tabActiveId === -1 && IS_HAS_INIT_DATA) {
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

  let GQL_QUERY__string = "";
  if (graphQLvariables?.queryString === "GQL_QUERY_GET_POSTS_BY_FILTER") {
    GQL_QUERY__string = GQL_QUERY_GET_POSTS_BY_FILTER;
  }
  if (graphQLvariables?.queryString === "GQL_QUERY_GET_POSTS_BY_SPECIFIC") {
    GQL_QUERY__string = GQL_QUERY_GET_POSTS_BY_SPECIFIC;
  }

  const queryGql = gql`
    ${GQL_QUERY__string}
  `;

  //
  //
  let LISTS_POSTS = [];
  let IS_SKELETON = false;
  // SECTION CHUA LAM GI/HOAC CHUA VAO VIEW
  let DONOT_ANY_THING = false;

  let data: ListPostsGQLResultData | undefined = undefined,
    loading: boolean | undefined = undefined,
    error: ApolloError | undefined,
    funcGqlQueryGetPosts: (
      options?: QueryLazyOptions<OperationVariables> | undefined
    ) => void = () => {},
    fetchMore:
      | LazyQueryResult<ListPostsGQLResultData, OperationVariables>["fetchMore"]
      | undefined;

  let funcGqlGetPostsForAllHasInitData: (
    options?: QueryLazyOptions<OperationVariables> | undefined
  ) => void = () => {};

  // =========================================================
  if (tabActiveId !== -1 || !IS_HAS_INIT_DATA) {
    const [gqlQueryGetPosts, useLazyQueryResultData] =
      useLazyQuery<ListPostsGQLResultData>(queryGql as DocumentNode, {
        notifyOnNetworkStatusChange: true,
        variables: variablesFilter,
      });
    //
    funcGqlQueryGetPosts = gqlQueryGetPosts;
    data = useLazyQueryResultData.data;
    loading = useLazyQueryResultData.loading;
    error = useLazyQueryResultData.error;
    fetchMore = useLazyQueryResultData.fetchMore;
    //
    LISTS_POSTS = data?.posts.edges || [];
    IS_SKELETON = loading && !LISTS_POSTS.length;
    // SECTION CHUA LAM GI/HOAC CHUA VAO VIEW
    DONOT_ANY_THING = !data && !loading && !error;
  } else {
    // IF IS_HAS_INIT_DATA =========================================================
    // LAZY QUERY NAY chỉ phục vụ cho các khối có dữ liệu init khi click vào load-more lần đầu tiên
    const [
      gqlQueryGetPostsForAllHasInitData,
      useLazyQueryResultDataForAllHasInitData,
    ] = useLazyQuery<ListPostsGQLResultData>(queryGql as DocumentNode, {
      notifyOnNetworkStatusChange: true,
      variables: VARIABLE_FILTER_ROOT,
    });

    funcGqlQueryGetPosts = () => {};
    // funcGqlQueryGetPosts = gqlQueryGetPostsForAllHasInitData;
    data = useLazyQueryResultDataForAllHasInitData.data;
    loading = useLazyQueryResultDataForAllHasInitData.loading;
    error = useLazyQueryResultDataForAllHasInitData.error;
    fetchMore = useLazyQueryResultDataForAllHasInitData.fetchMore;
    funcGqlGetPostsForAllHasInitData = gqlQueryGetPostsForAllHasInitData;
    IS_SKELETON = false;
    LISTS_POSTS = data?.posts.edges || [];
    DONOT_ANY_THING = !data && !loading && !error;
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
    funcGqlQueryGetPosts,
    funcGqlGetPostsForAllHasInitData,
  };
}

export default useGutenbergSectionWithGQLGetPosts;
