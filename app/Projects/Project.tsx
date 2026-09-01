import Image from "next/image";
import { ProjectType } from "../types/projectType";

function Project({ project }: { project: ProjectType }) {
  const { name, id } = project;
  return (
    <div className="flex justify-between w-full px-4 py-5 gap-3 hover:cursor-pointer  transition-transform hover:scale-105 hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1 border-indigo-300 border   rounded-md duration-300 ">
      <div className="w-8 h-8 flex justify-center items-center font-bold  bg-blue-900 text-white rounded-md ">
        {id}
      </div>
      <div className={`text-blue-600  ${name.length >= 8?"text-lg":"text-xl"} font-semibold lg:font-bold lg:text-blue-900`}>{name}</div>
      <div className="flex flex-col">
        <p className="text-blue-500 text-xs">client</p>
        <Image src={'/adnoc.png'} alt="client logo" width={50} height={50}/>
        
      </div>
    </div>
  );
}

export default Project;
