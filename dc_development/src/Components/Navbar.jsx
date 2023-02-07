import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Logo from "../Assests/DCWebDevelopment.jpg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <img
        src={Logo}
        alt="Logo Image"
        style={{ width: "50px", borderRadius: "50%" }}
      />
      <HiMenuAlt3
        onClick={handleNav}
        className="z-20 text-white cursor-pointer"
        size={25}
      />
      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center cursor-pointer">
          {/* <Link to="home" smooth={true} duration={500}>
            <li onClick={handleNav} className="font-bold text-3xl p-8">
              Home
            </li>
          </Link> */}
          <Link to="services" smooth={true} duration={500}>
            <li
              onClick={handleNav}
              className="font-bold text-3xl p-8 cursor-pointer"
            >
              Services
            </li>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <li
              onClick={handleNav}
              className="font-bold text-3xl p-8 cursor-pointer"
            >
              Projects
            </li>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <li
              onClick={handleNav}
              className="font-bold text-3xl p-8 cursor-pointer"
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
