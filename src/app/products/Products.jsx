import React from "react";
import Image from "next/image";

function Products() {
  return (
    <div className="w-full h-auto flex flex-wrap flex-col items-center bg-white md:pt-32 pt-32">
      <h1 className=" md:text-4xl text-4xl pt-4 text-primaryColor font-bold text-center">
        Our Services
      </h1>
      <div className="w-28 h-1 border-b-4 border-red-400 mt-1"></div>

      <div className="mt-12">
        <div className="flex lg:flex-row flex-col justify-evenly space-x-6 md:ml-24 md:mr-24">
          <div className="divider lg:divider-horizontal md:ml-0 ml-4 md:mr-0 mr-4"></div>
          <div className="flex flex-col">
            <h1 className="md:text-3xl text-3xl pt-4 text-primaryColor md:text-justify text-center font-bold">
              Services One
            </h1>
            <p className=" mt-4 md:text-base text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus aut esse, maxime consectetur eligendi hic tempore modi
              sequi alias, nobis nostrum obcaecati ratione provident suscipit
              nam, rerum harum! Quidem, sed?
            </p>
            <p className="font-semibold text-red-500 mt-4 cursor-pointer">
              READ MORE &#8594;
            </p>
          </div>

          <div className="divider lg:divider-horizontal md:ml-0 ml-4 md:mr-0 mr-4"></div>

          <div className="flex flex-col ">
            <h1 className=" md:text-3xl text-3xl pt-4 text-primaryColor md:text-justify text-center font-bold ">
            Services Two
            </h1>
            <p className="mt-4 md:text-base text-base text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam possimus accusantium aut nemo atque provident rem magnam
              eos amet ipsum nam, quo illum doloribus! Sapiente ab similique
              fuga facere vero.
            </p>
            <p className="font-semibold text-red-500 mt-4 cursor-pointer">
              READ MORE &#8594;
            </p>
          </div>

          <div className="divider lg:divider-horizontal md:ml-0 ml-4 md:mr-0 mr-4"></div>

          <div className="flex flex-col ">
            <h1 className=" md:text-3xl text-3xl pt-4 text-primaryColor md:text-justify text-center font-bold">
            Services Three
            </h1>
            <p className=" mt-4 md:text-base text-base text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia
              architecto consequatur eveniet temporibus, animi, dolore iusto
              nisi, laudantium vitae culpa necessitatibus nobis minima cum ea.
              Eaque dolor repellat asperiores?
            </p>
            <p className="font-semibold text-red-500 mt-4 cursor-pointer">
              READ MORE &#8594;
            </p>
          </div>

          <div className="divider lg:divider-horizontal md:ml-0 ml-4 md:mr-0 mr-4"></div>
        </div>
      </div>

      <div className="w-full h-auto flex flex-wrap flex-col items-center md:mt-36 mt-16">
        <h1 className=" md:text-4xl text-4xl pt-4 text-primaryColor font-bold text-center">
          Recent Work
        </h1>
        <div className="w-28 h-1 border-b-4 border-red-400 mt-1"></div>
      </div>

      <div className="md:flex md:w-full w-full mt-2">
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

          <div className="flex justify-center mt-6 pb-4">
            <button
              type="button"
              className="bg-red-500 px-8 py-2.5 text-center 
        rounded-[4px] text-white transition duration-500 hover:scale-95 hover:bg-red-500"
            >
              Click Here
            </button>
          </div>
        </div>

        {/* <div className="flex flex-col md:w-1/2 md:mt-0 mt-4">
          <Image
            src="/5340737.jpg"
            alt="img name"
            width={3000}
            height={2000}
            className="mt-2 rounded-2xl md:w-2/3 md:ml-24 md:mr-0 w-full"
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
}

export default Products;
