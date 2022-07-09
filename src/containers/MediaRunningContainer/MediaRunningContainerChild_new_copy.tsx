export default {};
// import React, {
//   FC,
//   LegacyRef,
//   useEffect,
//   useRef,
//   useState,
//   useMemo,
// } from "react";
// import { useAppDispatch, useAppSelector } from "app/hooks";
// import {
//   changeDataPlayerMediaRunning,
//   changeStateMediaRunning,
//   selectCurrentAudioUrl,
//   selectCurrentMediaPlayerData,
//   selectCurrentMediaState,
//   selectNewestAudioPlayerUrl,
// } from "app/mediaRunning/mediaRunning";
// import PlayerContent from "./PlayerContent";
// import _ from "lodash";
// import usePrevious from "react-use/lib/usePrevious";
// import ReactPlayer, { ReactPlayerProps } from "react-player";
// import ReactHtml5Player, { FilePlayerProps } from "react-player/file";
// import ReactYoutubePlayer, { YouTubePlayerProps } from "react-player/youtube";
// import ReactSoundCloudPlayer, {
//   SoundCloudPlayerProps,
// } from "react-player/soundcloud";
// import arraysEqual from "utils/arraysEqual";

// interface MediaRunningContainerChildProps {
//   className?: string;
// }

// // const IS_IOS =
// //   // @ts-ignore
// //   /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

// // SELECT YOUR MEDIA SOURCE : HTML5(MP3, MP4) OR YOUTUBE OR BOTH
// const MEDIA_SOURCE_FROM = window.frontendObject.musicPlayerMediaSource || [
//   "html5",
// ];

// const MediaRunningContainerChild: FC<MediaRunningContainerChildProps> = ({
//   className = "",
// }) => {
//   const playerRef: LegacyRef<ReactPlayer> | undefined = useRef(null);

//   const currentAudioUrl = useAppSelector(selectCurrentAudioUrl);
//   const mediaRunningState = useAppSelector(selectCurrentMediaState);
//   const currentMediaPlayerData = useAppSelector(selectCurrentMediaPlayerData);
//   const newestAudioPlayerUrl = useAppSelector(selectNewestAudioPlayerUrl);
//   const prevAudioUrl = usePrevious(currentAudioUrl);
//   const dispatch = useAppDispatch();

//   const {
//     durationSeconds,
//     muted,
//     playbackRate,
//     played,
//     playedSeconds,
//     volume,
//   } = currentMediaPlayerData;

//   // STATE
//   const [seeking, setSeeking] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [isFirtTimeSeekTo, setIsFirtTimeSeekTo] = useState(false);

//   //
//   useEffect(() => {
//     // KHI LẦN ĐẦU CHẠY SAU F5 THÌ CÓ THỂ VIDEO CHƯA LOAD XONG MÀ STATE LẠI ĐANG LÀ PLAYING HOẶC PAUSED,
//     // DẪN ĐẾN NGƯỜI DÙNG CÓ THỂ BẤM VÀO NÚT VÀ GÂY HOẠT ĐỘNG SAI, VÌ VẬY CẦN CHUYỂN THÀNH LOADING NGAY
//     if (!newestAudioPlayerUrl && !!currentAudioUrl && !isFirtTimeSeekTo) {
//       // if (mediaRunningState === "playing") {
//       dispatch(changeStateMediaRunning("paused"));
//       // }
//     }
//   }, [
//     newestAudioPlayerUrl,
//     currentAudioUrl,
//     mediaRunningState,
//     isFirtTimeSeekTo,
//   ]);

//   useEffect(() => {
//     if (!prevAudioUrl || currentAudioUrl === prevAudioUrl) {
//       return;
//     }
//     setIsError(false);
//   }, [currentAudioUrl, prevAudioUrl]);
//   //

//   const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch(
//       changeDataPlayerMediaRunning({
//         played: parseFloat(e.currentTarget.value),
//       })
//     );
//   };

//   const handleSeekMouseUp = (
//     e:
//       | React.MouseEvent<HTMLInputElement, MouseEvent>
//       | React.TouchEvent<HTMLInputElement>
//   ) => {
//     setSeeking(false);
//     if (playerRef.current) {
//       playerRef.current.seekTo(parseFloat(e.currentTarget.value));
//     }
//   };

