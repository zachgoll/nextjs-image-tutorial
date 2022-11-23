import { Listbox, Tab, Transition } from "@headlessui/react";
import classNames from "classnames";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image, { ImageProps } from "next/image";

import mountain from "../public/mountain-lake.jpeg";

export default function Sandbox() {
  return (
    <div>
      <Head>
        <title>Sandbox</title>
        <meta name="description" content="Sandbox page" />
      </Head>

      <main className="p-6 sm:p-12">
        <h1>Sandbox page</h1>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img
          src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=300"
          alt=""
        /> */}

        {/* <Image src={mountain} alt="placeholder" sizes="100vw" /> */}
      </main>
    </div>
  );
}
