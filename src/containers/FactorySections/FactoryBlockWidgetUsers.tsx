import React, { FC } from "react";
import ReactDOM from "react-dom";
import { GutenbergApiAttr_BlockWidgetUsers } from "data/gutenbergAttrType";
import WidgetAuthors from "components/WidgetAuthors/WidgetAuthors";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import useGqlQuerySection from "hooks/useGqlQuerySection";
import useGutenbergSectionWithGQLGetUsers from "hooks/useGutenbergSectionWithGQLGetUsers";

export interface FactoryBlockWidgetUsersProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockWidgetUsers;
  sectionIndex: number;
}

const FactoryBlockWidgetUsers: FC<FactoryBlockWidgetUsersProps> = ({
  className = "",
  domNode,
  apiSettings,
  sectionIndex,
}) => {
  const { graphQLvariables, graphQLData, settings, hasSSrInitData } =
    apiSettings;

  const { funcGqlQueryGetUsers, IS_SKELETON, LISTS_DATA, error } =
    useGutenbergSectionWithGQLGetUsers({
      graphQLvariables,
      graphQLData,
      hasSSrInitData,
    });

  // =========================================================
  //
  let ref: React.RefObject<HTMLDivElement> | null = null;
  ref = useGqlQuerySection(funcGqlQueryGetUsers, sectionIndex).ref;

  const renderContent = () => {
    return (
      <div ref={ref}>
        <WidgetAuthors
          authors={LISTS_DATA}
          heading={settings.heading}
          isLoading={IS_SKELETON}
          authorsLoading={Array.from(
            Array(Number(settings.expectedNumberResults || 8) || 8).keys()
          )}
        />

        {/* ------------ */}
        <DataStatementBlockV2
          className="my-5"
          data={LISTS_DATA}
          error={error}
          isSkeleton={IS_SKELETON}
        />
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockWidgetUsers;
