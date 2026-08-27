import {
  ClipboardCheck,
  PackageSearch,
  Settings,
  Truck,
} from "lucide-react";

const capabilities = [
  { label: "Product & Material Sourcing", icon: PackageSearch },
  { label: "Technical Coordination", icon: Settings },
  { label: "Procurement & Supply Support", icon: ClipboardCheck },
  { label: "Project & Delivery Coordination", icon: Truck },
];

function HowCanWeHelp() {
  return (
    <article className="w-full max-w-xl px-4 py-2 flex-col">
      <h2 className="text-3xl font-bold text-blue-950">How Can We Help?</h2>
      <p className="mt-4 max-w-lg text-base leading-7 text-gray-500">
        Tell us about your project requirements, material needs, or sourcing
        enquiries. Our team is ready to support you with reliable supply,
        technical coordination, procurement, and project solutions.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2" aria-label="Our capabilities">
        {capabilities.map(({ label, icon: Icon }) => (
          <li key={label} className="flex items-start gap-3">
            <Icon
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-blue-950"
              strokeWidth={1.8}
            />
            <span className="text-sm leading-6 text-gray-600">{label}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default HowCanWeHelp;