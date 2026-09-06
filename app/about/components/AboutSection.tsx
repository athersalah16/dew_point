"use client";
import BaseSection from "../../components/BaseSection";
import VissionAndMission from "./VissionAndMission";

import WhoWeAre from "./WhoWeAre";
import CoreValues from "./CoreValues";

function AboutSection() {
  return (
    <BaseSection title="about us" sectionID="about-us">
      <div className="w-full flex flex-col gap-5 ">
        <div className="w-full flex  flex-col  px-8 py-5 gap-8 ">
          <div className="flex flex-col lg:justify-between lg:flex-row px-4">
            <WhoWeAre />
            <VissionAndMission />
          </div>
          <div>
            <CoreValues />
          </div>
        </div>
    
      </div>
    </BaseSection>
  );
}

export default AboutSection;
