import React from "react";
import Image from "next/image";

const Explore = ({ title, items }) => {
  return (
    <section className="pt-15 mb-20">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3">
        {items.map(({ name, time, img }, index) => (
          <div
            key={index}
            className="flex items-center p-1 mt-5 space-x-4 rounded-lg cursor-pointer hover:bg-gray-100"
          >
            <div className="relative h-16 w-16">
              <Image
                src={`/images/explore/${img}`}
                alt={name}
                layout="fill"
                className="rounded-md"
              />
            </div>
            <div className="ml-4">
              <h2 className="font-medium">{name}</h2>
              <h3 className="text-gray-500">{time} heures de route</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
