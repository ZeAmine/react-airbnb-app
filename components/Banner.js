import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative sm:h-[400px] md:h-[500px] lg:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-base lg:text-lg font-medium mb-3">
          Vous ne savez pas où partir ? Parfait !
        </p>
        <button className="text-base lg:text-lg font-bold text-purple-500 bg-white px-14 py-5 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition duration-300">
          Je suis flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
