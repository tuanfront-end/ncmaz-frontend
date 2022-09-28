import React, { FC } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Avatar from "components/Avatar/Avatar";
import { AuthorNode } from "data/postCardType";

export interface CardAuthorBoxProps {
  className?: string;
  author: AuthorNode;
}

const CardAuthorBox: FC<CardAuthorBoxProps> = ({ className = "", author }) => {
  const { name, username, uri, avatar, ncUserMeta, posts } = author;

  return (
    <a
      href={frontendObject.homeURL + uri}
      className={`nc-CardAuthorBox flex flex-col items-center justify-center text-center px-3 py-4 sm:px-6 sm:py-7 [ nc-box-has-hover nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="CardAuthorBox"
    >
      <Avatar
        sizeClass="w-12 h-12 sm:w-20 sm:h-20 text-lg sm:text-2xl"
        radius="rounded-full"
        imgUrl={ncUserMeta?.featuredImage?.sourceUrl || avatar?.url}
        srcSet={
          ncUserMeta?.featuredImage?.sourceUrl
            ? ncUserMeta?.featuredImage?.srcSet
            : undefined
        }
        userName={username}
      />
      <div className="mt-3">
        <h4 className={`text-base font-medium`}>
          <span className="line-clamp-1">{name}</span>
        </h4>
        <span
          className={`block mt-1 text-sm text-neutral-500 dark:text-neutral-400`}
        >
          {ncUserMeta.ncBio || " - "}
        </span>
      </div>
      <div className="py-2 px-4 mt-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
        {posts?.pageInfo.total}
        <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 ml-3" />
      </div>
    </a>
  );
};

export default CardAuthorBox;
