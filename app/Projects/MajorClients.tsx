import Image from "next/image";

function MajorClients({ image }: { image: string }) {
  return (
    <div
      className="cursor-pointer group flex h-32 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <Image
        src={`/${image}`}
        alt={image.replace(".png", "")}
        width={180}
        height={100}
        className="max-h-20 w-auto max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}

export default MajorClients;
