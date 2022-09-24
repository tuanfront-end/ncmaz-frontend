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
            className="hover:scale-105 transform cursor-pointer transition-transform "
            postType={"post-format-audio"}
          />
        </span>
      );
    }

    return (
      <ButtonPlayMusicRunningContainer
        className="absolute bg-neutral-900/20 flex items-center justify-center inset-0"
        post={post}
      />
    );
  };

  return (
    <div>
      {renderContent()}

      <a
        className="block absolute inset-0 group-hover:opacity-90 transition-opacity"
        href={post.link}
      >
        <NcImage
          containerClassName="absolute inset-0"
          src={post.featuredImage?.node.sourceUrl || "."}
          srcSet={post.featuredImage?.node.srcSet}
          alt={post.featuredImage?.node.altText}
        />
      </a>
    </div>
  );
};

export default MediaAudio;
