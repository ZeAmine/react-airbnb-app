import React from "react";
import Image from "next/image";

const Live = ({ title, items, urlPrefix }) => {
  return (
    <section className="mb-20">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex scroll-snap-type space-x-4 xl:space-x-9 2xl:space-x-16 mt-6 overflow-x-scroll scrollbar-hide p-2 xl:p-4">
        {items.map(({ title, img }, index) => (
          <div
            key={index}
            className="hover:scale-105 transform transition duration-300 ease-out cursor-pointer"
          >
            <div className="relative sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96 mb-2">
              <Image
                src={urlPrefix + img}
                alt={title}
                layout="fill"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-lg font-medium">{title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Live;
