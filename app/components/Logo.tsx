import Image from "next/image";

function Logo() {
  return (
  <div className="flex flex-row gap-2 "> 
      <div className="w-24 h-12 rounded-md flex justify-center items-center ">
      <Image
        src={"/file.svg"}
        alt="Company logo"
        width={50}
        height={50}
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <h1 className="text-black text-xl font-bold ">Dew Point Trading</h1>
      <p className="text-sm text-gray-400">Your Key to Successful Trading</p>
    </div>
  </div>
  );
}

export default Logo;
