import React from "react";
import Image from "next/image";


const Middle = () => {
  return (
    <div className="h-auto md:pt-6 bg-white">
      <div className="text-center pt-10 h-auto flex flex-wrap flex-col">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <h1 className=" md:text-4xl text-4xl pt-4 text-primaryColor font-bold text-center">
            “Pure Hardwork, No Shortcuts!”
          </h1>
          <div className="w-44 h-1 border-b-4 border-red-400 mt-2"></div>
        </div>


      </div>

      <div className="w-full flex flex-wrap justify-evenly mt-10 pb-10 pt-10 md:pl-28 md:pr-28">

      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border mt-8">
          <div className="relative h-56  overflow-hidden text-white shadow-lg ml-2 mr-2
          rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <Image src="/medium-shot-girl-posing-with-gra.jpg"  alt="img name"
           width={5118} height={3405}  />
          </div>
          <div className="p-6">
            <h1 className="block mb-2  text-center text-xl antialiased font-bold leading-snug tracking-normal text-primaryColor">
             Software Automation
            </h1>
            <p className="block text-base antialiased font-normal text-gray-700 leading-relaxed text-inherit">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to where you can enjoy the main night life in
              Barcelona.
            </p>
            
          </div>
          <div className="p-6 pt-0">
            <button
              className="select-none  rounded-[4px] bg-primaryColor py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              
            >
              Read More
            </button>
          </div>
        </div>

        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border mt-8">
          <div className="relative h-56  overflow-hidden text-white shadow-lg ml-2 mr-2
           rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <Image src="/business-women-signature-documen.jpg"  alt="img name" width={5118} height={3405} />
          </div>
          <div className="p-6">
            <h1 className="block mb-2 text-center text-xl antialiased font-bold leading-snug tracking-normal text-primaryColor">
             Testing Reliability
            </h1>
            <p className="block  text-base antialiased font-normal text-gray-700 leading-relaxed text-inherit text-blue-gray-900">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to where you can enjoy the main night life in
              Barcelona.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="select-none  rounded-[4px] bg-primaryColor py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            
            >
              Read More
            </button>
          </div>
        </div>

        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border mt-8">
          <div className="relative h-56  overflow-hidden text-white shadow-lg ml-2 mr-2
          rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <Image src="/book-laptop-pencil-clock-wooden-.jpg"  alt="img name" width={5118} height={3405} />
          </div>
          <div className="p-6">
            <h1 className="block mb-2  text-xl  text-center antialiased font-bold leading-snug tracking-normal text-primaryColor">
              UI/UX Review Check
            </h1>
            <p className="block text-base antialiased font-normal text-gray-700 leading-relaxed text-inherit">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to where you can enjoy the main night life in
              Barcelona.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="select-none  rounded-[4px] bg-primaryColor py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              
            >
              Read More
            </button>
          </div>
        </div>

        
      </div>


    </div>
  );
};

export default Middle;
