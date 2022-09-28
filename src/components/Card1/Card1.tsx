import React, { FC } from "react";
import Avatar from "components/Avatar/Avatar";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import { PostNode } from "data/postCardType";
import NcImage from "components/NcImage/NcImage";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";

export interface Card1Props {
  className?: string;
  post: PostNode;
}

const Card1: FC<Card1Props> = ({ className = "h-full", post }) => {
  const { author, title, link, id, featuredImage, postFormats } = post;
  const postType = postFormats?.edges[0]?.node.slug;

  return (
    <div
      className={`nc-Card1 group relative min-h-[95px] p-2 sm:p-4 flex flex-row  [ nc-box-has-hover nc-dark-box-bg-has-hover ] !rounded-md sm:!rounded-2xl ${className}`}
      data-nc-id="Card1"
      data-nc-post-id={id}
    >
      <a href={link} className="absolute inset-0 rounded-lg"></a>

      <div className="flex-shrink-0 pt-1 pr-3">
        <Avatar
          radius="rounded-full"
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
      </div>
      <div className="flex-1">
        <h3 className="nc-card-title block text-sm sm:text-base font-semibold text-neutral-800 dark:text-neutral-100">
          <a
            href={link}
            className="line-clamp-2"
            title={title}
            dangerouslySetInnerHTML={{ __html: title || "" }}
          ></a>
        </h3>
        <PostCardMeta className="mt-2" hiddenAvatar meta={post} />
      </div>

      {/* ACTIONS */}
      <div className="flex-shrink-0 ml-2.5 w-24">
        <a
          href={link}
          className="w-full block h-0 aspect-h-16 aspect-w-16 rounded-md sm:rounded-xl overflow-hidden z-0"
        >
          <NcImage
            containerClassName="absolute inset-0"
            className="object-cover w-full h-full group-hover:opacity-90 transition-opacity"
            src={featuredImage?.node.sourceUrl || "."}
            srcSet={featuredImage?.node.srcSet}
            imageSizes="MEDIUM"
            alt={title}
          />
          <span>
            <PostTypeFeaturedIcon
              className="absolute left-2 bottom-2"
              postType={postType}
              wrapSize="w-7 h-7"
              iconSize="w-3.5 h-3.5"
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Card1;
