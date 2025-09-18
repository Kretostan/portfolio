import { motion } from "framer-motion";

const Tooltip = ({ name }: { name: string }) => {
  return (
    // TODO: Change displaying (top, width or something)
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute -top-20 -left-6 flex justify-center items-center px-4 py-2 w-[8em] bg-bg-theme-1 rounded-lg text-center ring-1"
    >
      {name}
    </motion.div>
  );
};

export default Tooltip;
