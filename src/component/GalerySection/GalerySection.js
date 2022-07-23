import React from "react";

function GalerySection() {
  return (
    <div className="w-full bg-black relative overflow-hidden py-10 md:py-16 lg:py-32">
      <div className="w-full bg-gray-300 h-[400px] relative mx-auto lg:w-[95%] rounded-md">
        <div className="bg-white rounded p-5 w-2/5 absolute bottom-5 left-5 hidden md:block">
          <h1 className="text-3xl font-extrabold absolute right-5 -top-5">
            After Movie
          </h1>
          <h1 className="font-bold text-xl mb-4">MRFEST 6.0</h1>
          <p className="mb-3">
            Retrouvailles is a beautiful term to describe the happinesss of
            meeting someone that is very dear to you after a long time.
          </p>
          <button className="border rounded border-black px-6 py-1">
            Watch
          </button>
        </div>
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 mt-5 px-5 justify-items-center">
        <div className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 bg-gray-300 rounded"></div>
        <div className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 bg-gray-300 rounded"></div>
        <div className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 bg-gray-300 rounded hidden sm:block"></div>
        <div className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 bg-gray-300 rounded hidden md:block"></div>
        <div className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 bg-gray-300 rounded hidden lg:block"></div>
      </div>
      <button className="border rounded-sm text-white px-6 py-1 mt-6 block mx-auto">
        See Galery
      </button>
    </div>
  );
}

export default GalerySection;
