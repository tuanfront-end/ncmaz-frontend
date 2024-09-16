import {
  GutenbergAttr__BlockUsersGrid,
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
import { AuthorNode } from "data/postCardType";

function useGutenbergSectionWithGQLGetUsers({
  graphQLvariables,
  graphQLData,
  hasSSrInitData,
}: {
  graphQLvariables?: VariablesGutenbergGQLGetUsers;
  graphQLData?: ListUsersGQLResultData;
  hasSSrInitData?: GutenbergAttr__BlockUsersGrid["hasSSrInitData"];
}) {
  const IS_HAS_INIT_DATA = hasSSrInitData?.hasSSrInitData;

  let GQL_QUERY__string = "";
  if (graphQLvariables?.queryString === "GQL_QUERY_GET_USERS_BY_SPECIFIC") {
    GQL_QUERY__string = GQL_QUERY_GET_USERS_BY_SPECIFIC;
  }
  if (graphQLvariables?.queryString === "GQL_QUERY_GET_USERS_BY_FILTER") {
    GQL_QUERY__string = GQL_QUERY_GET_USERS_BY_FILTER;
  }

  const queryGql = gql`
    ${GQL_QUERY__string}
  `;

  // =========================================================
  // =========================================================
  let data: ListUsersGQLResultData | undefined = undefined,
    loading: boolean | undefined = undefined,
    error: ApolloError | undefined,
    funcGqlQueryGetUsers: (
      options?: QueryLazyOptions<OperationVariables> | undefined
    ) => void = () => {};

  // -----
  const [gqlQueryGetTerms, useLazyQueryResultData] =
    useLazyQuery<ListUsersGQLResultData>(queryGql as DocumentNode, {
      notifyOnNetworkStatusChange: true,
      variables: graphQLvariables?.variables,
    });
  funcGqlQueryGetUsers = gqlQueryGetTerms;
  data = useLazyQueryResultData.data;
  loading = useLazyQueryResultData.loading;
  error = useLazyQueryResultData.error;
  //

  // =========================================================

  let LISTS_DATA = data?.users.edges || [];
  const IS_SKELETON = loading && !LISTS_DATA.length;
  const DONOT_ANY_THING = !data && !loading && !error;

  // IF IS_HAS_INIT_DATA
  if (IS_HAS_INIT_DATA) {
    funcGqlQueryGetUsers = () => {};
    LISTS_DATA = hasSSrInitData.initUserIDs.map((item, index) => {
      return {
        node: window.ncmazCoreVariables?.ncmazCoreInitUsers[
          item as number
        ] as AuthorNode,
      };
    });
  } else {
    funcGqlQueryGetUsers = gqlQueryGetTerms;
  }

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
