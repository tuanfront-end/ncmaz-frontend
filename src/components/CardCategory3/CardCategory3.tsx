import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import { CategoriesNode3 } from "data/postCardType";
import NCMAZ_TRANSLATE from "contains/translate";

export interface CardCategory3Props {
  className?: string;
  taxonomy: CategoriesNode3;
}

const CardCategory3: FC<CardCategory3Props> = ({
  className = "",
  taxonomy,
}) => {
  const { count, name, link, ncTaxonomyMeta } = taxonomy;
  const { color, featuredImage } = ncTaxonomyMeta;

  return (
    <a
      href={link}
      className={`nc-CardCategory3 flex flex-col ${className}`}
      data-nc-id="CardCategory3"
    >
      <div
        className={`flex-shrink-0 relative w-full aspect-w-5 aspect-h-4 sm:aspect-h-5 h-0 rounded-2xl overflow-hidden z-0 group`}
      >
        <NcImage
          src={featuredImage?.sourceUrl || "."}
          srcSet={featuredImage?.srcSet}
          imageSizes="MEDIUM"
          alt={name}
          className="object-cover w-full h-full rounded-2xl"
        />
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>
      <div className="mt-3 truncate pl-2.5">
        <h4
          className={`text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-semibold truncate`}
        >
          {name}
        </h4>
        <span
          className={`block mt-1 text-sm text-neutral-6000 dark:text-neutral-400`}
        >
          {count} {NCMAZ_TRANSLATE["articles"]}
        </span>
      </div>
    </a>
  );
};

export default CardCategory3;
