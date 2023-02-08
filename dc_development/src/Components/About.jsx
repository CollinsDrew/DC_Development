import React from "react";
import Image1 from "../Assests/wireframe.jpg";
import Image2 from "../Assests/projectsDC.jpeg";
import Image3 from "../Assests/trialAbout.jpg";
import Image4 from "../Assests/monitors.webp";
import Image5 from "../Assests/collage-monitor.jpg";

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
        <p className="text-2xl py-6 text-gray-400">
          Empowering your brand with innovative web solutions.
        </p>
        <h5 className="text-2xl md:text-2xl font-bold text-gray-400 py-6">
          Wireframe
        </h5>
        <p className="pb-6">
          Designing a website involves a lot of planning and creativity. It is
          essential to have a clear understanding of the purpose and goals of
          the website before you start designing it. The first step in designing
          a website is to create a wireframe, which is a visual representation
          of the website's structure and content. A wireframe helps to plan the
          layout of the pages, the placement of the elements, and the flow of
          the user interface.
        </p>
        <h5 className="text-2xl md:text-2xl font-bold text-gray-400 py-6">
          Prototype
        </h5>
        <p className="pb-6">
          Once the wireframe is approved, the next step is to create a
          prototype, which is a working model of the website. A prototype is an
          interactive representation of the website that provides a more
          detailed view of the user interface and the user experience. A
          prototype is a great way to test the design and user experience, and
          to get feedback from stakeholders. Next, we create the pages and the
          user interface. It's important to ensure that the website is
          accessible, responsive, and optimized for search engines.
          <h5 className="text-2xl md:text-2xl font-bold text-gray-400 py-6">
            Deployment
          </h5>
          <p className="pb-6">
            Finally, the website needs to be deployed to the web, which involves
            uploading the files to a web server and configuring the domain name
            and web hosting. The website should be tested on different devices
            and browsers to ensure that it works as expected. By following a
            structured process and working closely with clients, we can create a
            website that meets your users and supports your business goals.
          </p>
        </p>
        <div>
          <Link to="contact" smooth={true} duration={500}>
            <button className="border-black bg-white text-gray-700 mr-4 hover:shadow-xl">
              Contact
            </button>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <button className="bg-black text-white border-black hover:shadow-xl">
              Recent Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
