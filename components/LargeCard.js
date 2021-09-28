import React from "react";
import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative pt-7 pb-12 cursor-pointer">
      <div className="relative h-96 xl:h-[30rem] min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-0 flex flex-col items-start h-full justify-center sm:px-10 md:px-10 lg:px-20 xl:px-20 w-[544px] z-10">
        <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold">{title}</h2>
        <p className="text-base md:text-base lg:text-lg w-[300px] md:w-[300px] lg:w-[360px] pt-3 md:pt-3 lg:pt-4">
          {description}
        </p>
        <button className="outline-none text-sm md:text-sm lg:text-base font-medium sm:mt-5 md:mt-5 lg:mt-10 xl:mt-10 px-4 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-lg bg-white">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;

// absolute top-32 left-12
