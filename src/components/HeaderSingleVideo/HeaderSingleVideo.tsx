import React, { FC, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import NcPlayIcon from "components/NcPlayIcon/NcPlayIcon";
import NcImage from "components/NcImage/NcImage";

export interface HeaderSingleVideoProps {
  className?: string;
  videoUrl: string;
  featuredImage: string;
}

const HeaderSingleVideo: FC<HeaderSingleVideoProps> = ({
  className = "",
  videoUrl,
  featuredImage,
}) => {
  const renderMainVideo = () => {
    const [isPlay, setIsPlay] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setIsPlay(true);
      }, 1000);
    }, []);

    return (
      <div
        className={`aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden z-0 border-4 border-white dark:border-neutral-900 sm:rounded-3xl shadow-2xl ${className}`}
      >
        {!!featuredImage && !isPlay && (
          <div
            className="absolute inset-0 z-10 cursor-pointer rounded-[18px] overflow-hidden"
            onClick={() => setIsPlay(true)}
          >
            <NcImage
              src={featuredImage}
              containerClassName="absolute inset-0"
              loading="eager"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <NcPlayIcon />
            </div>
          </div>
        )}
        <ReactPlayer
          url={videoUrl}
          className="absolute inset-0"
          style={{ borderRadius: 18, overflow: "hidden", zIndex: 0 }}
          playing={isPlay}
          width="100%"
          height="100%"
          controls
          muted
        />
      </div>
    );
  };

  return <>{renderMainVideo()}</>;
};

export default HeaderSingleVideo;
