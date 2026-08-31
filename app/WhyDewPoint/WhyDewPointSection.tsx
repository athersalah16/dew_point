import { endToEndCoordination } from "../company_data/endToEndCoporeation";
import { whyDewPoint } from "../company_data/why_dew_point";
import BaseSection from "../components/BaseSection";
import ProcessTimeline from "../components/ProcessTimeline";
import RFQToDelivery from "./RFQToDelivery";

function WhyDewPointSection() {
  return (
    <BaseSection sectionID="why-dew-point" title="why dew point">
      <div className="flex flex-col gap-5">
        <div className="px-3 py-6">
          <h1 className="text-blue-600 text-2xl font-semibold ">
            One Partner. Multiple Solutions.
          </h1>
          <p className="text-gray-500 text-sm">
            Dew Point delivers value through technical expertise, global
            sourcing strength, and a commitment to quality, reliability, and
            responsive project support.
          </p>
        </div>
        <div className=" flex w-full lg:flex-row flex-col gap-5">
          {whyDewPoint.map((data, index) => (
            <ProcessTimeline
              key={index + 1}
              className="text-blue-600"
              data={data}
              index={index}
            />
          ))}{" "}
        </div>
        <div className="flex flex-col gap-2 w-full justify-center items-center  ">
          <h3 className="text-blue-700 font-bold text-3xl lg:text-4xl text-center ">
            From RFQ to Delivery
          </h3>

          <div className="w-full flex justify-center items-center">
            <RFQToDelivery />
          </div>
        </div>
      </div>
    </BaseSection>
  );
}

export default WhyDewPointSection;
