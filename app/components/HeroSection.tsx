import Image from "next/image";
import BaseSection from "./BaseSection";

function HeroSection() {
  return (
    <BaseSection
      sectionID="/"
      className="
       mt-18
       bg-[url('/background.png')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10  flex min-h-screen items-center gap-4 p-4">
        <div className="mx-auto leading-7 w-full max-w-7xl px-6">
          <p className="text-sm text-gray-400">
            Engineering · Procurement · Industrial Solutions
          </p>
          <div className="text-5xl font-bold text-white" >
            Reliable supply Technical expertise Trading
            <p className="text-5xl font-bold text-blue-500">Project support </p>
          </div>
        </div>
      </div>
    </BaseSection>
  );
}

export default HeroSection;
