// import Image from "next/image";

function Logo({ className = "" }: { className?: string }) {
  return (
  <div className={`flex flex-row gap-2 ${className}`} > 
      {/* <div className="w-24 h-12 rounded-md flex justify-center items-center ">
      <Image
        src={"/file.svg"}
        alt="Company logo"
        width={50}
        height={50}
        className="w-full h-full object-cover"
      />
    </div> */}
          <div className="w-12 h-12 rounded-md flex justify-center items-center bg-blue-500 text-white font-bold ">DP</div>

    <div>
      <h1 className={`text-${className.includes('text-white') ? 'white' : 'blue-900'} text-xl font-bold `}>Dew Point Trading</h1>
      <p className={`text-sm text-${className.includes('text-blue-500') ? 'blue-500' : 'gray-400'}`}>Your Key to Successful Trading</p>
    </div>
  </div>
  );
}

export default Logo;
