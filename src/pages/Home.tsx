import About from "../components/About/About.tsx";
import Skills from "../components/Skills/Skills.tsx";
import ProjectsLayout from "../components/Projects/ProjectsLayout.tsx";
import Footer from "../components/Layout/Footer.tsx";
import Hero from "../components/Hero.tsx";

const HomePage = () => {
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
