import React, { FC } from "react";
import ButtonPlayMusicRunningContainer from "containers/ButtonPlayMusicRunningContainer/ButtonPlayMusicRunningContainer";
import LoadingVideo from "components/LoadingVideo/LoadingVideo";
import iconPlaying from "images/icon-playing.gif";
import { MediaRunningState } from "app/mediaRunning/mediaRunning";
import { PostNode } from "data/postCardType";

export interface HeaderSingleAudioProps {
  className?: string;
  postData: PostNode;
}

const HeaderSingleAudio: FC<HeaderSingleAudioProps> = ({
  className = "",
  postData,
}) => {
  const renderIcon = (state?: MediaRunningState["state"]) => {
    if (state === "playing") {
      return <img className="w-7" src={iconPlaying} alt="" />;
    }

    if (state === "loading") {
      return <LoadingVideo className="transform scale-75" />;
    }
    return (
      <svg className="w-11 h-11" fill="currentColor" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
        ></path>
      </svg>
    );
  };

  const renderButtonPlay = (
    isCurrentRunning: boolean,
    state?: MediaRunningState["state"]
  ) => {
    const { featuredImage, title } = postData;

    //
    let newState = state;
    if (!isCurrentRunning) {
      newState = null;
    }
    //

    return (
      <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden z-0 shadow-2xl group cursor-pointer">
        {featuredImage && featuredImage.node ? (
          <img
            className={`w-full h-full object-cover group-hover:scale-105 transform transition-transform nc-animation-spin ${
              newState === "playing" ? "playing" : ""
            }`}
            src={featuredImage.node.sourceUrl || "."}
            srcSet={featuredImage.node.srcSet}
            alt={title}
            sizes="300px"
          />
        ) : (
          <div
            className={`w-full h-full bg-neutral-300 group-hover:scale-105 transform transition-transform nc-animation-spin ${
              newState === "playing" ? "playing" : ""
            }`}
          ></div>
        )}

        <div className="bg-neutral-900 bg-blend-multiply bg-opacity-75"></div>
        <div className="flex items-center justify-center">
          <div className="text-white bg-black bg-blend-multiply bg-opacity-50 w-20 h-20 border-2 border-neutral-300 rounded-full flex items-center justify-center ">
            {renderIcon(newState)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <ButtonPlayMusicRunningContainer
      className={className}
      renderChildren={renderButtonPlay}
      post={postData}
    />
  );
};

export default HeaderSingleAudio;
