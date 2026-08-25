import { endToEndCoordination } from "../company_data/endToEndCoporeation";
import { whyDewPoint } from "../company_data/why_dew_point";
import BaseSection from "./BaseSection";
import ProcessTimeline from "./ProcessTimeline";

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
        <div className="flex flex-col gap-4 ">
          <h3 className="text-blue-950 font-bold text-2xl text-center ">
            From RFQ to Delivery
          </h3>

          <div className="border  border-blue-500 grid  grid-cols-1  rounded-md  md:grid-cols-2 lg:grid-cols-8 py-5  w-full">
            {endToEndCoordination.map((data, index) => (
              <ProcessTimeline
                className="text-blue-600"
                data={data}
                index={index}
                key={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </BaseSection>
  );
}

export default WhyDewPointSection;
