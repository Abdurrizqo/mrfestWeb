import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function PreviewLast() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: {
          default: {
            duration: 1.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
        },
      });
    } else if (!inView) {
      animation.start({ opacity: 0, scale: 0.5 });
    }
  }, [inView, animation]);

  return (
    <div
      ref={ref}
      className="w-full bg-[#1E1A1D] relative overflow-hidden py-40 lg:py-32 flex items-center"
    >
      <motion.div className="w-full" animate={animation}>
        <div className="w-full h-80 sm:h-[360px] md:h-[420px] lg:h-[480px] md:w-[75%] lg:w-[85%] bg-gray-300 mx-auto"></div>
      </motion.div>
    </div>
  );
}

export default PreviewLast;
