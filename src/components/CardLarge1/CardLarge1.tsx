import NcImage from "components/NcImage/NcImage";
import NextPrev from "components/NextPrev/NextPrev";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import React, { FC } from "react";
import CardAuthor2 from "components/CardAuthor2/CardAuthor2";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import { PostNode } from "data/postCardType";
import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";

export interface CardLarge1Props {
  className?: string;
  post: PostNode;
  onClickNext?: () => void;
  onClickPrev?: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

const CardLarge1: FC<CardLarge1Props> = ({
  className = "",
  post,
  onClickNext = () => {},
  onClickPrev = () => {},
  hasNext,
  hasPrev,
}) => {
  const {
    ncPostMetaData,
    featuredImage,
    title,
    date,
    categories,
    author,
    link,
  } = post;

  return (
    <div
      className={`nc-CardLarge1 nc-CardLarge1--hasAnimation relative flex flex-col-reverse md:flex-row justify-end ${className}`}
    >
      <div className="md:absolute z-10 md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 w-full -mt-8 md:mt-0 px-3 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5">
        <div className="nc-CardLarge1__left p-4 sm:p-8 xl:py-14 md:px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 --  nc-dark-box-bg">
          <CategoryBadgeList categories={categories} />

          <h2 className="nc-card-title text-xl sm:text-2xl font-semibold ">
            <a href={link} className="line-clamp-2" title={title}>
              {title}
            </a>
          </h2>

          <CardAuthor2
            className="relative"
            author={author}
            date={date}
            hoverReadingTime={false}
            readingTimeShortcode={ncPostMetaData.readingTimeShortcode}
          />

          <div className="flex items-center justify-between mt-auto">
            <PostCardLikeAndComment postData={post} />
            <PostCardDropdownShare
              href={post.link}
              image={post.featuredImage?.node.sourceUrl}
            />
          </div>
        </div>
        {hasNext || hasPrev ? (
          <div className="p-4 sm:pt-8 sm:px-10">
            <NextPrev
              disablePrev={!hasPrev}
              disableNext={!hasNext}
              btnClassName="w-11 h-11 text-xl"
              onClickNext={onClickNext}
              onClickPrev={onClickPrev}
            />
          </div>
        ) : null}
      </div>
      <div className="w-full md:w-4/5 lg:w-2/3">
        <a className="block nc-CardLarge1__right " href={link}>
          <NcImage
            containerClassName="aspect-w-16 aspect-h-12 sm:aspect-h-9 md:aspect-h-14 lg:aspect-h-10 2xl:aspect-h-9 relative"
            className="absolute inset-0 object-cover rounded-3xl"
            src={featuredImage?.node.sourceUrl || "."}
            alt={title}
          />
        </a>
      </div>
    </div>
  );
};

export default CardLarge1;
