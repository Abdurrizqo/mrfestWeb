import React, { useEffect } from "react";
import AboutImg from "../../assets/about.png";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function NewExperience() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          default: {
            duration: 4,
            ease: [0, 0.71, 0.2, 1.01],
          },
        },
      });

      animation2.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          default: {
            duration: 1.7,
            ease: [0, 0.71, 0.2, 1.01],
          },
        },
      });
    } else if (!inView) {
      animation.start({ x: "-16vw", opacity: 0 });
      animation2.start({ x: "16vw", opacity: 0 });
    }
  }, [inView, animation]);
  return (
    <div
      ref={ref}
      id="about"
      className="w-full bg-black relative overflow-x-hidden py-32 sm:px-8 md:flex md:flex-row-reverse items-center md:py-24 lg:py-48"
    >
      <motion.div className="w-full" animate={animation}>
        <img
          src={AboutImg}
          alt="about"
          className="w-full sm:w-[300px] md:w-96 block mx-auto"
        />
      </motion.div>
      <motion.div
        className="px-5 text-center md:text-left md:ml-20 md:pr-10 lg:ml-40 lg:pr-20"
        animate={animation2}
      >
        <h1 className="text-[32px] font-bold text-white my-4">
          New Experience In Magical Forest
        </h1>
        <p className="text-white">
          Malang Revolutive Festival 7.0 known as MRFEST 7.0 is an event held to
          announce the 9th Anniversary of the Information System Students Big
          Family. This year The theme of this year's MRFEST 7.0 is "Magic
          Forest" called "WERIFESTERIA: A Year of Victory and Euphoria".
        </p>
      </motion.div>
    </div>
  );
}

export default NewExperience;
