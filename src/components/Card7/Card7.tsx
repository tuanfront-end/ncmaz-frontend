import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import CardAuthor2 from "components/CardAuthor2/CardAuthor2";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import { PostNode } from "data/postCardType";
import PostCardLikeAction from "components/PostCardLikeAction/PostCardLikeAction";
import { NC_IMAGE_SIZES } from "utils/getImageSizesBySizeName";

export interface Card7Props {
  className?: string;
  post: PostNode;
  hoverClass?: string;
  ratio?: string;
  imageSizes?: NC_IMAGE_SIZES;
}

const Card7: FC<Card7Props> = ({
  className = "h-full",
  ratio = "aspect-h-5 aspect-w-5 sm:aspect-h-6",
  post,
  hoverClass = "",
  imageSizes,
}) => {
  const {
    title,
    link,
    featuredImage,
    categories,
    author,
    date,
    postFormats,
    ncPostMetaData,
    postId,
  } = post;

  const postType = postFormats?.edges[0]?.node.slug;
  return (
    <div
      className={`nc-Card7 relative flex flex-col group rounded-lg sm:rounded-3xl z-0 overflow-hidden ${hoverClass} ${className}`}
      data-nc-id="Card7"
    >
      {ncPostMetaData.favoriteButtonShortcode && (
        <PostCardLikeAction
          postId={postId}
          className="hidden sm:block absolute top-3 right-3 z-10"
          favoriteButtonShortcode={ncPostMetaData.favoriteButtonShortcode}
        />
      )}
      <a href={link} className={`flex items-start relative w-full ${ratio}`}>
        <NcImage
          containerClassName="absolute inset-0 overflow-hidden z-0"
          className="object-cover w-full h-full rounded-lg sm:rounded-3xl "
          src={featuredImage?.node.sourceUrl || "."}
          srcSet={featuredImage?.node.srcSet}
          imageSizes={imageSizes}
          alt={title}
        />
        <PostTypeFeaturedIcon
          className="absolute top-3 left-3"
          postType={postType}
          wrapSize="w-7 h-7"
          iconSize="w-4 h-4"
        />
        <span className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </a>

      <div className="absolute bottom-2 sm:bottom-3 inset-x-2 sm:inset-x-3 p-2.5 sm:p-4 bg-white dark:bg-neutral-900 flex flex-col flex-grow rounded-lg sm:rounded-3xl group-hover:shadow-2xl transition-shadow">
        <a href={link} className="absolute inset-0"></a>
        <div className="space-y-2.5 mb-3">
          <div className="hidden sm:block">
            <CategoryBadgeList categories={categories} />
          </div>
          <h3 className="block text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 ">
            <a
              href={link}
              className="line-clamp-2"
              title={title}
              dangerouslySetInnerHTML={{ __html: title || "" }}
            ></a>
          </h3>
        </div>
        <CardAuthor2
          hoverReadingTime={false}
          readingTimeShortcode={ncPostMetaData.readingTimeShortcode}
          date={date}
          author={author}
        />
      </div>
    </div>
  );
};

export default Card7;
