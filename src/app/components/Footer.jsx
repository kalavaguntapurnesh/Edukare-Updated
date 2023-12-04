import React from "react";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="bg-footer w-full mx-auto py-16 lg:px-8 px-4 grid lg:grid-cols-3
    lg:gap-4 gap-1  text-black "
    >
      <div className="col-span-1">
        <h1 className="w-full text-3xl
         font-bold text-red-500">EDU<span className='text-primaryColor'>KARE.</span></h1>
         <p className="py-4">Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Eos, hic nihil 
          necessitatibus accusantium, dolores ducimus 
          dolorum illum corrupti unde iusto dignissimos 
          a veniam quod perspiciatis 
         laborum quisquam qui. Possimus, voluptatum.</p>
         <div className="flex justify-between md:w-[75%] my-6 ">
            <Link href="/"><FaFacebook size={30} className = "cursor-pointer" /></Link>
            <Link href="/"><FaLinkedinIn size={30}  className = "cursor-pointer"  /></Link>
            <Link href="/"><FaGithub size={30}  className = "cursor-pointer"  /></Link>
            <Link href="/"><FaInstagram size={30}  className = "cursor-pointer"  /></Link>
            <Link href="/"><FaTwitter size={30}  className = "cursor-pointer"  /></Link>
            
         </div>
      </div>

      <div className="grid grid-cols-4 lg:col-span-2 lg:gap-4 gap-2 mt-6 lg:px-12 lg:pb-2 lg:ml-0 ml-[24px]">
        <div >
            <h6 className="font-semibold text-black lg:text-base">Solutions</h6>
            <ul>
                <li className="py-2 text-sm"><Link href="/about">Analytics</Link></li>
                <li className="py-2 text-sm"><Link href = "/about">Marketing</Link></li>
                <li className="py-2 text-sm"><Link href = "/about">Commerce</Link></li>
                <li className="py-2 text-sm"><Link href = "/about">Insights</Link></li>
            </ul>
        </div>

        <div>
            <h6 className="font-semibold text-black lg:text-base">Support</h6>
            <ul>
                <li className="py-2 text-sm"><Link href = "/about">Pricing</Link></li>
                <li className="py-2 text-sm"><Link href = "/about">Contact</Link></li>
                <li className="py-2 text-sm"><Link href = "/about">Guides</Link></li>
                <li className="py-2 text-sm"><Link href = "/about">API Status</Link></li>
            </ul>
        </div>


        <div >
            <h6 className="font-semibold text-black lg:text-base">Company</h6>
            <ul>
                <li className="py-2 text-sm"><Link href = "/about">About Us</Link></li>
                <li className="py-2 text-sm"><Link href = "/about">Our Blog</Link></li>
                <li className="py-2 text-sm"><Link href = "/about">Openings</Link></li>
                <li className="py-2 text-sm"><Link href = "/about">Careers</Link></li>
               
              
            </ul>
        </div>


        <div>
            <h6 className="font-semibold text-black lg:text-base">Legal</h6>
            <ul>
                <li className="py-2 text-sm"><Link href = "/about">Claim</Link></li>
                <li className="py-2 text-sm"><Link href = "/about">Policy</Link></li>
                <li className="py-2 text-sm"><Link href = "/about">Terms</Link></li>
             
            </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
