import React from "react";
import {
  ListUsersGQLResultData,
  VariablesGutenbergGQLGetUsers,
} from "data/gutenbergAttrType";
import {
  GQL_QUERY_GET_USERS_BY_FILTER,
  GQL_QUERY_GET_USERS_BY_SPECIFIC,
} from "contains/contants";
import gql from "graphql-tag";
import {
  ApolloError,
  OperationVariables,
  QueryLazyOptions,
  useLazyQuery,
  DocumentNode,
} from "@apollo/client";

function useGutenbergSectionWithGQLGetUsers({
  graphQLvariables,
  graphQLData,
}: {
  graphQLvariables?: VariablesGutenbergGQLGetUsers;
  graphQLData?: ListUsersGQLResultData;
}) {
  const IS_SPECIFIC_DATA = !graphQLvariables && !!graphQLData;
  // const IS_SPECIFIC_DATA = false;

  let GQL_QUERY__string = "";
  if (graphQLvariables?.queryString === "GQL_QUERY_GET_USERS_BY_SPECIFIC") {
    GQL_QUERY__string = GQL_QUERY_GET_USERS_BY_SPECIFIC;
  }
  if (graphQLvariables?.queryString === "GQL_QUERY_GET_USERS_BY_FILTER") {
    GQL_QUERY__string = GQL_QUERY_GET_USERS_BY_FILTER;
  }

  const queryGql = !IS_SPECIFIC_DATA
    ? gql`
        ${GQL_QUERY__string}
      `
    : "";

  // =========================================================
  // =========================================================
  let data: ListUsersGQLResultData | undefined = undefined,
    loading: boolean | undefined = undefined,
    error: ApolloError | undefined,
    funcGqlQueryGetUsers: (
      options?: QueryLazyOptions<OperationVariables> | undefined
    ) => void = () => {};

  // -----
  if (IS_SPECIFIC_DATA) {
    data = graphQLData;
  } else {
    const [gqlQueryGetTerms, useLazyQueryResultData] =
      useLazyQuery<ListUsersGQLResultData>(queryGql as DocumentNode, {
        notifyOnNetworkStatusChange: true,
        variables: graphQLvariables?.variables,
      });
    funcGqlQueryGetUsers = gqlQueryGetTerms;
    data = useLazyQueryResultData.data;
    loading = useLazyQueryResultData.loading;
    error = useLazyQueryResultData.error;
  }
  //

  // =========================================================

  const LISTS_DATA = data?.users.edges || [];
  const IS_SKELETON = loading && !LISTS_DATA.length;
  const DONOT_ANY_THING = !data && !loading && !error;

  return {
    LISTS_DATA,
    IS_SKELETON,
    error,
    loading,
    funcGqlQueryGetUsers,
    DONOT_ANY_THING,
  };
}

export default useGutenbergSectionWithGQLGetUsers;
