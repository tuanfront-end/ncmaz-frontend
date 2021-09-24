import React, { FC } from "react";
import Avatar from "components/Avatar/Avatar";
import { PostNode } from "data/postCardType";
import ncFormatDate from "utils/formatDate";

export interface CardAuthor2Props {
  date: PostNode["date"];
  author: PostNode["author"];
  className?: string;
  readingTimeShortcode?: string;
  hoverReadingTime?: boolean;
}

const CardAuthor2: FC<CardAuthor2Props> = ({
  className = "",
  author,
  readingTimeShortcode = "",
  date,
  hoverReadingTime = true,
}) => {
  if (!author) return null;
  const { node } = author;
  return (
    <a
      href={frontendObject.homeURL + node.uri}
      className={`nc-CardAuthor2 relative inline-flex items-center ${className}`}
      data-nc-id="CardAuthor2"
    >
      <Avatar
        sizeClass="h-10 w-10 text-base"
        containerClassName="flex-shrink-0 mr-3"
        radius="rounded-full"
        imgUrl={node.avatar?.url}
        userName={node.username}
      />
      <div>
        <h2
          className={`text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium`}
        >
          {node.name}
        </h2>
        <span
          className={`flex items-center mt-1 text-xs text-neutral-500 dark:text-neutral-400`}
        >
          <span>{ncFormatDate(date || "")}</span>
          {readingTimeShortcode && (
            <>
              <span
                className={`hidden lg:inline mx-1 transition-opacity ${
                  hoverReadingTime ? "opacity-0 group-hover:opacity-100" : ""
                }`}
              >
                ·
              </span>
              <span
                className={`hidden lg:inline transition-opacity ${
                  hoverReadingTime ? "opacity-0 group-hover:opacity-100" : ""
                }`}
                dangerouslySetInnerHTML={{ __html: readingTimeShortcode }}
              />
            </>
          )}
        </span>
      </div>
    </a>
  );
};

export default CardAuthor2;
