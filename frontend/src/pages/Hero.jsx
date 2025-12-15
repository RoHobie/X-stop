import React from "react";
import HeroImg from "../assets/Basketball.png";

const Hero = () => {
  return (
    <div className="w-full max-h-screen flex flex-col justify-center items-center  gap-2 mb-10">
      <div className="flex justify-center items-center mb-8 ">
        <h1 className="font-montserrat text-[5vw] font-extrabold flex-wrap bg-linear-to-b from-black to-gray-300 bg-clip-text text-transparent">
          CHAMPIONS KEEP PLAYING
          <br /> UNTIL THEY GET IT RIGHT
        </h1>
        <img src={HeroImg} className="w-5/12 -translate-x-8" />
      </div>
      <button className=" bg-black p-2 md:w-32 md:h-12 min-w-16 min-h-8  font-montserrat outline-2 outline-offset-3 outline-black text-white font-semibold max-md:text-sm md:my-10">Explore</button>
    </div>
  );
};

export default Hero;