//   const handleSeekMouseDown = () => {
//     setSeeking(true);
//   };

//   const onClickForwarkds15Sec = () => {
//     playerRef.current?.seekTo(playedSeconds + 15, "seconds");
//   };

//   const onClickBackwards10Sec = () => {
//     playerRef.current?.seekTo(playedSeconds - 10 || 0, "seconds");
//   };

//   const getAudioUrl = (): {
//     html5: string;
//     youtube: string;
//     soundcloud: string;
//     mediaSelected: "youtube" | "html5" | "soundcloud" | "none";
//   } => {
//     if (arraysEqual(MEDIA_SOURCE_FROM, ["html5"])) {
//       return {
//         html5:
//           currentAudioUrl ||
//           "https://chisnghiax.com/ncmaz_mp3/Disfigure_-_Blank_NCS_ReleaseMP3_160K.mp3",
//         youtube: "",
//         soundcloud: "",
//         mediaSelected: "html5",
//       };
//     }
//     if (arraysEqual(MEDIA_SOURCE_FROM, ["youtube"])) {
//       return {
//         html5: "",
//         youtube:
//           currentAudioUrl || "https://www.youtube.com/watch?v=EoDfHzo5IlM",
//         soundcloud: "",
//         mediaSelected: "youtube",
//       };
//     }
//     if (arraysEqual(MEDIA_SOURCE_FROM, ["soundcloud"])) {
//       return {
//         html5: "",
//         youtube: "",
//         soundcloud:
//           currentAudioUrl || "https://www.youtube.com/watch?v=EoDfHzo5IlM",
//         mediaSelected: "soundcloud",
//       };
//     }

//     // BOTH SUPPORT
//     if (!currentAudioUrl) {
//       return {
//         html5: "",
//         youtube: "https://www.youtube.com/watch?v=_n_VtqDrasI",
//         soundcloud: "https://soundcloud.com/tycho/tycho-awake",
//         mediaSelected: "none",
//       };
//     }
//     if (currentAudioUrl.includes("https://www.youtube.com/")) {
//       return {
//         html5: "",
//         youtube: currentAudioUrl,
//         soundcloud: "https://soundcloud.com/tycho/tycho-awake",
//         mediaSelected: "youtube",
//       };
//     }
//     if (currentAudioUrl.includes("https://soundcloud.com")) {
//       return {
//         html5: "",
//         youtube: "https://www.youtube.com/watch?v=_n_VtqDrasI",
//         soundcloud: currentAudioUrl,
//         mediaSelected: "soundcloud",
//       };
//     }
//     return {
//       html5: currentAudioUrl,
//       youtube: "https://www.youtube.com/watch?v=_n_VtqDrasI",
//       soundcloud: "https://soundcloud.com/tycho/tycho-awake",
//       mediaSelected: "html5",
//     };
//   };

//   const checkIsPlaying = (): boolean => {
//     if (!currentAudioUrl) {
//       return false;
//     }
//     return mediaRunningState === "loading" || mediaRunningState === "playing";
//   };

//   //
//   const onPause = () => {
//     if (!currentAudioUrl || mediaRunningState === "paused") {
//       return;
//     }
//     dispatch(changeStateMediaRunning("paused"));
//   };
//   const onEnded = () => {
//     dispatch(changeStateMediaRunning("ended"));
//     dispatch(
//       changeDataPlayerMediaRunning({
//         loaded: 0.9999,
//         playedSeconds: durationSeconds,
//         played: 0.9999,
//       })
//     );
//   };
//   const onReady = (e: ReactPlayerProps) => {
//     if (!currentAudioUrl) {
//       return;
//     }

//     !isFirtTimeSeekTo && setIsFirtTimeSeekTo(true);

//     // THUC HIEN KHI PLAYER CHAY NGAY SAU KHI PAGE RELOADED - CẦN SEEKING player ĐẾN ĐOẠN LOADED TRƯỚC ĐÓ
//     if (!newestAudioPlayerUrl && !isFirtTimeSeekTo) {
//       playerRef.current?.seekTo(played);
//       dispatch(changeStateMediaRunning("paused"));
//     } else if (mediaRunningState === "loading") {
//       dispatch(changeStateMediaRunning("playing"));
//     }

