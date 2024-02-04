import CardCategory1 from "components/CardCategory1/CardCategory1";
import CardCategory1Skeleton from "components/CardCategory1/CardCategory1Skeleton";
import CardCategory2 from "components/CardCategory2/CardCategory2";
import CardCategory2Skeleton from "components/CardCategory2/CardCategory2Skeleton";
import CardCategory3 from "components/CardCategory3/CardCategory3";
import CardCategory3Skeleton from "components/CardCategory3/CardCategory3Skeleton";
import CardCategory4 from "components/CardCategory4/CardCategory4";
import CardCategory4Skeleton from "components/CardCategory4/CardCategory4Skeleton";
import CardCategory5 from "components/CardCategory5/CardCategory5";
import CardCategory5Skeleton from "components/CardCategory5/CardCategory5Skeleton";
import Heading from "components/Heading/Heading";
import { CategoriesEdge2 } from "data/postCardType";
import React from "react";

export interface SectionGridCategoryBoxProps {
  heading: string;
  subHeading: string;
  gridClass?: string;
  categories: CategoriesEdge2[];
  headingCenter?: boolean;
  categoryCardType?: "card1" | "card2" | "card3" | "card4" | "card5";
  className?: string;
  isLoadingSkeleton?: boolean;
  isLoadingSkeletonArr?: any[];
}

const SectionGridCategoryBox: React.FC<SectionGridCategoryBoxProps> = ({
  categories,
  categoryCardType = "card2",
  headingCenter = true,
  className = "",
  heading = "",
  subHeading = "",
  gridClass = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
  isLoadingSkeleton,
  isLoadingSkeletonArr = Array.from("iiiiiiiiii"),
}) => {
  const renderCardSkeleton = (_: any, index: number) => {
    switch (categoryCardType) {
      case "card1":
        return <CardCategory1Skeleton key={index} />;
      case "card2":
        return <CardCategory2Skeleton key={index} />;
      case "card3":
        return <CardCategory3Skeleton key={index} />;
      case "card4":
        return <CardCategory4Skeleton key={index} />;
      case "card5":
        return <CardCategory5Skeleton key={index} />;

      default:
        return <CardCategory2Skeleton key={index} />;
    }
  };

  const renderCard = (item: CategoriesEdge2, index: number) => {
    const topIndex = index < 3 ? `#${index + 1}` : undefined;

    switch (categoryCardType) {
      case "card1":
        return <CardCategory1 key={index} taxonomy={item.node} />;
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
      <div className={`grid ${gridClass} gap-x-2.5 gap-y-4 sm:gap-6 2xl:gap-8`}>
        {isLoadingSkeleton
          ? isLoadingSkeletonArr.map(renderCardSkeleton)
          : categories.map(renderCard)}
      </div>
    </div>
  );
};

export default SectionGridCategoryBox;
