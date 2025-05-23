import React from "react";
import { channels } from "../data/data";
import ChannelCart from "./ChannelCart";

const ChannelList = () => {
  return (
    <div className="mx-auto px-3 sm:px-6 md:px-20 lg:px-32 justify-center items-center max-w-[1240px]  py-8">
      
        <h1 data-aos= 'fade-up' className="font-bold text-4xl p-8 text-center ">Our Channels</h1>
        <div  data-aos="zoom-in" data-aos-delay = "100" className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-8 mx-auto">
          {channels.map((channel) => (
            <ChannelCart key={channel.id} channel={channel} />
          ))}
        </div>
      
    </div>
  );
};

export default ChannelList;
