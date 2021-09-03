import React, { FC } from "react";
import ReactDOM from "react-dom";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import { GutenbergApiAttr_BlockVideos } from "data/gutenbergAttrType";
import SectionVideos from "components/SectionVideos/SectionVideos";

export interface FactoryBlockTermsSliderProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockVideos;
}

const FactoryBlockVideos: FC<FactoryBlockTermsSliderProps> = ({
  className = "",
  domNode,
  apiSettings,
}) => {
  const renderContent = () => {
    const { hasBackground, subHeading, heading, videoIds } =
      apiSettings.settings;

    return (
      <div
        className={`nc-FactoryBlockVideos relative  ${
          hasBackground ? "py-16" : ""
        }  ${className}`}
      >
        {hasBackground && <BackgroundSection />}
        <SectionVideos
          videoIds={videoIds}
          heading={heading}
          subHeading={subHeading}
        />
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockVideos;
