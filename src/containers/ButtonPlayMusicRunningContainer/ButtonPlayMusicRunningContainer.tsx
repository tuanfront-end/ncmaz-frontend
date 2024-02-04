import React, { FC, ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  changeCurrentMediaRunning,
  changeNewestAudioPlayerUrl,
  changeStateHasButtonPlayOnDOM,
  changeStateMediaRunning,
  MediaRunningState,
  selectCurrentMediaPostData,
  selectCurrentMediaState,
  selectHasButtonPlayOnDOM,
} from "app/mediaRunning/mediaRunning";
import LoadingVideo from "components/LoadingVideo/LoadingVideo";
import iconPlaying from "images/icon-playing.gif";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import { PostNode } from "data/postCardType";

export interface ButtonPlayMusicRunningContainerProps {
  className?: string;
  post: PostNode;
  renderChildren?: (
    isCurrentRunning: boolean,
    state: MediaRunningState["state"]
  ) => ReactNode;
  renderDefaultBtn?: () => ReactNode;
  renderLoadingBtn?: () => ReactNode;
  renderPlayingBtn?: () => ReactNode;
}

let ButtonPlayMusicRunningContainerIndex = 1;

const ButtonPlayMusicRunningContainer: FC<
  ButtonPlayMusicRunningContainerProps
> = ({
  className = "",
  post,
  renderChildren,
  renderDefaultBtn,
  renderLoadingBtn,
  renderPlayingBtn,
}) => {
  const currentMediaState = useAppSelector(selectCurrentMediaState);
  const currentMediaPostData = useAppSelector(selectCurrentMediaPostData);
  const hasButtonPlayOnDOM = useAppSelector(selectHasButtonPlayOnDOM);

  const dispatch = useAppDispatch();
  // STATE
  useEffect(() => {
    if (hasButtonPlayOnDOM || ButtonPlayMusicRunningContainerIndex > 1) {
      return;
    }

    dispatch(changeStateHasButtonPlayOnDOM(true));
    ButtonPlayMusicRunningContainerIndex++;
  }, []);

  const handleClickNewAudio = () => {
    return dispatch(
      changeCurrentMediaRunning({
        postData: post,
        state: "loading",
      })
    );
  };

  const handleClickNewAudioWhenMediaRunning = () => {
    if (
      post.ncmazAudioUrl.audioUrl ===
      currentMediaPostData?.ncmazAudioUrl.audioUrl
    ) {
      return dispatch(
        changeCurrentMediaRunning({
          postData: post,
          state: "playing",
        })
      );
    }
    return dispatch(
      changeCurrentMediaRunning({
        postData: post,
        state: "loading",
      })
    );
  };

  const handleClickButton = () => {
    if (!window.frontendObject.musicPlayerMode) {
      return;
    }

    //
    if (post.ncmazAudioUrl.audioUrl) {
      dispatch(changeNewestAudioPlayerUrl(post.ncmazAudioUrl.audioUrl));
    }

    // IF NOT EXIST MEDIA
    if (!currentMediaPostData || !currentMediaState) {
      return handleClickNewAudio();
    }

    // IF MEDIA RUNNING AND CLICK OTHER POST
    if (currentMediaPostData.id !== post.id) {
      return handleClickNewAudioWhenMediaRunning();
    }

    if (currentMediaState === "playing") {
      return dispatch(changeStateMediaRunning("paused"));
    }

    if (currentMediaState === "loading") {
      return;
    }

    if (currentMediaState === "paused" || currentMediaState === "ended") {
      return dispatch(changeStateMediaRunning("loading"));
    }

    return dispatch(changeStateMediaRunning("playing"));
  };

  const _renderDefaultBtn = () => {
    if (renderDefaultBtn) {
      return renderDefaultBtn();
    }
    return (
      <PostTypeFeaturedIcon
        className="hover:scale-105 transform cursor-pointer transition-transform z-30 relative"
        postType="post-format-audio"
      />
    );
  };

  const _renderLoadingBtn = () => {
    // RENDER DEFAULT IF IT NOT CURRENT
    if (currentMediaPostData?.id !== post.id) {
      return _renderDefaultBtn();
    }

    // RENDER WHEN IS CURRENT
    if (renderLoadingBtn) {
      return renderLoadingBtn();
    }
    return <LoadingVideo />;
  };

  const _renderPlayingBtn = () => {
    // RENDER DEFAULT IF IT NOT CURRENT
    if (currentMediaPostData?.id !== post.id) {
      return _renderDefaultBtn();
    }

    // RENDER WHEN IS CURRENT
    if (renderPlayingBtn) {
      return renderPlayingBtn();
    }

    return (
      <span className="z-10 bg-neutral-900/60 rounded-full flex  items-center justify-center text-xl text-white border border-white w-11 h-11 cursor-pointer">
        <img className="w-5" src={iconPlaying} alt="paused" />
      </span>
    );
  };

  return (
    <div
      className={`nc-ButtonPlayMusicRunningContainer select-none ${className}`}
      data-nc-id="ButtonPlayMusicRunningContainer"
      onClick={handleClickButton}
    >
      {renderChildren ? (
        renderChildren(currentMediaPostData?.id === post.id, currentMediaState)
      ) : (
        <>
          {(!currentMediaState ||
            currentMediaState === "paused" ||
            currentMediaState === "ended") &&
            _renderDefaultBtn()}

          {/* LOADDING ICON */}
          {currentMediaState === "loading" && _renderLoadingBtn()}

          {/* PLAYING ICON */}
          {currentMediaState === "playing" && _renderPlayingBtn()}
        </>
      )}
    </div>
  );
};

export default ButtonPlayMusicRunningContainer;
