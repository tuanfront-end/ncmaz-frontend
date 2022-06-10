import React from "react";
import {
  ListTermsGQLResultData,
  VariablesGutenbergGQLGetTerms,
} from "data/gutenbergAttrType";
import {
  GQL_QUERY_GET_CATEGORIES_BY_FILTER,
  GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC,
  GQL_QUERY_GET_TAGS_BY_FILTER,
  GQL_QUERY_GET_TAGS_BY_SPECIFIC,
} from "contains/contants";
import gql from "graphql-tag";
import {
  ApolloError,
  OperationVariables,
  QueryLazyOptions,
  useLazyQuery,
  DocumentNode,
} from "@apollo/client";

function useGutenbergSectionWithGQLGetTerms({
  graphQLvariables,
  graphQLData,
}: {
  graphQLvariables?: VariablesGutenbergGQLGetTerms;
  graphQLData?: ListTermsGQLResultData;
}) {
  const IS_SPECIFIC_DATA = !graphQLvariables && !!graphQLData;
  // const IS_SPECIFIC_DATA = false;

  let GQL_QUERY__string = "";
  if (graphQLvariables?.queryString === "GQL_QUERY_GET_CATEGORIES_BY_FILTER") {
    GQL_QUERY__string = GQL_QUERY_GET_CATEGORIES_BY_FILTER;
  }
  if (
    graphQLvariables?.queryString === "GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC"
  ) {
    GQL_QUERY__string = GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC;
  }
  if (graphQLvariables?.queryString === "GQL_QUERY_GET_TAGS_BY_FILTER") {
    GQL_QUERY__string = GQL_QUERY_GET_TAGS_BY_FILTER;
  }
  if (graphQLvariables?.queryString === "GQL_QUERY_GET_TAGS_BY_SPECIFIC") {
    GQL_QUERY__string = GQL_QUERY_GET_TAGS_BY_SPECIFIC;
  }
  const queryGql = !IS_SPECIFIC_DATA
    ? gql`
        ${GQL_QUERY__string}
      `
    : "";

  // =========================================================
  let data: ListTermsGQLResultData | undefined = undefined,
    loading: boolean | undefined = undefined,
    error: ApolloError | undefined,
    funcGqlQueryGetTerms: (
      options?: QueryLazyOptions<OperationVariables> | undefined
    ) => void = () => {};

  // -----
  if (IS_SPECIFIC_DATA) {
    data = graphQLData;
  } else {
    const [gqlQueryGetTerms, useLazyQueryResultData] =
      useLazyQuery<ListTermsGQLResultData>(queryGql as DocumentNode, {
        notifyOnNetworkStatusChange: true,
        variables: graphQLvariables?.variables,
      });
    funcGqlQueryGetTerms = gqlQueryGetTerms;
    data = useLazyQueryResultData.data;
    loading = useLazyQueryResultData.loading;
    error = useLazyQueryResultData.error;
  }
  //

  // =========================================================

  const LIST_TERMS = data?.tags?.edges || data?.categories?.edges || [];
  const IS_SKELETON = loading && !LIST_TERMS.length;
  const DONOT_ANY_THING = !data && !loading && !error;

  // =========================================================
  return {
    LIST_TERMS,
    IS_SKELETON,
    data,
    loading,
    error,
    funcGqlQueryGetTerms,
    DONOT_ANY_THING,
  };
}

export default useGutenbergSectionWithGQLGetTerms;
