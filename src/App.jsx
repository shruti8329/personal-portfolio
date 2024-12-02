import "./App.css";
import Bio from "./components/Bio";
import ContractForm from "./components/ContractForm";
import EducationSection from "./components/EducationSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="relative h-full overflow-y-auto antialiased">
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          <HeroSection />
          <Navbar />
          <Projects />
          <Bio />
          <Skills />
          <WorkExperience />
          <EducationSection />
          <ContractForm />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
