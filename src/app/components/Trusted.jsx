import React from "react";
import Image from "next/image";

const Trusted = () => {
  return (
    <div>
      <div
        className="relative z-20 border-2 border-orange-500
         max-w-screen-xl px-4 mx-auto mt-4"
      >
        <h3
          className="text-xl font-medium 
            text-center sm:text-2xl dark:text-white"
        >
          Trusted by leading Saas Companies to drive growth
        </h3>
      </div>

      <div className=" relative z-20 max-w-screen-2xl px-4 mx-auto mt-4 border-2 border-green-600">
        <div className="flex flex-row max-w-screen-xl justify-between items-center px-4 mx-auto border-2 border-red-500">
          <Image src="/skyslope.png" alt="img name" width={180} height={100} />

          <Image src="/directly.png" alt="img name" width={180} height={100} />

          <Image src="/highspot.png" alt="img name" width={180} height={100} />

          <Image src="/Quartzy.png" alt="img name" width={180} height={100} />

          <Image src="/SegmentHorziontalGreen.png" alt="img name" width={180} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
