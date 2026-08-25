import { Service } from "../types/serviceType";
type Props = {
  data: Service;
  id: number;
};
function ServicesAndIndustries({ data, id }: Props) {
  const { icon: Icon, text, description } = data;
  return (
    <div key={id} className="transition-all ease-in-out  bg-transparent text-gray-600 cursor-pointer  transform hover:scale-105  border border-gray-200  rounded-md hover:bg-blue-900 px-4 py-5 hover:text-white">
      <div className="flex py-3  gap-4 flex-row">
        <div className="w-12 h-12 bg-blue-800 rounded-full px-3 py-3 text-white text-2xl">
          {" "}
          <Icon />
        </div>
        <h3 className="font-bold">{text}</h3>
      </div>
      <div className="max-w-sm ">{description}</div>
    </div>
  );
}

export default ServicesAndIndustries;
