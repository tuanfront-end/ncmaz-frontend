import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import ButtonPlayMusicRunningContainer from "containers/ButtonPlayMusicRunningContainer/ButtonPlayMusicRunningContainer";
import { PostNode } from "data/postCardType";
import NCMAZ_TRANSLATE from "contains/translate";

export interface Card15PodcastProps {
  className?: string;
  post: PostNode;
}

const Card15Podcast: FC<Card15PodcastProps> = ({
  className = "h-full",
  post,
}) => {
  const { title, link, featuredImage, postFormats, excerpt } = post;
  const postFormatName = postFormats?.edges[0]?.node.slug;

  const renderIcon = (state?: "loading" | "playing") => {
    switch (state) {
      case "loading":
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
            ></path>
            <path
              fill="currentColor"
              d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"
            ></path>
            <path
              fill="currentColor"
              d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"
            ></path>
          </svg>
        );

      case "playing":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
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

      default:
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
  };

  const renderDefaultBtnListen = (state?: "loading" | "playing") => {
    return (
      <div className="inline-flex items-center mt-3 pr-4 py-0.5 cursor-pointer rounded-full transition-all hover:pl-0.5 hover:bg-primary-50 dark:hover:bg-neutral-900">
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-50 dark:bg-neutral-800 text-primary-6000 dark:text-primary-200">
          {renderIcon(state)}
        </span>

        <span className="ml-3 text-sm font-medium">
          {state === "playing"
            ? NCMAZ_TRANSLATE["Now playing"]
            : NCMAZ_TRANSLATE["Listen now"]}
        </span>
      </div>
    );
  };

  return (
    <div
      className={`nc-Card15Podcast relative flex group items-center p-3 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] hover:shadow-md transition-shadow ${className}`}
      data-nc-id="Card15Podcast"
    >
      <div className="w-1/4 flex-shrink-0">
        <a
          href={link}
          className={`block h-0 aspect-w-1 aspect-h-1 relative rounded-full overflow-hidden shadow-md `}
        >
          <NcImage
            containerClassName="absolute inset-0"
            className="object-cover w-full h-full "
            src={featuredImage?.node.sourceUrl || "."}
            srcSet={featuredImage?.node.srcSet}
            sizes="THUMBNAIL"
            alt={title}
          />
        </a>
      </div>

      <div className="flex flex-col flex-grow ml-4 overflow-hidden">
        <h3 className={`nc-card-title block font-semibold text-sm sm:text-lg`}>
          <a
            href={link}
            className="line-clamp-2"
            title={title}
            dangerouslySetInnerHTML={{ __html: title || "" }}
          ></a>
        </h3>
        {excerpt ? (
          <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 ">
            <span
              className="line-clamp-1"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            ></span>
          </span>
        ) : null}

        {(postFormatName === "post-format-video" ||
          postFormatName === "post-format-audio") && (
          <ButtonPlayMusicRunningContainer
            post={post}
            className=""
            renderDefaultBtn={() => renderDefaultBtnListen()}
            renderLoadingBtn={() => renderDefaultBtnListen("loading")}
            renderPlayingBtn={() => renderDefaultBtnListen("playing")}
          />
        )}
      </div>
    </div>
  );
};

export default Card15Podcast;
