import Image from "next/image";
import BaseSection from "../components/BaseSection";
import { Download } from "lucide-react";

function HeroSection() {
  return (
    <BaseSection
      sectionID="/"
      className="
       mt-16
       bg-[url('/background.png')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10   flex  min-h-screen items-center gap-4 p-4">
        <div className="mx-auto leading-7 w-full max-w-7xl px-6">
          <p className="text-sm text-blue-400 font-semibold tracking-widest uppercase">
            Engineering · Procurement · Industrial Solutions
          </p>
          <div className="text-5xl font-bold py-4 text-white">
            <p className="text-6xl">Reliable supply</p>
            Technical <br />
            <p className="text-6xl">expertise</p>
            <p className="text-5xl font-bold text-blue-500">Project support </p>
          </div>
            <div className="w-full flex  flex-col gap-4 lg:flex-row">
          <a href="/company_profile.pdf" download className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex flex-row items-center gap-2 w-fit">
           <Download/> Company Profile
          </a>
          <a href="#services"  className=" bg-transparent border border-gray-300 hover:bg-blue-600 hover:border-none text-white duration-300 font-bold py-2 px-4 rounded flex flex-row items-center gap-2 w-fit">
           Explore Services
          </a>
        </div>
        </div>

       
      </div>
    </BaseSection>
  );
}

export default HeroSection;
