import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Rangkaian1 from "../../assets/rangkaian1.png";
import Rangkaian2 from "../../assets/rangkaian2.png";
import { Link } from "react-router-dom";

function TimeLine() {
  const { ref, inView } = useInView({
    threshold: 0.4,
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
            duration: 2,
            ease: [0, 0.71, 0.2, 1.01],
          },
        },
      });
    } else if (!inView) {
      animation.start({ x: "-16vw", opacity: 0 });
      animation2.start({ x: "16vw", opacity: 0 });
    }
  }, [inView, animation, animation2]);

  return (
    <div
      id="event"
      ref={ref}
      className="w-full bg-[#1E1A1D] relative overflow-hidden py-20 md:py-28 lg:py-40"
    >
      <div className="w-full md:w-[70%] md:mx-auto grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-y-5">
        <motion.div className="w-full cursor-pointer" animate={animation}>
          <Link to="/event">
            <div className="w-72 h-80 bg-gray-300 mx-auto drop-shadow-xl">
              <img
                src={Rangkaian1}
                alt="rangkaian 1"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-white font-bold text-center mt-3">
              LUGUBRIOUS
            </h1>
            <p className="text-white text-center">25 September</p>
          </Link>
        </motion.div>

        <motion.div className="w-full cursor-pointer" animate={animation2}>
          <Link to="/event">
            <div className="w-72 h-80 bg-gray-300 mx-auto drop-shadow-xl">
              <img
                src={Rangkaian2}
                alt="rangkaian 2"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-white font-bold text-center mt-3">LUCULENCE</h1>
            <p className="text-white text-center">Coming Soon</p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default TimeLine;
