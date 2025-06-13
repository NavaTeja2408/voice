// FadeOnScroll.js
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import home_11 from "./assets/home_11.PNG";

const InViewOpacitySlide = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // fades as top of element scrolls up
  });

  // Animate blur, scale, and slight opacity for complete hide
  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.2, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        filter: blur,
        scale,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default InViewOpacitySlide;
