import React, { useState } from "react";
import { photos } from "../data/data";

const Gallery = () => {
  
  const [filteredData, setFilteredData] = useState(photos);


  const filterType = (category) => {

    setFilteredData(photos.filter((item) => item.category === category));
  };

  return (
    <div className=" py-16">
      <div className="max-w-[1240px] mx-auto sm:px-6 md:px-20 lg:px-32 ">
        <h1 data-aos= 'fade-up' className="text-center text-3xl font-bold py-4 underline ">Our Gallery</h1>
        <div data-aos= 'fade-up' data-aos-delay='100' className="flex justify-center items-center pb-6">
          <p
            onClick={() => filterType("events")}
            className="mx-4  cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md"
          >
            Events
          </p>
          <p
            onClick={() => filterType("movements")}
            className="mx-4 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md"
          >
            Movements
          </p>
          <p
            onClick={() => filterType("charities")}
            className="mx-4 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md"
          >
            Charities
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {filteredData.map((item) => (
            <div key={item.id} className="overflow-hidden">
              <img
                data-aos="fade-up"
                src={item.href}
                alt={item.title}
                className="w-full h-48"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
