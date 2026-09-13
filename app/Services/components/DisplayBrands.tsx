import { switchToTitle } from "@/app/utils/switchToTitle";
import { Download } from "lucide-react";

type Props = { sectionName: string };

function DisplayBrands({ sectionName }: Props) {
  return (
    <a
      className="bg-blue-600 text-center text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors  flex flex-row justify-center items-center gap-4 duration-300"
      download
      href={`/products_and_brands/${sectionName}_products_brands.pdf`}
    >
      <Download /> {switchToTitle(sectionName)} Brands
    </a>
  );
}

export default DisplayBrands;
