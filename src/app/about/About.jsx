import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white">
      <div className="w-full h-auto flex flex-wrap flex-col items-center md:pt-32 pt-32 bg-white">
        <h1 className=" md:text-4xl text-4xl pt-4 text-primaryColor font-bold text-center">
          Our Mission
        </h1>
        <div className="w-28 h-1 border-b-4 border-red-400 mt-2"></div>
        <p
          className="md:text-lg  text-lg md:text-center text-center md:ml-40 ml-6 md:mr-40 mr-6  mt-8  text-gray-700
       "
        >
          Our goal is to make education and experiential skills affordable and
          accessible to everyone regardless of their disparate economic and
          educational backgrounds. We empower students to make demands unlike
          any other platform or institute because curiosity cannot be contained.
          Learning cannot be boxed in a book. So let’s step ahead and ‘build
          together’.
        </p>
      </div>
      <div className="mt-8 flex justify-center items-center ">
        {/*  <img src={mission} className="md:w-1/4 h-[360px]" alt="" />  */}
        <Image
          src="/9814.jpg"
          alt="Picture of the author"
          width={200}
          height={200}
          className="lg:w-1/4 w-full h-[360px] md:ml-0 ml-6 md:mr-0 mr-6"
        />
      </div>

      <div className="w-full h-auto flex flex-wrap flex-col items-center mt-8">
        <h1 className=" md:text-4xl text-4xl pt-4 text-primaryColor font-bold text-center">
          Our Vision
        </h1>
        <div className="w-28 h-1 border-b-4 border-red-400 mt-2"></div>
      </div>

      <div className="md:mt-0 mt-8">
        <div className="md:flex md:flex-row md:pt-10">
          <div className="flex flex-row md:w-1/2 md:pl-20">
            <div>
              {/* <img src={serviceOne} alt="" /> */}
              <Image
                src="/service-1.png"
                alt="img name"
                width={128}
                height={129}
              />
            </div>
            <div className="md:pt-8 pt-4">
              <p className="font-bold text-lg md:text-xl text-primaryColor">
                Affordable online courses
              </p>
              <p className=" text-gray-700 md:text-lg">
                Affordable online courses along with learning communities.
              </p>
            </div>
          </div>

          <div className="flex flex-row md:w-1/2 md:pl-10">
            <div>
              {/*<img src={serviceTwo} alt="" />*/}
              <Image
                src="/service-2.png"
                alt="img name"
                width={128}
                height={129}
              />
            </div>
            <div className="md:pt-8 pt-4">
              <p className="font-bold text-lg md:text-xl text-primaryColor">
                Best in Class/Industry Mentors
              </p>
              <p className=" text-gray-700 md:text-lg">
                Affordable online courses along with learning communities.
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex md:flex-row">
          <div className="flex flex-row md:w-1/2 md:pl-20">
            <div>
              {/*<img src={serviceThree} alt="" />*/}
              <Image
                src="/service-4.png"
                alt="img name"
                width={128}
                height={129}
              />
            </div>
            <div className="md:pt-8 pt-4">
              <p className="font-bold text-lg md:text-xl text-primaryColor">
                Job Guarantee Programs
              </p>
              <p className=" text-gray-700 md:text-lg">
                Affordable online courses along with learning communities.
              </p>
            </div>
          </div>
          <div className="flex flex-row md:w-1/2 md:pl-10">
            <div>
              {/*<img src={serviceFour} alt="" />*/}
              <Image
                src="/service-6.png"
                alt="img name"
                width={128}
                height={129}
              />
            </div>
            <div className="md:pt-8 pt-4">
              <p className="font-bold text-lg md:text-xl text-primaryColor">
                Internship Portal
              </p>
              <p className=" text-gray-700 md:text-lg">
                Affordable online courses along with learning communities.
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex md:flex-row ">
          <div className="flex flex-row md:w-1/2 md:pl-20">
            <div>
              {/*<img src={serviceFive} alt="" />*/}
              <Image
                src="/service-7.png"
                alt="img name"
                width={128}
                height={129}
              />
            </div>
            <div className="md:pt-8 pt-4">
              <p className="font-bold text-lg md:text-xl text-primaryColor">
                On-Demand Courses
              </p>
              <p className=" text-gray-700 md:text-lg">
                Affordable online courses along with learning communities.
              </p>
            </div>
          </div>
          <div className="flex flex-row md:w-1/2 md:pl-10 pb-10">
            <div>
              {/*<img src={serviceSix} alt="" />*/}
              <Image
                src="/service-8.png"
                alt="img name"
                width={128}
                height={129}
              />
            </div>
            <div className="md:pt-8 pt-4">
              <p className="font-bold text-lg md:text-xl text-primaryColor">
                Innovation for Tech products
              </p>
              <p className=" text-gray-700 md:text-lg">
                Affordable online courses along with learning communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
