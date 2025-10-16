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
      console.log(element);
      if (element) {
        setTimeout(() => {
          // TODO: Dać Y trochę do góry z powodu nawigacji
          element.scrollIntoView({behavior: "smooth"});
        }, 200)
      }
    }
  }, [location.state]);

  // TODO: Nawigacja scrolluje za nisko, dodać height scroll + y
  // TODO: Zrobić animacje scrollowania / pojawiania
  // TODO: Zrobić więcej komponentów, uporządkować style, kod i nieużywane pliki
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
