import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import { TwMainColor } from "data/types";
import Badge from "components/Badge/Badge";
import { CategoriesNode3 } from "data/postCardType";

export interface CardCategory5Props {
  className?: string;
  taxonomy: CategoriesNode3;
}

const CardCategory5: FC<CardCategory5Props> = ({
  className = "",
  taxonomy,
}) => {
  const { count, name, link, ncTaxonomyMeta } = taxonomy;
  const { color, featuredImage } = ncTaxonomyMeta;

  return (
    <a
      href={link}
      className={`nc-CardCategory5 relative block group ${className}`}
      data-nc-id="CardCategory5"
    >
      <div
        className={`flex-shrink-0 relative w-full aspect-w-7 aspect-h-5 h-0 rounded-2xl sm:rounded-3xl overflow-hidden z-0 group`}
      >
        <NcImage
          src={featuredImage?.sourceUrl || "."}
          srcSet={featuredImage?.srcSet}
          alt={name}
          className="object-cover w-full h-full rounded-2xl"
        />
        <span className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></span>
      </div>
      <Badge
        className="hidden sm:block absolute top-3 right-3"
        color={color as TwMainColor}
        name={
          <div>
            {count}
            <i className="ml-3 las la-arrow-right"></i>
          </div>
        }
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3
          className={`text-sm sm:text-base font-medium px-3 py-1.5 sm:px-6 sm:py-3 bg-white text-neutral-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-full border-2 border-white border-opacity-60`}
        >
          <span className="line-clamp-1"> {name}</span>
        </h3>
      </div>
    </a>
  );
};

export default CardCategory5;
