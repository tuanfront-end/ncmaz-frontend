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
  hasAnimation?: boolean;
  indexActive: number;
  postsLength: number[];
}

const CardLarge1: FC<CardLarge1Props> = ({
  className = "",
  post,
  onClickNext = () => {},
  onClickPrev = () => {},
  hasNext,
  hasPrev,
  hasAnimation = true,
  indexActive,
  postsLength,
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
      className={`nc-CardLarge1 ${
        hasAnimation ? "nc-CardLarge1--hasAnimation" : ""
      } relative flex flex-col-reverse md:flex-row justify-end ${className}`}
    >
      <div className="md:absolute z-10 md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 w-full -mt-4 sm:-mt-8 md:mt-0 px-2 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5">
        <div className="nc-CardLarge1__left p-4 sm:p-8 xl:py-14 md:px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl sm:rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 - nc-dark-box-bg">
          <CategoryBadgeList
            className="hidden sm:flex"
            categories={categories}
          />

          <h2 className="nc-card-title text-base sm:text-xl lg:text-2xl font-semibold ">
            <a
              href={link}
              className="line-clamp-2"
              title={title}
              dangerouslySetInnerHTML={{ __html: title || "" }}
            ></a>
          </h2>

          <CardAuthor2
            className="relative"
            author={author}
            date={date}
            hoverReadingTime={false}
            readingTimeShortcode={ncPostMetaData.readingTimeShortcode}
          />

          <div className="flex flex-row rtl:flex-row-reverse items-center justify-between mt-auto">
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
        <a className="relative block nc-CardLarge1__right " href={link}>
          <NcImage
            containerClassName="aspect-w-16 aspect-h-12 sm:aspect-h-9 md:aspect-h-14 lg:aspect-h-10 2xl:aspect-h-9 relative"
            className="absolute inset-0 object-cover rounded-2xl sm:rounded-3xl"
            src={featuredImage?.node.sourceUrl || "."}
            srcSet={featuredImage?.node.srcSet}
            alt={title}
            loading="eager"
          />
          <div className="absolute inset-x-4 bottom-5 sm:bottom-3 flex justify-center z-10">
            <div className="flex items-center justify-center ">
              {postsLength.length > 1 &&
                postsLength.map((_, index) => (
                  <div
                    key={index}
                    className={` rounded-full mx-1 ${
                      index === indexActive
                        ? " w-2 h-2 bg-white"
                        : "w-1.5 h-1.5 bg-neutral-200/70"
                    }`}
                  ></div>
                ))}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CardLarge1;
