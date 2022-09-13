import React, { FC } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { ListPosts } from "data/postCardType";
import DataStatementBlock from "components/DataStatementBlock/DataStatementBlock";
import Heading from "components/Heading/Heading";
import Card11 from "components/Card11/Card11";
import useGqlQuerySection from "hooks/useGqlQuerySection";
import { GQL_QUERY_GET_POSTS_BY_FILTER } from "contains/contants";
import NCMAZ_TRANSLATE from "contains/translate";

interface Data {
  posts: ListPosts;
}

export interface SingleRelatedGridPostsProps {
  order?: string;
  orderBy?: string;
  numberOfPosts?: number;
  categoriesId: number[];
  currentPostDatabaseId?: number;
}

const SingleRelatedGridPosts: FC<SingleRelatedGridPostsProps> = ({
  numberOfPosts,
  order,
  orderBy,
  categoriesId,
  currentPostDatabaseId,
}) => {
  //
  let GQL_QUERY__string = "";
  let variables = {};
  //

  GQL_QUERY__string = GQL_QUERY_GET_POSTS_BY_FILTER;

  // HIEN TAI GRAPHQL CHUA HO TRO PAGINATION CHO CAC FILTER orderBy
  variables = {
    order,
    orderBy,
    first: Number(numberOfPosts),
    categoryIn: categoriesId,
    notIn: currentPostDatabaseId ? [currentPostDatabaseId] : [],
  };

  const gqlQuery = gql`
    ${GQL_QUERY__string}
  `;

  const [gqlQueryGetPosts, { loading, error, data }] = useLazyQuery<Data>(
    gqlQuery,
    {
      variables,
    }
  );

  // =========================================================
  const { ref } = useGqlQuerySection(gqlQueryGetPosts, 99, undefined, {
    freezeOnceVisible: true,
    rootMargin: "1000px",
  });
  // =========================================================

  const DATA_LISTS = data?.posts?.edges || [];

  return (
    <div ref={ref}>
      <Heading className="mb-10 text-neutral-900 dark:text-neutral-50" desc="">
        {NCMAZ_TRANSLATE["relatedPosts"]}
      </Heading>
      <DataStatementBlock loading={loading} error={error} data={DATA_LISTS} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8">
        {DATA_LISTS.map((item, index) => (
          <Card11 key={index} post={item.node} />
        ))}
      </div>
    </div>
  );
};

export default SingleRelatedGridPosts;
