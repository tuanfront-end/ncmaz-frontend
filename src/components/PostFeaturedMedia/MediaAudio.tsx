import React, { FC } from "react";
import ButtonPlayMusicRunningContainer from "containers/ButtonPlayMusicRunningContainer/ButtonPlayMusicRunningContainer";
import { PostNode } from "data/postCardType";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import NcImage from "components/NcImage/NcImage";

export interface MediaAudioProps {
  post: PostNode;
}

const MediaAudio: FC<MediaAudioProps> = ({ post }) => {
  const renderContent = () => {
    if (!post.ncmazAudioUrl.audioUrl) {
      return (
        <span className="absolute inset-0 flex items-center justify-center ">
          <PostTypeFeaturedIcon
            className="hover:scale-105 transform cursor-pointer transition-transform nc-will-change-transform"
            postType={"post-format-audio"}
          />
        </span>
      );
    }

    return (
      <ButtonPlayMusicRunningContainer
        className="absolute bg-neutral-900 bg-opacity-30 flex items-center justify-center inset-0"
        post={post}
      />
    );
  };

  return (
    <div>
      <NcImage
        containerClassName="absolute inset-0"
        src={post.featuredImage?.node.sourceUrl || "."}
      />
      {renderContent()}
    </div>
  );
};

export default MediaAudio;
