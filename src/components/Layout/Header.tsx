import Navigation from "./Navigation";
import Logo from "./Logo.tsx";
import ThemeSwitch from "../UI/ThemeSwitch";

const Header = () => {
  return (
    <header className="flex justify-center w-full bg-bg-theme-2">
      <div className="flex justify-between px-4 py-1 w-[1200px]">
        <Logo />
        <div className="flex justify-between items-center sm:gap-5 md:gap-7 lg:gap-9">
          <ThemeSwitch />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
