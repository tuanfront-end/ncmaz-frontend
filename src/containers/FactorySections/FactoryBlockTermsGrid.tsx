import React, { FC, useRef } from "react";
import ReactDOM from "react-dom";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import { GutenbergApiAttr_BlockTermGrid } from "data/gutenbergAttrType";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import useGqlQuerySection from "hooks/useGqlQuerySection";
import useGutenbergSectionWithGQLGetTerms from "hooks/useGutenbergSectionWithGQLGetTerms";

export interface FactoryBlockTermsGridProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockTermGrid;
  sectionIndex: number;
}

const FactoryBlockTermsGrid: FC<FactoryBlockTermsGridProps> = ({
  className = "",
  domNode,
  apiSettings,
  sectionIndex,
}) => {
  const { graphQLvariables, graphQLData, settings } = apiSettings;
  const IS_SPECIFIC_DATA = !graphQLvariables && !!graphQLData;

  const { IS_SKELETON, LIST_TERMS, error, funcGqlQueryGetTerms } =
    useGutenbergSectionWithGQLGetTerms({ graphQLvariables, graphQLData });

  //
  let ref: React.RefObject<HTMLDivElement> | null = null;
  if (IS_SPECIFIC_DATA) {
    ref = useRef<HTMLDivElement>(null);
  } else {
    ref = useGqlQuerySection(funcGqlQueryGetTerms, sectionIndex).ref;
  }

  const renderContent = () => {
    const {
      hasBackground,
      subHeading,
      heading,
      termCardName,
      gridClass,
      gridClassCustom,
      blockLayoutStyle,
    } = settings;
    const isBg = hasBackground;

    return (
      <div
        className={`nc-FactoryBlockTermsGrid relative  ${
          isBg ? "py-16" : ""
        }  ${className}`}
        ref={ref}
      >
        {isBg && <BackgroundSection />}

        <div className="relative">
          {/* ------------ */}
          <SectionGridCategoryBox
            categories={LIST_TERMS}
            heading={heading}
            subHeading={subHeading}
            headingCenter={blockLayoutStyle === "layout-1"}
            categoryCardType={termCardName}
            gridClass={!!gridClassCustom ? gridClassCustom : gridClass}
            isLoadingSkeleton={IS_SKELETON}
          />

          {/* ------------ */}
          <DataStatementBlockV2
            data={LIST_TERMS}
            isSkeleton={IS_SKELETON}
            error={error}
          />
          {/* ------------ */}
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockTermsGrid;
