import WhoWeAre from "./about/components/WhoWeAre";
import ContactSection from "./Contact/components/ContactSection";
import HeroSection from "./Hero/HeroSection";


export default function Home() {
  return (
    <div className="w-full py-6   min-h-screen bg-white">
      <HeroSection />
      <WhoWeAre/>
      
    </div>
  );
}
