import {useLayoutEffect} from "react";
import {useLocation} from "react-router";
import About from "../components/About/About.tsx";
import Skills from "../components/Skills/Skills.tsx";
import Projects from "../components/Projects/Projects.tsx";
import Hero from "../components/Hero.tsx";

const HomePage = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        const navHeight = document.getElementById("nav")?.offsetHeight;

        if (element && navHeight) {
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementTop - navHeight,
            behavior: "smooth",
          })
        }
      }, 100)
    }
  }, [location.state]);

  return <main className="flex flex-col items-center py-12 bg-bg-theme-1">
    <Hero />
    <About />
    <Skills />
    <Projects />
  </main>;
};

export default HomePage;
