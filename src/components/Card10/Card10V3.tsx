import React, { FC, useState } from "react";
import NcImage from "components/NcImage/NcImage";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostFeaturedMedia from "components/PostFeaturedMedia/PostFeaturedMedia";
import CardAuthor2 from "components/CardAuthor2/CardAuthor2";
import { PostNode } from "data/postCardType";
import getImgsFromNcmazGalleryImgs from "utils/getImgsFromNcmazGalleryImgs";
import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";

export interface Card10V3Props {
  className?: string;
  post: PostNode;
  galleryType?: 1 | 2;
}

const Card10V3: FC<Card10V3Props> = ({
  className = "h-full",
  post,
  galleryType = 1,
}) => {
  const {
    title,
    link,
    categories,
    postFormats,
    ncmazGalleryImgs,
    author,
    date,
    ncPostMetaData,
  } = post;

  const galleryImgs = getImgsFromNcmazGalleryImgs(ncmazGalleryImgs);

  const [isHover, setIsHover] = useState(false);

  const renderGallery2 = () => {
    if (!galleryImgs) {
      return null;
    }
    return (
      <div className="w-full h-full grid grid-cols-1 grid-rows-2 gap-2">
        <div className="grid grid-cols-3 gap-2 ">
          <NcImage
            containerClassName="relative col-span-2"
            className="absolute inset-0 object-cover w-full h-full"
            src={galleryImgs[0]?.sourceUrl}
            srcSet={galleryImgs[0]?.srcSet}
          />
          <NcImage
            containerClassName="relative"
            className="absolute inset-0 object-cover w-full h-full"
            src={galleryImgs[1]?.sourceUrl}
            srcSet={galleryImgs[1]?.srcSet}
            imageSizes="MEDIUM"
          />
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          <NcImage
            containerClassName="relative"
            className="absolute inset-0 object-cover w-full h-full"
            src={galleryImgs[2]?.sourceUrl}
            srcSet={galleryImgs[2]?.srcSet}
            imageSizes="MEDIUM"
          />
          <NcImage
            containerClassName="relative col-span-2"
            className="absolute inset-0 object-cover w-full h-full"
            src={galleryImgs[3]?.sourceUrl}
            srcSet={galleryImgs[3]?.srcSet}
          />
        </div>
      </div>
    );
  };

  const renderGallery = () => {
    if (!galleryImgs) {
      return null;
    }
    return (
      <div className="w-full h-full grid grid-cols-3 gap-2">
        <div className="grid ">
          <NcImage
            containerClassName="relative"
            className="absolute inset-0 object-cover w-full h-full"
            src={galleryImgs[0]?.sourceUrl}
            srcSet={galleryImgs[0]?.srcSet}
          />
        </div>
        <div className="grid grid-rows-2 gap-2">
          <NcImage
            containerClassName="relative"
            className="absolute inset-0 object-cover w-full h-full"
            src={galleryImgs[1]?.sourceUrl}
            srcSet={galleryImgs[1]?.srcSet}
            imageSizes="MEDIUM"
          />
          <NcImage
            containerClassName="relative"
            className="absolute inset-0 object-cover w-full h-full"
            src={galleryImgs[2]?.sourceUrl}
            srcSet={galleryImgs[2]?.srcSet}
            imageSizes="MEDIUM"
          />
        </div>
        <div className="grid ">
          <NcImage
            containerClassName="relative"
            className="absolute inset-0 object-cover w-full h-full"
            src={galleryImgs[3]?.sourceUrl}
            srcSet={galleryImgs[3]?.srcSet}
          />
        </div>
      </div>
    );
  };

  const renderFeaturedImage = () => {
    if (
      postFormats?.edges[0]?.node.slug !== "post-format-gallery" ||
      !galleryImgs?.length
    ) {
      return (
        <div>
          <PostFeaturedMedia post={post} isHover={isHover} />
        </div>
      );
    }

    return <div>{galleryType === 1 ? renderGallery() : renderGallery2()}</div>;
  };

  return (
    <div
      className={`nc-Card10V3 group relative flex flex-col ${className}`}
      data-nc-id="Card10V3"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-9 overflow-hidden z-0">
        {renderFeaturedImage()}

        <a
          href={link}
          className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
        ></a>
      </div>
      <div className="absolute top-3 inset-x-3 flex justify-between items-start space-x-4">
        <CategoryBadgeList categories={categories} />
        <PostCardDropdownShare
          panelMenusClass="w-52 right-0 top-0 origin-top-right"
          href={post.link}
          image={post.featuredImage?.node.sourceUrl}
        />
      </div>

      <div className="space-y-2.5 mt-4 px-4 flex flex-col">
        <h3 className="nc-card-title block sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 ">
          <a
            className="line-clamp-2"
            href={link}
            title={title}
            dangerouslySetInnerHTML={{ __html: title || "" }}
          ></a>
        </h3>
        <CardAuthor2
          className="mt-3"
          author={author}
          hoverReadingTime={false}
          date={date}
          readingTimeShortcode={ncPostMetaData.readingTimeShortcode}
        />
      </div>
    </div>
  );
};

export default Card10V3;
