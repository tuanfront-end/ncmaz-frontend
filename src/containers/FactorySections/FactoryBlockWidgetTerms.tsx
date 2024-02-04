import React, { FC } from "react";
import ReactDOM from "react-dom";
import { GutenbergApiAttr_BlockWidgetTerms } from "data/gutenbergAttrType";
import WidgetCategories from "components/WidgetCategories/WidgetCategories";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import useGqlQuerySection from "hooks/useGqlQuerySection";
import useGutenbergSectionWithGQLGetTerms from "hooks/useGutenbergSectionWithGQLGetTerms";

export interface FactoryBlockWidgetTermsProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockWidgetTerms;
  sectionIndex: number;
}

const FactoryBlockWidgetTerms: FC<FactoryBlockWidgetTermsProps> = ({
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
    return (
      <div ref={ref}>
        <WidgetCategories
          categories={LIST_TERMS}
          heading={settings.heading}
          termCardName={settings.termCardName}
          isLoading={IS_SKELETON}
          categoriesLoading={Array.from(
            Array(Number(settings.expectedNumberResults || 8) || 8).keys()
          )}
        />

        <DataStatementBlockV2
          className="my-5"
          data={LIST_TERMS}
          error={error}
          isSkeleton={IS_SKELETON}
        />
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockWidgetTerms;
