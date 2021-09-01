import CardAuthor from "components/CardAuthor/CardAuthor";
import WidgetHeading1 from "components/WidgetHeading1/WidgetHeading1";
import { AuthorNode } from "data/postCardType";
import React, { FC } from "react";

export interface WidgetAuthorsProps {
  className?: string;
  heading?: string;
  authors: { node: AuthorNode }[];
}

const WidgetAuthors: FC<WidgetAuthorsProps> = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
  authors,
  heading,
}) => {
  return (
    <div
      className={`nc-WidgetAuthors rounded-3xl overflow-hidden ${className}`}
      data-nc-id="WidgetAuthors"
    >
      {heading && <WidgetHeading1 title={heading} />}
      <div className="flow-root">
        <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
          {authors.map((author, index) => (
            <CardAuthor
              className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              key={index}
              author={author.node}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WidgetAuthors;
