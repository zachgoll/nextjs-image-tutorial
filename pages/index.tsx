import { Listbox, Tab, Transition } from "@headlessui/react";
import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import { Fragment, useState } from "react";
import { BsCheck2Circle, BsChevronExpand } from "react-icons/bs";

import mountainLake from "../public/mountain-lake.jpeg";

const demos = [
  {
    key: "static-remote",
    display: "Static vs. Remote images",
  },
  {
    key: "responsive-fixed",
    display: "Responsive fixed images",
  },
  {
    key: "responsive-fill",
    display: "Responsive fill images",
  },
];

export default function Home() {
  const [demo, setDemo] = useState(demos[1]);

  return (
    <div>
      <Head>
        <title>Next.js Image Tutorial</title>
        <meta name="description" content="Learn how to use Next.js Image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-6 sm:p-12">
        <h1 className="text-2xl">Next.js Image Tutorial</h1>
        <p className="text-sm mt-2 mb-8">Like and subscribe 😎</p>
        <Listbox value={demo} onChange={setDemo}>
          {({ open }) => (
            <>
              <Listbox.Label className="block text-sm text-stone-500">
                Current demo
              </Listbox.Label>
              <div className="relative mt-1 max-w-[400px]">
                <Listbox.Button className="relative w-full cursor-default rounded-md border border-stone-600 bg-stone-700 py-2 pl-3 pr-10 text-left shadow-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500 sm:text-sm">
                  <span className="block truncate">{demo.display}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <BsChevronExpand
                      className="h-5 w-5 text-stone-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-stone-700 py-1 text-base shadow-lg ring-1 ring-stone-800 ring-opacity-5 focus:outline-none sm:text-sm">
                    {demos.map((demo) => (
                      <Listbox.Option
                        key={demo.key}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "text-white bg-stone-600"
                              : "text-stone-400",
                            "relative cursor-default select-none py-2 pl-3 pr-9"
                          )
                        }
                        value={demo}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                selected
                                  ? "font-medium text-white"
                                  : "font-normal",
                                "block truncate"
                              )}
                            >
                              {demo.display}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-stone-200",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <BsCheck2Circle
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>

        <div className="mt-8">
          {demo.key === "static-remote" ? (
            <div>
              {/* <div className="relative">
                <Image
                  src={mountainLake}
                  alt="Mountain lake"
                  className="shadow-lg rounded"
                  // sizes="(max-width: 768px) "
                />
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <span className="text-2xl font-medium text-white bg-stone-900 bg-opacity-20 p-2">
                    Local image
                  </span>
                </div>
              </div> */}

              <div className="relative h-72">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1482192505345-5655af888cc4"
                  }
                  alt="Mountain lake"
                  // width={4513}
                  // height={3009}
                  fill
                  className="shadow-lg rounded object-cover"
                />
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <span className="text-2xl font-medium text-white bg-stone-900 bg-opacity-20 p-2">
                    Remote image
                  </span>
                </div>
              </div>
            </div>
          ) : demo.key === "responsive-fixed" ? (
            // <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Image
                src={mountainLake}
                alt="Mountain lake"
                className="shadow-lg rounded"
              />

              {/* <Image
                src={mountainLake}
                alt="Mountain lake"
                className="shadow-lg rounded"
              />

              <Image
                src={mountainLake}
                alt="Mountain lake"
                className="shadow-lg rounded"
              /> */}
            </div>
          ) : demo.key === "responsive-fill" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative h-72">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1482192505345-5655af888cc4"
                  }
                  alt="Mountain lake"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-72">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1482192505345-5655af888cc4"
                  }
                  alt="Mountain lake"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-72">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1482192505345-5655af888cc4"
                  }
                  alt="Mountain lake"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ) : (
            <p>Ph</p>
          )}
        </div>
      </main>
    </div>
  );
}
