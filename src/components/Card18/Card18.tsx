import React, { FC, useState } from "react";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostFeaturedMedia from "components/PostFeaturedMedia/PostFeaturedMedia";
import PostCardMetaV2 from "components/PostCardMeta/PostCardMetaV2";
import { PostNode } from "data/postCardType";
import NcImage from "components/NcImage/NcImage";
import PostCardLikeAction from "components/PostCardLikeAction/PostCardLikeAction";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import Badge from "components/Badge/Badge";

export interface Card18Props {
  className?: string;
  isSkeleton?: boolean;
  post: PostNode;
}

const Card18: FC<Card18Props> = ({
  className = "h-full",
  post,
  isSkeleton,
}) => {
  const {
    link,
    categories,
    ncPostMetaData,
    title,
    featuredImage,
    postFormats,
  } = post;
  const postType = postFormats.edges[0]?.node.name;

  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`nc-Card18 relative flex flex-col ${className}`}
      data-nc-id="Card18"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <a
        href={link}
        className={`w-full block h-0 aspect-h-9 sm:aspect-h-16 aspect-w-16 rounded-2xl overflow-hidden`}
      >
        <NcImage
          containerClassName="absolute inset-0 "
          src={isSkeleton ? "." : featuredImage?.node.sourceUrl || "."}
          alt={title}
        />
        <span>
          <PostTypeFeaturedIcon
            className="absolute left-2 bottom-2"
            postType={postType}
            wrapSize="w-8 h-8"
            iconSize="w-4 h-4"
          />
        </span>
      </a>
      <div className="absolute top-3 inset-x-3 flex justify-between items-start space-x-4">
        <Badge
          className={`relative my-1  `}
          name={categories.edges[0]?.node?.name}
          href={categories.edges[0]?.node?.link}
          // color={item.color as any}
        />
      </div>

      <h2 className={`block mt-4 font-semibold text-sm`}>
        <span className="line-clamp-1">{title}</span>
      </h2>
    </div>
  );
};

export default Card18;
