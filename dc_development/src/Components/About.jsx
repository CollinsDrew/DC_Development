import React from "react";
import Image1 from "../Assests/wireframe.jpg";
import Image2 from "../Assests/projectsDC.jpeg";
import Image3 from "../Assests/trialAbout.jpg";
import Image4 from "../Assests/monitors.webp";
import Image5 from "../Assests/monitors.webp";

import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="services"
      className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 text-gray-300"
    >
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={Image1}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={Image2}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={Image3}
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={Image4}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={Image5}
          alt="/"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Services</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">Contact</button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            Recent Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
