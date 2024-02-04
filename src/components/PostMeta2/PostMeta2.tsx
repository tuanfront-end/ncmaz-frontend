import React, { FC } from "react";
import Avatar from "components/Avatar/Avatar";
import { PostNode } from "data/postCardType";

export interface PostMeta2Props {
  className?: string;
  meta: Pick<PostNode, "date" | "author" | "categories">;
  hiddenCategories?: boolean;
  size?: "large" | "normal";
  avatarRounded?: string;
}

const PostMeta2: FC<PostMeta2Props> = ({
  className = "leading-none",
  meta,
  hiddenCategories = false,
  size = "normal",
  avatarRounded,
}) => {
  const { date, author, categories } = meta;
  return (
    <div
      className={`nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 ${
        size === "normal" ? "text-xs" : "text-sm"
      } ${className}`}
      data-nc-id="PostMeta2"
    >
      <a
        href={frontendObject.homeURL + author?.node.uri}
        className="flex items-center space-x-2"
      >
        <Avatar
          radius={avatarRounded}
          sizeClass={
            size === "normal"
              ? "h-6 w-6 text-sm"
              : "h-10 w-10 sm:h-11 sm:w-11 text-xl"
          }
          imgUrl={
            author?.node.ncUserMeta?.featuredImage?.sourceUrl ||
            author?.node.avatar?.url
          }
          srcSet={
            author?.node.ncUserMeta?.featuredImage?.sourceUrl
              ? author?.node.ncUserMeta?.featuredImage?.srcSet
              : undefined
          }
          userName={author?.node.username}
        />
      </a>
      <div className="ml-3">
        <div className="flex items-center">
          <a
            href={frontendObject.homeURL + author?.node.uri}
            className="block font-semibold"
          >
            {author?.node.name}
          </a>

          {!hiddenCategories && (
            <>
              <span className="mx-2 font-semibold">·</span>
              <div className="ml-0">
                <span className="text-xs">🏷 </span>
                {categories?.edges.map((cat, index) => (
                  <a
                    key={cat.node.id}
                    href={cat.node.link}
                    className="font-semibold"
                  >
                    {cat.node.name}
                    {index < categories.edges.length - 1 && <span>, </span>}
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="text-xs mt-[6px]">
          <span className="text-neutral-700 dark:text-neutral-300">{date}</span>
          <span className="mx-2 font-semibold">·</span>
          <span className="text-neutral-700 dark:text-neutral-300">
            {999} min read
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostMeta2;
