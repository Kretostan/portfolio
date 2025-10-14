import {motion} from "framer-motion";
import {useNavigate} from "react-router";
import Icon from "../UI/Icon";
import {useTranslation} from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <footer id="contact" className="flex flex-col items-center justify-center gap-5 py-7 w-full text-text-theme-2 bg-bg-theme-2 border-t-2 border-accent-theme-1">
      <div className="flex gap-6 font-semibold text-accent-theme-1">
        <motion.a whileHover={{ color: "var(--accent-color-2)" }}
          className="flex items-center gap-1"
          href="https://github.com/Kretostan"
          target="_blank"
          rel="noopener noreferrer"
        ><Icon icon="github" alt="Github logo" height={14} width={14} themed />GitHub</motion.a>
        <motion.a whileHover={{ color: "var(--accent-color-2)" }}
          className="flex items-center gap-1"
          href="https://www.linkedin.com/in/jakub-kret-925865263"
          target="_blank"
          rel="noopener noreferrer"
        ><Icon icon="linkedin" alt="Linkedin logo" height={14} width={14} themed />LinkedIn</motion.a>
        <motion.button whileHover={{ color: "var(--accent-color-2)" }}
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => navigate("contact")}
        ><Icon icon="mail" alt="Envelope icon" height={14} width={14} themed />Contact</motion.button>
      </div>
      <p className="flex items-center gap-0.25">
        <span className="flex text-base">&copy;</span>
        {currentYear} Jakub Kret. {t("footer.rights")}
      </p>
    </footer>
  );
};

export default Footer;
