"use client";
import BaseSection from "../components/BaseSection";
import Image from "next/image";
import SupportedMarkets from "./SupportedMarkets";
import GlobalSource from "./GlobalSource";
import { useState } from "react";
import { MarketKey, marketPositions } from "../market_positions/marketPositions";
import { MapPin } from "lucide-react";
import DisplayCertifications from "./DisplayCertifications";

function OurGlobalReachSection() {
  const [activeMarket, setActiveMarket] = useState<string| null>(null);
  const position = activeMarket ? marketPositions[activeMarket] : null;

  return (
    <BaseSection sectionID="certification" title="our global reach">
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

        <DisplayCertifications/>

        <div className="flex lg:justify-between lg:flex-row flex-col">
          <div className="w-full flex flex-col max-w-md">
            <div>
              <GlobalSource />
            </div>
            <div>
              <SupportedMarkets
                setActiveMarket={setActiveMarket}
              />
            </div>
          </div>

          <div className="relative w-full max-h-96 lg:w-[60%]">
            <Image
              src="/global_source.png"
              alt="Global Sourcing Network"
              width={200}
              height={200}
              className="w-full h-full rounded-md"
            />

            {position && (
              <div
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                style={{ top: position.top, left: position.left }}
              >
                <div className="relative flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-blue-600 drop-shadow-[0_0_14px_rgba(59,130,246,0.75)] scale-110 animate-pulse" />
                  <span className="rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-blue-700 shadow-sm">
                    {activeMarket}
                  </span>
                </div>
              </div>
            )}
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
