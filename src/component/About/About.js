import React, { useEffect } from "react";
import Aboutmrfest from "../../assets/aboutmrfest.png";

function About() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="w-full bg-[#1E1A1D] relative overflow-x-hidden py-32 sm:px-8 md:flex md:flex-row-reverse items-center md:py-24 lg:py-48">
      <div className="w-full">
        <img
          src={Aboutmrfest}
          alt="about"
          className="w-full sm:w-[300px] md:w-96 block mx-auto"
        />
      </div>
      <div className="px-5 text-center md:text-left md:ml-20 md:pr-10 lg:ml-40 lg:pr-20">
        <h1 className="text-[32px] font-bold text-white my-4">
          New Experience In Magical Forest
        </h1>
        <p className="text-white">
          Malang Revolutive Festival 7.0 or known as MRFEST 7.0 is an event to
          commemorate the 9th Anniversary of KBMSI UB. This year, the theme of
          MRFEST 7.0 is "Magical Forest" named "WERIFESTERIA: The Year of
          Victory and Euphoria
        </p>
      </div>
    </div>
  );
}

export default About;
