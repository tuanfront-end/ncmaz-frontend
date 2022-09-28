import React, { FC, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import ReactDOM from "react-dom";
import { POSTS_SECTION_BY_FILTER__string } from "./queryGraphql";
import { ListPosts } from "data/postCardType";
import Card18 from "components/Card18/Card18";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import Card18Skeleton from "components/Card18/Card18Skeleton";
import useGqlQuerySection from "hooks/useGqlQuerySection";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import NCMAZ_TRANSLATE from "contains/translate";

interface Data {
  posts: ListPosts;
}

interface MegaMenuItemTerm {
  categoryId: number;
  link: string;
  name: string;
  slug: string;
  ncTaxonomyMeta?: {
    color: string;
  };
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

const MegamenuItem: FC<MegamenuItemProps> = ({ domNode, menuItemData }) => {
  // =================== QUERY GRAPHQL ===================
  const { ncmazMenuCustomFields } = menuItemData;
  const [temrActiveId, setTemrActiveId] = useState(
    ncmazMenuCustomFields?.taxonomies?.[0]?.categoryId
  );

  const { taxonomies, numberOfPosts, order, orderBy, showTabFilter } =
    ncmazMenuCustomFields;
  //

  let variables = {};
  //

  let categoryIn = [];
  if (showTabFilter) {
    categoryIn = [temrActiveId];
  } else {
    categoryIn = taxonomies?.map((item) => item.categoryId) || [];
  }

  // HIEN TAI GRAPHQL CHUA HO TRO PAGINATION CHO CAC FILTER orderBy
  variables = {
    // order,
    // field: orderBy,
    categoryIn,
    first: Number(numberOfPosts),
  };

  const gqlQuery = gql`
    ${POSTS_SECTION_BY_FILTER__string}
  `;

  const [gqlQueryGetPosts, { loading, error, data, fetchMore }] =
    useLazyQuery<Data>(gqlQuery, {
      notifyOnNetworkStatusChange: true,
      variables,
    });

  // =========================================================
  const { ref } = useGqlQuerySection(gqlQueryGetPosts, 999);
  // =========================================================

  const pageInfo = data?.posts?.pageInfo;
  const POSTS = data?.posts.edges || [];
  const IS_SKELETON = loading;

  const handleMoutEnterTerm = (term: MegaMenuItemTerm) => {
    setTemrActiveId(term.categoryId);
  };

  const updateQuery = (
    previousResult: Data,
    { fetchMoreResult }: { fetchMoreResult?: Data }
  ) => {
    return fetchMoreResult?.posts?.edges.length
      ? fetchMoreResult
      : previousResult;
  };

  const renderPagination = () => {
    if (!pageInfo?.hasPreviousPage && !pageInfo?.hasNextPage) {
      return null;
    }

    let btnClassName =
      "px-4 py-1.5 text-xs bg-white dark:bg-neutral-900 border border-neutral-200 hover:border-neutral-300 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center  -- disabled:opacity-70 disabled:text-gray-500  disabled:cursor-default disabled:hover:border-neutral-200 dark:disabled:hover:border-neutral-6000";
    return (
      <div className="nc-NextPrev mt-6 relative flex items-center justify-center text-neutral-900 dark:text-neutral-300 space-x-2.5 ">
        <button
          className={btnClassName}
          disabled={!pageInfo.hasPreviousPage || loading}
          onClick={() => {
            fetchMore &&
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
          <ArrowLeftIcon className="w-3.5 h-3.5" />
          <span className="ml-1.5">{NCMAZ_TRANSLATE["prev"]}</span>
        </button>
        <button
          className={btnClassName}
          disabled={!pageInfo.hasNextPage || loading}
          onClick={() => {
            fetchMore &&
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
          <span className="mr-1.5">{NCMAZ_TRANSLATE["next"]}</span>
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  };

  const renderLeft = () => {
    const { taxonomies } = menuItemData.ncmazMenuCustomFields;
    return (
      <div className="w-1/5 py-6 pr-4 flex-shrink-0">
        {(taxonomies || []).map((item) => {
          const isActive = item.categoryId === temrActiveId;
          return (
            <div
              className={`group py-2.5 pl-8 flex items-center justify-between relative rounded-r-full cursor-pointer ${
                isActive
                  ? "bg-primary-50 dark:bg-neutral-800 text-primary-900 font-medium dark:text-primary-50"
                  : "hover:bg-neutral-100/80 dark:hover:bg-neutral-800/50"
              }`}
              key={item.categoryId}
              onClick={() => handleMoutEnterTerm(item)}
            >
              <span>{item.name}</span>
              <a
                className={`pr-5 pl-2 ${
                  isActive ? "block" : "hidden group-hover:block"
                }`}
                href={item.link}
              >
                <ArrowRightIcon className={`w-4 h-4`} />
              </a>
            </div>
          );
        })}
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
        <div className="p-6">
          <DataStatementBlockV2
            className="my-5"
            data={POSTS}
            error={error}
            isSkeleton={IS_SKELETON}
          />

          {/* LOOP ITEMS */}
          {IS_SKELETON || POSTS.length ? (
            <div
              className={`grid gap-6 ${
                showTabFilter ? "grid-cols-4" : "grid-cols-5"
              }`}
            >
              {IS_SKELETON
                ? Array.from(Array(Number(numberOfPosts) || 10).keys()).map(
                    (_, index) => <Card18Skeleton key={index} />
                  )
                : POSTS.map((item) => (
                    <Card18
                      imageSizes="MEDIUM"
                      post={item.node}
                      key={item.node.id}
                    />
                  ))}
            </div>
          ) : null}

          {renderPagination()}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div ref={ref} className="nc-megamenu-item absolute top-full inset-x-0 ">
        <div className="w-full flex overflow-hidden rounded-xl shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 ">
          {showTabFilter && renderLeft()}
          {renderRight()}
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default MegamenuItem;
