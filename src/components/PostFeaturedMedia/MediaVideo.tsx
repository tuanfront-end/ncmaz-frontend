import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import { PostNode } from "data/postCardType";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import useTimeoutFn from "react-use/lib/useTimeoutFn";

export interface MediaVideoProps {
  videoUrl?: string;
  postLink: string;
  isHover: boolean;
  featuredImage: PostNode["featuredImage"];
}

const MediaVideo: FC<MediaVideoProps> = ({
  videoUrl,
  isHover,
  featuredImage,
  postLink,
}) => {
  let _timeOut: any | null = null;
  const videoRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [showDescUnmuted, setShowDescUnmuted] = useState(false);

  //
  const [isHoverState, setIsHoverState] = useState(false);

  const [, cancelHover, resetIsHoverState] = useTimeoutFn(
    () => setIsHoverState(true),
    300
  );
  const cancelHoverHandle = useCallback(() => {
    cancelHover();
    setIsHoverState(false);
  }, []);

  //
  // CHECK FOR VIDEO CARD ON VIEW
  const [prevRatio, setPrevRatio] = useState(0);
  const [inViewd, setInViewed] = useState(false);
  //

  let IS_MOBILE = window.matchMedia(
    "only screen and (max-width: 639px)"
  ).matches;

  const cardIntersectionObserver = useIntersectionObserver(videoRef, {
    freezeOnceVisible: false,
    threshold: 0.999,
    rootMargin: "-10px 0px",
  });

  useEffect(() => {
    if (!isHover) {
      setIsMuted(true);
      return cancelHoverHandle();
    }

    resetIsHoverState();
  }, [isHover]);

  useEffect(() => {
    if (!cardIntersectionObserver) return;

    const isOnView =
      (cardIntersectionObserver?.intersectionRatio || -1) > prevRatio;
    setInViewed(isOnView);
    //
    setPrevRatio(cardIntersectionObserver?.intersectionRatio || 0);
  }, [cardIntersectionObserver]);

  useEffect(() => {
    if (!showDescUnmuted) {
      return;
    }

    if (_timeOut) {
      clearTimeout(_timeOut);
    }
    _timeOut = setTimeout(() => {
      setShowDescUnmuted(false);
    }, 2000);
    return () => {
      _timeOut && clearTimeout(_timeOut);
    };
  }, [showDescUnmuted]);

  //
  let START_LOAD_VIDEO = IS_MOBILE ? inViewd : isHoverState;
  if (frontendObject.switchPreviewVideo === false) {
    START_LOAD_VIDEO = false;
  }

  const renderContent = () => {
    return (
      <div>
        <ReactPlayer
          url={videoUrl}
          muted={isMuted}
          className={`absolute bg-black inset-0`}
          playing={START_LOAD_VIDEO}
          width="100%"
          height="100%"
          onStart={() => {
            setShowDescUnmuted(() => true);
          }}
          onPause={() => {
            setShowDescUnmuted(() => false);
          }}
          light={
            START_LOAD_VIDEO ? false : featuredImage?.node.sourceUrl || true
          }
          playIcon={
            <span className="absolute inset-0 flex items-center justify-center ">
              <PostTypeFeaturedIcon
                className="hover:scale-105 transform cursor-pointer transition-transform "
                postType={"post-format-video"}
              />
            </span>
          }
        />
        <a className="absolute block inset-0 " href={postLink}></a>

        <div
          className={`absolute z-20 bottom-2 left-2 h-6 rounded-full bg-black bg-opacity-70 text-white flex items-center justify-center text-sm transform transition-transform ${
            !START_LOAD_VIDEO ? "opacity-0 hidden" : "opacity-100"
          } ${showDescUnmuted ? "pl-[6px] pr-2" : "w-6 hover:scale-125"}`}
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? (
            <>
              <i className="las la-volume-off"></i>
              {showDescUnmuted && (
                <span className="ml-1 inline-block text-[9px]">
                  Click here to unmute
                </span>
              )}
            </>
          ) : (
            <i className="las la-volume-up"></i>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="nc-MediaVideo absolute inset-0" ref={videoRef}>
      {renderContent()}
    </div>
  );
};

export default MediaVideo;
