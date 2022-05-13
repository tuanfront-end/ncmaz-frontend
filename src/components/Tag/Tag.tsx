import { CategoriesNode3, TagNode3 } from "data/postCardType";
import React, { FC } from "react";

export interface TagProps {
  className?: string;
  tag: TagNode3;
  hideCount?: boolean;
}

const Tag: FC<TagProps> = ({ className = "", tag, hideCount = false }) => {
  const { count, name, link, ncTaxonomyMeta } = tag;

  return (
    <a
      className={`nc-Tag inline-block bg-white text-sm text-neutral-600 py-2 px-3 rounded-lg border border-neutral-100 md:py-2.5 md:px-4 dark:bg-neutral-700 dark:text-neutral-300 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-500 ${className}`}
      data-nc-id="Tag"
      href={link}
    >
      {`${name}`}
      {!hideCount && count && (
        <span className="text-xs font-normal"> ({count})</span>
      )}
    </a>
  );
};

export default Tag;
