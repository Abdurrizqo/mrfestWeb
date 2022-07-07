import React from "react";
import gradientLangit from "../../assets/gradienLangit.svg";
import daunSaru from "../../assets/daunSaru.svg";
import bulan from "../../assets/bulan.svg";
import tanahBawah from "../../assets/tanahBawah.svg";
import tanahTengah from "../../assets/tanahTengah.svg";
import tanahAtas from "../../assets/tanahAtas.svg";
import pohonKanan from "../../assets/pohonKanan.svg";
import pohonKiri from "../../assets/pohonKiri.svg";
import daunTerbang from "../../assets/daunTerbang.svg";

function Header() {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#4E093B] via-[#6A0F52] to-[#EFB43E] relative overflow-hidden">
      <div className="w-full h-full relative">
        <img
          className="absolute top-20 left-[10%] z-30"
          src={daunTerbang}
          alt="daunTerbang"
        />

        <div className=" h-96 absolute z-[100] text-white text-center right-0 left-0 mx-96 p-28">
          <h1 className="text-[96px]">MRFEST 7.0</h1>
          <h3 className="text-[40px]">
            WERIFESTERIA : The Year of Victory and Euphoria
          </h3>
          <button className="px-10 mt-12  py-2 bg-transparent text-black border-black border-[3px] rounded-[4px]">
            Watch Now
          </button>
        </div>

        <img className="absolute top-0" src={gradientLangit} alt="langit" />
        <img className="absolute" src={daunSaru} alt="daun saru" />

        <img
          className="absolute -left-10 z-50"
          src={pohonKiri}
          alt="pohonKiri"
        />
        <img
          className="absolute -right-10 z-50"
          src={pohonKanan}
          alt="pohonKanan"
        />

        <img
          className="absolute left-[22%] bottom-[30px]"
          src={bulan}
          alt="bulan"
        />
        <img
          className="absolute -bottom-20 -right-10 z-40"
          src={tanahBawah}
          alt="tanah bawah"
        />
        <img
          className="absolute -left-6 -bottom-5 z-30"
          src={tanahTengah}
          alt="tanah tengah"
        />
        <img className="absolute -bottom-10 " src={tanahAtas} alt="tanahAtas" />
      </div>
    </div>
  );
}

export default Header;
