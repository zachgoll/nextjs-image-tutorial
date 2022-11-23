import type { ImageLoader } from "next/image";

export function normalizeUnsplashUrl(src: string) {
  const unsplashBaseUrl = "https://images.unsplash.com";

  if (src.slice(0, 4) === "http") {
    return new URL(src);
  } else {
    return new URL(`${unsplashBaseUrl}/${src[0] === "/" ? src.slice(1) : src}`);
  }
}

/** A custom loader that utilizes the Unsplash API's dynamic image sizing to optimize images
      @see https://unsplash.com/documentation#supported-parameters
  */
export const unsplashLoader: ImageLoader = ({ src, width, quality }) => {
  const url = normalizeUnsplashUrl(src);

  const params = url.searchParams;

  params.set("auto", params.getAll("auto").join(",") || "format");
  params.set("fit", params.get("fit") || "max");
  params.set("w", params.get("w") || width.toString());

  if (quality) {
    params.set("q", quality.toString());
  }

  return url.href;
};
