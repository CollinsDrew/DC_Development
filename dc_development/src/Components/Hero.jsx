import React from "react";
import heroImg from "../Assests/pexels.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={heroImg}
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            DC Development
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Building Your Vision. Powering Your Success.
          </p>
          <Link to="contact">
            <button className="bg-white text-black ">Enquire Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
