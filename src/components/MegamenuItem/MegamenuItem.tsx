import React, { FC, useEffect, useState } from "react";
import { useQuery, gql, ApolloError } from "@apollo/client";
import ReactDOM from "react-dom";
import { POSTS_SECTION_BY_FILTER__string } from "./queryGraphql";
import { PostNode } from "data/postCardType";
import Card10 from "components/Card10/Card10";
import Card18 from "components/Card18/Card18";

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
    taxonomies: MegaMenuItemTerm[];
  };
}

export interface MegamenuItemProps {
  domNode: Element;
  menuItemData: MegaMenuItemData;
}

const MegamenuItem: FC<MegamenuItemProps> = ({ domNode, menuItemData }) => {
  // =================== QUERY GRAPHQL ===================

  const [temrActiveId, setTemrActiveId] = useState(
    menuItemData?.ncmazMenuCustomFields?.taxonomies[0]?.categoryId
  );

  const { ncmazMenuCustomFields } = menuItemData;
  const { taxonomies, numberOfPosts, order, orderBy } = ncmazMenuCustomFields;
  //
  let GQL_QUERY__string = "";
  let variables = {};
  //

  GQL_QUERY__string = POSTS_SECTION_BY_FILTER__string;
  variables = {
    // categoryIn: [temrActiveId],
    categoryIn: taxonomies?.map((item) => item.categoryId) || [],
    order,
    field: orderBy,
    first: Number(numberOfPosts),
  };

  const gqlQuery = gql`
    ${GQL_QUERY__string}
  `;

  const { loading, error, data } = useQuery(gqlQuery, {
    variables,
  });

  const dataLists: { node: PostNode }[] = data?.posts?.edges || [];

  console.log(33, { dataLists, variables });

  const handleMoutEnterTerm = (term: MegaMenuItemTerm) => {
    setTemrActiveId(term.categoryId);
  };

  // const gqlQuery = gql`
  //   ${menuItemQuery}
  // `;

  // const { loading, error, data } = useQuery(gqlQuery, {
  //   variables: { id: menuId },
  // });

  const renderLeft = () => {
    const { taxonomies } = menuItemData.ncmazMenuCustomFields;
    return (
      <div className="w-1/4 py-5 flex-shrink-0 border-r border-neutral-200 ">
        <div className="flow-root">
          <ul className="-my-3">
            {taxonomies.map((item, index) => {
              const isActive = item.categoryId === temrActiveId;
              return (
                <li
                  className={`py-2 px-3 ${isActive ? "bg-neutral-100" : ""}`}
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
      <div className="flex-grow ">
        <div className="px-3 py-6 grid grid-cols-3 gap-8">
          {dataLists.map((item, index) => (
            <Card18 post={item.node} key={index} />
          ))}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className="nc-megamenu-item absolute top-full py-3 inset-x-0">
        <div className="w-full flex overflow-hidden rounded-lg shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 ">
          {renderLeft()}
          {renderRight()}
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default MegamenuItem;
