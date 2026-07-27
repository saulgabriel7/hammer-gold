const PRODUCT_IMAGE_VERSION = "14";

function withProductImageVersion(imagePath: string) {
  const separator = imagePath.includes("?") ? "&" : "?";
  return `${imagePath}${separator}v=${PRODUCT_IMAGE_VERSION}`;
}

export function isAnimatedProductImage(imagePath: string) {
  void imagePath;
  return false;
}

export function getStaticProductImageUrl(slug: string) {
  return `/api/products/${slug}/image?v=${PRODUCT_IMAGE_VERSION}`;
}

export function getProductOverviewImageUrl(slug: string, imagePath: string) {
  return isAnimatedProductImage(imagePath)
    ? withProductImageVersion(imagePath)
    : getStaticProductImageUrl(slug);
}
