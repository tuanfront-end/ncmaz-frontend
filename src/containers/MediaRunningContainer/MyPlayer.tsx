import { useAppDispatch, useAppSelector } from "app/hooks";
import React, { FC, useEffect } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";
import {
  changeStateMediaRunning,
  selectCurrentMediaRunning,
  selectCurrentAudioUrl,
} from "app/mediaRunning/mediaRunning";

interface MyPlayerProps {
  playerRef: React.RefObject<ReactPlayer>;
  onDuration?: ReactPlayerProps["onDuration"];
  onProgress?: ReactPlayerProps["onProgress"];
  onError?: ReactPlayerProps["onError"];
  volume?: ReactPlayerProps["volume"];
  muted?: ReactPlayerProps["muted"];
  playbackRate?: ReactPlayerProps["playbackRate"];
}

const MyPlayer: FC<MyPlayerProps> = ({
  playerRef,
  onDuration,
  onError,
  onProgress,
  volume,
  playbackRate,
  muted,
}) => {
  const currentMediaRunning = useAppSelector(selectCurrentMediaRunning);
  const currentAudioUrl = useAppSelector(selectCurrentAudioUrl);
  const dispatch = useAppDispatch();

  const currentPostData = currentMediaRunning.postData;

  const getAudioUrl = (): string => {
    // LAY URL 1 DE RENDER TRUOC
    if (!currentPostData) {
      if (currentMediaRunning.listAudioUrls) {
        return currentMediaRunning.listAudioUrls[0] || "";
      }
      return "";
    }

    // SAU KHI CLICK AUDIO THI LAY URL CUA POST
    return currentAudioUrl || "";
  };

  const checkIsPlaying = (): boolean => {
    if (!currentPostData) {
      return false;
    }

    return (
      currentMediaRunning.state === "loading" ||
      currentMediaRunning.state === "playing"
    );
  };

  return (
    <>
      <ReactPlayer
        width={0}
        height={0}
        style={{ display: "none" }}
        preload="true"
        controls
        ref={playerRef}
        url={getAudioUrl()}
        playbackRate={playbackRate}
        playing={checkIsPlaying()}
        volume={volume}
        muted={muted}
        onEnded={() => {
          dispatch(changeStateMediaRunning("ended"));
        }}
        onStart={() => {
          dispatch(changeStateMediaRunning("playing"));
        }}
        onPlay={() => {
          currentMediaRunning.state !== "playing" &&
            dispatch(changeStateMediaRunning("playing"));
          console.log(444, { e: playerRef.current?.getDuration() });
        }}
        onDuration={(e) => {
          console.log(22, e);

          onDuration && onDuration(e);
        }}
        onError={currentPostData ? onError : undefined}
        onProgress={currentPostData ? onProgress : undefined}
      />
    </>
  );
};

export default MyPlayer;
