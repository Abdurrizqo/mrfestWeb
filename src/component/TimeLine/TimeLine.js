import React from "react";

function TimeLine() {
  return (
    <div className="w-full bg-black relative overflow-x-hidden py-10 md:py-16 lg:py-32">
      <div className="w-full md:w-[70%] md:mx-auto grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-y-5">
        <div className="w-full">
          <div className="w-60 h-80 bg-gray-300 mx-auto"></div>
          <h1 className="text-white font-bold text-center mt-3">LUGUBRIOUS</h1>
          <p className="text-white text-center">25 September</p>
        </div>

        <div className="w-full">
          <div className="w-60 h-80 bg-gray-300 mx-auto"></div>
          <h1 className="text-white font-bold text-center mt-3">LUCULENCE</h1>
          <p className="text-white text-center">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
