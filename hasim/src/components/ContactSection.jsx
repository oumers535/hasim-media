import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="mt-24">
      <div className="px-3 sm:px-6 md:px-20 lg:px-32 max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6 ">
          <a href="#contact">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light  ">
            Masho-Tech
          </h1></a>
          <p className="font-light   ">
            Masho Tech Ethiopia means alot. Our channel is working mainly on
            three basic issues. The first is to provide timely and reliable
            information to its family, thereby contributing to the fact that our
            Chanel’s family is not deceived by false information. The second is
            charity work, which has been done to help and protect many of our
            infirm people by coordinating with our families. The last and third
            is to empower young people. In this way, it is working to inspire
            young people to strive for a good cause and to create enlightenment
            among this generation.
          </p>
      <div className="flex flex-col gap-1 my-5 ">
          <h1 className="font-semibold text-xl ">CONTACT US</h1>
          <p>Mekele, Ethiopia</p>
          <p className="font-bold">
            Phone:
            <span className="text-purple-600 px-2 cursor-pointer">
              +25198 88 023
            </span>{" "}
          </p>
          <p className="font-bold">
            Email:<span className="font-normal px-2">masho.test@gmail.com</span>{" "}
          </p>
          <div className="flex items-center gap-4 my-4 ">
            <AiFillTwitterCircle
              size={30}
              className="bg-[#0099CC] rounded-full text-white cursor-pointer"
            />
            <FaInstagramSquare
              size={30}
              className="text-blue-700 rounded-full cursor-pointer"
            />
            <FaTelegram
              size={30}
              className="text-violet-900 rounded-full cursor-pointer"
            />
            <FaFacebook size={30} className="text-blue-700 cursor-pointer" />
          </div>
        </div>
        </div>
  
        <div className=" ">
          <h1 className="font-bold my-4">SEND US A MESSAGE</h1>
          <p className="text-gray-500">
            Drop us a message here, we will respond as soon as possible.
          </p>
          <form className="flex gap-4 flex-col my-6 font-serif  ">
            <input
              type="text"
              placeholder="Your Name"
              className="border px-4 py-2 border-gray-300 rounded-sm outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border px-4 py-2 border-gray-300 rounded-sm outline-none"
            />
            <input
              type="text"
              placeholder="Your Phone Number"
              className="border px-4 py-2 border-gray-300 rounded-sm outline-none"
            />
            <textarea
              placeholder="Message"
              className="border h-24 px-4 py-2 border-gray-300 rounded-sm outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#0099CC] text-white w-36 mx-auto my-3"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
