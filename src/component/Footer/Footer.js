import React from "react";
import Logo from "../../assets/logo.png";
import Instagram from "../../assets/instagram.svg";
import Line from "../../assets/line.svg";
import Youtube from "../../assets/youtube.svg";

function Footer() {
  return (
    <div className="w-full bg-black text-center text-white">
      <img src={Logo} alt="logo" className="w-32 block mx-auto" />
      <p className="text-sm">&copy; MRFEST 7.0 X P2S EMSI 2022/2023</p>
      <div className="flex justify-center justify-items-center gap-4 mt-6 pb-6">
        <img src={Instagram} alt="sosial media" className="w-5 lg:w-8" />
        <img src={Line} alt="sosial media" className="w-5 lg:w-8" />
        <img src={Youtube} alt="sosial media" className="w-5 lg:w-8" />
      </div>
    </div>
  );
}

export default Footer;
