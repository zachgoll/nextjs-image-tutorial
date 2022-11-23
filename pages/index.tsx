import { Listbox, Tab, Transition } from "@headlessui/react";
import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from "react";
import { BsCheck2Circle, BsChevronExpand } from "react-icons/bs";
import {
  BasicRemote,
  BasicStatic,
  CustomLoader,
  ResponsiveFill,
  ResponsiveFixed,
  ResponsiveFixedGrid,
} from "../components";

const demos = [
  {
    key: "basic-static",
    display: "Static image",
    component: <BasicStatic />,
  },
  {
    key: "basic-remote",
    display: "Remote image",
    component: <BasicRemote />,
  },
  {
    key: "responsive-fill",
    display: "Responsive fill images",
    component: <ResponsiveFill />,
  },
  {
    key: "responsive-fixed",
    display: "Responsive fixed images",
    component: <ResponsiveFixed />,
  },
  {
    key: "responsive-fixed-grid",
    display: "Responsive fixed grid",
    component: <ResponsiveFixedGrid />,
  },
  {
    key: "custom-loader",
    display: "Custom loader",
    component: (
      // In this example, we have looked up the width/height of this remote image and know it already
      <CustomLoader
        src="/photo-1482192505345-5655af888cc4"
        width={4513}
        height={3009}
      />
    ),
  },
];

export default function Home() {
  const [demo, setDemo] = useState<typeof demos[0] | undefined>();

  return (
    <div>
      <Head>
        <title>Next.js Image Tutorial</title>
        <meta name="description" content="Learn how to use Next.js Image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-6 sm:p-12 mb-[90px]">
        <h1 className="text-2xl text-white">Next.js Image Tutorial</h1>
        <p className="text-sm mt-2 mb-8">Like and subscribe 😎</p>
        <Listbox value={demo} onChange={setDemo}>
          {({ open }) => (
            <>
              <Listbox.Label className="block text-sm text-stone-500">
                Selected demo
              </Listbox.Label>
              <div className="relative mt-1 max-w-[250px]">
                <Listbox.Button className="relative w-full cursor-default rounded-md border border-stone-600 bg-stone-700 py-2 pl-3 pr-10 text-left shadow-sm focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500 sm:text-sm">
                  <span className="block truncate">
                    {demo ? demo.display : "Select a demo"}
                  </span>
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

        {demo?.component && <div className="mt-8">{demo.component}</div>}
      </main>

      <footer className="fixed bottom-0 h-[90px] w-full py-4 flex flex-col items-center justify-center gap-2 bg-stone-800 border-t border-t-stone-700">
        <span>
          Tutorial by <Link href="https://twitter.com/zg_dev">@zg_dev</Link>
        </span>
        <span>
          Photo by{" "}
          <Link href="https://unsplash.com/@lucabravo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Luca Bravo
          </Link>{" "}
          on{" "}
          <Link href="https://unsplash.com/s/photos/mountains?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </Link>
        </span>
      </footer>
    </div>
  );
}
