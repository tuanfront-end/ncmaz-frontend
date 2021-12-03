import React, { FC, Fragment } from "react";
import NcImage from "components/NcImage/NcImage";
import GallerySlider from "./GallerySlider";
import MediaVideo from "./MediaVideo";
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
  const { featuredImage, postFormats, ncmazVideoUrl, ncmazGalleryImgs } = post;

  const postType = postFormats?.edges[0]?.node?.slug;

  const renderGallerySlider = () => {
    const galleryImgs = getImgsFromNcmazGalleryImgs(ncmazGalleryImgs);
    if (!galleryImgs.length) {
      return (
        <NcImage
          containerClassName="absolute inset-0"
          src={featuredImage?.node.sourceUrl || "."}
        />
      );
    }

    return (
      <Fragment>
        <NcImage containerClassName="absolute inset-0" src={"."} />
        {/* <a href={link}> */}
        <GallerySlider galleryImgs={galleryImgs} />
        {/* </a> */}
      </Fragment>
    );
  };

  const renderContent = () => {
    // GALLERY
    if (postType === "post-format-gallery") {
      return renderGallerySlider();
    }

    // VIDEO
    if (postType === "post-format-video") {
      return (
        <MediaVideo
          featuredImage={featuredImage}
          isHover={isHover}
          videoUrl={ncmazVideoUrl.videoUrl}
        />
      );
    }

    // AUDIO
    if (postType === "post-format-audio") {
      return <MediaAudio post={post} />;
    }

    // DEFAULT - OTHER
    return (
      <div className="absolute inset-0">
        <NcImage
          containerClassName="absolute inset-0"
          src={featuredImage?.node.sourceUrl || "."}
        />
      </div>
    );
  };

  return (
    <div
      className={`nc-PostFeaturedMedia relative ${className}`}
      data-nc-id="PostFeaturedMedia"
    >
      {renderContent()}
    </div>
  );
};

export default PostFeaturedMedia;
