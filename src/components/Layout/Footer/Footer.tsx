import Rights from "./Rights.tsx";
import Item from "./Item.tsx";
import GitHubDark from "../../../assets/footer/github-dark.svg?react";
import GitHubLight from "../../../assets/footer/github-light.svg?react";
import LinkedInDark from "../../../assets/footer/linkedin-dark.svg?react";
import LinkedInLight from "../../../assets/footer/linkedin-light.svg?react";
import EnvelopeDark from "../../../assets/footer/envelope-dark.svg?react";
import EnvelopeLight from "../../../assets/footer/envelope-light.svg?react";

const Footer = () => {
  return (
    <footer id="contact" className="relative flex flex-col items-center gap-8 py-8 bg-bg-theme-2 border-t-2 border-accent-theme-1 z-1500">
      <div className="flex gap-6 font-semibold text-accent-theme-1">
        <Item darkIcon={GitHubDark} lightIcon={GitHubLight} name="GitHub" href="https://github.com/Kretostan" />
        <Item darkIcon={LinkedInDark} lightIcon={LinkedInLight} name="LinkedIn" href="https://www.linkedin.com/in/jakub-kret-925865263/" />
        <Item darkIcon={EnvelopeDark} lightIcon={EnvelopeLight} name="Contact" href="https://kretostan.com/contact" />
      </div>
      <Rights />
    </footer>
  );
};

export default Footer;
