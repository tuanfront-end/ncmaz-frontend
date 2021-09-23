import React, { FC } from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import Avatar from "components/Avatar/Avatar";
import { AuthorNode } from "data/postCardType";

export interface CardAuthorBoxProps {
  className?: string;
  author: AuthorNode;
}

const CardAuthorBox: FC<CardAuthorBoxProps> = ({ className = "", author }) => {
  const { name, username, uri, url, avatar, ncUserMeta } = author;

  return (
    <a
      href={url + uri}
      className={`nc-CardAuthorBox flex flex-col items-center justify-center text-center px-3 py-5 sm:px-6 sm:py-7  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="CardAuthorBox"
    >
      <Avatar
        sizeClass="w-20 h-20 text-2xl"
        radius="rounded-full"
        imgUrl={avatar?.url}
        userName={username}
      />
      <div className="mt-3">
        <h2 className={`text-base font-medium`}>
          <span className="line-clamp-1">{name}</span>
        </h2>
        <span
          className={`block mt-1 text-sm text-neutral-500 dark:text-neutral-400`}
        >
          {ncUserMeta.ncBio}
        </span>
      </div>
      <div className="py-2 px-4 mt-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
        <ArrowRightIcon className="w-5 h-5 text-yellow-600 " />
      </div>
    </a>
  );
};

export default CardAuthorBox;
