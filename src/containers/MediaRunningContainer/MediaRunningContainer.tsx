import React, { FC, LegacyRef, useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "app/hooks";
import {
  selectCurrentMediaRunning,
  changeStateMediaRunning,
  removeMediaRunning,
} from "app/mediaRunning/mediaRunning";
import ReactPlayer from "react-player";
import NcImage from "components/NcImage/NcImage";
import LoadingVideo from "components/LoadingVideo/LoadingVideo";
import { PostNode } from "data/postCardType";
import PostCardLikeAction from "components/PostCardLikeAction/PostCardLikeAction";
import PostCardDropdownShare from "components/PostCardDropdownShare/PostCardDropdownShare";

export interface MediaRunningContainerProps {
  className?: string;
}

const MediaRunningContainer: FC<MediaRunningContainerProps> = ({
  className = "",
}) => {
  const playerRef: LegacyRef<ReactPlayer> | undefined = useRef(null);

  const currentMediaRunning = useAppSelector(selectCurrentMediaRunning);
  const dispatch = useAppDispatch();

  // STATE
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [played, setPlayed] = useState(0);
  const [loaded, setLoaded] = useState(0);
  //

  const getMediaUrl = (postData: PostNode) => {
    const postType = postData.postFormats?.edges[0]?.node?.name;
    if (postType === "Audio") {
      return postData.ncmazAudioUrl.audioUrl;
    }
    if (postType === "Video") {
      return postData.ncmazVideoUrl.videoUrl;
    }
    return "";
  };

  const getConvertTime = (sec: number) => {
    let minutes = Math.floor(sec / 60);
    let seconds = `${sec - minutes * 60}`;

    if (Number(seconds) < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayed(parseFloat(e.currentTarget.value));
  };

  const handleSeekMouseUp = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    if (playerRef.current) {
      playerRef.current.seekTo(parseFloat(e.currentTarget.value));
    }
  };

  const handleClickToggle = () => {
    if (currentMediaRunning.state === "playing") {
      return dispatch(changeStateMediaRunning("paused"));
    } else {
      dispatch(changeStateMediaRunning("playing"));
    }
  };

  const handleClickClose = () => {
    dispatch(removeMediaRunning());
  };

  const renderPlayer = () => {
    if (!currentMediaRunning.postData) return null;
    return (
      <ReactPlayer
        ref={playerRef}
        url={getMediaUrl(currentMediaRunning.postData)}
        playing={
          currentMediaRunning.state === "playing" ||
          currentMediaRunning.state === "loading"
        }
        className="fixed bottom-0 left-0 opacity-0 z-[-1]"
        width="100px"
        height="100px"
        onEnded={() => dispatch(changeStateMediaRunning("ended"))}
        onStart={() => dispatch(changeStateMediaRunning("playing"))}
        onDuration={(d) => setDurationSeconds(d)}
        onProgress={(e) => {
          setPlayed(e.played);
          setLoaded(e.loaded);
          setPlayedSeconds(e.playedSeconds);
        }}
      />
    );
  };

  if (!currentMediaRunning.postData) {
    return null;
  }

  const { title, featuredImage, categories, postId, link, ncPostMetaData } =
    currentMediaRunning.postData;
  const mediaState = currentMediaRunning.state;
  return (
    <div
      className={`nc-MediaRunningContainer fixed bottom-0 inset-x-0 flex bg-neutral-900 border-t border-neutral-700 z-30 ${className}`}
      data-nc-id="MediaRunningContainer"
    >
      <div className="h-16 w-full flex items-center justify-between">
        {/* LEFT */}
        <div className="w-1/2 pl-2 md:w-1/4 lg:w-[30%] 2xl:w-1/4 flex items-center flex-shrink-0">
          <a
            href={link}
            className="relative flex items-center max-w-[240px] xl:flex-grow space-x-3 pl-12"
          >
            <NcImage
              containerClassName="absolute left-0 h-full w-12 h-12 flex-shrink-0 transform"
              src={featuredImage?.node.sourceUrl}
              className="object-cover w-full h-full rounded-full "
            />
            <div className="flex-grow overflow-hidden hidden xl:block">
              <h3 className="text-base text-neutral-50 truncate">{title}</h3>
              <span className="block text-xs text-neutral-400 truncate">
                {categories.edges[0]?.node.name}
              </span>
            </div>
          </a>
          <div className="hidden md:flex flex-shrink-0 px-6 dark text-white space-x-2.5">
            <PostCardLikeAction
              postId={postId}
              favoriteButtonShortcode={
                ncPostMetaData.favoriteButtonShortcode || ""
              }
            />

            <PostCardDropdownShare />
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden md:flex flex-grow px-6 items-center justify-center space-x-2.5 text-xs tabular-nums tracking-widest">
          <div className="flex-shrink-0 w-11 text-right truncate text-neutral-100">
            {getConvertTime(Math.floor(playedSeconds))}
          </div>
          <div className="h-3 relative flex-grow bg-transparent">
            <input
              className="slider absolute z-10 opacity-0 inset-0 h-full w-full cursor-pointer"
              type="range"
              min={0}
              max={0.999999}
              step="any"
              value={played}
              onChange={handleSeekChange}
              onMouseUp={handleSeekMouseUp}
            />
            <div className="absolute h-1 w-full top-1/2 transform -translate-y-1/2 transition-colors rounded-full bg-neutral-400"></div>
            <div
              className="absolute left-0 top-1/2 h-1 min-w-0 transform -translate-y-1/2 transition-colors rounded-full bg-emerald-500 bg-opacity-50"
              style={{ width: loaded * 100 + "%" }}
            ></div>
            <div
              className="absolute h-1 min-w-0 left-0 top-1/2 transform -translate-y-1/2 transition-colors rounded-full bg-emerald-500"
              style={{ width: played * 100 + "%" }}
            >
              <span className="absolute -right-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500"></span>
            </div>
          </div>
          <div className="flex-shrink-0 w-11 text-left truncate text-neutral-400">
            {getConvertTime(Math.floor(durationSeconds))}
          </div>
        </div>

        {/* RENDER RIGHT */}
        <div className="w-1/2 md:w-1/4 lg:w-[30%] 2xl:w-1/4 pl-5 h-full relative">
          <div className="absolute right-0 inset-y-0 h-full w-36 max-w-full flex bg-neutral-800 text-neutral-100">
            <div
              className="w-1/2 flex-shrink-0 flex items-center justify-center border-r border-neutral-700 cursor-pointer hover:bg-neutral-700"
              onClick={handleClickToggle}
            >
              {/* LOADING */}
              {mediaState === "loading" && (
                <LoadingVideo className="transform scale-50 origin-center" />
              )}

              {/* PLAYING */}
              {mediaState === "playing" && (
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
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
              )}

              {/* PAUSED or ENDED */}
              {mediaState !== "playing" && mediaState !== "loading" && (
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
                  ></path>
                </svg>
              )}
            </div>
            <div
              className="w-1/2 flex-shrink-0 flex items-center justify-center cursor-pointer hover:bg-neutral-700"
              onClick={handleClickClose}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.25 6.75L6.75 17.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6.75 6.75L17.25 17.25"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* PLAYER -- HIDDEN */}
      {renderPlayer()}
    </div>
  );
};

export default MediaRunningContainer;
