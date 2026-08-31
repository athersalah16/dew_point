import Image from "next/image";
import React from "react";

function DisplayCertifications() {
  const certifications = [{ src: "/ICV.png" }, { src: "/ISO.png" }];

  return (
    <div>
        <div className="text-xl font-semibold text-blue-700">Certifications</div>
      <div className="w-full flex lg:justify-center lg:flex-row flex-col py-5 px-4 gap-4">
        {certifications.map(({ src }, index) => (
          <div
            key={index}
            className="w-full duration-300 cursor-pointer hover:border hover:border-blue-200 hover:rounded-lg flex justify-center py-4 transition-transform hover:scale-105 hover:-translate-y-1.5 hover:shadow-blue-100 hover:shadow-xl rounded-md"
          >
            <Image
              src={src}
              alt={`${src} Certififed`}
              width={500}
              height={500}
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayCertifications;
