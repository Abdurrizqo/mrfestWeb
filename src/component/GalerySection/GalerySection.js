import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function GalerySection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1.5,
        transition: {
          default: {
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
          },
        },
      });
    } else if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView, animation]);

  return (
    <div
      ref={ref}
      className="w-full bg-black relative overflow-hidden py-10 md:py-16 lg:py-32"
    >
      <motion.div animate={animation}>
        <div className="w-full bg-gray-300 h-[400px] relative mx-auto lg:w-[95%] rounded-md">
          <div className="bg-white rounded p-5 w-2/5 absolute bottom-5 left-5 hidden md:block">
            <h1 className="text-3xl font-extrabold absolute right-5 -top-5">
              After Movie
            </h1>
            <h1 className="font-bold text-xl mb-4">MRFEST 6.0</h1>
            <p className="mb-3">
              Retrouvailles is a beautiful term to describe the happinesss of
              meeting someone that is very dear to you after a long time.
            </p>
            <button className="border rounded border-black px-6 py-1">
              Watch
            </button>
          </div>
        </div>
        <div className=" grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 mt-5 px-5 justify-items-center">
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 bg-gray-300 rounded"></div>
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 bg-gray-300 rounded"></div>
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 bg-gray-300 rounded"></div>
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 bg-gray-300 rounded hidden md:block"></div>
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 bg-gray-300 rounded hidden lg:block"></div>
        </div>
        <button className="border rounded-sm text-white px-6 py-1 mt-6 block mx-auto">
          See Galery
        </button>
      </motion.div>
    </div>
  );
}

export default GalerySection;
