export type NC_IMAGE_SIZES =
  | "THUMBNAIL"
  | "MEDIUM"
  | "MEDIUM_LARGE"
  | "LARGE"
  | "_1536X1536"
  | "_2048X2048"
  | "IS_SIZES";

const getImageSizesBySizeName = ({
  sizeName,
  sizes,
}: {
  sizeName?: NC_IMAGE_SIZES;
  sizes?: string;
}) => {
  let SIZES: string | undefined;

  switch (sizeName) {
    case "THUMBNAIL":
      SIZES = "(max-width: 150px) 100vw, 150px";
      break;
    case "MEDIUM":
      SIZES = "(max-width: 475px) 100vw, 475px";
      break;
    case "MEDIUM_LARGE":
      SIZES = "(max-width: 768px) 100vw, 768px";
      break;
    case "LARGE":
      SIZES = "(max-width: 1024px) 100vw, 1024px";
      break;
    case "_1536X1536":
      SIZES = "(max-width: 1536px) 100vw, 1536px";
      break;
    case "_2048X2048":
      SIZES = "(max-width: 1600px) 100vw, 1600px";
      break;
    case "IS_SIZES":
      SIZES = sizes;
      break;
    default:
      break;
  }

  return SIZES;
};

export default getImageSizesBySizeName;
