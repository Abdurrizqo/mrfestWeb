import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

function Shop() {
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
      id="shop"
      ref={ref}
      animate={animation}
      className="w-full bg-[#1E1A1D] relative overflow-hidden py-10 sm:px-8 md:flex items-center md:py-16 lg:py-32"
    >
      <motion.div
        className="w-full md:w-[420px] md:h-[420px] h-80 bg-gray-300 md:mx-12 lg:ml-40 lg:mr-28"
        animate={animation}
      >
        {/* <img src={AboutImg} alt="about" /> */}
      </motion.div>
      <motion.div
        className="px-5 text-center md:text-left md:w-[280px] lg:w-[480px]"
        animate={animation2}
      >
        <h1 className="text-[32px] font-bold text-white my-4">MRFEST Goods</h1>
        <p className="text-white mb-5">
          Select the merchandise of MRFEST 7.0 which available to purchase
          online!
        </p>
        <Link
          to="/shopping-list"
          className="border rounded-sm text-white px-6 py-1 mt-4 cursor-pointer hover:bg-white hover:text-black delay-150 duration-500 transition ease-in"
        >
          Shop Now
        </Link>
      </motion.div>
    </div>
  );
}

export default Shop;
