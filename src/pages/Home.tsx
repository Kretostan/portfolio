import About from "../components/About/About.tsx";
import Skills from "../components/Skills/Skills.tsx";
import ProjectsLayout from "../components/Projects/ProjectsLayout.tsx";
import Footer from "../components/Layout/Footer.tsx";
import Hero from "../components/Hero.tsx";
import {useLocation} from "react-router";
import {useLayoutEffect} from "react";

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

  return <>
    <main className="flex flex-col justify-center items-center py-16 h-full w-full bg-bg-theme-1">
      <Hero />
      <About />
      <Skills />
      <ProjectsLayout />
    </main>
    <Footer />
  </>;
};

export default HomePage;
