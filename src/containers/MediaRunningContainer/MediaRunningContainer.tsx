import React, { FC, LegacyRef, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  changeStateMediaRunning,
  selectCurrentAudioUrl,
  selectCurrentMediaState,
  selectCurrentMediaPostData,
  selectCurrentMedialistAudioUrls,
} from "app/mediaRunning/mediaRunning";
import ReactPlayer from "react-player";
import PlayerContent from "./PlayerContent";
import _ from "lodash";
import usePrevious from "react-use/lib/usePrevious";

export interface MediaRunningContainerProps {
  className?: string;
}

const MediaRunningContainer: FC<MediaRunningContainerProps> = ({
  className = "",
}) => {
  const playerRef: LegacyRef<ReactPlayer> | undefined = useRef(null);

  const currentAudioUrl = useAppSelector(selectCurrentAudioUrl);
  const mediaRunningState = useAppSelector(selectCurrentMediaState);
  const currentPostData = useAppSelector(selectCurrentMediaPostData);
  const currentMedialistAudioUrls = useAppSelector(
    selectCurrentMedialistAudioUrls
  );

  const prevAudioUrl = usePrevious(currentAudioUrl);

  const dispatch = useAppDispatch();

  // STATE
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [played, setPlayed] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [playbackRate, setPlaybackRate] = useState<1 | 1.5 | 2>(1);
  const [muted, setMuted] = useState(false);
  const [seeking, setSeeking] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);
  //
  const IS_NEW_AUDIO_URL = currentAudioUrl !== prevAudioUrl;
  //
  //
  useEffect(() => {
    if (!prevAudioUrl || IS_NEW_AUDIO_URL) {
      return;
    }

    setIsError(false);
    setLoaded(0);
    setPlayed(0);
    setPlayedSeconds(0);
  }, [currentAudioUrl, prevAudioUrl]);
  //
  //

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayed(parseFloat(e.currentTarget.value));
  };

  const handleSeekMouseUp = (
    e:
      | React.MouseEvent<HTMLInputElement, MouseEvent>
      | React.TouchEvent<HTMLInputElement>
  ) => {
    setSeeking(false);
    if (playerRef.current) {
      playerRef.current.seekTo(parseFloat(e.currentTarget.value));
    }
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const onClickForwarkds15Sec = () => {
    playerRef.current?.seekTo(playedSeconds + 15, "seconds");
  };

  const onClickBackwards10Sec = () => {
    playerRef.current?.seekTo(playedSeconds - 10 || 0, "seconds");
  };

  const getAudioUrl = (): string => {
    // LAY URL 1 DE RENDER TRUOC
    if (!currentPostData) {
      return currentMedialistAudioUrls ? currentMedialistAudioUrls[0] : "";
    }

    // SAU KHI CLICK AUDIO THI LAY URL CUA POST
    return currentAudioUrl || "";
  };

  const checkIsPlaying = (): boolean => {
    if (!currentPostData) {
      return false;
    }

    return mediaRunningState === "loading" || mediaRunningState === "playing";
  };

  const renderPlayer = () => {
    return (
      <ReactPlayer
        width={0}
        height={0}
        style={{ display: "none" }}
        controls
        ref={playerRef}
        url={getAudioUrl()}
        playbackRate={playbackRate}
        playing={checkIsPlaying()}
        volume={volume}
        muted={muted}
        onEnded={() => {
          dispatch(changeStateMediaRunning("ended"));
          setLoaded(0.9999);
          !seeking && setPlayed(0.9999);
          setPlayedSeconds(durationSeconds);
        }}
        onReady={(e) => {
          playerRef.current?.seekTo(0.0001);
          // setDuration o day se co ket qua chinh xac hon tai onDuration
          setDurationSeconds(e.getDuration());
        }}
        onStart={() => {
          dispatch(changeStateMediaRunning("playing"));
        }}
        onPlay={() => {
          mediaRunningState !== "playing" &&
            dispatch(changeStateMediaRunning("playing"));
        }}
        onDuration={(e) => {
          setDurationSeconds(e);
        }}
        onError={(error, data, hlsInstance, hlsGlobal) => {
          if (error.code !== 20) {
            console.log(789, "MyPlayer-error:", {
              error,
              data,
              hlsInstance,
              hlsGlobal,
            });
            setIsError(true);
          }
        }}
        onProgress={(e) => {
          if (mediaRunningState === "ended") {
            return;
          }
          setLoaded(e.loaded);
          !seeking && setPlayed(e.played);
          setPlayedSeconds(e.playedSeconds);
        }}
      />
    );
  };

  return (
    <div
      className={`nc-MediaRunningContainer fixed bottom-0 inset-x-0 flex z-40 ${className}`}
      data-nc-id="MediaRunningContainer"
    >
      <PlayerContent
        isError={isError}
        isMuted={muted}
        handleSetMuted={(isMuted) => setMuted(isMuted)}
        durationSeconds={durationSeconds}
        playedSeconds={playedSeconds}
        handleSeekMouseUp={handleSeekMouseUp}
        handleSeekMouseDown={handleSeekMouseDown}
        handleSeekChange={handleSeekChange}
        played={played}
        loaded={loaded}
        handleVolumeChange={(e) => setVolume(e)}
        volume={volume}
        playbackRate={playbackRate}
        handleSetPlaybackRate={(e) => setPlaybackRate(e)}
        handleClickBackwards10Sec={_.debounce(onClickBackwards10Sec, 200)}
        handleClickForwards15Sec={_.debounce(onClickForwarkds15Sec, 200)}
      />

      {/* PLAYER -- */}
      <div className="hidden" hidden>
        {renderPlayer()}
      </div>
    </div>
  );
};

export default MediaRunningContainer;
