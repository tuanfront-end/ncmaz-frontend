import React, { FC } from "react";
import NcModal from "components/NcModal/NcModal";
import { CategoriesNode3 } from "data/postCardType";
import { useLazyQuery, gql } from "@apollo/client";
import { GET_LIST_CATEGORIES } from "./queryGraphql";
import DataStatementBlock from "components/DataStatementBlock/DataStatementBlock";
import ButtonPrimary from "components/Button/ButtonPrimary";
import CardCategory1 from "components/CardCategory1/CardCategory1";
import { PageInfo } from "containers/SingleComments/commentType";

interface Data {
  categories: Categories;
}
interface Categories {
  edges: Edge[];
  pageInfo: PageInfo;
  __typename: string;
}
interface Edge {
  node: CategoriesNode3;
  __typename: string;
}

export interface ModalCategoriesProps {}

const ModalCategories: FC<ModalCategoriesProps> = () => {
  const POST_PER_PAGE = 30;
  const Q_LIST_CATS = gql`
    ${GET_LIST_CATEGORIES}
  `;

  const [getListCats, { loading, error, data, fetchMore }] = useLazyQuery<Data>(
    Q_LIST_CATS,
    { notifyOnNetworkStatusChange: true }
  );

  const handleClickOpen = () => {
    getListCats({
      variables: { first: POST_PER_PAGE },
    });
  };

  const handleClickLoadmore = () => {
    if (!fetchMore) return;
    fetchMore({
      variables: {
        first: POST_PER_PAGE,
        after: data?.categories.pageInfo.endCursor || null,
      },
    });
  };

  const renderModalContent = () => {
    return (
      <div className="flex flex-col items-center space-y-8">
        <DataStatementBlock
          loading={loading}
          error={error}
          data={data?.categories.edges || []}
        />

        <div className="grid gap-6 sm:grid-cols-2 sm:py-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4 xl:md:grid-cols-5">
          {(data?.categories.edges || []).map((cat) => (
            <CardCategory1
              key={cat.node.id}
              taxonomy={cat.node}
              size="normal"
            />
          ))}
        </div>

        {data?.categories.pageInfo.hasNextPage && (
          <ButtonPrimary loading={loading} onClick={handleClickLoadmore}>
            Show me more
          </ButtonPrimary>
        )}
      </div>
    );
  };

  return (
    <div className="nc-ModalCats">
      <NcModal
        onOpenModal={handleClickOpen}
        triggerText={
          <span>
            <span className="hidden sm:inline">Other</span> Categories
          </span>
        }
        modalTitle="Discover other categories"
        renderContent={renderModalContent}
      />
    </div>
  );
};

export default ModalCategories;
