import { services } from "@/company_data/services";
import WhoWeAre from "./about/components/WhoWeAre";
import HeroSection from "./Hero/HeroSection";
import ServicesAndIndustries from "./components/ServicesAndIndustries";
import VissionAndMission from "./about/components/VissionAndMission";
import DisplayCertifications from "./OurReach/components/DisplayCertifications";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-5  min-h-screen bg-white">
      <HeroSection />
      <div className="w-full flex  flex-col px-2 lg:px-8 py-5 gap-8 ">
        <div className="flex flex-col lg:justify-between lg:flex-row px-4">
          <WhoWeAre />
          <VissionAndMission />
        </div>
        
      </div> 
      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-4xl font-semibold text-blue-900">Our Services </h2>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-8 py-6  gap-4">
          {services.map((service, index) => (
            <ServicesAndIndustries key={index + 1} id={index} data={service} />
          ))}
        </div>
      </div>

      <div className="lg:px-8 p-1">
        <DisplayCertifications/>
      </div>

       
    </div>
  );
}
