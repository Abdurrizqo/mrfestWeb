import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AfterMovie from "../../assets/aftermovie.png";

function GalerySection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();

  const navigate = useNavigate();

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
      id="gallery"
      ref={ref}
      className="w-full bg-[#1E1A1D] relative overflow-hidden py-10 md:py-16 lg:py-32"
    >
      <motion.div animate={animation}>
        <div className="w-full bg-gray-300 h-[400px] relative mx-auto lg:w-[95%] lg:rounded-md">
          <img
            src={AfterMovie}
            alt="after movie"
            className="w-full h-full object-cover lg:rounded-md"
          />
          <div className="bg-white rounded p-5 w-2/5 absolute bottom-5 left-5 hidden md:block">
            <h1 className="font-bold text-xl mb-4">MRFEST 6.0</h1>
            <p className="mb-3">
              Retrouvailles is a beautiful term to describe the happinesss of
              meeting someone that is very dear to you after a long time.
            </p>
            <a
              href="https://www.youtube.com/watch?v=gK3dLYL1a1g"
              className="border rounded border-black px-6 py-1"
            >
              Watch
            </a>

            <h1 className="text-6xl font-extrabold text-gray-200 absolute right-3 bottom-3">
              After Movie
            </h1>
          </div>
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 mt-5 px-5 justify-items-center">
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 bg-gray-300 rounded">
            <img
              src="https://i.postimg.cc/3Jpd71Nr/Screenshot-1.png"
              alt="gallery 1"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 bg-gray-300 rounded">
            <img
              src="https://i.postimg.cc/W3C1cqPJ/Screenshot-10.png"
              alt="gallery 2"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 bg-gray-300 rounded hidden md:block">
            <img
              src="https://i.postimg.cc/6pXTQZ4r/Screenshot-2.png"
              alt="gallery 3"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 bg-gray-300 rounded hidden lg:block">
            <img
              src="https://i.postimg.cc/9fxf1N8b/Screenshot-3.png"
              alt="gallery 4"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 bg-gray-300 rounded hidden lg:block">
            <img
              src="https://i.postimg.cc/N0GM6w4L/Screenshot-4.png"
              alt="gallery 5"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/gallery");
          }}
          className="border rounded-sm text-white px-6 py-1 mt-6 block mx-auto hover:bg-white hover:text-black delay-150 duration-500 transition ease-in"
        >
          See Galery
        </button>
      </motion.div>
    </div>
  );
}

export default GalerySection;
