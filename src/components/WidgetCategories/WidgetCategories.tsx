import CardCategory1 from "components/CardCategory1/CardCategory1";
import Tag from "components/Tag/Tag";
import WidgetHeading1 from "components/WidgetHeading1/WidgetHeading1";
import { CategoriesEdge2 } from "data/postCardType";
import React, { FC } from "react";

export interface WidgetCategoriesProps {
  className?: string;
  heading?: string;
  termCardName?: "card1" | "tag-card";
  categories: CategoriesEdge2[];
}

const WidgetCategories: FC<WidgetCategoriesProps> = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
  termCardName = "card1",
  heading = "",
  categories,
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
        return <Tag className="mr-2 mb-2" key={index} tag={term.node} />;

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
          {categories.map(renderCard)}
        </div>
      </div>
    </div>
  );
};

export default WidgetCategories;
