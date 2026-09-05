import { industries } from "../../company_data/services";
import BaseSection from "../components/BaseSection";
import ServicesAndIndustrialTitle from "../components/ServicesAndIndustrialTitle";
import ServicesAndIndustries from "../components/ServicesAndIndustries";

function IndustrialSection() {
  const industriesDescritpion = ` Dew Point supports clients across major industrial and
            infrastructure sectors through reliable supply, technical expertise,
            and project support services.`;
  return (
    <BaseSection title="industries" sectionID="industries">
      <div className="w-full gap-5 flex flex-col">
        <ServicesAndIndustrialTitle
          firstTitle="Industries"
          secondTitle="we serve."
          description={industriesDescritpion}
        />
        
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
