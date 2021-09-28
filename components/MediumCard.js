import React from "react";
import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="hover:scale-105 transform transition duration-300 ease-out cursor-pointer">
      <div className="relative h-64 w-64 mb-2">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <h2 className="text-lg font-medium">{title}</h2>
    </div>
  );
};

export default MediumCard;
