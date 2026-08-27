import BaseSection from "../components/BaseSection";
import { whoWeAre } from "../company_data/whoWeAre";
import VissionAndMission from "./VissionAndMission";
import ProcessTimeline from "../components/ProcessTimeline";
import { coreValues } from "../company_data/coreValues";
import { ArrowRight } from "lucide-react";

function AboutSection() {
  return (
    <BaseSection title="about us" sectionID="about-us">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between px-3 gap-5 ">
          <div className="max-w-md">
            <h1 className="text-blue-900 uppercase font-bold text-3xl">
              Who We{" "}
              <span className="text-blue-600 text-3xl font-bold">are</span>
            </h1>
            <div className="max-w-md w-full my-3 border-gray-200 border rounded-md shadow-lg  hover:shadow-blue-300  px-4 py-5 leading-7 transition-all hover:bg-blue-900 hover:text-white transform ease-in-out hover:scale-105 duration-300 cursor-pointer text-gray-500">
              {whoWeAre}
            </div>
          </div>

          <div className="w-full  flex flex-col ">
            <VissionAndMission />
            <div className="flex flex-col cursor-pointer shadow transition-all ease-in-out transform   hover:scale-105 duration-300 hover:shadow-blue-200 hover:shadow-lg  bg-blue-900  px-4 py-3 rounded-lg">
              <h2 className="text-white font-bold text-2xl py-3 text-center">
                Core Values
              </h2>
              <div className="w-full grid  grid-cols-1 py-3  md:grid-cols-2 lg:grid-cols-6 ">
                {coreValues.map((item, index) => (
                  <ProcessTimeline className="text-white" key={index + 1} data={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-md px-4 py-5   border border-blue-200 rounded-md">
            {" "}
            <h2 className="text-blue-900 font-semibold  py-2">
              Let's Build Success Together
            </h2>
            <p className="text-sm max-w-xs text-gray-400 py-2">Have a project in mind? Get in touch whit our team today</p>
            <a href="#contact" className="inline-flex flex-row text-white hover:bg-blue-900 bg-blue-800 px-2 py-2 rounded-md"> Contact Us <ArrowRight/></a>
          </div>
      </div>
    </BaseSection>
  );
}

export default AboutSection;
