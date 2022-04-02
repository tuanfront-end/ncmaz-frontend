import React, { FC, ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  changeCurrentMediaRunning,
  changeStateMediaRunning,
  MediaRunningState,
  addNewListAudioUrls,
  selectCurrentMediaRunning,
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
  const currentMediaRunning = useAppSelector(selectCurrentMediaRunning);
  const dispatch = useAppDispatch();

  // STATE
  const mediaState = currentMediaRunning.state;

  const setAudioUrlToListUrls = () => {
    // CHÍ UPLOAD 1 CÁI ĐẦU TIÊN
    if (
      currentMediaRunning.listAudioUrls &&
      currentMediaRunning.listAudioUrls.length > 0
    ) {
      return;
    }

    if (!post || !post.ncmazAudioUrl.audioUrl) {
      return;
    }

    // DAY LEN 1 BAI DE RENDER TRUOC PLAYER CHO IFRAME DO -- NEU KHONG SE KHONG HOAT DONG TREN SAFARI DUOC
    dispatch(addNewListAudioUrls(post.ncmazAudioUrl.audioUrl));
  };

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
      currentMediaRunning.postData?.ncmazAudioUrl.audioUrl
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
    // IF NOT EXIST MEDIA
    if (!currentMediaRunning.postData || !currentMediaRunning.state) {
      return handleClickNewAudio();
    }

    // IF MEDIA RUNNING AND CLICK OTHER POST
    if (currentMediaRunning.postData.id !== post.id) {
      return handleClickNewAudioWhenMediaRunning();
    }

    if (currentMediaRunning.state === "playing") {
      return dispatch(changeStateMediaRunning("paused"));
    }

    if (currentMediaRunning.state === "loading") {
      return;
    }

    return dispatch(changeStateMediaRunning("playing"));
  };

  const _renderDefaultBtn = () => {
    if (renderDefaultBtn) {
      return renderDefaultBtn();
    }
    return (
      <PostTypeFeaturedIcon
        className="z-20 hover:scale-105 transform cursor-pointer transition-transform nc-will-change-transform"
        postType="post-format-audio"
      />
    );
  };

  const _renderLoadingBtn = () => {
    // RENDER DEFAULT IF IT NOT CURRENT
    if (currentMediaRunning.postData?.id !== post.id) {
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
    if (currentMediaRunning.postData?.id !== post.id) {
      return _renderDefaultBtn();
    }

    // RENDER WHEN IS CURRENT
    if (renderPlayingBtn) {
      return renderPlayingBtn();
    }

    return (
      <span className="z-10 bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white w-11 h-11 cursor-pointer">
        <img className="w-5" src={iconPlaying} alt="paused" />
      </span>
    );
  };

  return (
    <div
      className={`nc-ButtonPlayMusicRunningContainer select-none ${className}`}
      data-nc-id="ButtonPlayMusicRunningContainer"
      onClick={handleClickButton}
      onMouseEnter={setAudioUrlToListUrls}
    >
      {renderChildren ? (
        renderChildren(currentMediaRunning.postData?.id === post.id, mediaState)
      ) : (
        <>
          {(!mediaState || mediaState === "paused" || mediaState === "ended") &&
            _renderDefaultBtn()}

          {/* LOADDING ICON */}
          {mediaState === "loading" && _renderLoadingBtn()}

          {/* PLAYING ICON */}
          {mediaState === "playing" && _renderPlayingBtn()}
        </>
      )}
    </div>
  );
};

export default ButtonPlayMusicRunningContainer;
