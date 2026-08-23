import { coreValue } from "../types/coreValue";
type Props = {
  data: coreValue;
  index: number;
};
function CoreValues({ data, index }: Props) {
  const { title, description, icon: Icon } = data;

  return (
    <div
      key={title}
      className={`px-4 py-2   border-b border-b-blue-300 md:border-b-0 ${index !== 0 ? "  md:border-l md:border-l-blue-300  lg:border-l lg:border-l-blue-300" : ""}`}
    >
      <Icon
        aria-hidden="true"
        className="mx-auto mb-3 size-10 text-blue-400"
        strokeWidth={1.6}
      />
      <h3 className="text-center text-sm font-semibold lg:font-bold uppercase text-white">
        {title}
      </h3>
      <p className="mt-3 text-center text-sm leading-6 text-white">
        {description}
      </p>
    </div>
  );
}

export default CoreValues;
