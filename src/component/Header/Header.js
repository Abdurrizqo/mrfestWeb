import React from "react";
// import gradientLangit from "../../assets/gradienLangit.svg";
// import daunSaru from "../../assets/daunSaru.svg";
// import bulan from "../../assets/bulan.svg";
// import tanahBawah from "../../assets/tanahBawah.svg";
// import tanahTengah from "../../assets/tanahTengah.svg";
// import tanahAtas from "../../assets/tanahAtas.svg";
// import pohonKanan from "../../assets/pohonKanan.svg";
// import pohonKiri from "../../assets/pohonKiri.svg";
// import daunTerbang from "../../assets/daunTerbang.svg";

function Header() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#4E093B] via-[#6A0F52] to-[#EFB43E] relative overflow-x-hidden">
      <div className="w-full h-full relative">
        <div className="text-white text-center px-6">
          <h1 className="text-[32px]">MRFEST 7.0</h1>
          <h3 className="text-[20px]">
            WERIFESTERIA : The Year of Victory and Euphoria
          </h3>
          <button className="px-8 mt-8 py-1 bg-transparent text-black border-black border-[3px] rounded-[4px]">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
