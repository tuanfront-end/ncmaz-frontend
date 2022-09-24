import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import { CategoriesNode3 } from "data/postCardType";
import NCMAZ_TRANSLATE from "contains/translate";

export interface CardCategory1Props {
  className?: string;
  taxonomy: CategoriesNode3;
  size?: "large" | "normal";
}

const CardCategory1: FC<CardCategory1Props> = ({
  className = "",
  size = "normal",
  taxonomy,
}) => {
  const { count, name, link, ncTaxonomyMeta } = taxonomy;
  const { color, featuredImage } = ncTaxonomyMeta;

  return (
    <a
      href={link}
      className={`nc-CardCategory1 flex items-center ${className}`}
      data-nc-id="CardCategory1"
    >
      <NcImage
        containerClassName={`flex-shrink-0 ${
          size === "large" ? "w-20 h-20" : "w-12 h-12"
        } rounded-lg mr-4 overflow-hidden z-0`}
        src={featuredImage?.sourceUrl || "."}
        srcSet={featuredImage?.srcSet}
        alt={name}
        imageSizes="IS_SIZES"
        sizes="100px"
      />
      <div>
        <h4
          className={`${
            size === "large" ? "text-lg" : "text-base"
          } nc-card-title text-neutral-900 dark:text-neutral-100 font-semibold`}
        >
          {name}
        </h4>
        <span
          className={`${
            size === "large" ? "text-sm" : "text-xs"
          } block mt-[2px] text-neutral-500 dark:text-neutral-400`}
        >
          {count || 0} {NCMAZ_TRANSLATE["articles"]}
        </span>
      </div>
    </a>
  );
};

export default CardCategory1;
