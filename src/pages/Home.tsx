import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

import Title from "../components/UI/Title";
import { setCurrentPage, setShowMenu } from "../store/menuSlice.ts";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-around items-center gap-28 my-auto py-6 sm:py-16 h-full text-center">
      <Title>
        <span className="flex gap-2">
          Hello
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -12, 12, 0] }}
            style={{ transformOrigin: "bottom" }}
          >
            👋
          </motion.span>
        </span>
        I&apos;m Jakub Kret!
      </Title>
      <div className="flex flex-col justify-center items-center gap-6">
        <p className="flex flex-col md:flex-row gap-2 px-2 md:text-lg text-center">
          Learn more about me
        </p>
        <motion.button
          aria-label="Go to About page"
          className="px-5 md:px-6 py-2 lg:text-lg bg-gradient-button text-white rounded-lg cursor-pointer"
          onClick={() => {
            navigate("/about");
            dispatch(setCurrentPage("About"));
            dispatch(setShowMenu(false));
          }}
          whileHover={{ opacity: 0.75 }}
        >
          Begin
        </motion.button>
      </div>
    </div>
  );
};

export default App;
