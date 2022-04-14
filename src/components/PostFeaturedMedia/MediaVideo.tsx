import LoadingVideo from "components/LoadingVideo/LoadingVideo";
import NcImage from "components/NcImage/NcImage";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import { PostNode } from "data/postCardType";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import React, { FC, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

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

  const [isPlaying, setIsPlaying] = useState(false);
  //
  // CHECK FOR VIDEO CARD ON VIEW
  const [prevRatio, setPrevRatio] = useState(0);
  const [inViewd, setInViewed] = useState(false);
  //

  let IS_MOBILE = false;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    IS_MOBILE = true;
  }

  const cardIntersectionObserver = useIntersectionObserver(videoRef, {
    freezeOnceVisible: false,
    threshold: 0.999,
    rootMargin: "-20px 0px",
  });

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
  const START_LOAD_VIDEO = IS_MOBILE ? inViewd : isHover;
  //
  // TRA LAI playing = false khi thoat video
  useEffect(() => {
    if (!START_LOAD_VIDEO) {
      return setIsPlaying(false);
    }
  }, [START_LOAD_VIDEO]);

  const renderContent = () => {
    return (
      <div>
        <ReactPlayer
          url={videoUrl}
          muted={isMuted}
          playing
          style={{
            opacity: isPlaying ? 1 : 0,
            display: isPlaying ? "block" : "none",
          }}
          className={` absolute bg-neutral-900 inset-0`}
          width="100%"
          height="100%"
          onStart={() => {
            setShowDescUnmuted(() => true);
            setIsPlaying(() => true);
          }}
        />
        <a className="absolute block inset-0" href={postLink}></a>
        <div
          className={`${
            isPlaying ? "opacity-0 hidden" : "opacity-100"
          } absolute bg-neutral-900 bg-opacity-30 flex items-center justify-center inset-0`}
        >
          <LoadingVideo />
        </div>
        <div
          className={`absolute z-20 bottom-2 left-2 h-6 rounded-full bg-black bg-opacity-70 text-white flex items-center justify-center text-sm transform transition-transform ${
            showDescUnmuted ? "pl-[6px] pr-2" : "w-6 hover:scale-125"
          }`}
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
      {(!videoUrl || !START_LOAD_VIDEO) && (
        <NcImage
          containerClassName="absolute inset-0"
          src={featuredImage?.node.sourceUrl || "."}
        />
      )}
      {!!videoUrl && !START_LOAD_VIDEO && (
        <span className="absolute inset-0 flex items-center justify-center ">
          <PostTypeFeaturedIcon
            className="hover:scale-105 transform cursor-pointer transition-transform "
            postType={"post-format-video"}
          />
        </span>
      )}

      {!!videoUrl && START_LOAD_VIDEO && renderContent()}
    </div>
  );
};

export default MediaVideo;
