import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="md:pt-20 bg-white">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <h1 className=" md:text-4xl text-4xl pt-4 text-primaryColor font-bold text-center">
          Our Clients
        </h1>
        <div className="w-28 h-1 border-b-4 border-red-400 mt-2"></div>
      </div>

      <div className="w-full flex flex-wrap justify-evenly mt-10 pb-10 pt-10">
        <div>
          <Image
            src="/client-logo-1.png"
            alt="img name"
            width={180}
            height={100}
          />
        </div>

        <div>
        <Image
            src="/client-logo-3.png"
            alt="img name"
            width={180}
            height={100}
          />
        </div>

        <div>
        <Image
            src="/client-logo-6.png"
            alt="img name"
            width={180}
            height={100}
          />
        </div>

        <div>
        <Image
            src="/client-logo-8.png"
            alt="img name"
            width={180}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
