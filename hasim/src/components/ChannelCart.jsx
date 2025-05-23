import React from "react";
const ChannelCart = ({channel}) => {
  return (
     
        <div className="  hover:scale-105 duration-300 cursor-pointer text-center items-center justify-center shadow-xl shadow-gray-100 px-6 py-4 mx-auto flex flex-col  ">
          <img src={channel.image} alt={channel.title} className="rounded-full h-[65px] w-[65px]  mx-auto" />
          <h1 className="text-2xl font-bold py-3 ">{channel.title}</h1>
          <p className="font-light font-san">{channel.description}</p>
          <a className="text-[#0099cc] py-4 font-serif font-bold text-xl" href={channel.href}>{channel.link}</a>
        </div>
      
   
  );
};

export default ChannelCart;
