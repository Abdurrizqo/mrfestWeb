import React from "react";

function Events() {
  return (
    <div className="w-full bg-black px-5">
      <div className="md:flex md:items-center py-28 md:justify-center md:gap-12">
        <div className="bg-gray-300 w-2/4 sm:w-72 lg:w-80 xl:w-1/4 h-80 sm:h-400 md:h-[500px] mx-auto md:mx-0"></div>
        <div className="text-center text-white mt-8 md:text-left md:w-1/2 lg:w-[430px]">
          <h1 className="text-2xl lg:text-3xl font-black">LUGUBRIOUS</h1>
          <p className="mx-auto md:mx-0 mt-3 w-[80%]">
            The first series of MRFEST 7.0 which contains competitions that are
            followed by a Large Familes of Information System Students.
          </p>
          <div className="mt-5 text-left flex flex-col gap-3">
            <h4>
              <span className="mr-[60px]"> Date </span> 25 September 2022
            </h4>
            <h4>
              <span className="mr-[60px]"> Time </span> Time
            </h4>
            <h4>
              <span className="mr-10"> Location </span> Location
            </h4>
          </div>
        </div>
      </div>

      <div className="md:flex md:items-center py-20 md:justify-center md:gap-10">
        <div className="bg-gray-300 w-2/4 sm:w-72 lg:w-80 xl:w-1/4 h-80 sm:h-400 md:h-[500px] mx-auto md:mx-0"></div>
        <div className="text-center text-white mt-8 md:text-left md:w-1/2 lg:w-[430px]">
          <h1 className="text-2xl lg:text-3xl font-black">LUCULENCE</h1>
          <p className="mx-auto md:mx-0 mt-3 w-[80%]">
            The second series of MRFEST 7.0 which contains art performances from
            Large Familes of Information System Students and Guest Star
            performances.
          </p>
          <div className="mt-5 text-left flex flex-col gap-3">
            <h4>
              <span className="mr-[60px]"> Date </span> 25 September 2022
            </h4>
            <h4>
              <span className="mr-[60px]"> Time </span> Time
            </h4>
            <h4>
              <span className="mr-10"> Location </span> Location
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
