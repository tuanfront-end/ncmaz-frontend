import React, { FC } from "react";
import CardAuthor2 from "components/CardAuthor2/CardAuthor2";
import { PostNode } from "data/postCardType";
import Badge from "components/Badge/Badge";

export interface Card5Props {
  className?: string;
  post: PostNode;
  index?: number;
}

const Card5: FC<Card5Props> = ({ className = "", post, index }) => {
  const { author, title, link, id, date, categories, ncPostMetaData } = post;
  let INDEX = "";
  if (typeof index === "number") {
    INDEX = index < 10 ? `#0${index}` : `#${index}`;
  }

  return (
    <div
      className={`nc-Card5 relative p-5 group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="Card5"
      data-nc-post-id={id}
    >
      <a href={link} className="absolute inset-0 rounded-lg"></a>

      <div className="flex flex-col">
        <div>
          {INDEX ? (
            <Badge
              color={
                index == 1
                  ? "blue"
                  : index == 2
                  ? "red"
                  : index == 3
                  ? "yellow"
                  : "gray"
              }
              name={INDEX}
              className="!text-sm px-3.5 py-1.5 "
            />
          ) : null}
        </div>
        <h3
          className="block text-base font-semibold text-neutral-800 dark:text-neutral-300 my-4"
          title={title}
        >
          <a
            href={link}
            className="line-clamp-2"
            title={title}
            dangerouslySetInnerHTML={{ __html: title || "" }}
          ></a>
        </h3>
        <CardAuthor2
          className="relative mt-auto"
          readingTimeShortcode={ncPostMetaData.readingTimeShortcode}
          author={author}
          date={date}
        />
      </div>
    </div>
  );
};

export default Card5;
