import {useState} from "react";
import {motion} from "framer-motion";
import {useTheme} from "next-themes";
import {useTranslation} from "react-i18next";
import Icon from "../UI/Icon";
import GitHubDark from "../../assets/footer/github-dark.svg?react";
import GitHubLight from "../../assets/footer/github-light.svg?react";
import LinkedInDark from "../../assets/footer/linkedin-dark.svg?react";
import LinkedInLight from "../../assets/footer/linkedin-light.svg?react";
import EnvelopeDark from "../../assets/footer/envelope-dark.svg?react";
import EnvelopeLight from "../../assets/footer/envelope-light.svg?react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  const [isHovered, setHovered] = useState(false);
  const { resolvedTheme } = useTheme();

  return (
    <footer id="contact" className="flex flex-col items-center justify-center gap-8 py-8 w-full text-text-theme-2 bg-bg-theme-2 border-t-2 border-accent-theme-1">
      <div className="flex gap-6 font-semibold text-accent-theme-1">
        <motion.a
          whileHover={{ color: "var(--accent-color-2)" }}
          className="flex items-center gap-1"
          href="https://github.com/Kretostan"
          target="_blank"
          rel="noopener noreferrer"
          key={resolvedTheme + " GitHub"}
        ><Icon Icon={resolvedTheme === "dark" ? GitHubDark : GitHubLight} color={isHovered ? "var(--accent-color-2)" : "var(--accent-color-1)"} size={16} />GitHub</motion.a>
        <motion.a
          whileHover={{ color: "var(--accent-color-2)" }}
          className="flex items-center gap-1"
          href="https://www.linkedin.com/in/jakub-kret-925865263"
          target="_blank"
          rel="noopener noreferrer"
          key={resolvedTheme + " LinkedIn"}
        ><Icon Icon={resolvedTheme === "dark" ? LinkedInDark : LinkedInLight} color={isHovered ? "var(--accent-color-2)" : "var(--accent-color-1)"} size={16} />LinkedIn</motion.a>
        <motion.a
          whileHover={{ color: "var(--accent-color-2)" }}
          className="flex items-center gap-1"
          href="/contact"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          key={resolvedTheme + " Contact"}
        ><Icon Icon={resolvedTheme === "dark" ? EnvelopeDark : EnvelopeLight} color={isHovered ? "var(--accent-color-2)" : "var(--accent-color-1)"} className="transition-colors" />Contact</motion.a>
      </div>
      <p className="flex items-center gap-0.25">
        <span className="flex text-base">&copy;</span>
        {currentYear} Jakub Kret. {t("footer.rights")}
      </p>
    </footer>
  );
};

export default Footer;
