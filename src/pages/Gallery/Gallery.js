import React from "react";

function Gallery() {
  return (
    <div className="w-full bg-black pt-32">
      <div className="w-full bg-gray-300 h-[400px] relative mx-auto lg:w-[95%] lg:rounded-md mb-10">
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

      <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-2 justify-items-center px-5 pb-20">
        <div className="w-32 h-32 lg:w-60 lg:h-60 rounded bg-gray-300"></div>
        <div className="w-32 h-32 lg:w-60 lg:h-60 rounded bg-gray-300"></div>
        <div className="w-32 h-32 lg:w-60 lg:h-60 rounded bg-gray-300"></div>
        <div className="w-32 h-32 lg:w-60 lg:h-60 rounded bg-gray-300"></div>
        <div className="w-32 h-32 lg:w-60 lg:h-60 rounded bg-gray-300"></div>
        <div className="w-32 h-32 lg:w-60 lg:h-60 rounded bg-gray-300"></div>
        <div className="w-32 h-32 lg:w-60 lg:h-60 rounded bg-gray-300"></div>
        <div className="w-32 h-32 lg:w-60 lg:h-60 rounded bg-gray-300"></div>
        <div className="w-32 h-32 lg:w-60 lg:h-60 rounded bg-gray-300"></div>
        <div className="w-32 h-32 lg:w-60 lg:h-60 rounded bg-gray-300"></div>
        <div className="w-32 h-32 lg:w-60 lg:h-60 rounded bg-gray-300"></div>
        <div className="w-32 h-32 lg:w-60 lg:h-60 rounded bg-gray-300"></div>
        <div className="w-32 h-32 lg:w-60 lg:h-60 rounded bg-gray-300"></div>
      </div>
    </div>
  );
}

export default Gallery;
