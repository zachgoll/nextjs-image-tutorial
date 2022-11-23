import Image from "next/image";
import mountains from "../public/mountain-lake.jpeg";

export function ResponsiveFixedGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {/* Repeat same image 3 times  */}
      {[mountains, mountains, mountains].map((img) => (
        <Image
          key={img.src}
          src={img}
          alt="Mountains static image"
          placeholder="blur"
          className="rounded"
          sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               33vw"
        />
      ))}
    </div>
  );
}
