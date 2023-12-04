import React from "react";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="text-black md:pt-20 bg-white">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <h1 className=" md:text-4xl text-4xl pt-4 text-primaryColor font-bold text-center">
          Our Services
        </h1>
        <div className="w-28 h-1 border-b-4 border-red-400 mt-2"></div>
      </div>

      <div className="w-full h-auto mt-auto">
        <div className="md:flex md:w-full mt-4">
          <div className="md:w-1/2 flex justify-center align-items-center ">
            <Image
              src="/5995729.jpg"
              alt="img name"
              width={300}
              height={200}
              className="mt-2 rounded-2xl md:w-2/3 
               md:ml-24 w-full"
            />
          </div>

          <div className="md:flex md:flex-col md:w-1/2 flex flex-col ">
            <h1
              className="md:text-4xl text-4xl font-semibold
            md:mb-5 md:mt-16 mt-4
             text-primaryColor  text-center"
            >
              Under, right, sector!
            </h1>

            <p
              className="text-lg
             text-gray-700 md:ml-[80px] ml-[20px] md:mr-[80px] mr-[20px] md:mt-0 mt-4"
            >
              Maybe not too simple, but one that offers enough formatting
              choices and a convenient method to upload images. Our editor
              supports these features and more, making it effortless to publish
              your content wherever you are.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                type="button"
                className="bg-red-500 mt-2 px-8 py-2.5 text-center
        rounded-[4px] text-white transition duration-500 hover:scale-95 hover:bg-red-500"
              >
                Click Here
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex md:w-full mt-2">
        <div className="md:w-1/2 pt-16">
          <h1
            className="md:text-4xl text-4xl font-semibold text-center
             md:mt-16 mt-4 text-primaryColor "
          >
            Affordable content
          </h1>

          <p
            className="md:ml-[80px] ml-[20px] md:mr-[80px] mr-[20px] mt-4
           text-lg  md:text-gray-700  text-gray-700 "
          >
            Whenever you release new features, let your changelog subscribers
            know about them (but dont do it Fridays, please). Bring your update
            straight to their email and use straightforward language, images,
            and emoticons to get them excited.
          </p>

          <div className="flex justify-center mt-6">
            <button
              type="button"
              className="bg-red-500 px-8 py-2.5 text-center 
        rounded-[4px] text-white transition duration-500 hover:scale-95 hover:bg-red-500"
            >
             Click Here
            </button>
          </div>
        </div>

        {/* <div className="flex  justify-center  align-items-center flex-col md:w-1/2 md:mt-0 mt-4 ">
          <Image
            src="/5340737.jpg"
            alt="img name"
            width={300}
            height={200}
            className="mt-12 rounded-2xl md:w-2/3 md:ml-24 md:mr-0 w-full "
          />
        </div> */}
         <div className="md:w-1/2 flex justify-center align-items-center ">
            <Image
              src="/5340737.jpg"
              alt="img name"
              width={300}
              height={200}
              className="mt-2 rounded-2xl md:w-2/3 
               md:ml-24 w-full"
            />
          </div>
      </div>
    </div>
  );
};

export default Carousel;
