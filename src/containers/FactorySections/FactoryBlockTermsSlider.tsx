import React, { FC, useRef } from "react";
import ReactDOM from "react-dom";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import { GutenbergApiAttr_BlockTermSlider } from "data/gutenbergAttrType";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import useGqlQuerySection from "hooks/useGqlQuerySection";
import useGutenbergSectionWithGQLGetTerms from "hooks/useGutenbergSectionWithGQLGetTerms";

export interface FactoryBlockTermsSliderProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockTermSlider;
  sectionIndex: number;
}

const FactoryBlockTermsSlider: FC<FactoryBlockTermsSliderProps> = ({
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
    const { hasBackground, subHeading, heading, termCardName, itemPerView } =
      settings;
    const isBg = hasBackground;

    return (
      <div
        className={`nc-FactoryBlockTermsSlider relative ${
          isBg ? "py-16" : ""
        }  ${className}`}
        ref={ref}
      >
        {isBg && <BackgroundSection />}

        <div className="relative">
          <SectionSliderNewCategories
            categories={LIST_TERMS}
            heading={heading}
            subHeading={subHeading}
            categoryCardType={termCardName}
            itemPerRow={itemPerView}
            isLoading={IS_SKELETON}
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

export default FactoryBlockTermsSlider;
