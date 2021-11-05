import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import GallerySlider from "./GallerySlider";
import MediaVideo from "./MediaVideo";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import MediaAudio from "./MediaAudio";
import { PostNode } from "data/postCardType";
import getImgsFromNcmazGalleryImgs from "utils/getImgsFromNcmazGalleryImgs";

export interface PostFeaturedMediaProps {
  className?: string;
  post: PostNode;
  isHover?: boolean;
}

const PostFeaturedMedia: FC<PostFeaturedMediaProps> = ({
  className = "w-full h-full",
  post,
  isHover = false,
}) => {
  const {
    featuredImage,
    postFormats,
    ncmazVideoUrl,
    ncmazAudioUrl,
    ncmazGalleryImgs,
  } = post;

  const postType = postFormats?.edges[0]?.node?.slug;

  const isPostMedia = () => {
    if (!postFormats?.edges[0]) return false;
    return postType === "post-format-video" || postType === "post-format-audio";
  };

  const renderGallerySlider = () => {
    const galleryImgs = getImgsFromNcmazGalleryImgs(ncmazGalleryImgs);
    if (!galleryImgs.length) return null;

    return <GallerySlider galleryImgs={galleryImgs} />;
  };

  const renderContent = () => {
    // GALLERY
    if (postType === "post-format-gallery") {
      return renderGallerySlider();
    }

    // VIDEO
    if (postType === "post-format-video" && !!ncmazVideoUrl.videoUrl && isHover) {
      return <MediaVideo isHover videoUrl={ncmazVideoUrl.videoUrl} />;
    }

    // AUDIO
    if (postType === "post-format-audio" && !!ncmazAudioUrl.audioUrl) {
      return <MediaAudio post={post} />;
    }

    // ICON
    return (
      <div className="absolute inset-0">
        {isPostMedia() && (
          <span className="absolute inset-0 flex items-center justify-center ">
            <PostTypeFeaturedIcon
              className="hover:scale-105 transform cursor-pointer transition-transform nc-will-change-transform"
              postType={postType}
            />
          </span>
        )}
      </div>
    );
  };

  return (
    <div
      className={`nc-PostFeaturedMedia relative ${className}`}
      data-nc-id="PostFeaturedMedia"
    >
      <NcImage
        containerClassName="absolute inset-0"
        src={featuredImage?.node.sourceUrl || "."}
      />
      {renderContent()}
    </div>
  );
};

export default PostFeaturedMedia;
