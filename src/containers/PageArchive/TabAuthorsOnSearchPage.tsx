import React, { FC, useEffect } from "react";
import { AuthorNode } from "data/postCardType";
import { gql, useQuery } from "@apollo/client";
import { USERS_QUERY_FILTER__string } from "./queryGraphql";
import ButtonPrimary from "components/Button/ButtonPrimary";
import { PageInfo } from "containers/SingleComments/commentType";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import CardAuthorBox2 from "components/CardAuthorBox2/CardAuthorBox2";
import CardAuthorBox2Skeleton from "components/CardAuthorBox2/CardAuthorBox2Skeleton";

interface Data {
  users: Users;
}
interface Users {
  edges: Edge[];
  pageInfo: PageInfo;
  __typename: string;
}
interface Edge {
  node: AuthorNode;
  __typename: string;
}

export interface TabAuthorsOnSearchPageProps {
  searchText: string;
  onUpdateTotal: (total: number) => void;
}

const TabAuthorsOnSearchPage: FC<TabAuthorsOnSearchPageProps> = ({
  searchText,
  onUpdateTotal,
}) => {
  const POST_PER_PAGE = 10;
  const Q_LIST_CATS = gql`
    ${USERS_QUERY_FILTER__string}
  `;

  //
  let variables: Record<string, any> = {
    first: POST_PER_PAGE,
  };
  //
  if (!!searchText) {
    variables = {
      first: POST_PER_PAGE,
      search: searchText,
    };
  }

  const { loading, error, data, fetchMore } = useQuery<Data>(Q_LIST_CATS, {
    notifyOnNetworkStatusChange: true,
    variables,
  });

  useEffect(() => {
    if (typeof data?.users.pageInfo?.total !== "number") {
      return;
    }
    onUpdateTotal(data?.users.pageInfo?.total);
  }, [data]);

  // Function to update the query with the new results
  const updateQuery = (
    previousResult: Data,
    { fetchMoreResult }: { fetchMoreResult?: Data }
  ): Data => {
    if (!fetchMoreResult?.users?.edges.length) return previousResult;
    return {
      ...fetchMoreResult,
      users: {
        ...fetchMoreResult.users,
        edges: [
          ...previousResult?.users?.edges,
          ...fetchMoreResult?.users?.edges,
        ],
      },
    };
  };

  const handleClickLoadmore = () => {
    if (!fetchMore) return;
    const existIDs = data?.users.edges.map((item) => item.node.userId);
    fetchMore({
      variables: {
        exclude: existIDs,
      },
      updateQuery,
    });
  };

  const IS_SKELETON = loading && !data?.users.edges.length;

  return (
    <div className="mt-8 lg:mt-10">
      {/* SECTION STATE */}
      <DataStatementBlockV2
        data={data?.users.edges || []}
        isSkeleton={IS_SKELETON}
        error={error}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 ">
        {IS_SKELETON &&
          Array.from("iiiiiiiiiiiiiiiiiiii").map((_, i) => (
            <CardAuthorBox2Skeleton key={i} />
          ))}

        {(data?.users.edges || []).map((cat) => (
          <CardAuthorBox2 key={cat.node.id} author={cat.node} />
        ))}
      </div>

      {data?.users.pageInfo.hasNextPage && (
        <div className="flex justify-center mt-12 lg:mt-16">
          <ButtonPrimary loading={loading} onClick={handleClickLoadmore}>
            Show me more
          </ButtonPrimary>
        </div>
      )}
    </div>
  );
};

export default TabAuthorsOnSearchPage;
