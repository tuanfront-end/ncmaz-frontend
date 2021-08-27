import React, { FC } from "react";
import ButtonPlayMusicRunningContainer from "containers/ButtonPlayMusicRunningContainer/ButtonPlayMusicRunningContainer";
import { PostNode } from "data/postCardType";

export interface MediaAudioProps {
  post: PostNode;
}

const MediaAudio: FC<MediaAudioProps> = ({ post }) => {
  return (
    <ButtonPlayMusicRunningContainer
      className="absolute bg-neutral-900 bg-opacity-30 flex items-center justify-center inset-0"
      post={post}
    />
  );
};

export default MediaAudio;
