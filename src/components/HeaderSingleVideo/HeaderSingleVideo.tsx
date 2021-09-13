import React, { FC, ReactNode, useEffect } from "react";
import ReactPlayer from "react-player";
import NcPlayIcon from "components/NcPlayIcon/NcPlayIcon";

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
    return (
      <div className="aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-3xl shadow-2xl">
        <ReactPlayer
          url={videoUrl}
          playing
          width="100%"
          height="100%"
          controls
          light={featuredImage || true}
          playIcon={<NcPlayIcon />}
        />
      </div>
    );
  };

  return <>{renderMainVideo()}</>;
};

export default HeaderSingleVideo;
