import React, { FC } from "react";
import ReactDOM from "react-dom";
import { GutenbergApiAttr_BlockWidgetPots } from "data/gutenbergAttrType";
import WidgetPosts from "components/WidgetPosts/WidgetPosts";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import useGqlQuerySection from "hooks/useGqlQuerySection";
import useGutenbergSectionWithGQLGetPosts from "hooks/useGutenbergSectionWithGQLGetPosts";

export interface FactoryBlockWidgetPostsProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockWidgetPots;
  sectionIndex: number;
}

const FactoryBlockWidgetPosts: FC<FactoryBlockWidgetPostsProps> = ({
  domNode,
  apiSettings,
  sectionIndex,
}) => {
  const { graphQLvariables, settings, graphQLData, hasSSrInitData } =
    apiSettings;

  const {
    funcGqlQueryGetPosts,
    loading,
    IS_SKELETON,
    LISTS_POSTS,
    data,
    error,
    fetchMore,
    setTabActiveId,
    tabActiveId,
  } = useGutenbergSectionWithGQLGetPosts({
    graphQLData,
    graphQLvariables,
    hasSSrInitData,
  });

  //
  let ref: React.RefObject<HTMLDivElement> | null = null;
  ref = useGqlQuerySection(funcGqlQueryGetPosts, sectionIndex).ref;

  // =========================================================

  const renderContent = () => {
    return (
      <div ref={ref}>
        <WidgetPosts
          posts={LISTS_POSTS}
          isLoading={IS_SKELETON}
          heading={settings.heading}
          postLoading={Array.from(
            Array(Number(settings.expectedNumberResults || 8) || 8).keys()
          )}
        />
        <DataStatementBlockV2
          className="my-5"
          data={LISTS_POSTS}
          error={error}
          isSkeleton={IS_SKELETON}
        />
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockWidgetPosts;
