import { POSTS_SECTION_BY_FILTER__string } from "./queryGraphql";
import React, { FC } from "react";
import { useQuery, gql } from "@apollo/client";
import { PostNode } from "data/postCardType";
import DataStatementBlock from "components/DataStatementBlock/DataStatementBlock";
import Heading from "components/Heading/Heading";
import Card11 from "components/Card11/Card11";

export interface SingleRelatedGridPostsProps {
  order?: string;
  orderBy?: string;
  numberOfPosts?: number;
  categoriesId: number[];
}

let DATA_LISTS: { node: PostNode }[] = [];

const SingleRelatedGridPosts: FC<SingleRelatedGridPostsProps> = ({
  numberOfPosts,
  order,
  orderBy,
  categoriesId,
}) => {
  //
  let GQL_QUERY__string = "";
  let variables = {};
  //

  GQL_QUERY__string = POSTS_SECTION_BY_FILTER__string;

  // HIEN TAI GRAPHQL CHUA HO TRO PAGINATION CHO CAC FILTER orderBy
  variables = {
    order,
    orderBy,
    first: Number(numberOfPosts),
    categoryIn: categoriesId,
  };

  const gqlQuery = gql`
    ${GQL_QUERY__string}
  `;

  const { loading, error, data } = useQuery(gqlQuery, {
    variables,
  });

  if (data) {
    DATA_LISTS = data?.posts?.edges || [];
  }

  return (
    <div>
      <Heading className="mb-10 text-neutral-900 dark:text-neutral-50" desc="">
        Related Posts
      </Heading>
      <DataStatementBlock loading={loading} error={error} data={DATA_LISTS} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {DATA_LISTS.map((item, index) => (
          <Card11 key={index} post={item.node} />
        ))}
      </div>
    </div>
  );
};

export default SingleRelatedGridPosts;
