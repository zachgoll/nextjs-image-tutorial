import Image from "next/image";
import mountains from "../public/mountain-lake.jpeg";

export function BasicStatic() {
  return (
    <div className="space-y-6">
      <Image
        src={mountains}
        alt="Mountains static image"
        placeholder="blur"
        className="rounded"
      />
      <p>
        With static images, Next.js will determine all of the following
        properties at build-time and this data is cached and served according to
        the TTL set in next.config
      </p>
      <ul className="bg-stone-800 text-stone-200 p-2 rounded space-y-2">
        <li>
          Src: <span className="text-stone-400">{mountains.src}</span>
        </li>
        <li>
          Calculated width:{" "}
          <span className="text-stone-400">{mountains.width}</span>
        </li>
        <li>
          Calculated height:{" "}
          <span className="text-stone-400">{mountains.height}</span>
        </li>
        <li>
          Calculated blur width:{" "}
          <span className="text-stone-400">{mountains.blurWidth}</span>
        </li>
        <li>
          Calculated blur height:{" "}
          <span className="text-stone-400">{mountains.blurHeight}</span>
        </li>
        <li>
          Calculated blur data-url:{" "}
          <span className="text-stone-400">{mountains.blurDataURL}</span>
        </li>
      </ul>
    </div>
  );
}
