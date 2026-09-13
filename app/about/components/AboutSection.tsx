"use client";
import BaseSection from "@/app/common/components/BaseSection";
import VissionAndMission from "./VissionAndMission";

import WhoWeAre from "./WhoWeAre";
import CoreValues from "./CoreValues";

function AboutSection() {
  return (
    <BaseSection title="about us" sectionID="about-us">
      <div className="w-full flex flex-col gap-8 py-5 lg:px-8">
        <div className="flex lg:flex-row flex-col ">
          <div className="w-1/2 px-4 py-5 h-full">
            <WhoWeAre />
          </div>
          <div className="h-full ">
            <VissionAndMission />
          </div>
        </div>
        <div>
          <CoreValues />
        </div>
      </div>
    </BaseSection>
  );
}

export default AboutSection;
