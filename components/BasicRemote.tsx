import Image from "next/image";

export function BasicRemote() {
  return (
    <div className="space-y-6">
      <Image
        // Because we don't provide a loader, Vercel will optimize this image
        src="https://images.unsplash.com/photo-1482192505345-5655af888cc4"
        alt="Mountains fill image"
        className="rounded object-cover"
        width={4544}
        height={2840}
      />

      <p>
        If you supply a remote image, you need to tell Next.js its size. If
        deployed to Vercel, this image will be downloaded, optimized, resized,
        cached, and served over the edge network (cdn).
      </p>
    </div>
  );
}
