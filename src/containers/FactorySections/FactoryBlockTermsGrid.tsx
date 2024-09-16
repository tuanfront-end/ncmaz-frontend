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
  const { graphQLvariables, graphQLData, settings, hasSSrInitData } =
    apiSettings;

  const { IS_SKELETON, LIST_TERMS, error, funcGqlQueryGetTerms } =
    useGutenbergSectionWithGQLGetTerms({
      graphQLvariables,
      graphQLData,
      hasSSrInitData,
    });

  //
  let ref: React.RefObject<HTMLDivElement> | null = null;
  ref = useGqlQuerySection(funcGqlQueryGetTerms, sectionIndex).ref;

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
          isBg ? "py-14 sm:py-16" : ""
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
            isLoadingSkeletonArr={Array.from(
              Array(Number(settings.expectedNumberResults || 8) || 8).keys()
            )}
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
