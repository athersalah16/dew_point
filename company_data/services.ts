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