import { FeaturedImage, PostNode } from "data/postCardType";
import { FullImageNode } from "data/types";

function getImgsFromNcmazGalleryImgs(
  ncmazGalleryImgs: PostNode["ncmazGalleryImgs"]
) {
  const {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  } = ncmazGalleryImgs;

  const arr: FullImageNode[] = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ].filter((item) => item && !!item?.sourceUrl) as FullImageNode[];

  return arr;
}

export default getImgsFromNcmazGalleryImgs;
