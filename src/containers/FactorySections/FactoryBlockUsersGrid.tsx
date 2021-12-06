import React, { FC, useRef } from "react";
import ReactDOM from "react-dom";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import { GutenbergAttr__BlockUsersGrid } from "data/gutenbergAttrType";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import useGqlQuerySection from "hooks/useGqlQuerySection";
import useGutenbergSectionWithGQLGetUsers from "hooks/useGutenbergSectionWithGQLGetUsers";

export interface FactoryBlockUsersGridProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergAttr__BlockUsersGrid;
  sectionIndex: number;
}

const FactoryBlockUsersGrid: FC<FactoryBlockUsersGridProps> = ({
  className = "",
  domNode,
  apiSettings,
  sectionIndex,
}) => {
  const { graphQLvariables, graphQLData, settings } = apiSettings;
  const IS_SPECIFIC_DATA = !graphQLvariables && !!graphQLData;

  const { funcGqlQueryGetUsers, IS_SKELETON, LISTS_DATA, error } =
    useGutenbergSectionWithGQLGetUsers({ graphQLvariables, graphQLData });

  // =========================================================
  //
  let ref: React.RefObject<HTMLDivElement> | null = null;
  if (IS_SPECIFIC_DATA) {
    ref = useRef<HTMLDivElement>(null);
  } else {
    ref = useGqlQuerySection(funcGqlQueryGetUsers, sectionIndex).ref;
  }

  // =========================================================

  const renderContent = () => {
    const {
      hasBackground,
      subHeading,
      heading,
      gridClass,
      gridClassCustom,
      userCardName,
      blockLayoutStyle,
    } = settings;

    return (
      <div
        className={`nc-FactoryBlockUsersGrid relative ${
          hasBackground ? "py-16" : ""
        }  ${className}`}
        ref={ref}
      >
        {hasBackground && <BackgroundSection />}

        <div className="relative">
          {/* ------------ */}
          <SectionGridAuthorBox
            authorCardName={userCardName}
            blockLayoutStyle={blockLayoutStyle}
            authorNodes={LISTS_DATA}
            authorNodesLoading={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
            heading={heading}
            subHeading={subHeading}
            gridClass={!!gridClassCustom ? gridClassCustom : gridClass}
            isLoading={IS_SKELETON}
          />

          {/* ------------ */}
          <DataStatementBlockV2
            className="my-5"
            data={LISTS_DATA}
            error={error}
            isSkeleton={IS_SKELETON}
          />
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockUsersGrid;
