import { useDispatch } from "react-redux";
import {useNavigate} from "react-router";

import Icon from "../UI/Icon";

import { setShowMenu } from "../../store/menuSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="flex flex-col-reverse md:flex-row items-center justify-center gap-3 sm:gap-4 py-3 w-full text-xs text-text-theme-2 bg-bg-theme-2">
      <p className="flex items-center gap-0.25">
        <span className="flex text-base">&copy;</span>
        {currentYear} Kretostan
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-2 md:pt-0">
        <a
          className="flex items-center gap-1 hover:underline hover:underline-offset-4"
          href="https://github.com/Kretostan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="github" alt="Github logo" height={14} width={14} themed />
          GitHub
        </a>
        <a
          className="flex items-center gap-1 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/jakub-kret-925865263"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="linkedin"
            alt="Linkedin logo"
            height={14}
            width={14}
            themed
          />
          LinkedIn
        </a>
        <button
          className="flex items-center gap-1 hover:underline hover:underline-offset-4"
          onClick={(): void => {
            navigate("contact")
            dispatch(setShowMenu(false));
          }}
        >
          <Icon icon="mail" alt="Envelope icon" height={14} width={14} themed />
          Contact
        </button>
      </div>
    </footer>
  );
};

export default Footer;
