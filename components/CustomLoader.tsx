import type { ImageLoader } from "next/image";
import Image from "next/image";
import { unsplashLoader } from "../utils";

export function CustomLoader(props: {
  src: string;
  width: number;
  height: number;
}) {
  return (
    <div>
      <p className="mb-4 text-sm">
        With a custom loader, you are telling Next.js &quot;do not optimize this
        image, let me do all my optimizations using another service&quot;.
      </p>

      <Image
        loader={unsplashLoader}
        src={props.src}
        alt="Custom Nextjs image loader example"
        width={props.width}
        height={props.height}
        quality={60}
        sizes="100vw"
      />
    </div>
  );
}
