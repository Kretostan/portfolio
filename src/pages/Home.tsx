import About from "../components/About/About.tsx";
import Skills from "../components/Skills/Skills.tsx";
import ProjectsLayout from "../components/Projects/ProjectsLayout.tsx";
import Footer from "../components/Layout/Footer.tsx";
import Hero from "../components/Hero.tsx";
import {useLocation} from "react-router";
import {useEffect} from "react";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({behavior: "smooth"});
        }, 200)
      }
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
