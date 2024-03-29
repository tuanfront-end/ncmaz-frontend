import React, { FC, useState } from "react";
import ReactPlayer from "react-player";
import NcPlayIcon from "components/NcPlayIcon/NcPlayIcon";
import isSafariBrowser from "utils/isSafariBrowser";
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

    return (
      <div className="aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden z-0 border-4 border-white dark:border-neutral-900 sm:rounded-3xl shadow-2xl">
        {isSafariBrowser() && !!featuredImage && !isPlay && (
          <div
            className="absolute inset-0 z-10 cursor-pointer rounded-[18px] overflow-hidden"
            onClick={() => setIsPlay(true)}
          >
            <NcImage
              src={featuredImage}
              containerClassName="absolute inset-0"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <NcPlayIcon />
            </div>
          </div>
        )}
        <ReactPlayer
          url={videoUrl}
          className="absolute inset-0"
          style={{ borderRadius: 18, overflow: "hidden" }}
          playing={isSafariBrowser() ? isPlay : true}
          width="100%"
          height="100%"
          controls
          light={isSafariBrowser() ? false : featuredImage || true}
          playIcon={<NcPlayIcon />}
        />
      </div>
    );
  };

  return <>{renderMainVideo()}</>;
};

export default HeaderSingleVideo;
