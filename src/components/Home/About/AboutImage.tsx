import { motion } from "framer-motion";
import Image from "../../../assets/about/about.webp";

const AboutImage = () => {
  return (
    <motion.img
      initial={{
        color: "var(--accent-color-1)",
      }}
      animate={{
        color: "var(--accent-color-2)",
        transition: {
          duration: 0.1,
          type: "tween",
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
      src={Image}
      alt="Kretostan's photo"
      className="object-cover h-full w-[300px] drop-shadow-[0_0_5px_var(--accent-color-2)]"
      loading="lazy"
    />
  );
};

export default AboutImage;
