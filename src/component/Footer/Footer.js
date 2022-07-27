import React from "react";
import Logo from "../../assets/logo.png";
import Instagram from "../../assets/instagram.svg";
import Line from "../../assets/line.svg";
import Youtube from "../../assets/youtube.svg";

function Footer() {
  return (
    <div className="w-full bg-[#1E1A1D] text-center text-white">
      <img src={Logo} alt="logo" className="w-32 block mx-auto" />
      <p className="text-sm">&copy; MRFEST 7.0 X P2S EMSI 2022/2023</p>
      <div className="flex justify-center justify-items-center gap-4 mt-6 pb-6">
        <a href="https://www.instagram.com/mrfest_/">
          <img src={Instagram} alt="sosial media" className="w-5 lg:w-8" />
        </a>
        <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=ylm1641r">
          <img src={Line} alt="sosial media" className="w-5 lg:w-8" />
        </a>
        <a href="https://www.youtube.com/channel/UCEAMN1FpHZ2u6OOHtwvsayw/featured">
          <img src={Youtube} alt="sosial media" className="w-5 lg:w-8" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