//     // setDuration o day se co ket qua chinh xac hon tai onDuration
//     dispatch(
//       changeDataPlayerMediaRunning({
//         durationSeconds: e.getDuration(),
//       })
//     );
//   };
//   const onPlay = () => {
//     mediaRunningState !== "playing" &&
//       dispatch(changeStateMediaRunning("playing"));
//   };
//   const onStart = () => {
//     dispatch(changeStateMediaRunning("playing"));
//   };
//   const onDuration = (e: number) => {
//     dispatch(
//       changeDataPlayerMediaRunning({
//         durationSeconds: e,
//       })
//     );
//   };
//   const onError = (error: any) => {
//     if (!!error.code && error.code !== 20) {
//       console.log(789, "MyPlayer-error:", {
//         error,
//       });
//       setIsError(true);
//     }
//   };
//   const onProgress = (e: {
//     played: number;
//     playedSeconds: number;
//     loaded: number;
//   }) => {
//     if (mediaRunningState === "ended" || !currentAudioUrl) {
//       return;
//     }
//     dispatch(
//       changeDataPlayerMediaRunning({
//         loaded: e.loaded,
//         playedSeconds: e.playedSeconds,
//       })
//     );
//     !seeking &&
//       dispatch(
//         changeDataPlayerMediaRunning({
//           played: e.played,
//         })
//       );
//   };

//   //
//   const myMemoYoutubePlayer = useMemo(() => {
//     if (!MEDIA_SOURCE_FROM.includes("youtube")) {
//       return null;
//     }

//     const isActive = getAudioUrl().mediaSelected === "youtube";
//     return (
//       <ReactYoutubePlayer
//         url={getAudioUrl().youtube}
//         controls={false}
//         style={{ opacity: 0, zIndex: -1111, visibility: "hidden" }}
//         ref={
//           isActive ? (playerRef as LegacyRef<ReactYoutubePlayer>) : undefined
//         }
//         onPause={isActive ? onPause : undefined}
//         playbackRate={isActive ? playbackRate : undefined}
//         playing={isActive ? checkIsPlaying() : undefined}
//         volume={volume}
//         muted={muted}
//         playsinline
//         onEnded={isActive ? onEnded : undefined}
//         onReady={isActive ? onReady : undefined}
//         onStart={isActive ? onStart : undefined}
//         onPlay={isActive ? onPlay : undefined}
//         onDuration={isActive ? onDuration : undefined}
//         onError={isActive ? onError : undefined}
//         onProgress={isActive ? onProgress : undefined}
//       />
//     );
//   }, [
//     currentAudioUrl,
//     mediaRunningState,
//     seeking,
//     playbackRate,
//     volume,
//     muted,
//     newestAudioPlayerUrl,
//     isFirtTimeSeekTo,
//   ]);

//   const myMemoHtml5Player = useMemo(() => {
//     if (!MEDIA_SOURCE_FROM.includes("html5")) {
//       return null;
//     }
//     const isActive = getAudioUrl().mediaSelected === "html5";
//     return (
//       <ReactHtml5Player
//         url={getAudioUrl().html5}
//         controls={false}
//         style={{ opacity: 0, zIndex: -1111, visibility: "hidden" }}
//         ref={isActive ? (playerRef as LegacyRef<ReactHtml5Player>) : undefined}
//         onPause={isActive ? onPause : undefined}
//         playbackRate={isActive ? playbackRate : undefined}
//         playing={isActive ? checkIsPlaying() : undefined}
//         volume={volume}
//         muted={muted}
//         playsinline
//         onEnded={isActive ? onEnded : undefined}
//         onReady={isActive ? onReady : undefined}
//         onStart={isActive ? onStart : undefined}
//         onPlay={isActive ? onPlay : undefined}
//         onDuration={isActive ? onDuration : undefined}
//         onError={isActive ? onError : undefined}
//         onProgress={isActive ? onProgress : undefined}
//       />
//     );
//   }, [
//     currentAudioUrl,
//     mediaRunningState,
//     seeking,
//     playbackRate,
//     volume,
//     muted,
//     newestAudioPlayerUrl,
//     isFirtTimeSeekTo,
//   ]);

