import {
  Cable,
  Cog,
  Construction,
  FileCheck,
  Factory,
  HeartHandshake,
  Lightbulb,
  PackageCheck,
  PackageSearch,
  SearchCheck,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { GiValve } from "react-icons/gi";
import { Service } from "../types/serviceType";


export const services:Service[] = [
  {
    icon: GiValve,
    text: "PVF Solutions",
    description:
      "Pipes, valves, fittings, flanges, and related accessories for industrial and EPC project requirements.",
  },
  {
    icon: Cable,
    text: "Electrical & Instrumentation",
    description:
      "Cables, panels, instruments, automation, lighting, and earthing systems tailored to project requirements.",
  },
  {
    icon: Cog,
    text: "Mechanical & Industrial",
    description:
      "Pumps, equipment, HVAC-related products, tools, and maintenance supplies for industrial applications.",
  },
  {
    icon: Construction,
    text: "Construction & Civil Supplies",
    description:
      "Structural, building, civil, steel, and project-specific materials supporting construction and infrastructure projects.",
  },
  {
    icon: ShieldCheck,
    text: "Safety & HSE Solutions",
    description:
      "PPE, gas detection, respiratory protection, fall protection, fire, and other safety products.",
  },
  {
    icon: SearchCheck,
    text: "Technical Product Support",
    description:
      "Specification review, product selection, technical documentation, and compliance guidance to ensure the right technical fit.",
  },
  {
    icon: PackageSearch,
    text: "Procurement & Strategic Sourcing",
    description:
      "Reliable manufacturers and sourcing solutions balancing technical compliance, quality, cost-effectiveness, availability, and delivery.",
  },
  {
    icon: HeartHandshake,
    text: "Vendor & Manufacturer Coordination",
    description:
      "Single-point coordination with manufacturers, suppliers, inspection agencies, and logistics partners for smooth project execution.",
  },
  {
    icon: PackageCheck,
    text: "Project Supply & Material Coordination",
    description:
      "Managing project requirements from RFQ and procurement through delivery, with timely supply and complete documentation.",
  },
  {
    icon: FileCheck,
    text: "Inspection, Documentation & Compliance",
    description:
      "Material certificates, technical data sheets, conformity certificates, inspection documents, traceability records, and third-party inspection coordination.",
  },
  {
    icon: Truck,
    text: "Supply Chain & Logistics",
    description:
      "End-to-end coordination covering sourcing, procurement, expediting, consolidation, warehousing, inspection, transportation, and site delivery.",
  },
  {
    icon: Wrench,
    text: "Site & After-Sales Support",
    description:
      "Technical clarifications, replacement coordination, additional requirements, and ongoing support after delivery.",
  },
];

export const industries = [
  {
    icon: Factory,
    text: "Oil & Gas",
    description:
      "Upstream, midstream, and downstream project support.",
  },
  {
    icon: Zap,
    text: "Energy",
    description:
      "Supply solutions supporting conventional and emerging energy projects.",
  },
  {
    icon: Cog,
    text: "Petrochemical",
    description:
      "Industrial products and project materials for petrochemical facilities.",
  },
  {
    icon: Lightbulb,
    text: "Power & Utilities",
    description:
      "Electrical, mechanical, and infrastructure requirements.",
  },
  {
    icon: Construction,
    text: "Infrastructure & Construction",
    description:
      "Civil, structural, and project supply solutions.",
  },
  {
    icon: Factory,
    text: "Industrial & Manufacturing",
    description:
      "Support for operations, maintenance, upgrades, and facilities.",
  },
];