import { industries } from "../company_data/services";
import BaseSection from "../components/BaseSection";
import ServicesAndIndustries from "../components/ServicesAndIndustries";

function IndustrialSection() {
  return (
    <BaseSection title="industries" sectionID="industries">
      <div className="w-full gap-5 flex flex-col">
        <div>
          <h2 className="text-4xl text-blue-400  font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            INDUSTRIES
            <br />
            <span className="text-blue-900">WE SERVE.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            Dew Point supports clients across major industrial and
            infrastructure sectors through reliable supply, technical expertise,
            and project support services.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-4 py-6  gap-4">
          {industries.map((service, index) => (
            <ServicesAndIndustries key={index + 1} id={index} data={service} />
          ))}
        </div>
        
      </div>
    </BaseSection>
  );
}

export default IndustrialSection;
