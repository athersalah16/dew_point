import {
  FileText,
  ClipboardCheck,
  SearchCheck,
  ShoppingCart,
  ShieldCheck,
  Truck,
  PackageCheck,
  Headset,
} from "lucide-react";
import EndToEnd from "../types/endToEndType";

export const endToEndCoordination:EndToEnd[] = [
  {
    id: 1,
    icon: FileText,
    title: "RFQ Receipt",
  },
  {
    id: 2,
    icon: ClipboardCheck,
    title: "Technical Review",
  },
  {
    id: 3,
    icon: SearchCheck,
    title: "Sourcing & Quotation",
  },
  {
    id: 4,
    icon: ShoppingCart,
    title: "Procurement & Ordering",
  },
  {
    id: 5,
    icon: ShieldCheck,
    title: "Inspection & Quality Check",
  },
  {
    id: 6,
    icon: Truck,
    title: "Logistics & Shipping",
  },
  {
    id: 7,
    icon: PackageCheck,
    title: "Delivery & Handover",
  },
  {
    id: 8,
    icon: Headset,
    title: "After-Sales Support",
  },
];