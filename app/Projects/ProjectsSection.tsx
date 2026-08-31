import Image from "next/image";
import BaseSection from "../components/BaseSection";
import MajorClients from "./MajorClients";
import { projects } from "../company_data/projectsExperience";
import Project from "./Project";

function ProjectsSection() {
  const majorClientsImages: string[] = [
    "adnoc.png",
    "petrojet.png",
    "ennppi.png",
    "target.png",
    "orascom.png",
    "hassan_allam.png",
  ];
  return (
    <BaseSection title="projects" sectionID="projects">
      <div className="w-full flex  flex-col px-5">
        {/* Major Clients  */}
        <div className="flex w-full lg:justify-between lg:flex-row flex-col">
          <div className="w-full"> 
            <h1 className="text-blue-900 text-3xl font-bold ">
              Major Clients and Project Experience
            </h1>
            <p className="text-sm text-gray-500 max-w-sm">
              We are proud to work with leading companies and deliver solutions
              that power critical projects across the regoin{" "}
            </p>

            <span className="text-blue-600  uppercase text-xl font-semibold py-5">
              Major Clients{" "}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md p-4">
              {majorClientsImages.map((image) => (
                <MajorClients image={image} key={image} />
              ))}
            </div>

           
          </div>
       
        </div>

        {/* Display projects  */}
        <div className="flex flex-col items-start  w-full min-h-full">
          <span className="uppercase text-blue-600 text-xl font-semibold py-5">
            {" "}
            Project Experience
          </span>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-md p-4">
            {projects.map((project, index) => (
              <Project project={project} key={index} />
            ))}
          </div>
        </div>
      </div>
    </BaseSection>
  );
}

export default ProjectsSection;
