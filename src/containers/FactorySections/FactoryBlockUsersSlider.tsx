import React, { FC, useRef } from "react";
import ReactDOM from "react-dom";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import { GutenbergAttr__BlockUsersSlider } from "data/gutenbergAttrType";
import SectionSliderNewAuthors from "components/SectionSliderNewAuthors/SectionSliderNewAuthors";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import useGqlQuerySection from "hooks/useGqlQuerySection";
import useGutenbergSectionWithGQLGetUsers from "hooks/useGutenbergSectionWithGQLGetUsers";

export interface FactoryBlockUsersSliderSliderProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergAttr__BlockUsersSlider;
  sectionIndex: number;
}

const FactoryBlockUsersSlider: FC<FactoryBlockUsersSliderSliderProps> = ({
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

  const renderContent = () => {
    const {
      hasBackground,
      subHeading,
      heading,
      itemPerView,
      userCardName,
      blockLayoutStyle,
    } = settings;

    return (
      <div
        className={`nc-FactoryBlockUsersSlider relative ${
          hasBackground ? "py-16" : ""
        }  ${className}`}
        ref={ref}
      >
        {hasBackground && <BackgroundSection />}

        <div className="relative">
          {/* ------------ */}
          <SectionSliderNewAuthors
            authorCardName={userCardName}
            blockLayoutStyle={blockLayoutStyle}
            itemPerView={itemPerView}
            authorNodes={LISTS_DATA}
            heading={heading}
            subHeading={subHeading}
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

export default FactoryBlockUsersSlider;
