import React from "react";
import AboutImg from "../../assets/about.png";

function Shop() {
  return (
    <div className="w-full bg-black relative overflow-hidden py-10 sm:px-8 md:flex items-center md:py-16 lg:py-32">
      <div className="w-full md:w-[420px] md:h-[420px] h-80 bg-gray-300 md:mx-12 lg:ml-40 lg:mr-28">
        {/* <img src={AboutImg} alt="about" /> */}
      </div>
      <div className="px-5 text-center md:text-left md:w-[280px] lg:w-[480px]">
        <h1 className="text-[32px] font-bold text-white my-4">MRFEST Goods</h1>
        <p className="text-white">
          Select MRFEST 7.0 merch items are available to purchase online!
          Available as a pre-order for a limited time only.
        </p>
        <button className="border rounded-sm text-white px-6 py-1 mt-4">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Shop;
