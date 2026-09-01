"use client";
import BaseSection from "../components/BaseSection";
import SupportedMarkets from "./SupportedMarkets";
import GlobalSource from "./GlobalSource";
import { useState } from "react";
import { MarketKey } from "../market_positions/marketPositions";
import DisplayCertifications from "./DisplayCertifications";
import GlobalSouringNetwork from "./GlobalSouringNetwork";

function OurGlobalReachSection() {
  const [activeMarket, setActiveMarket] = useState<MarketKey | string>("");

  return (
    <BaseSection sectionID="our-global-reach" title="our global reach">
      <div className="w-full flex-col flex gap-6 px-4 py-5">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-2xl text-blue-800">
            Built on Compliance
          </h1>
          <p className="text-gray-400 text-sm max-w-md">
            Dew Point is committed to maintaining recognized certifications and
            compliance standards that support quality, operational excellence,
            and client confidence.
          </p>
        </div>

        <DisplayCertifications />

        <div className="flex lg:justify-between lg:flex-row flex-col">
          <div className="w-full flex flex-col max-w-md">
            <div>
              <GlobalSource />
            </div>
            <div className="lg:hidden flex  justify-center items-center w-full max-h-96">
              <GlobalSouringNetwork activeMarket={activeMarket} />
            </div>
            <div>
              <SupportedMarkets setActiveMarket={setActiveMarket} />
            </div>
          </div>

          <div className="lg:flex  justify-center items-center w-[60%] lg:my-12  max-h-96 hidden">
            <GlobalSouringNetwork activeMarket={activeMarket} />
          </div>
        </div>

        <p className="uppercase text-center font-bold py-5 text-blue-800">
          Certified Quality. Recognized Compliance. Trusted Performance.
        </p>
      </div>
    </BaseSection>
  );
}

export default OurGlobalReachSection;
