import CardCategory1 from "components/CardCategory1/CardCategory1";
import CardCategory1Skeleton from "components/CardCategory1/CardCategory1Skeleton";
import Tag from "components/Tag/Tag";
import WidgetHeading1 from "components/WidgetHeading1/WidgetHeading1";
import { CategoriesEdge2 } from "data/postCardType";
import React, { FC } from "react";

export interface WidgetCategoriesProps {
  className?: string;
  heading?: string;
  termCardName?: "card1" | "tag-card";
  categories: CategoriesEdge2[];
  categoriesLoading?: any[];
  isLoading?: boolean;
}

const WidgetCategories: FC<WidgetCategoriesProps> = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
  termCardName = "card1",
  heading = "",
  categories,
  categoriesLoading = [1, 1, 1, 1],
  isLoading,
}) => {
  const renderCard = (term: CategoriesEdge2, index: number) => {
    switch (termCardName) {
      case "card1":
        return (
          <CardCategory1
            className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={index}
            taxonomy={term.node}
            size="normal"
          />
        );
      case "tag-card":
        return <Tag className="mr-2 mb-2" key={index} tag={term.node as any} />;

      default:
        return null;
    }
  };

  const renderCardLoading = (_: any, index: number) => {
    switch (termCardName) {
      case "card1":
        return (
          <CardCategory1Skeleton
            className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={index}
            size="normal"
          />
        );
      case "tag-card":
        return (
          <div
            className="mr-2 mb-2 w-20 h-8 bg-neutral-200 dark:bg-neutral-700 rounded"
            key={index}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`nc-WidgetCategories rounded-3xl  overflow-hidden ${className}`}
      data-nc-id="WidgetCategories"
    >
      {heading && <WidgetHeading1 title={heading} />}
      <div className="flow-root">
        <div
          className={`flex ${
            termCardName === "card1"
              ? "flex-col divide-y divide-neutral-200 dark:divide-neutral-700"
              : "flex-wrap p-4 xl:p-5"
          }`}
        >
          {isLoading
            ? categoriesLoading.map(renderCardLoading)
            : categories.map(renderCard)}
        </div>
      </div>
    </div>
  );
};

export default WidgetCategories;
