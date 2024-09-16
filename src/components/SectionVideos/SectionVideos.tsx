import Heading from "components/Heading/Heading";
import NcImage from "components/NcImage/NcImage";
import NcPlayIcon from "components/NcPlayIcon/NcPlayIcon";
import NcPlayIcon2 from "components/NcPlayIcon2/NcPlayIcon2";
import React, { FC, useState } from "react";
import ReactPlayer from "react-player";
import isSafariBrowser from "utils/isSafariBrowser";

export interface SectionVideosProps {
  videoIds?: string[];
  className?: string;
  heading?: string;
  subHeading?: string;
}

const SectionVideos: FC<SectionVideosProps> = ({
  videoIds = [],
  className = "",
  heading = "🎬 The Videos",
  subHeading = `Check out our hottest videos. View more and share more new
  perspectives on just about any topic. Everyone’s welcome.`,
}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const renderMainVideo = () => {
    const videoId = videoIds[currentVideo];
    return (
      <div className="group aspect-w-16 aspect-h-12 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden z-0 border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px]">
        {/* FOR SAFARI */}
        {isSafariBrowser() && (
          <ReactPlayer
            playing={isPlay}
            url={`https://www.youtube.com/watch?v=${videoId}`}
            className="absolute inset-0"
            width="100%"
            height="100%"
            controls
          />
        )}

        {/* FOR CHROME */}
        {!isSafariBrowser() && isPlay && (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}

        {/* BG IMAGE */}
        {!isPlay && (
          <>
            <div
              onClick={() => setIsPlay(true)}
              className="cursor-pointer absolute inset-0 flex items-center justify-center z-10"
            >
              <NcPlayIcon />
            </div>
            <NcImage
              containerClassName="absolute inset-0 "
              className="object-cover w-full h-full transition-opacity group-hover:opacity-90 "
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            />
          </>
        )}
      </div>
    );
  };

  const renderSubVideo = (videoId: string, index: number) => {
    if (index === currentVideo) return null;
    return (
      <div
        className="group relative aspect-h-16 aspect-w-16 rounded-2xl bg-neutral-800 cursor-pointer overflow-hidden z-0 sm:aspect-h-12 sm:rounded-3xl lg:aspect-h-9"
        onClick={() => {
          setCurrentVideo(index);
          !isPlay && setIsPlay(true);
        }}
        key={String(index)}
      >
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <NcPlayIcon2 />
        </div>
        <NcImage
          containerClassName="absolute inset-0 w-full h-full"
          className="object-cover w-full h-full transition-opacity group-hover:opacity-90"
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
        />
      </div>
    );
  };

  return (
    <div className={`nc-SectionVideos relative ${className}`}>
      <Heading desc={subHeading}>{heading}</Heading>

      <div className="flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row">
        <div className="absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 bg-opacity-40 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-1/2 dark:bg-neutral-800 dark:bg-opacity-40"></div>
        <div className="flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6">
          {renderMainVideo()}
        </div>
        <div className="flex-shrink-0 grid gap-2 grid-cols-4 sm:gap-6 lg:grid-cols-1 lg:w-36 xl:w-40">
          {videoIds.map(renderSubVideo)}
        </div>
      </div>
    </div>
  );
};

export default SectionVideos;
