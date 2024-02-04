import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import Avatar from "components/Avatar/Avatar";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import { PostNode } from "data/postCardType";
import ncFormatDate from "utils/formatDate";
import { NC_IMAGE_SIZES } from "utils/getImageSizesBySizeName";

export interface Card14Props {
  className?: string;
  post: PostNode;
  hoverClass?: string;
  ratio?: string;
  imageSizes?: NC_IMAGE_SIZES;
}

const Card14: FC<Card14Props> = ({
  className = "h-full",
  ratio = "aspect-w-4 aspect-h-3 sm:aspect-w-1 sm:aspect-h-1",
  post,
  hoverClass = "",
  imageSizes,
}) => {
  const { title, link, featuredImage, categories, author, date, postFormats } =
    post;
  const postType = postFormats?.edges[0]?.node.slug;
  return (
    <div
      className={`nc-Card14 relative flex flex-col group rounded-2xl sm:rounded-3xl overflow-hidden z-0 ${hoverClass} ${className}`}
      data-nc-id="Card14"
    >
      <a href={link} className={`flex items-start relative w-full ${ratio}`}>
        <NcImage
          containerClassName="absolute inset-0 overflow-hidden z-0"
          className="object-cover w-full h-full rounded-2xl sm:rounded-3xl "
          src={featuredImage?.node.sourceUrl || "."}
          srcSet={featuredImage?.node.srcSet}
          imageSizes={imageSizes}
          alt={title}
        />

        <span className="absolute inset-0 bg-black/30">
          <PostTypeFeaturedIcon
            className="absolute top-4 right-4"
            postType={postType}
            wrapSize="w-8 h-8"
            iconSize="w-4 h-4"
          />
        </span>
      </a>

      <div className="hidden sm:block absolute top-4 inset-x-4 sm:top-5 sm:inset-x-5">
        <CategoryBadgeList itemClass="px-3 py-[6px]" categories={categories} />
      </div>

      <div className="dark absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 flex flex-col flex-grow">
        <h3 className="nc-card-title block text-base font-semibold text-white ">
          <a
            href={link}
            className="line-clamp-2"
            title={title}
            dangerouslySetInnerHTML={{ __html: title || "" }}
          ></a>
        </h3>

        <div className="p-2 sm:p-2.5 mt-2.5 sm:mt-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full flex items-center text-neutral-50 text-xs sm:text-sm font-medium">
          <a
            href={frontendObject.homeURL + author?.node.uri}
            className="relative flex items-center space-x-2"
          >
            <Avatar
              radius="rounded-full"
              containerClassName="ring-2 ring-white"
              sizeClass="h-7 w-7 text-sm"
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
            <span className="block text-white truncate">
              {author?.node.name}
            </span>
          </a>
          <>
            <span className=" mx-[6px]">·</span>
            <span className=" font-normal truncate">
              {ncFormatDate(date || "")}
            </span>
          </>
        </div>
      </div>
    </div>
  );
};

export default Card14;
