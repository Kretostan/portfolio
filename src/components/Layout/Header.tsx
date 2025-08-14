import Navigation from "./Navigation";
import Logo from "./Logo.tsx";
import ThemeSwitch from "../ui/ThemeSwitch";

const Header = () => {
  return (
    <header className="flex justify-center w-full bg-bg-theme-2">
      <div className="flex justify-between px-4 py-3 md:py-4 w-[1200px] ">
        <Logo />
        <div className="flex justify-between items-center sm:gap-5 md:gap-7">
          <ThemeSwitch />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
