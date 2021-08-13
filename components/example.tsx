import React from "react";
import ProductWidget1 from "./ProductWidget1";

import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    INFORMATION: [
      {
        title:
          "UltraFlora® Balance provides a dairy-free base for a blend of highly viable, pure strains of L. acidophilus NCFM® and B. lactis Bi-07®—“friendly” bacteria that have been shown to support a healthy intestinal environment and immune health. Backed by the Metagenics ID Guarantee for purity, clinical reliability, and predicted safety via scientific identification of strains with established health benefits. Serving size: 1 Capsule Serving per Container: 30",
      },
    ],
    REVIEWS: [
      {
        title:
          " Balance provides a dairy-free base for a blend of highly viable, pure strains of L. acidophilus NCFM® and B. lactis Bi-07®—“friendly” bacteria that have been shown to support a healthy intestinal environment and immune health. Backed by the Metagenics ID Guarantee for purity, clinical reliability, and predicted safety via scientific identification of strains with established health benefits. Serving size: 1 Capsule Serving per Container: 30",
      },
    ],
  });

  return (
    <div className="w-3/4 ml-16 px-10 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-primary rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }>
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "bg-white rounded-xl p-3",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              )}>
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative p-3 rounded-md hover:bg-coolGray-100">
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "focus:z-10 focus:outline-none focus:ring-2 ring-blue-400"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
