import React from "react";
import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center p-1 mt-5 space-x-4 rounded-lg cursor-pointer hover:bg-gray-100">
      {/*LEFT*/}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-md" />
      </div>

      {/*RIGHT*/}
      <div className="ml-4">
        <h2 className="font-medium">{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
