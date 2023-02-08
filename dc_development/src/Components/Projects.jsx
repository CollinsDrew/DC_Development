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
        <p className="pt-4 text-gray-400">
          Our portfolio of recent projects showcases the variety of web services
          we offer, including building websites for small businesses,
          individuals, e-commerce sites, and crypto price trackers.
          <br></br>
          We understand that every client is unique, and we take a personalized
          approach to each project to ensure that our clients get the best
          possible results.
          <br></br>
          Whether you're a small business looking to establish an online
          presence, an individual looking to showcase your work, or an
          e-commerce site looking to drive sales, we can help you achieve your
          goals.
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <div>
          <a href="https://crypto-collins.netlify.app/">
            <img className="object-cover w-full h-full" src={CC} alt="/" />
          </a>
        </div>
        <a className="row-span-2" href="http://mikeycollins.co.uk/">
          <img
            className="row-span-2 object-cover w-full h-full"
            src={Mikey}
            alt="/"
          />
        </a>
        <a href="https://aura-unsigned.netlify.app/">
          <img className="object-cover w-full h-full" src={Aura} alt="/" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
