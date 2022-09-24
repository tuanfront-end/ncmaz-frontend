import React, { FC } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Avatar from "components/Avatar/Avatar";
import NcImage from "components/NcImage/NcImage";
import { AuthorNode } from "data/postCardType";

export interface CardAuthorBox2Props {
  className?: string;
  author: AuthorNode;
}

const CardAuthorBox2: FC<CardAuthorBox2Props> = ({
  className = "",
  author,
}) => {
  const { name, username, uri, avatar, ncUserMeta, posts } = author;

  return (
    <a
      href={frontendObject.homeURL + uri}
      className={`nc-CardAuthorBox2 flex flex-col overflow-hidden [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="CardAuthorBox2"
    >
      <div className="relative flex-shrink-0 ">
        <div>
          <NcImage
            containerClassName="flex aspect-w-7 aspect-h-5 w-full h-0"
            src={ncUserMeta.backgroundImage?.sourceUrl || "."}
            srcSet={ncUserMeta.backgroundImage?.srcSet}
            imageSizes="MEDIUM"
          />
        </div>
        <div className="absolute top-3 inset-x-3 flex">
          <div className=" py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
            {posts?.pageInfo.total}
            <ArrowRightIcon className="w-5 h-5 text-yellow-600 ml-3" />
          </div>
        </div>
      </div>

      <div className="-mt-7 m-7 text-center">
        <Avatar
          containerClassName="ring-2 ring-white"
          sizeClass="w-14 h-14 text-2xl"
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
            {ncUserMeta.ncBio}
          </span>
        </div>
      </div>
    </a>
  );
};

export default CardAuthorBox2;
