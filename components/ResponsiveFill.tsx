import Image from "next/image";

export function ResponsiveFill() {
  return (
    <div className="space-y-6">
      <div className="relative w-full h-96 sm:h-[450px] lg:h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1482192505345-5655af888cc4"
          alt="Mountains fill image"
          className="rounded object-cover"
          fill
        />
      </div>

      <p>
        Images with the `fill` property will fill the dimensions of the parent
        container, which means that you must provide an explicit height and
        width to the container.
      </p>
    </div>
  );
}
