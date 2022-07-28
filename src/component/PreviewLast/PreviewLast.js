import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import mapTime from "../../assets/timeline.png";
import mapTime2 from "../../assets/timelinemobile.png";

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

  let width = window.screen.width;

  return (
    <div
      ref={ref}
      className="w-full bg-[#1E1A1D] relative overflow-hidden py-40 lg:py-32 flex items-center"
    >
      <motion.div className="w-full" animate={animation}>
        <div className="w-[85%] h-[500px] sm:h-[400px] md:h-[480px] lg:h-[600px] md:w-[75%] lg:w-[85%] mx-auto">
          {width < 640 ? (
            <img src={mapTime2} alt="time line" className="w-full h-full" />
          ) : (
            <img src={mapTime} alt="time line" className="w-full h-full" />
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default PreviewLast;
