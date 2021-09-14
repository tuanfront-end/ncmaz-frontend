import React, { FC, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import ReactDOM from "react-dom";
import { POSTS_SECTION_BY_FILTER__string } from "./queryGraphql";
import { PostNode } from "data/postCardType";
import Card18 from "components/Card18/Card18";
import { GraphQlPageInfo } from "data/types";
import Loading from "components/Loading/Loading";

interface MegaMenuItemTerm {
  categoryId: number;
  link: string;
  name: string;
  slug: string;
}

interface MegaMenuItemData {
  id: string;
  label: string;
  menuItemId: number;
  title?: string;
  ncmazMenuCustomFields: {
    fieldGroupName: string;
    isMegaMenu: boolean;
    numberOfPosts: number;
    order: string;
    orderBy: string;
    showTabFilter: boolean;
    taxonomies?: MegaMenuItemTerm[];
  };
}

export interface MegamenuItemProps {
  domNode: Element;
  menuItemData: MegaMenuItemData;
}

let DATA_LISTS: { node: PostNode }[] = [];

const MegamenuItem: FC<MegamenuItemProps> = ({ domNode, menuItemData }) => {
  // =================== QUERY GRAPHQL ===================
  const { ncmazMenuCustomFields } = menuItemData;

  const [temrActiveId, setTemrActiveId] = useState(
    ncmazMenuCustomFields?.taxonomies?.[0]?.categoryId
  );

  const { taxonomies, numberOfPosts, order, orderBy, showTabFilter } =
    ncmazMenuCustomFields;
  //
  let GQL_QUERY__string = "";
  let variables = {};
  //

  GQL_QUERY__string = POSTS_SECTION_BY_FILTER__string;

  let categoryIn = [];
  if (showTabFilter) {
    categoryIn = [temrActiveId];
  } else {
    categoryIn = taxonomies?.map((item) => item.categoryId) || [];
  }

  // HIEN TAI GRAPHQL CHUA HO TRO PAGINATION CHO CAC FILTER orderBy
  variables = {
    order,
    orderBy,
    categoryIn,
    first: Number(numberOfPosts),
  };

  const gqlQuery = gql`
    ${GQL_QUERY__string}
  `;

  const { loading, error, data, fetchMore } = useQuery(gqlQuery, {
    notifyOnNetworkStatusChange: true,
    variables,
  });

  if (data) {
    DATA_LISTS = data?.posts?.edges || [];
  }

  const pageInfo: GraphQlPageInfo = data?.posts?.pageInfo || {};

  const handleMoutEnterTerm = (term: MegaMenuItemTerm) => {
    setTemrActiveId(term.categoryId);
  };

  // Function to update the query with the new results
  const updateQuery = (previousResult: any, { fetchMoreResult }: any) => {
    return fetchMoreResult?.posts?.edges.length
      ? fetchMoreResult
      : previousResult;
  };

  const renderPagination = () => {
    if (!pageInfo.hasPreviousPage && !pageInfo.hasNextPage) {
      return null;
    }

    let btnClassName =
      "w-10 h-10 bg-white dark:bg-neutral-900 border border-neutral-200 hover:border-neutral-300 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center  -- disabled:opacity-70 disabled:text-gray-500  disabled:cursor-default disabled:hover:border-neutral-200 dark:disabled:hover:border-neutral-6000";
    return (
      <div className="nc-NextPrev mt-8 ml-2 relative flex items-center justify-center text-neutral-900 dark:text-neutral-300 space-x-2.5 ">
        <button
          className={btnClassName}
          disabled={!pageInfo.hasPreviousPage}
          onClick={() => {
            fetchMore({
              variables: {
                first: null,
                after: null,
                last: Number(numberOfPosts),
                before: pageInfo.startCursor || null,
              },
              updateQuery,
            });
          }}
        >
          <i className="las la-angle-left"></i>
        </button>
        <button
          className={btnClassName}
          disabled={!pageInfo.hasNextPage}
          onClick={() => {
            fetchMore({
              variables: {
                first: Number(numberOfPosts),
                after: pageInfo.endCursor || null,
                last: null,
                before: null,
              },
              updateQuery,
            });
          }}
        >
          <i className="las la-angle-right"></i>
        </button>
      </div>
    );
  };

  const renderLeft = () => {
    const { taxonomies } = menuItemData.ncmazMenuCustomFields;
    return (
      <div className="w-1/5 py-5 flex-shrink-0  ">
        <div className="flow-root">
          <ul className="-my-3">
            {(taxonomies || []).map((item) => {
              const isActive = item.categoryId === temrActiveId;
              return (
                <li
                  className={`py-2 px-3 ${
                    isActive ? "bg-neutral-100 dark:bg-neutral-800" : ""
                  }`}
                  key={item.categoryId}
                  onMouseEnter={() => handleMoutEnterTerm(item)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };

  const renderRight = () => {
    return (
      <div
        className={`flex-grow ${
          showTabFilter
            ? "border-l border-neutral-200 dark:border-neutral-800"
            : ""
        }`}
      >
        <div className="px-4 py-5 ">
          {loading && !DATA_LISTS && <Loading />}

          <div
            className={`grid gap-4 ${
              showTabFilter ? "grid-cols-4" : "grid-cols-5"
            }`}
          >
            {DATA_LISTS.map((item) => (
              <Card18
                isSkeleton={loading}
                post={item.node}
                key={item.node.id}
              />
            ))}
          </div>
          {renderPagination()}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className="nc-megamenu-item absolute top-full py-3 -inset-x-10">
        <div className="w-full flex overflow-hidden rounded-2xl shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 ">
          {showTabFilter && renderLeft()}
          {renderRight()}
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default MegamenuItem;
