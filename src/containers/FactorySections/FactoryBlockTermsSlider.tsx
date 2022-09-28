import React, { FC } from "react";
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
  const { graphQLvariables, graphQLData, settings, hasSSrInitData } =
    apiSettings;

  const {
    IS_SKELETON,
    LIST_TERMS,
    error,
    funcGqlQueryGetTerms,
    DONOT_ANY_THING,
  } = useGutenbergSectionWithGQLGetTerms({
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
      //
      itemPerView,
      sliderAnimationDuration,
      sliderAutoplayTime,
      sliderHoverpause,
      sliderRewind,
      sliderStartAt,
    } = settings;
    const isBg = hasBackground;

    return (
      <div
        className={`nc-FactoryBlockTermsSlider relative ${
          isBg ? "py-14 sm:py-16" : ""
        } ${className}`}
        ref={ref}
      >
        {isBg && <BackgroundSection />}

        <div className="relative">
          <SectionSliderNewCategories
            categories={LIST_TERMS}
            heading={heading}
            subHeading={subHeading}
            categoryCardType={termCardName}
            isLoading={IS_SKELETON}
            //
            itemPerView={itemPerView}
            sliderAnimationDuration={sliderAnimationDuration}
            sliderAutoplayTime={sliderAutoplayTime}
            sliderHoverpause={sliderHoverpause}
            sliderRewind={sliderRewind}
            sliderStartAt={sliderStartAt}
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
