import React from "react";
import AboutImg from "../../assets/about.png";

function NewExperience() {
  return (
    <div className="w-full bg-black relative overflow-x-hidden py-10 sm:px-8 md:flex md:flex-row-reverse items-center md:py-16 lg:py-32">
      <div className="w-full">
        <img
          src={AboutImg}
          alt="about"
          className="w-full sm:w-[300px] md:w-96 block mx-auto"
        />
      </div>
      <div className="px-5 text-center md:text-left md:ml-20 md:pr-10 lg:ml-40 lg:pr-20">
        <h1 className="text-[32px] font-bold text-white my-4">
          New Experience In Magical Forest
        </h1>
        <p className="text-white">
          Malang Revolutive Festival 7.0 known as MRFEST 7.0 is an event held to
          announce the 9th Anniversary of the Information System Students Big
          Family. This year The theme of this year's MRFEST 7.0 is "Magic
          Forest" called "WERIFESTERIA: A Year of Victory and Euphoria".
        </p>
      </div>
    </div>
  );
}

export default NewExperience;
