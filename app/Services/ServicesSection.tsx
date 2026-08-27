import React from "react";
import BaseSection from "../components/BaseSection";
import { services } from "../company_data/services";
import ServicesAndIndustries from "../components/ServicesAndIndustries";

function ServicesSection() {
  return (
    <BaseSection title="services" sectionID="services">
      <div className="w-full gap-5 flex flex-col">
        <div className="w-full ">
          <h2 className="text-4xl text-blue-400  font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Integrated Supply.
            <br />
            <span className="text-blue-900">Technical Expertise.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            Comprehensive sourcing and supply solutions tailored to the
            technical, commercial, and delivery requirements of industrial and
            EPC projects.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 px-4 py-6  gap-4">
          {services.map((service, index) => (
            <ServicesAndIndustries key={index + 1} id={index} data={service} />
          ))}
        </div>
        <div className="mt-10 flex justify-center flex-col gap-6 border-t border-white/45 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-slate-400">
            One Partner. Multiple Categories. Reliable Project Supply.
          </p>
        </div>
      </div>
    </BaseSection>
  );
}

export default ServicesSection;
