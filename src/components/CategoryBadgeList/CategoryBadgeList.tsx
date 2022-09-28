import React, { FC } from "react";
import Badge from "components/Badge/Badge";
import { PostNode } from "data/postCardType";
import { TwMainColor } from "data/types";

export interface CategoryBadgeListProps {
  className?: string;
  itemClass?: string;
  categories: PostNode["categories"];
  // numberCategoriesWillShow = -1 means show all categories
  numberCategoriesWillShow?: number;
}

const CategoryBadgeList: FC<CategoryBadgeListProps> = ({
  className = "",
  itemClass = "",
  categories,
  numberCategoriesWillShow = 3,
}) => {
  return (
    <div
      className={`nc-CategoryBadgeList flow-root `}
      data-nc-id="CategoryBadgeList"
    >
      <div className={`flex flex-wrap space-x-2 -my-1 ${className}`}>
        {(categories || { edges: [] }).edges.map((item, index) => {
          if (
            numberCategoriesWillShow !== -1 &&
            index >= numberCategoriesWillShow
          ) {
            return null;
          }
          return (
            <Badge
              className={`relative my-1 text-[10px] sm:text-xs ${itemClass}`}
              key={index}
              name={item.node.name}
              href={item.node.link}
              color={item.node?.ncTaxonomyMeta?.color as TwMainColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBadgeList;
