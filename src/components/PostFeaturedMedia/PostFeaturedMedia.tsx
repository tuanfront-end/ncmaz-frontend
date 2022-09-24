import React, { FC, Fragment } from "react";
import NcImage from "components/NcImage/NcImage";
import GallerySlider from "./GallerySlider";
import MediaVideo from "./MediaVideo";
import MediaAudio from "./MediaAudio";
import { PostNode } from "data/postCardType";
import getImgsFromNcmazGalleryImgs from "utils/getImgsFromNcmazGalleryImgs";
import { NC_IMAGE_SIZES } from "utils/getImageSizesBySizeName";

export interface PostFeaturedMediaProps {
  className?: string;
  post: PostNode;
  isHover?: boolean;
  imageSizes?: NC_IMAGE_SIZES;
}

const PostFeaturedMedia: FC<PostFeaturedMediaProps> = ({
  className = "w-full h-full",
  post,
  isHover = false,
  imageSizes,
}) => {
  const { featuredImage, postFormats, ncmazVideoUrl, ncmazGalleryImgs, link } =
    post;

  const postType = postFormats?.edges[0]?.node?.slug;

  const renderGallerySlider = () => {
    const galleryImgs = getImgsFromNcmazGalleryImgs(ncmazGalleryImgs);
    if (!galleryImgs.length) {
      return (
        <NcImage
          containerClassName="absolute inset-0 group-hover:opacity-90 transition-opacity"
          src={featuredImage?.node.sourceUrl || "."}
          srcSet={featuredImage?.node.srcSet}
          alt={featuredImage?.node.altText}
          imageSizes={imageSizes}
        />
      );
    }

    return (
      <Fragment>
        <NcImage containerClassName="absolute inset-0" src={"."} />
        {/* <a href={link}> */}
        <GallerySlider galleryImgs={galleryImgs} postLink={link} />
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
          postLink={link}
        />
      );
    }

    // AUDIO
    if (postType === "post-format-audio") {
      return <MediaAudio post={post} />;
    }

    // DEFAULT - OTHER
    return (
      <a
        href={link}
        className="absolute inset-0 group-hover:opacity-90 transition-opacity"
      >
        <NcImage
          containerClassName="absolute inset-0"
          src={featuredImage?.node.sourceUrl || "."}
          srcSet={featuredImage?.node.srcSet}
          alt={featuredImage?.node.altText}
          imageSizes={imageSizes}
        />
      </a>
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
