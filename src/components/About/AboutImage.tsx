import { motion } from "framer-motion";

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
      src="https://kretostan-portfolio.s3.eu-north-1.amazonaws.com/about.png"
      alt="Kretostan's photo"
      className="object-cover about-image w-1/2 sm:w-1/3 lg:w-1/4"
    />
  );
};

export default AboutImage;
