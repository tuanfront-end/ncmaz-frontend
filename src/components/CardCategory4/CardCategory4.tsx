import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import { TwMainColor } from "data/types";
import Badge from "components/Badge/Badge";
import { CategoriesNode3 } from "data/postCardType";
import NCMAZ_TRANSLATE from "contains/translate";

export interface CardCategory4Props {
  className?: string;
  taxonomy: CategoriesNode3;
  index?: string;
}

const CardCategory4: FC<CardCategory4Props> = ({
  className = "",
  taxonomy,
  index,
}) => {
  const { count, name, link, ncTaxonomyMeta } = taxonomy;
  const { color, featuredImage } = ncTaxonomyMeta;

  const getColorClass = () => {
    switch (color) {
      case "pink":
        return "bg-pink-500";
      case "red":
        return "bg-red-500";
      case "gray":
        return "bg-gray-500";
      case "green":
        return "bg-green-500";
      case "purple":
        return "bg-purple-500";
      case "indigo":
        return "bg-indigo-500";
      case "yellow":
        return "bg-yellow-500";
      case "blue":
        return "bg-blue-500";
      default:
        return "bg-pink-500";
    }
  };

  return (
    <a
      href={link}
      className={`nc-CardCategory4 flex flex-col ${className}`}
      data-nc-id="CardCategory4"
    >
      <div
        className={`flex-shrink-0 relative w-full aspect-w-7 aspect-h-5 h-0 rounded-3xl overflow-hidden z-0 group`}
      >
        <NcImage
          src={featuredImage?.sourceUrl || "."}
          srcSet={featuredImage?.srcSet}
          alt={name}
          className="object-cover w-full h-full rounded-2xl"
          imageSizes="MEDIUM"
        />
        <div>
          {index && (
            <Badge
              color={color as TwMainColor}
              name={index}
              className="absolute top-3 left-3"
            />
          )}
        </div>
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>

      <div className="flex items-center mt-2.5 sm:mt-5">
        <div
          className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 ${getColorClass()} rounded-full`}
        ></div>
        <div className="ml-3 truncate">
          <h3 className="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate">
            {name}
          </h3>
          <span className="block sm:mt-1 text-sm text-neutral-6000 dark:text-neutral-400">
            {count} {NCMAZ_TRANSLATE["articles"]}
          </span>
        </div>
      </div>
    </a>
  );
};

export default CardCategory4;
