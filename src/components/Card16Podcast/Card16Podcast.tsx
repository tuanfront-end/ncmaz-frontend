import React, { FC } from "react";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import musicWave from "images/musicWave.png";
import ButtonPlayMusicRunningContainer from "containers/ButtonPlayMusicRunningContainer/ButtonPlayMusicRunningContainer";
import NcImage from "components/NcImage/NcImage";
import { PostFormatsType, PostNode } from "data/postCardType";
import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";
import { NC_IMAGE_SIZES } from "utils/getImageSizesBySizeName";

export interface Card16PodcastProps {
  className?: string;
  post: PostNode;
  ratio?: string;
  imageSizes?: NC_IMAGE_SIZES;
}

const Card16Podcast: FC<Card16PodcastProps> = ({
  className = "h-full",
  post,
  ratio = "aspect-w-4 aspect-h-3",
  imageSizes,
}) => {
  const { title, link, categories, excerpt, featuredImage, postFormats } = post;
  const postFormatName: PostFormatsType | undefined =
    postFormats?.edges[0]?.node.slug;
  const renderIcon = (state?: "playing" | "loading") => {
    if (!state) {
      return (
        <svg className="ml-0.5 w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
          ></path>
        </svg>
      );
    }

    return (
      <svg className=" w-9 h-9" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.25 6.75V17.25"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8.75 6.75V17.25"
        ></path>
      </svg>
    );
  };

  const renderListenButtonDefault = (state?: "playing" | "loading") => {
    return (
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-neutral-50 text-primary-500 cursor-pointer">
        {renderIcon(state)}
      </div>
    );
  };

  return (
    <div
      className={`nc-Card16Podcast relative flex flex-col ${className}`}
      data-nc-id="Card16Podcast"
    >
      <a
        href={link}
        className={`block flex-shrink-0 relative w-full rounded-3xl overflow-hidden z-0 ${ratio}`}
      >
        <NcImage
          src={featuredImage?.node.sourceUrl || "."}
          srcSet={featuredImage?.node.srcSet}
          alt={title}
          imageSizes={imageSizes}
        />
        <span className="bg-neutral-900 bg-opacity-30"></span>
      </a>

      {/* ABSOLUTE */}
      <a href={link} className="absolute inset-0"></a>
      <span className="absolute top-3 inset-x-3">
        <CategoryBadgeList categories={categories} />
      </span>

      {/* MAIN CONTENT */}
      <div className="w-11/12 transform -mt-32 ">
        <div
          className={`px-5 flex items-center space-x-4 ${
            postFormatName === "post-format-video" ||
            postFormatName === "post-format-audio"
              ? ""
              : "opacity-0 z-[-1]"
          }`}
        >
          <div className="flex-grow ">
            <img src={musicWave} alt="musicWave" />
          </div>

          <ButtonPlayMusicRunningContainer
            post={post}
            renderDefaultBtn={() => renderListenButtonDefault()}
            renderPlayingBtn={() => renderListenButtonDefault("playing")}
            renderLoadingBtn={() => renderListenButtonDefault("loading")}
          />
        </div>
        <div className="p-5 mt-5 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl rounded-3xl rounded-tl-none flex flex-col flex-grow ">
          <h3 className="nc-card-title block text-base sm:text-lg lg:text-xl font-semibold text-neutral-900 dark:text-neutral-100 ">
            <a
              href={link}
              className="line-clamp-2"
              title={title}
              dangerouslySetInnerHTML={{ __html: title || "" }}
            ></a>
          </h3>
          <span className="hidden sm:block text-sm text-neutral-500 dark:text-neutral-400 mt-3 mb-5">
            {excerpt && (
              <span
                className="line-clamp-2"
                dangerouslySetInnerHTML={{ __html: excerpt }}
              />
            )}
          </span>
          <div className="mt-3 flex rtl:flex-row-reverse items-end justify-between sm:mt-auto">
            <PostCardLikeAndComment className="relative" postData={post} />
            <PostCardDropdownShare
              href={post.link}
              image={post.featuredImage?.node.sourceUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card16Podcast;
