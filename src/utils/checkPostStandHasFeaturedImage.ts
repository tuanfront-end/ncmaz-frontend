import { PostNode } from "data/postCardType";

const checkPostStandHasFeaturedImage = (
  post: PostNode,
  followfrontendObject = false
) => {
  if (!followfrontendObject && frontendObject.isPlaceholderPostNotFeatured) {
    return true;
  }

  const { featuredImage, postFormats } = post;

  const postType = postFormats?.edges[0]?.node?.slug;
  const standardHasFeaturedImage =
    postType !== "post-format-audio" &&
    postType !== "post-format-video" &&
    postType !== "post-format-gallery" &&
    featuredImage &&
    featuredImage.node.sourceUrl;
  return standardHasFeaturedImage;
};

export default checkPostStandHasFeaturedImage;
