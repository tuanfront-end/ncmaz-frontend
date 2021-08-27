import CardCategory2 from "components/CardCategory2/CardCategory2";
import CardCategory3 from "components/CardCategory3/CardCategory3";
import CardCategory4 from "components/CardCategory4/CardCategory4";
import CardCategory5 from "components/CardCategory5/CardCategory5";
import Heading from "components/Heading/Heading";
import { CategoriesEdge2 } from "data/postCardType";
import React from "react";

export interface SectionGridCategoryBoxProps {
  heading: string;
  subHeading: string;
  gridClass?: string;
  categories: CategoriesEdge2[];
  headingCenter?: boolean;
  categoryCardType?: "card2" | "card3" | "card4" | "card5";
  className?: string;
}

const SectionGridCategoryBox: React.FC<SectionGridCategoryBoxProps> = ({
  categories,
  categoryCardType = "card2",
  headingCenter = true,
  className = "",
  heading = "",
  subHeading = "",
  gridClass = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
}) => {
  const renderCard = (item: CategoriesEdge2, index: number) => {
    const topIndex = index < 3 ? `#${index + 1}` : undefined;

    switch (categoryCardType) {
      case "card2":
        return (
          <CardCategory2 key={index} index={topIndex} taxonomy={item.node} />
        );
      case "card3":
        return <CardCategory3 key={index} taxonomy={item.node} />;
      case "card4":
        return (
          <CardCategory4 key={index} index={topIndex} taxonomy={item.node} />
        );
      case "card5":
        return <CardCategory5 key={index} taxonomy={item.node} />;

      default:
        return <CardCategory2 key={index} taxonomy={item.node} />;
    }
  };

  return (
    <div className={`nc-SectionGridCategoryBox relative ${className}`}>
      <Heading desc={subHeading} isCenter={headingCenter}>
        {heading}
      </Heading>
      <div className={`grid ${gridClass} gap-6 md:gap-8`}>
        {categories.map(renderCard)}
      </div>
    </div>
  );
};

export default SectionGridCategoryBox;
