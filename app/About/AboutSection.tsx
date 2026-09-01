"use client";
import BaseSection from "../components/BaseSection";
import VissionAndMission from "./VissionAndMission";
import ProcessTimeline from "../components/ProcessTimeline";
import { coreValues } from "../company_data/coreValues";
import { ArrowRight } from "lucide-react";
import { useNavBar } from "../context/NavBarProvider";
import WhoWeAre from "./WhoWeAre";

function AboutSection() {
  const { setNavLink } = useNavBar();
  const handleClick = () => {
    setNavLink("#contact");
  };
  return (
    <BaseSection title="about us" sectionID="about-us">
      <div className="w-full flex flex-col gap-5 ">
        <div className="w-full flex lg:flex-row  flex-col px-5 py-5 gap-5 ">
          <div>
            <WhoWeAre />
          </div>
          <div>
            {" "}
            <VissionAndMission />
          </div>
        </div>
        <div className="flex flex-col cursor-pointer shadow transition-all ease-in-out transform   hover:scale-105 duration-300 hover:shadow-blue-200 hover:shadow-lg  bg-blue-900  px-4 py-3 rounded-lg">
          <h2 className="text-white font-bold text-2xl py-3 text-center">
            Core Values
          </h2>
          <div className="w-full grid  grid-cols-1 py-3  md:grid-cols-2 lg:grid-cols-6 ">
            {coreValues.map((item, index) => (
              <ProcessTimeline
                className="text-white"
                key={index + 1}
                data={item}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="max-w-md px-4 py-5   border border-blue-200 rounded-md">
          {" "}
          <h2 className="text-blue-900 font-semibold  py-2">
            Let's Build Success Together
          </h2>
          <p className="text-sm max-w-xs text-gray-400 py-2">
            Have a project in mind? Get in touch whit our team today
          </p>
          <a
            href="#contact"
            onClick={handleClick}
            className="inline-flex flex-row text-white hover:bg-blue-900 bg-blue-800 px-2 py-2 rounded-md"
          >
            {" "}
            Contact Us <ArrowRight />
          </a>
        </div>
      </div>
    </BaseSection>
  );
}

export default AboutSection;
