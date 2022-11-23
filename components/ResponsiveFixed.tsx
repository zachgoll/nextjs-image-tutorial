import Image from "next/image";
import mountains from "../public/mountain-lake.jpeg";

export function ResponsiveFixed() {
  return (
    <Image
      src={mountains}
      alt="Mountains static image"
      placeholder="blur"
      className="rounded"
      sizes="100vw"
    />
  );
}
