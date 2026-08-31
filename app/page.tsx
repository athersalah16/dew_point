import AboutSection from "./About/AboutSection";
import ContactSection from "./Contact/ContactSection";
import NavBar from "./Header/NavBar";
import HeroSection from "./Hero/HeroSection";
import IndustrialSection from "./Industries/IndustrialSection";
import OurGlobalReachSection from "./our_global_reach/OurGlobalReachSection";
import ProjectsSection from "./Projects/ProjectsSection";
import ServicesSection from "./Services/ServicesSection";
import WhyDewPointSection from "./WhyDewPoint/WhyDewPointSection";

export default function Home() {
  return (
    <div className="w-full space-y-24   min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IndustrialSection />
      <ProjectsSection />
      <OurGlobalReachSection/>
      <WhyDewPointSection />
      <ContactSection />
    </div>
  );
}
