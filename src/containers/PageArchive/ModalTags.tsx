import React, { FC } from "react";
import NcModal from "components/NcModal/NcModal";
import Tag from "components/Tag/Tag";
import { CategoriesNode3, TagNode3 } from "data/postCardType";
import { useLazyQuery, gql } from "@apollo/client";
import { GET_LIST_TAGS } from "./queryGraphql";
import ButtonPrimary from "components/Button/ButtonPrimary";
import { PageInfo } from "containers/SingleComments/commentType";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import Skeleton from "react-loading-skeleton";
import NCMAZ_TRANSLATE from "contains/translate";

interface Data {
  tags: Tags;
}
export interface Tags {
  edges: Edge[];
  pageInfo: PageInfo;
  __typename: string;
}
interface Edge {
  node: TagNode3;
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
    if (data?.tags.edges.length) {
      return;
    }
    getListTags({ variables: { first: POST_PER_PAGE } });
  };

  // Function to update the query with the new results
  const updateQuery = (
    previousResult: Data,
    { fetchMoreResult }: { fetchMoreResult?: Data }
  ): Data => {
    if (!fetchMoreResult?.tags?.edges.length) return previousResult;
    return {
      ...fetchMoreResult,
      tags: {
        ...fetchMoreResult.tags,
        edges: [
          ...previousResult?.tags?.edges,
          ...fetchMoreResult?.tags?.edges,
        ],
      },
    };
  };

  const handleClickLoadmore = () => {
    if (!fetchMore) return;
    fetchMore({
      variables: {
        first: POST_PER_PAGE,
        after: data?.tags.pageInfo.endCursor || null,
      },
      updateQuery,
    });
  };

  const IS_SKELETON = loading && !data?.tags.edges.length;

  const renderModalContent = () => {
    return (
      <div className="flex flex-col items-center space-y-5">
        {/* SECTION STATE */}
        <DataStatementBlockV2
          data={data?.tags.edges || []}
          isSkeleton={IS_SKELETON}
          error={error}
        />

        <div className="w-full flex flex-wrap dark:text-neutral-200">
          {IS_SKELETON &&
            Array.from("iiiiiiiiiiiiiiiiiiiiiiiiiiii").map((_, i) => (
              <Skeleton
                key={i}
                height="38px"
                className="mr-2.5 mb-2"
                width="90px"
              />
            ))}

          {(data?.tags.edges || []).map((tag) => (
            <Tag key={tag.node.id} tag={tag.node} className="mr-2 mb-2" />
          ))}
        </div>

        {data?.tags.pageInfo.hasNextPage && (
          <ButtonPrimary loading={loading} onClick={handleClickLoadmore}>
            {NCMAZ_TRANSLATE["showMeMore"]}
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
            <span className="hidden sm:inline">
              {NCMAZ_TRANSLATE["otherTags"]}
            </span>{" "}
            <span className="inline sm:hidden">{NCMAZ_TRANSLATE["tags"]}</span>
          </span>
        }
        modalTitle={NCMAZ_TRANSLATE["discoverOtherTags"]}
        renderContent={renderModalContent}
      />
    </div>
  );
};

export default ModalTags;
