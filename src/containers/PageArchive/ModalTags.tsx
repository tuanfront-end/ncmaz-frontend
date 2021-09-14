import React, { FC } from "react";
import NcModal from "components/NcModal/NcModal";
import Tag from "components/Tag/Tag";
import { CategoriesNode3 } from "data/postCardType";
import { useLazyQuery, gql } from "@apollo/client";
import { GET_LIST_TAGS } from "./queryGraphql";
import DataStatementBlock from "components/DataStatementBlock/DataStatementBlock";
import ButtonPrimary from "components/Button/ButtonPrimary";
import { PageInfo } from "containers/SingleComments/commentType";

interface Data {
  tags: Tags;
}
interface Tags {
  edges: Edge[];
  pageInfo: PageInfo;
  __typename: string;
}
interface Edge {
  node: CategoriesNode3;
  __typename: string;
}

export interface ModalTagsProps {}

const ModalTags: FC<ModalTagsProps> = () => {
  //
  const POST_PER_PAGE = 30;
  const Q_LIST_TAGS = gql`
    ${GET_LIST_TAGS}
  `;
  const [getListTags, { error, data, fetchMore, loading }] = useLazyQuery<Data>(
    Q_LIST_TAGS,
    { notifyOnNetworkStatusChange: true }
  );

  const handleClickOpen = () => {
    getListTags({ variables: { first: POST_PER_PAGE } });
  };

  const handleClickLoadmore = () => {
    if (!fetchMore) return;
    fetchMore({
      variables: {
        first: POST_PER_PAGE,
        after: data?.tags.pageInfo.endCursor || null,
      },
    });
  };

  const renderModalContent = () => {
    return (
      <div className="flex flex-col items-center space-y-5">
        <DataStatementBlock
          loading={loading}
          error={error}
          data={data?.tags.edges || []}
        />
        <div className="flex flex-wrap dark:text-neutral-200">
          {(data?.tags.edges || []).map((tag) => (
            <Tag key={tag.node.id} tag={tag.node} className="mr-2 mb-2" />
          ))}
        </div>

        {data?.tags.pageInfo.hasNextPage && (
          <ButtonPrimary loading={loading} onClick={handleClickLoadmore}>
            Show me more
          </ButtonPrimary>
        )}
      </div>
    );
  };

  return (
    <div className="nc-ModalTags">
      <NcModal
        contentExtraClass="max-w-screen-md"
        onOpenModal={handleClickOpen}
        triggerText={
          <span>
            <span className="hidden sm:inline">Other</span> Tags
          </span>
        }
        modalTitle="Discover other tags"
        renderContent={renderModalContent}
      />
    </div>
  );
};

export default ModalTags;
