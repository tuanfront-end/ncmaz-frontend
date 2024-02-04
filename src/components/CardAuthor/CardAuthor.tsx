import React, { FC } from "react";
import Avatar from "components/Avatar/Avatar";
import { AuthorNode } from "data/postCardType";

export interface CardAuthorProps {
  className?: string;
  author: AuthorNode;
}

const CardAuthor: FC<CardAuthorProps> = ({ className = "", author }) => {
  const { name, username, uri, avatar, ncUserMeta } = author;

  return (
    <a
      href={frontendObject.homeURL + uri}
      className={`nc-CardAuthor flex items-center ${className}`}
      data-nc-id="CardAuthor"
    >
      <Avatar
        sizeClass="h-10 w-10 text-base"
        containerClassName="flex-shrink-0 mr-4"
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
          className={`text-base text-neutral-900 dark:text-neutral-100 font-semibold`}
        >
          {name}
        </h4>
        <span
          className={`block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400`}
        >
          {ncUserMeta.ncBio}
        </span>
      </div>
    </a>
  );
};

export default CardAuthor;
