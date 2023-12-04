// import React from "react";

// function Contact() {
//   return (
//     <div className="w-full h-auto flex flex-wrap flex-col items-center md:pt-32 pt-32 bg-white">
//       <h1 className=" md:text-4xl text-4xl pt-4 text-primaryColor font-bold text-center">
//         Contact Us
//       </h1>
//       <div className="w-28 h-1 border-b-4 border-red-400 mt-2"></div>

//       <div className="flex md:flex-row flex-col mt-8 w-full ">
//         <div className="md:w-1/2 w-full md:mt-12 md:mb-0 mb-8">
//           <h1 className="md:text-4xl text-4xl mt-4 md:pl-24 pl-0 text-primaryColor font-bold md:block hidden">
//             Get in <span className="text-red-400">Touch</span>
//           </h1>

//           <p className="md:text-lg text-lg mt-4 md:pl-24 pl-0 md:pr-8 pr-0 md:ml-0 ml-6 md:mr-0 mr-6 text-gray-700">
//             Need to get in touch with us? Either fill out the form with your
//             inquiry or find the email you would like to contact below.
//           </p>
//         </div>

//         <div className="md:w-1/2 w-full md:h-100 h-auto md:pb-8 ">
//           <div className="rounded-lg md:w-3/4 w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:ml-16 md:mt-4 md:h-96 h-auto">
//             <form action="">
//               <div className="md:mt-4 md:pt-4 md:pb-4 flex md:flex-row flex-col md:justify-start md:mr-4">
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   className="input input-bordered input-md md:ml-4 ml-10 md:mt-0 mt-4 md:mb-0 mb-4 w-full bg-inputColor  max-w-xs"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   className="input input-bordered input-md md:ml-4 ml-10 md:mt-0 mt-2 md:mb-0 mb-4 bg-inputColor w-full max-w-xs"
//                 />
//               </div>

//               <div className="md:mt-4 md:mr-4 md:pb-4">
//                 <input
//                   type="email"
//                   placeholder="Enter your e-mail"
//                   className="input input-bordered input-md md:ml-4 ml-10 md:mt-0 mt-2 md:mb-0 mb-4 bg-inputColor w-full max-w-xs"
//                 />
//               </div>
//               <div className="md:mt-4  md:mr-4 md:pb-4">
//                 <textarea
//                   placeholder="Message"
//                   className="textarea textarea-bordered textarea-lg md:ml-4 ml-10 md:mt-0 mt-2 md:mb-0 mb-4 bg-inputColor w-full max-w-xs"
//                 ></textarea>
//               </div>

//               <div className=" md:ml-4 ml-10 md:mt-0 mt-2 md:mb-0 mb-4">
//                 <button
//                   type="button"
//                   className=" bg-primaryColor mt-2 px-6 py-2.5 text-center mb-4
//                    rounded-[4px] text-white transition duration-500 hover:scale-95 hover:bg-primaryColor"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;


import React from "react";

function Contact() {
  return (
    <div className="w-full h-auto flex flex-wrap flex-col items-center md:pt-32 pt-32 bg-white">
      <h1 className="md:text-4xl text-4xl pt-4 text-primaryColor font-bold text-center">
        Contact Us
      </h1>
      <div className="w-28 h-1 border-b-4 border-red-400 mt-2"></div>

      <div className="flex md:flex-row flex-col mt-8 w-full ">
        <div className="md:w-1/2 w-full md:mt-12 md:mb-0 mb-8">
          <h1 className="md:text-4xl text-4xl mt-4 md:pl-24 pl-0 text-primaryColor font-bold md:block hidden">
            Get in <span className="text-red-400">Touch</span>
          </h1>

          <p className="md:text-lg text-lg mt-4 md:pl-24 pl-0 md:pr-8 pr-0 md:ml-0 ml-6 md:mr-0 mr-6 text-gray-700">
            Need to get in touch with us? Either fill out the form with your
            inquiry or find the email you would like to contact below.
          </p>
        </div>

        <div className="md:w-1/2 w-full md:h-100 h-auto md:pb-8 flex items-center justify-center">
          <div className="rounded-lg md:w-3/4 w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:ml-16 md:mt-4 md:h-96 h-auto">
            <form action="" className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered mx-auto input-md md:mt-0 mt-4 md:mb-0 mb-4 w-full bg-inputColor  max-w-xs"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered mx-auto input-md mt-0 md:mb-0 mb-4 bg-inputColor w-full max-w-xs"
              />
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="input input-bordered mx-auto input-md mt-2 md:mb-0 mb-4 bg-inputColor w-full max-w-xs"
              />
              <br/>
              <textarea
                placeholder="Message"
                className="textarea textarea-bordered mx-auto textarea-lg mt-2 md:mb-0 mb-4 bg-inputColor w-full max-w-xs"
              ></textarea>
  <br/>
  <button
  type="button"
  className="bg-primaryColor w-[260px] flex justify-center align-items-center mt-2 px-6 py-2.5 text-center mb-4 mx-auto rounded-[4px] text-white transition duration-500 hover:scale-95 hover:bg-primaryColor"
>
  Submit
</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

