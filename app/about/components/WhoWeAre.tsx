import { Building2 } from "lucide-react";
import { whoWeAre } from "@/company_data/whoWeAre";

function WhoWeAre() {
  return (
    <div className="mt-5 w-full border-gray-200 border rounded-md gap-4 lg:max-w-xl text-gray-500  px-4 py-4 cursor-pointer hover:bg-[#185582] hover:text-[#E2E8F0] transition-all duration-300 hover:-translate-y-1.5 ">
      <div className="flex flex-row py-4 gap-4">
        <div className="w-12 h-12 bg-blue-600 flex justify-center items-center text-white rounded-full ">
          <Building2 />
        </div>
        <h1 className="  text-blue-500  uppercase font-bold text-3xl">
          Who We Are
        </h1>
      </div>
      <p className="max-w-xl hover:cursor-text "> {whoWeAre}</p>
    </div>
  );
}

export default WhoWeAre;