//   const myMemoSoundCloudPlayer = useMemo(() => {
//     if (!MEDIA_SOURCE_FROM.includes("soundcloud")) {
//       return null;
//     }

//     const isActive = getAudioUrl().mediaSelected === "soundcloud";
//     return (
//       <ReactSoundCloudPlayer
//         url={getAudioUrl().soundcloud}
//         controls={false}
//         style={{ opacity: 0, zIndex: -1111, visibility: "hidden" }}
//         ref={
//           isActive ? (playerRef as LegacyRef<ReactSoundCloudPlayer>) : undefined
//         }
//         onPause={isActive ? onPause : undefined}
//         playbackRate={isActive ? playbackRate : undefined}
//         playing={isActive ? checkIsPlaying() : undefined}
//         volume={volume}
//         muted={muted}
//         playsinline
//         onEnded={isActive ? onEnded : undefined}
//         onReady={isActive ? onReady : undefined}
//         onStart={isActive ? onStart : undefined}
//         onPlay={isActive ? onPlay : undefined}
//         onDuration={isActive ? onDuration : undefined}
//         onError={isActive ? onError : undefined}
//         onProgress={isActive ? onProgress : undefined}
//       />
//     );
//   }, [
//     currentAudioUrl,
//     mediaRunningState,
//     seeking,
//     playbackRate,
//     volume,
//     muted,
//     newestAudioPlayerUrl,
//     isFirtTimeSeekTo,
//   ]);

//   //
//   const myMemoPlayerControls = useMemo(() => {
//     return (
//       <PlayerContent
//         isError={isError}
//         handleSetMuted={(isMuted) =>
//           dispatch(changeDataPlayerMediaRunning({ muted: isMuted }))
//         }
//         handleSeekMouseUp={handleSeekMouseUp}
//         handleSeekMouseDown={handleSeekMouseDown}
//         handleSeekChange={handleSeekChange}
//         handleVolumeChange={(e) =>
//           dispatch(changeDataPlayerMediaRunning({ volume: e }))
//         }
//         handleSetPlaybackRate={(e) =>
//           dispatch(changeDataPlayerMediaRunning({ playbackRate: e }))
//         }
//         handleClickBackwards10Sec={_.debounce(onClickBackwards10Sec, 200)}
//         handleClickForwards15Sec={_.debounce(onClickForwarkds15Sec, 200)}
//       />
//     );
//     // onClickBackwards10Sec va onClickForwarkds15Sec can thay doi khi thay doi playedSeconds
//   }, [isError, playedSeconds]);

//   // TAI SAO: VÌ KHÔNG MUỐN CHẠY ONREADY TRƯỚC KHI USEEFFECT
//   let AFTER_F5_PAGE_AND_STATUS_PLAYING_BUT_NOT_LOADING_YET = false;
//   if (
//     !newestAudioPlayerUrl &&
//     !!currentAudioUrl &&
//     !isFirtTimeSeekTo &&
//     mediaRunningState === "playing"
//   ) {
//     AFTER_F5_PAGE_AND_STATUS_PLAYING_BUT_NOT_LOADING_YET = true;
//   }

//   if (AFTER_F5_PAGE_AND_STATUS_PLAYING_BUT_NOT_LOADING_YET) {
//     return null;
//   }

//   // HIDDEN WHEN NOT READY - isFirtTimeSeekTo
//   const HIDDEN_CLASS =
//     !newestAudioPlayerUrl && !isFirtTimeSeekTo ? "opacity-0 -z-10" : "";

//   return (
//     <div
//       className={`nc-MediaRunningContainer w-full ${className} ${HIDDEN_CLASS}`}
//       data-nc-id="MediaRunningContainer"
//     >
//       {/* ---- PLAYER CONTROL ---- */}
//       {myMemoPlayerControls}

//       {/* ---- PLAYER ---- */}
//       <div className="fixed top-0 left-0 w-1 h-1 -z-50 opacity-0 overflow-hidden">
//         {myMemoYoutubePlayer}
//         {myMemoHtml5Player}
//         {myMemoSoundCloudPlayer}
//       </div>
//     </div>
//   );
// };

// export default MediaRunningContainerChild;
