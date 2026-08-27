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
      <div className="w-full flex lg:justify-between lg:flex-row flex-col px-5">
        {/* Major Clients  */}
        <div className="flex w-full lg:w-1/2 flex-col">
          <h1 className="text-black text-3xl font-bold ">
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
          <div className="flex w-full lg:flex-row lg:justify-between flex-col ">
            <div className="w-full">
              {" "}
              <span className="text-blue-600 text-xl font-semibold py-5">
                GLOBAL SOURCING NETWORK
              </span>
              <p className="text-gray-400 max-w-sm py-4">
                Dew Point maintains a growing network of manufacturers,
                authorized distributors, technology providers, and specialized
                suppliers across key international markets.
              </p>
              <p className="text-gray-400 max-w-sm">
                Our sourcing capabilities enable us to identify suitable and
                compliant solutions while providing clients with responsive
                regional coordination and dependable project support.
              </p>
            </div>
            <div className="w-full min-h-full rounded-md flex justify-center items-center py-4">
              <Image src={'/global_source.png'} alt="global" className="rounded-md object-cover" width={500} height={500}/>
            </div>
          </div>
        </div>

        {/* Display projects  */}
        <div className="flex flex-col items-start  w-full lg:w-1/2 min-h-full">
          <span className="uppercase text-blue-600 text-xl font-semibold py-5">
            {" "}
            Project Experience
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-md p-4">
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
