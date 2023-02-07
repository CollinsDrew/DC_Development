import React from "react";
import Aura from "../Assests/AuraMusic.jpg";
import CC from "../Assests/CryptoCollins.jpg";
import Mikey from "../Assests/background2.jpg";
import { Link } from "react-scroll";

const Projects = () => {
  return (
    <div
      name="projects"
      className="max-w-[1400px] h-[500px] text-white mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4"
    >
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-5xl md:text-6xl font-bold">Recent Projects</h3>
        <p className="pt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img className="object-cover w-full h-full" src={CC} alt="/" />
        <img
          className="row-span-2 object-cover w-full h-full"
          src={Mikey}
          alt="/"
        />
        <img className="object-cover w-full h-full" src={Aura} alt="/" />
      </div>
    </div>
  );
};

export default Projects;
