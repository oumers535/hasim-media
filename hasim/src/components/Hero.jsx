import React from "react";
import aos from 'aos';
import { Link } from "react-router-dom";

import heroimg from "../assets/intro-img.svg";
import "aos/dist/aos.css";
const Hero = () => {
  return (
    <section className="h-screen w-full bg-hero-img bg-cover bg-center relative   ">
      <div className="bg-gray-300/60 w-full h-full">
      <div className="max-w-[1240px] px-3 sm:px-6 md:px-20 lg:px-32 flex sm:pt-36 pt-24  h-full  mx-auto  ">
          <div className="  grid sm:grid-cols-2 grid-cols-1 mx-auto ">
            <div data-aos="zoom-in"   className=" sm:order-1  order-2 sm:mt-36   ">
              <h1 className="font-bold text-3xl sm:text-5xl mb-4 ">
                REGISTER & BE <br /> ONE OF OUR{" "}
                <span className="text-[#0099cc]"> FAMILY!</span>
              </h1>
              <button className="px-6 py-2 cursor-pointer hover:bg-[#0099cd]/50 bg-[#0099cc] text-gray-200 rounded-md m-4"><Link to='/signup'>REGISTER</Link></button>
              <button className="px-6 py-2 cursor-pointer  bg-[#0099cc] text-gray-200 hover:text-black  border-[#0099cc] border-2 hover:bg-white rounded-md m-4"><Link to='/login'>LOGIN</Link></button>           
            </div>
            <div data-aos="zoom-out" data-aos-delay="200" className="sm:flex sm:order-2 order-1 gap-6 sm:mt-20 mt-20 mx-auto h-full w-full overflow-hidden outline-none ">
              <img src={heroimg} alt="heroimg" className="sm:h-80 h-60  " />
            </div>
          </div>
      </div>
      </div>     
         
    
    </section>
  );
};

export default Hero;
