import React from "react";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center mx-auto my-20 pt-40 lg:mb-[20%] md:mb-[35%] px-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/85a65b83-34d1-46c4-a2c8-d180f882b97d"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Get intouch with any enquiries or questions -
          </p>
        </div>

        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="Email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-teal-600 hover:border-teal-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
