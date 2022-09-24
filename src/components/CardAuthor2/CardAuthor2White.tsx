import React, { FC } from "react";
import Avatar from "components/Avatar/Avatar";
import { CardAuthor2Props } from "./CardAuthor2";

export interface CardAuthor2WhiteProps extends CardAuthor2Props {}

const CardAuthor2White: FC<CardAuthor2WhiteProps> = ({
  className = "",
  author,
  readingTimeShortcode,
  date,
}) => {
  if (!author) return null;
  const { name, username, url, uri = "/", avatar, ncUserMeta } = author.node;
  return (
    <a
      href={url + uri}
      className={`nc-CardAuthor2White relative inline-flex items-center ${className}`}
      data-nc-id="CardAuthor2White"
    >
      <Avatar
        sizeClass="h-10 w-10 text-base"
        containerClassName="flex-shrink-0 mr-3"
        radius="rounded-full"
        imgUrl={ncUserMeta?.featuredImage?.sourceUrl || avatar?.url}
        srcSet={
          ncUserMeta?.featuredImage?.sourceUrl
            ? ncUserMeta?.featuredImage?.srcSet
            : undefined
        }
        userName={username}
      />
      <div>
        <h4
          className={`text-sm text-neutral-200 hover:text-white dark:text-neutral-700 dark:hover:text-black font-medium`}
        >
          {name}
        </h4>
        <span
          className={`flex items-center mt-1 text-xs text-neutral-300 dark:text-neutral-700`}
        >
          <span>{date}</span>
          {readingTimeShortcode && (
            <>
              <span className="mx-1 opacity-0 group-hover:opacity-100 transition-opacity">
                ·
              </span>
              <span
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                dangerouslySetInnerHTML={{ __html: readingTimeShortcode }}
              />
            </>
          )}
        </span>
      </div>
    </a>
  );
};

export default CardAuthor2White;
