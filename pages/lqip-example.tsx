import { Listbox, Tab, Transition } from "@headlessui/react";
import classNames from "classnames";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image, { ImageProps } from "next/image";
import { Fragment, useState } from "react";
import { BsCheck2Circle, BsChevronExpand } from "react-icons/bs";
import lqip from "lqip-modern";
import { normalizeUnsplashUrl, unsplashLoader } from "../utils";

type LqipExampleProps = {
  image: Pick<ImageProps, "src" | "width" | "height" | "blurDataURL">;
};

export const getStaticProps: GetStaticProps<LqipExampleProps> = async () => {
  // In reality, this path would come from a database or some external data store, but we are hardcoding it here
  const url = normalizeUnsplashUrl("photo-1482192505345-5655af888cc4");

  const imgData = await fetch(url);
  const arrayBufferData = await imgData.arrayBuffer();
  const lqipData = await lqip(Buffer.from(arrayBufferData));

  return {
    props: {
      image: {
        src: url.href,
        width: lqipData.metadata.originalWidth,
        height: lqipData.metadata.originalHeight,
        blurDataURL: lqipData.metadata.dataURIBase64,
      },
    },
  };
};

export default function LqipExample({ image }: LqipExampleProps) {
  return (
    <div>
      <Head>
        <title>LQIP Example</title>
        <meta
          name="description"
          content="Learn how to generate an LQIP for Next.js Image"
        />
      </Head>

      <main className="p-6 sm:p-12">
        <h1 className="text-2xl">Low Quality Image Placeholders (LQIPs)</h1>
        <p className="text-sm mt-2 mb-8 font-light">Like and subscribe 😎</p>

        <div className="space-y-6">
          <Image
            loader={unsplashLoader}
            alt="lqip-example"
            placeholder="blur"
            src={image.src}
            width={image.width}
            height={image.height}
            blurDataURL={image.blurDataURL}
          />

          <p>
            A low-quality image placeholder is exactly what it sounds like. It
            is a super low quality version of an image that doesn&lsquo;t take
            as long to load and is placed in the UI until the larger image loads
            over the network.
          </p>
        </div>
      </main>
    </div>
  );
}
