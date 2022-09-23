import React, { useState } from "react";
import gradientLangit from "../../assets/gradienLangit.svg";
import daunSaru from "../../assets/daunSaru.svg";
import bulan from "../../assets/bulan.svg";
import tanahBawah from "../../assets/tanahBawah.svg";
import tanahTengah from "../../assets/tanahTengah.svg";
import tanahAtas from "../../assets/tanahAtas.svg";
import pohonKanan from "../../assets/pohonKanan.svg";
import pohonKiri from "../../assets/pohonKiri.svg";
import { AiFillPlayCircle } from "react-icons/ai";
import { motion } from "framer-motion";

function Header() {
  const [stateModal, setStateModal] = useState(false);

  function ShowModal() {
    setStateModal(!stateModal);
  }
  return (
    <>
      {stateModal ? (
        <motion.div
          onClick={ShowModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 bottom-0 right-0 left-0 z-[1000] bg-[#000000e1] flex items-center justify-center"
        >
          <h1 className="flex items-center justify-center text-[32px] newFont md:text-[48px] lg:text-[68px] bg-gradient-to-b from-[#EDC531] via-[#B88526] to-[#76520E] text-transparent bg-clip-text">
            COMING SOON
          </h1>
        </motion.div>
      ) : (
        <></>
      )}
      <div className="h-[500px] md:h-screen w-full px-0 bg-gradient-to-b from-[#4E093B] via-[#6A0F52] to-[#EFB43E] relative overflow-hidden">
        <div className="w-full ">
          <div className="text-white w-80 md:w-[400px] lg:w-[600px] xl:w-[800px] mx-auto text-center px-6 top-48 relative z-[500]">
            <h1 className="text-[32px] newFont md:text-[48px] lg:text-[68px] bg-gradient-to-b from-[#EDC531] via-[#B88526] to-[#76520E] text-transparent bg-clip-text">
              MRFEST 7.0
            </h1>
            <h3 className="text-[20px] md:text-[32px] lg:text-[54px]">
              WERIFESTERIA : The Year of Victory and Euphoria
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center mt-4 md:mt-12 gap-x-5 gap-y-3">
              <a
                href="https://www.instagram.com/reel/CgBopAflCXy/?igshid=NzNkNDdiOGI="
                className="cursor-pointer w-40 py-1 text-sm md:text-base bg-transparent text-black border-black border-[3px] rounded-[4px] hover:bg-black hover:text-white delay-150 duration-500 transition ease-in"
              >
                <div className="flex items-center gap-2 justify-center">
                  <AiFillPlayCircle className="inline mr-1 text-2xl" />
                  <p>Throwback</p>
                </div>
              </a>

              <button
                onClick={ShowModal}
                className="w-40 py-1 text-sm md:text-base bg-transparent text-black border-black border-[3px] rounded-[4px] hover:bg-black hover:text-white delay-150 duration-500 transition ease-in"
              >
                <div className="flex items-center gap-2 justify-center">
                  <AiFillPlayCircle className="inline mr-1 text-2xl" />
                  <p>Trailer</p>
                </div>
              </button>
            </div>
          </div>
          <img
            className="absolute top-0 w-full"
            src={gradientLangit}
            alt="langit"
          />

          <img
            className="absolute w-full top-0"
            src={daunSaru}
            alt="daun saru"
          />

          <img
            className="absolute -left-[180px] sm:-left-[220px] -bottom-6 sm:-bottom-10 z-50 sm:w-[450px] lg:w-1/2 lg:-left-[250px] xl:-left-[360px] xl:-bottom-12"
            src={pohonKiri}
            alt="pohonKiri"
          />
          <img
            className="absolute -right-[170px] sm:-right-[240px] bottom-0 sm:-bottom-10 z-50 sm:w-[450px] md:w-[550px] md:-right-[260px] lg:w-[620px] lg:-right-[300px] lg:-bottom-8"
            src={pohonKanan}
            alt="pohonKanan"
          />

          <img
            className="absolute left-[35%] md:left-[20%] sm:bottom-[60px] md:bottom-[60px] bottom-[20px] w-40 md:w-96 lg:bottom-[65px] lg:left-[40%]"
            src={bulan}
            alt="bulan"
          />
          <img
            className="absolute -bottom-3 -right-10 z-40 w-full xl:-bottom-12"
            src={tanahBawah}
            alt="tanah bawah"
          />
          <img
            className="absolute -left-6 -bottom-1 z-30 w-full xl:-bottom-10 md:-bottom-4"
            src={tanahTengah}
            alt="tanah tengah"
          />
          <img
            className="absolute -bottom-2 xl:-bottom-16 md:-bottom-5 w-full -right-[2%]"
            src={tanahAtas}
            alt="tanahAtas"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
