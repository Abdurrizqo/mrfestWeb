import React, { useEffect } from "react";
import Rangkaian1 from "../../assets/rangkaian1.png";
import Rangkaian2 from "../../assets/rangkaian2.png";

function Events() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="w-full bg-[#1E1A1D] px-5">
      <div className="md:flex md:items-center py-28 md:justify-center md:gap-12">
        <div className="bg-gray-300 w-2/4 sm:w-72 lg:w-80 xl:w-1/4 h-80 sm:h-400 md:h-[500px] mx-auto md:mx-0">
          <img
            src={Rangkaian1}
            alt="rangkaian 1"
            className="w-full h-full object-cover"
          />
        </div>
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
              <span className="mr-[60px]"> Time </span> 07.30 A.M.
            </h4>
            <h4>
              <span className="mr-10"> Location </span> FILKOM UB
            </h4>
          </div>
        </div>
      </div>

      <div className="md:flex md:items-center py-20 md:justify-center md:gap-10">
        <div className="bg-gray-300 w-2/4 sm:w-72 lg:w-80 xl:w-1/4 h-80 sm:h-400 md:h-[500px] mx-auto md:mx-0">
          <img
            src={Rangkaian2}
            alt="rangkaian 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center text-white mt-8 md:text-left md:w-1/2 lg:w-[430px]">
          <h1 className="text-2xl lg:text-3xl font-black">LUCULENCE</h1>
          {/* <p className="mx-auto md:mx-0 mt-3 w-[80%]">
            The second series of MRFEST 7.0 which contains art performances from
            Large Familes of Information System Students and Guest Star
            performances.
          </p> */}
          <div className="mt-5 text-left flex flex-col gap-3">
            <h1 className="text-2xl text-white">Coming Soon</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
