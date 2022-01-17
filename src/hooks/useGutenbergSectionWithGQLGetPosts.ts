import { useEffect, useRef, useState } from "react";
import {
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
}: {
  graphQLvariables?: VariablesGutenbergGQLGetPosts;
  graphQLData?: ListPostsGQLResultData;
}) {
  const IS_SPECIFIC_DATA = !graphQLvariables && !!graphQLData;

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
  const LISTS_POSTS = data?.posts.edges || [];
  const IS_SKELETON = loading && !LISTS_POSTS.length;

  //
  // =========================================================
  return {
    IS_SKELETON,
    LISTS_POSTS,
    fetchMore,
    error,
    loading,
    data,
    setTabActiveId,
    tabActiveId,
    funcGqlQueryGetPosts,
  };
}

export default useGutenbergSectionWithGQLGetPosts;