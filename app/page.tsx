import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import IndustrialSection from "./components/IndustrialSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import WhyDewPointSection from "./components/WhyDewPointSection";

export default function Home() {
  return (
    <div className="w-full space-y-12   min-h-screen bg-white">
      <NavBar/>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <IndustrialSection/>
      <ProjectsSection/>
      <WhyDewPointSection/>
      <ContactSection/>
    </div>
  );
}
