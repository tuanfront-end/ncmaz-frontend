import {
  GutenbergApiAttr_BlockTermGrid,
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
import { CategoriesNode3 } from "data/postCardType";

function useGutenbergSectionWithGQLGetTerms({
  graphQLvariables,
  graphQLData,
  hasSSrInitData,
}: {
  graphQLvariables?: VariablesGutenbergGQLGetTerms;
  graphQLData?: ListTermsGQLResultData;
  hasSSrInitData?: GutenbergApiAttr_BlockTermGrid["hasSSrInitData"];
}) {
  let GQL_QUERY__string = "";
  const IS_HAS_INIT_DATA = hasSSrInitData?.hasSSrInitData;

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
  const queryGql = gql`
    ${GQL_QUERY__string}
  `;

  // =========================================================
  let data: ListTermsGQLResultData | undefined = undefined,
    loading: boolean | undefined = undefined,
    error: ApolloError | undefined,
    funcGqlQueryGetTerms: (
      options?: QueryLazyOptions<OperationVariables> | undefined
    ) => void = () => {};

  // -----
  const [gqlQueryGetTerms, useLazyQueryResultData] =
    useLazyQuery<ListTermsGQLResultData>(queryGql as DocumentNode, {
      notifyOnNetworkStatusChange: true,
      variables: graphQLvariables?.variables,
    });
  funcGqlQueryGetTerms = gqlQueryGetTerms;
  data = useLazyQueryResultData.data;
  loading = useLazyQueryResultData.loading;
  error = useLazyQueryResultData.error;
  //

  // =========================================================

  let LIST_TERMS = data?.tags?.edges || data?.categories?.edges || [];
  const IS_SKELETON = loading && !LIST_TERMS.length;
  const DONOT_ANY_THING = !data && !loading && !error;

  // IF IS_HAS_INIT_DATA
  if (IS_HAS_INIT_DATA) {
    funcGqlQueryGetTerms = () => {};
    LIST_TERMS = hasSSrInitData.initTermIDs.map((item, index) => {
      return {
        node: window.ncmazCoreVariables?.ncmazCoreInitTerms[
          item as number
        ] as CategoriesNode3,
      };
    });
  } else {
    funcGqlQueryGetTerms = gqlQueryGetTerms;
  }

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
