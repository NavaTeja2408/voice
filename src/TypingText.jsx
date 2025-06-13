// TypingText.js
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.017,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.0,
    },
  },
};

const TypingText = ({ text, className }) => {
  return (
    <motion.p
      className={`font-mono px-4 py-6 break-words whitespace-normal ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* {type === "phone" ? <MdOutlinePhone /> : <MdOutlineMessage />} : */}
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letterVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TypingText;
