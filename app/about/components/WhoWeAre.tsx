import { Building2 } from "lucide-react";
import { whoWeAre } from "../../../company_data/whoWeAre";

function WhoWeAre() {
  return (
    <div className=" w-full border-gray-200 border rounded-md gap-4  max-w-md px-4 py-4 cursor-pointer text-gray-500">
      <div className="flex flex-row py-4 gap-4">
        <div className="w-12 h-12 bg-blue-600 flex justify-center items-center text-white rounded-full ">
          <Building2 />
        </div>
        <h1 className="  text-blue-600  uppercase font-bold text-3xl">
          Who We Are
        </h1>
      </div>
      {whoWeAre}
    </div>
  );
}

export default WhoWeAre;
