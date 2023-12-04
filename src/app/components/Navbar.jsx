"use client";
import React, { useState } from 'react'

import { MdArrowDropDown } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import Link from 'next/link';

const Navbar = () => {

  const [homeDrop,setHomeDrop] = useState(false);
  const [aboutDrop,setAboutDrop] = useState(false);
  const [featureDrop,setFeatureDrop] = useState(false);
  const[servicesDrop,setServicesDrop] = useState(false);
  const [menu,setMenu]  = useState(true);

  const homeDPChange =()=>{
    setHomeDrop(!homeDrop)
    setAboutDrop(false)
    setFeatureDrop(false)
    setServicesDrop(false)
  }

  const aboutDPChange = ()=>{
    setAboutDrop(!aboutDrop)
    setHomeDrop(false)
    setFeatureDrop(false)
    setServicesDrop(false)
  }

  const featureDPChange =()=>{
setFeatureDrop(!featureDrop)
setAboutDrop(false)
setHomeDrop(false)
setServicesDrop(false)
  }

  const servicesDPChange =()=>{
    setServicesDrop(!servicesDrop)
    setFeatureDrop(false)
    setAboutDrop(false)
    setHomeDrop(false)
      }

  const menuChange=()=>{
    setMenu(!menu)
  }
  return (
 
<>
<div className=' bg-white max-w-screeen border-2 border-red-500'>

  <div className='flex justify-around
   items-center'>

  <div className='flex items-center'>
  <h1 className="  text-3xl text-red-500 font-bold  lg:pl-0 pl-6 pt-4 cursor-pointer">EDU<span className='text-primaryColor'>KARE.</span></h1>
  <ul className="hidden lg:flex  pt-4">
       
       <div className='border-2 border-violet-500'>
       <div className='flex'>
       <li className="lg:p-3.2 p-[11px] cursor-pointer text-primaryColor font-medium hover:text-black" onClick={homeDPChange}><Link href="/">Home </Link></li>
       <div className=' flex justify-center items-center ml-[-10px]'onClick={homeDPChange} >  <MdArrowDropDown  /></div>

       
     
       </div>
       {homeDrop && (
  <div class="w-full absolute left-0 bg-white rounded-[10px] border-t-0.5 border-black-300 mt-6">
  <div class="grid px-4 grid-cols-12 gap-12 w-full mx-auto max-w-7xl overflow-hidden">
          <section class="col-span-4">
      <div class="flex flex-col space-y-2">

    <h3 class="text-gray-500 font-semibold tracking-widest mb-2 text-xs pl-3 uppercase">
    Products
  </h3>
  
<div class="flex flex-col space-y-2">
        <a href="/tours" class="py-2 w-full flex items-center px-3 rounded-lg transition duration-200 ease-in-out hover:no-underline group  hover:bg-purple-50 " rel="noopener">

<div class=" bg-purple-50 group-hover:bg-purple-100  w-10 h-10 shrink-0 rounded inline-flex items-center justify-center mr-4 transition duration-200 ease-in-out">
  <svg class="w-5 h-5" width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.5572 0.452759H9.44976C9.6864 0.452759 9.91334 0.546761 10.0807 0.714085C10.248 0.881409 10.342 1.10835 10.342 1.34498V2.68349C10.342 2.9301 10.1423 3.12977 9.89604 3.12977H8.11126C7.9929 3.12977 7.87938 3.08275 7.79569 2.99905C7.712 2.91536 7.66498 2.80185 7.66498 2.68349V1.34498C7.66498 1.10835 7.75898 0.881409 7.9263 0.714085C8.09363 0.546761 8.32057 0.452759 8.5572 0.452759ZM17.673 7.77627L15.6355 9.81141C15.3422 10.1044 14.9445 10.269 14.53 10.2689H2.74738C2.63012 10.269 2.514 10.2459 2.40565 10.2011C2.2973 10.1562 2.19884 10.0905 2.1159 10.0076C2.03295 9.92474 1.96715 9.82634 1.92223 9.71802C1.87732 9.60971 1.85418 9.49361 1.85413 9.37635V4.91455C1.85418 4.7973 1.87732 4.68119 1.92223 4.57288C1.96715 4.46457 2.03295 4.36616 2.1159 4.28328C2.19884 4.20039 2.2973 4.13466 2.40565 4.08983C2.514 4.045 2.63012 4.02195 2.74738 4.02199H14.5303C14.9446 4.02199 15.3419 4.18662 15.6355 4.4795L17.673 6.51464C17.7559 6.59747 17.8217 6.69583 17.8666 6.8041C17.9114 6.91237 17.9345 7.02842 17.9345 7.14562C17.9345 7.26282 17.9114 7.37888 17.8666 7.48714C17.8217 7.59541 17.7559 7.69378 17.673 7.77661V7.77627ZM3.46714 11.1615H15.2392C15.3564 11.1614 15.4725 11.1845 15.5808 11.2293C15.6891 11.2742 15.7875 11.3399 15.8704 11.4228C15.9533 11.5057 16.019 11.6041 16.0639 11.7124C16.1087 11.8207 16.1318 11.9368 16.1317 12.054V16.5158C16.1317 16.633 16.1087 16.7491 16.0638 16.8574C16.0189 16.9656 15.9532 17.064 15.8703 17.1468C15.7874 17.2297 15.689 17.2954 15.5807 17.3402C15.4724 17.3851 15.3564 17.4081 15.2392 17.4081H3.46748C3.26238 17.4081 3.05928 17.3678 2.86977 17.2893C2.68026 17.2109 2.50806 17.0959 2.363 16.9509L0.326844 14.9158C0.243967 14.8329 0.178224 14.7345 0.13337 14.6263C0.0885165 14.518 0.0654297 14.402 0.0654297 14.2848C0.0654297 14.1676 0.0885165 14.0515 0.13337 13.9433C0.178224 13.835 0.243967 13.7366 0.326844 13.6538L2.363 11.619C2.65593 11.3261 3.05322 11.1615 3.46748 11.1615H3.46714ZM8.11058 18.3006H9.89536C10.142 18.3006 10.3416 18.6503 10.3416 19.0813V22.9856C10.3416 23.8482 9.94197 24.5472 9.44942 24.5472H8.55686C8.06398 24.5472 7.66464 23.8482 7.66464 22.9856V19.0809C7.66464 18.65 7.86431 18.3003 8.11058 18.3003V18.3006Z" fill="#A692FC"></path> </svg>
</div>

<div class="space-y-1">
  <div class="flex items-center space-x-2">
    <h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">Tours</h4>
              </div>
  <div class="text-gray-500 font-normal text-sm">Drive product adoption with powerful tours</div>
</div>
</a>
        <a href="/tooltips" class="py-2 w-full flex items-center px-3 rounded-lg transition duration-200 ease-in-out hover:no-underline group   hover:bg-red-50 " rel="noopener">

<div class=" bg-red-50 group-hover:bg-red-100  w-10 h-10 shrink-0 rounded inline-flex items-center justify-center mr-4 transition duration-200 ease-in-out">
  <svg class="w-5 h-5" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 18.4393C9.34925 18.4311 8.70041 18.365 8.06123 18.242C7.91271 18.2172 7.76068 18.2232 7.61454 18.2595C7.4684 18.2957 7.33124 18.3616 7.21153 18.4529C5.97978 19.318 4.54936 19.8578 3.05315 20.022C2.96862 20.0311 2.88324 20.0163 2.80662 19.9795C2.73 19.9427 2.66518 19.8852 2.61946 19.8135C2.57531 19.7433 2.55303 19.6615 2.55545 19.5786C2.55787 19.4957 2.58489 19.4154 2.63306 19.3478C3.21141 18.6589 3.62944 17.85 3.85694 16.9797C3.87873 16.8629 3.8669 16.7422 3.82282 16.6318C3.77874 16.5215 3.70423 16.4259 3.60794 16.3562C1.41361 14.7915 0.107422 12.3315 0.0771484 9.70721C0.0771484 4.89063 4.51956 0.975464 10.0001 0.975464C15.48 0.975464 19.9227 4.89063 19.9227 9.70721C19.9227 14.5238 15.4803 18.4393 10.0001 18.4393ZM10.6165 6.13015C11.3573 6.18049 12.0023 5.64985 12.0635 4.93961C12.0023 4.22903 11.3573 3.69805 10.6165 3.74874C9.87595 3.69839 9.23068 4.22903 9.16945 4.93927C9.23068 5.64985 9.87595 6.18083 10.6165 6.13015ZM11.2036 8.81464C11.2515 8.63743 11.2565 8.45135 11.2181 8.27182C11.1798 8.09229 11.0993 7.92447 10.9832 7.78228C10.8635 7.63653 10.7128 7.51945 10.5419 7.43963C10.3711 7.35981 10.1846 7.31928 9.99603 7.32103H8.76025C8.53235 7.32103 8.34696 7.49859 8.34696 7.71765V7.84589C8.34696 8.00814 8.45003 8.15407 8.60684 8.21461C9.01196 8.3704 9.23272 8.79219 9.12047 9.19732L7.96905 13.3686C7.92119 13.5459 7.91625 13.732 7.95464 13.9115C7.99303 14.091 8.07365 14.2588 8.18981 14.401C8.30944 14.5467 8.46021 14.6638 8.63103 14.7436C8.80186 14.8235 8.98839 14.864 9.17694 14.8622H10.4127C10.6406 14.8622 10.8257 14.6843 10.8257 14.4653V14.337C10.8257 14.1748 10.7229 14.0289 10.5661 13.9687C10.1607 13.8125 9.94024 13.3911 10.0525 12.9859L11.2036 8.81464Z" fill="#FC515C"></path> </svg>
</div>

<div class="space-y-1">
  <div class="flex items-center space-x-2">
    <h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">Tooltips</h4>
              </div>
  <div class="text-gray-500 font-normal text-sm">Tooltips provide in-line help to unblock users</div>
</div>
</a>
        <a href="/surveys" class="py-2 w-full flex items-center px-3 rounded-lg transition duration-200 ease-in-out hover:no-underline group   hover:bg-green-50 " rel="noopener">

<div class=" bg-green-50 group-hover:bg-green-100  w-10 h-10 shrink-0 rounded inline-flex items-center justify-center mr-4 transition duration-200 ease-in-out">
  <svg class="w-5 h-5" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.92103 1.20996C8.26118 0.16569 9.73858 0.16569 10.0776 1.20996L11.2908 4.94258C11.3649 5.1699 11.509 5.36798 11.7025 5.50849C11.8959 5.649 12.1289 5.72476 12.368 5.72493H16.2933C17.392 5.72493 17.8478 7.1309 16.96 7.77719L13.7853 10.0834C13.5914 10.2241 13.4471 10.4225 13.3729 10.6502C13.2988 10.8779 13.2987 11.1233 13.3726 11.3511L14.5858 15.0837C14.9259 16.128 13.7297 16.9976 12.8397 16.3513L9.66488 14.0451C9.47123 13.9045 9.23806 13.8288 8.99875 13.8288C8.75944 13.8288 8.52627 13.9045 8.33261 14.0451L5.15785 16.3513C4.26891 16.9976 3.07384 16.128 3.41286 15.0837L4.62608 11.3511C4.69997 11.1233 4.69984 10.8779 4.6257 10.6502C4.55155 10.4225 4.40721 10.2241 4.21336 10.0834L1.03972 7.77833C0.151922 7.13204 0.608862 5.72607 1.70642 5.72607H5.63066C5.86996 5.72613 6.10314 5.65048 6.29682 5.50995C6.49051 5.36943 6.63477 5.17122 6.70895 4.94371L7.92216 1.2111L7.92103 1.20996Z" fill="#22C55C"></path> </svg>
</div>

<div class="space-y-1">
  <div class="flex items-center space-x-2">
    <h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">Surveys</h4>
              </div>
  <div class="text-gray-500 font-normal text-sm">Contextual and targeted in-product surveys</div>
</div>
</a>
        <a href="/launchers" class="py-2 w-full flex items-center px-3 rounded-lg transition duration-200 ease-in-out hover:no-underline group  hover:bg-yellow-50 " rel="noopener">

<div class=" bg-yellow-50 group-hover:bg-yellow-100  w-10 h-10 shrink-0 rounded inline-flex items-center justify-center mr-4 transition duration-200 ease-in-out">
  <svg class="w-5 h-5" width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3015 15.3092C10.0365 16.1936 9.82086 16.8297 8.90279 16.8297H5.09647C4.1784 16.8297 3.96274 16.1936 3.69742 15.3092C2.81234 12.3577 0.199961 11.3784 0.165605 7.56591C0.141795 5.16987 1.43914 2.94594 3.56374 1.74112C4.61216 1.14891 5.79585 0.837708 6.99997 0.837708C8.20409 0.837708 9.38778 1.14891 10.4362 1.74112C12.5608 2.94594 13.8581 5.16987 13.8343 7.56591C13.7993 11.3784 11.1869 12.3577 10.3018 15.3092H10.3015ZM4.71958 17.7185H9.28002C9.78345 17.7185 10.1916 18.1165 10.1916 18.6073C10.1916 19.0981 9.78345 19.4961 9.28002 19.4961H4.71924C4.21581 19.4961 3.80763 19.0981 3.80763 18.6073C3.80763 18.1165 4.21581 17.7185 4.71924 17.7185H4.71958ZM5.25294 20.3846H8.74632C8.88782 20.3846 9.02355 20.4397 9.12389 20.5373C9.2239 20.635 9.28002 20.7673 9.28002 20.9054C9.28002 21.1411 9.1841 21.3673 9.013 21.534L8.63577 21.902C8.46321 22.0693 8.23219 22.1627 7.99186 22.1622H6.00774C5.76623 22.1622 5.53425 22.0687 5.36349 21.902L4.98592 21.534C4.90177 21.4523 4.83482 21.3546 4.78902 21.2466C4.74322 21.1387 4.71949 21.0226 4.71924 20.9054C4.71924 20.7673 4.77537 20.635 4.87571 20.5373C4.97686 20.4392 5.11233 20.3844 5.25328 20.3846H5.25294ZM3.54197 10.7385C4.07941 11.4613 5.11688 11.6236 5.8591 11.0991C6.60131 10.5742 6.76629 9.56261 6.2285 8.83945C5.69106 8.11662 4.65291 7.95403 3.9107 8.47922C3.16916 9.00306 3.00351 10.0154 3.54197 10.7385Z" fill="#FEBD46"></path> </svg>
</div>

<div class="space-y-1">
  <div class="flex items-center space-x-2">
    <h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">Launchers</h4>
              </div>
  <div class="text-gray-500 font-normal text-sm">High customizable in-product widgets</div>
</div>
</a>
        <a href="https://www.helpbar.ai" class="py-2 w-full flex items-center px-3 rounded-lg transition duration-200 ease-in-out hover:no-underline group " target="_blank" rel="noopener">

<div class=" w-10 h-10 shrink-0 rounded inline-flex items-center justify-center mr-4 transition duration-200 ease-in-out">
  <svg class="w-5 h-5" width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M223.074 312.193L227.798 305.652C228.804 304.26 230.536 303.544 232.267 303.799L233.59 304.013C237.616 304.663 241.673 305.076 245.738 305.251C248.634 305.376 251.534 305.38 254.43 305.265C258.607 305.098 262.775 304.68 266.91 304.013L268.234 303.799C269.964 303.544 271.697 304.26 272.703 305.652L277.426 312.193C278.538 313.731 279.251 315.506 279.505 317.369C294.603 428.38 461.713 423.168 471.262 311.579C471.729 306.119 471.51 300.611 470.61 295.202L469.594 289.1C467.35 275.617 462.282 262.72 454.704 251.206L377.643 134.136C374.33 129.104 370.395 124.484 365.926 120.377L362.481 117.211C335.178 92.1251 290.399 101.537 276.26 135.333L274.775 138.879C272.305 144.783 271.035 151.095 271.035 157.468C271.035 158.245 270.305 158.825 269.524 158.682L260.77 156.796C258.051 156.212 255.292 155.856 252.525 155.73C251.326 155.675 250.127 155.664 248.929 155.696C245.842 155.777 242.762 156.144 239.731 156.796L230.977 158.682C230.196 158.825 229.466 158.245 229.466 157.468C229.466 151.095 228.195 144.783 225.726 138.879L224.241 135.333C210.102 101.537 165.323 92.1251 138.02 117.211L134.574 120.377C130.106 124.484 126.171 129.104 122.86 134.136L45.7983 251.206C38.2191 262.72 33.1511 275.617 30.9065 289.1L29.891 295.202C28.9909 300.611 28.7715 306.119 29.2386 311.579C38.7883 423.168 205.898 428.38 220.996 317.369C221.25 315.506 221.963 313.731 223.074 312.193ZM247.947 277.325C263.223 277.325 275.605 265.317 275.605 250.506C275.605 235.696 263.223 223.69 247.947 223.69C232.673 223.69 220.291 235.696 220.291 250.506C220.291 265.317 232.673 277.325 247.947 277.325ZM194.94 304.141C194.94 341.17 163.984 371.186 125.798 371.186C87.6127 371.186 56.6566 341.17 56.6566 304.141C56.6566 267.115 87.6127 237.097 125.798 237.097C163.984 237.097 194.94 267.115 194.94 304.141ZM374.706 371.186C412.892 371.186 443.848 341.17 443.848 304.141C443.848 267.115 412.892 237.097 374.706 237.097C336.521 237.097 305.565 267.115 305.565 304.141C305.565 341.17 336.521 371.186 374.706 371.186Z" fill="#0054B3"></path> <path d="M352.798 326.448C345.977 333.095 334.55 333.129 330.509 324.595C327.534 318.318 325.951 311.431 325.951 304.385C325.951 291.596 331.167 279.331 340.448 270.288C349.729 261.245 362.316 256.164 375.441 256.164C382.673 256.164 389.741 257.705 396.184 260.602C404.941 264.541 404.907 275.676 398.086 282.323L352.798 326.448Z" fill="#0054B3"></path> <path d="M102.421 326.448C95.6003 333.095 84.1747 333.129 80.1317 324.595C77.159 318.318 75.5762 311.431 75.5762 304.385C75.5762 291.596 80.7897 279.331 90.0709 270.288C99.352 261.245 111.941 256.164 125.066 256.164C132.298 256.164 139.364 257.705 145.807 260.602C154.566 264.541 154.53 275.676 147.709 282.323L102.421 326.448Z" fill="#0054B3"></path> </svg>
</div>

<div class="space-y-1">
  <div class="flex items-center space-x-2">
    <h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">HelpBar</h4>
              </div>
  <div class="text-gray-500 font-normal text-sm">Free universal search built for SaaS</div>
</div>
</a>
  
</div>

</div>
    </section>
          <section class="col-span-4">
      <div class="flex flex-col space-y-2">

    <h3 class="pl-3 mb-2 text-xs font-semibold tracking-widest text-gray-500 uppercase">
    Features
  </h3>

<div class="flex flex-col space-y-1">
        <a href="/features/ab-testing" class="py-2 w-full flex items-center px-3 rounded-lg transition duration-200 ease-in-out hover:bg-gray-50 hover:no-underline" rel="noopener">

<div class="w-10 h-10  shrink-0 rounded inline-flex items-center justify-center mr-4 text-gray-600">
  <svg class="w-5 h-5" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.70024 0.0999756C4.54204 0.100009 4.3874 0.146947 4.25587 0.234854C4.12434 0.322762 4.02183 0.447692 3.9613 0.593852C3.90076 0.740012 3.88492 0.900839 3.91577 1.056C3.94663 1.21116 4.02279 1.35369 4.13464 1.46558L4.70024 2.03118V5.03758C4.70019 5.24973 4.61588 5.45318 4.46584 5.60318L1.26584 8.80318C-0.24616 10.3152 0.82504 12.9 2.96264 12.9H11.2378C13.3754 12.9 14.4458 10.3152 12.9338 8.80318L9.73384 5.60318C9.58409 5.45305 9.50007 5.24962 9.50024 5.03758V2.03118L10.0658 1.46558C10.1777 1.35369 10.2539 1.21116 10.2847 1.056C10.3156 0.900839 10.2997 0.740012 10.2392 0.593852C10.1786 0.447692 10.0761 0.322762 9.94461 0.234854C9.81308 0.146947 9.65844 0.100009 9.50024 0.0999756H4.70024ZM6.30024 5.03758V1.69998H7.90024V5.03758C7.90059 5.67377 8.15352 6.28379 8.60344 6.73358L9.42504 7.55598C8.84967 7.42236 8.24855 7.4506 7.68824 7.63758L7.31224 7.76238C6.65534 7.98136 5.94514 7.98136 5.28824 7.76238L4.83784 7.61278C4.80773 7.60254 4.77731 7.5932 4.74664 7.58478L5.59704 6.73438C6.04716 6.28439 6.3001 5.67404 6.30024 5.03758V5.03758Z" fill="#475569"></path> </svg>
</div>

<div class="space-y-1">
  <div class="flex items-center space-x-2">
    <h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">A/B Testing</h4>
        </div>
  <div class="text-gray-500 font-normal text-sm">Create variations of in-app flows</div>
</div>
</a>
        <a href="/features/styling" class="py-2 w-full flex items-center px-3 rounded-lg transition duration-200 ease-in-out hover:bg-gray-50 hover:no-underline" rel="noopener">

<div class="w-10 h-10  shrink-0 rounded inline-flex items-center justify-center mr-4 text-gray-600">
  <svg class="w-5 h-5" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.7184 11.4304L14.7163 11.4286C14.3535 11.0931 13.8839 11.0142 13.5411 10.9565L13.5159 10.9522C13.1852 10.8976 13.133 10.8608 12.9832 10.7266C12.894 10.6474 12.7877 10.5202 12.7877 10.3634C12.7877 10.2067 12.894 10.0796 12.9828 10.0003L14.0893 9.01853C15.0363 8.18141 15.5582 7.05785 15.5582 5.85464C15.5582 4.65143 15.0375 3.52787 14.0893 2.69041C12.7778 1.53616 10.9833 0.900024 9.03317 0.900024C6.77901 0.900024 4.52374 1.75393 2.84289 3.24251C1.23987 4.6591 0.358154 6.55691 0.358154 8.5859C0.358154 10.6149 1.24097 12.5126 2.84289 13.9289C3.63764 14.6319 4.57819 15.1778 5.63895 15.552C6.65921 15.9098 7.732 16.095 8.81315 16.1H8.87937C11.1083 16.1 13.2309 15.3484 14.7034 14.0393C15.0579 13.7264 15.2571 13.2781 15.264 12.7764C15.2716 12.2587 15.0678 11.7552 14.7184 11.4304ZM2.69673 6.74618C2.69673 6.51492 2.7653 6.28887 2.89379 6.09659C3.02227 5.90431 3.20489 5.75445 3.41855 5.66595C3.63221 5.57745 3.86731 5.5543 4.09413 5.59942C4.32095 5.64453 4.5293 5.75588 4.69282 5.91941C4.85636 6.08293 4.96772 6.29126 5.01283 6.51807C5.05795 6.74488 5.0348 6.97998 4.94629 7.19362C4.85779 7.40727 4.70792 7.58988 4.51564 7.71835C4.32335 7.84683 4.09728 7.9154 3.86601 7.9154C3.5559 7.9154 3.25849 7.79222 3.03921 7.57295C2.81992 7.35368 2.69673 7.05628 2.69673 6.74618ZM4.15833 11.6789C3.92708 11.6789 3.701 11.6103 3.50872 11.4818C3.31643 11.3533 3.16655 11.1708 3.07805 10.9571C2.98956 10.7434 2.9664 10.5083 3.01151 10.2816C3.05664 10.0547 3.168 9.84636 3.33153 9.68287C3.49505 9.51937 3.7034 9.40803 3.93022 9.36291C4.15704 9.31778 4.39214 9.34087 4.6058 9.42941C4.81946 9.51795 5.00208 9.66776 5.13056 9.86004C5.25904 10.0523 5.32762 10.2784 5.32762 10.5097C5.32762 10.8197 5.20443 11.1172 4.98515 11.3364C4.76586 11.5557 4.46845 11.6789 4.15833 11.6789ZM5.61995 4.40772C5.61995 4.17646 5.68852 3.95041 5.81701 3.75813C5.94548 3.56585 6.1281 3.41599 6.34177 3.32748C6.55542 3.23899 6.79053 3.21584 7.01735 3.26095C7.24417 3.30607 7.45252 3.41743 7.61604 3.58094C7.77957 3.74447 7.89093 3.9528 7.93605 4.17961C7.98114 4.40642 7.95801 4.64151 7.86951 4.85516C7.78101 5.06881 7.63115 5.25142 7.43886 5.37989C7.24657 5.50837 7.02049 5.57695 6.78924 5.57695C6.47912 5.57695 6.1817 5.45376 5.96242 5.23448C5.74313 5.01522 5.61995 4.71782 5.61995 4.40772ZM7.95853 14.3097C7.61162 14.3097 7.27252 14.2068 6.98409 14.0141C6.69565 13.8214 6.47085 13.5475 6.3381 13.2269C6.20535 12.9065 6.17062 12.5539 6.23829 12.2137C6.30596 11.8734 6.47301 11.5609 6.7183 11.3156C6.96359 11.0703 7.27611 10.9033 7.61634 10.8356C7.95658 10.768 8.30927 10.8027 8.62971 10.9354C8.95024 11.0682 9.22412 11.293 9.41688 11.5814C9.60954 11.8699 9.71242 12.2089 9.71242 12.5558C9.71242 13.021 9.52765 13.467 9.19876 13.796C8.86977 14.1249 8.42365 14.3097 7.95853 14.3097ZM10.5894 5.57695C10.3581 5.57695 10.132 5.50837 9.93976 5.37989C9.74748 5.25142 9.59766 5.06881 9.50912 4.85516C9.42068 4.64151 9.3975 4.40642 9.44262 4.17961C9.48775 3.9528 9.59909 3.74447 9.76258 3.58094C9.92617 3.41743 10.1345 3.30607 10.3613 3.26095C10.5881 3.21584 10.8233 3.23899 11.0369 3.32748C11.2506 3.41599 11.4332 3.56585 11.5616 3.75813C11.6901 3.95041 11.7587 4.17646 11.7587 4.40772C11.7587 4.71782 11.6355 5.01522 11.4162 5.23448C11.1969 5.45376 10.8995 5.57695 10.5894 5.57695Z" fill="#475569"></path> </svg>
</div>

<div class="space-y-1">
  <div class="flex items-center space-x-2">
    <h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">Styling</h4>
        </div>
  <div class="text-gray-500 font-normal text-sm">Create on-brand, beautiful Experiences</div>
</div>
</a>
        <a href="/features/rate-limiting" class="py-2 w-full flex items-center px-3 rounded-lg transition duration-200 ease-in-out hover:bg-gray-50 hover:no-underline" rel="noopener">

<div class="w-10 h-10  shrink-0 rounded inline-flex items-center justify-center mr-4 text-gray-600">
  <svg class="w-5 h-5" width="34" height="48" viewBox="0 0 34 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M30 40V43.5C30 43.7761 30.2239 44 30.5 44H33C33.5523 44 34 44.4477 34 45V47C34 47.5523 33.5523 48 33 48H1C0.447715 48 0 47.5523 0 47V45C-8.33927e-08 44.4477 0.447715 44 1 44H3.5C3.77614 44 4 43.7761 4 43.5V40C4 27.9623 13 27.3736 13 24C13 20.6264 4 20.0376 4 8V4.5C4 4.22386 3.77614 4 3.5 4H1C0.447715 4 0 3.55229 0 3V1C-8.33927e-08 0.447715 0.447715 0 1 0H33C33.5523 -2.41411e-08 34 0.447715 34 1V3C34 3.55229 33.5523 4 33 4H30.5C30.2239 4 30 4.22386 30 4.5V8C30 20.0376 21 20.6264 21 24C21 27.3736 30 27.9624 30 40ZM25.4346 10C25.6924 10.0026 25.9094 9.80777 25.9346 9.5512C25.9769 9.0666 26 8.5512 26 8V4.5C26 4.22386 25.7761 4 25.5 4H8.5C8.22386 4 8 4.22386 8 4.5V8C8 8.5514 8.0231 9.0666 8.0655 9.5512C8.09072 9.80775 8.30773 10.0025 8.5655 10H25.4346ZM17 27.9929C15.8125 27.9929 14.6445 28.9441 12.9589 30.2462C10.521 32.1294 8 34.077 8 39.9765C8.05322 40.6094 8.60943 41.0793 9.24232 41.0261C9.42743 41.0105 9.60602 40.9503 9.7628 40.8507C9.7628 40.8507 12.0028 39.8715 13.9064 38.7944C15.8283 37.7174 18.1721 37.7174 20.094 38.7944C21.9974 39.8715 24.2375 40.8507 24.2375 40.8507C24.773 41.1916 25.4833 41.0338 25.8242 40.4983C25.9242 40.3412 25.9845 40.1621 26 39.9765C26 34.077 23.4792 32.1294 21.041 30.2465C19.3539 28.9429 18.1876 27.9929 17 27.9929Z" fill="#475569"></path> </svg>
</div>

<div class="space-y-1">
  <div class="flex items-center space-x-2">
    <h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">Rate Limiting</h4>
        </div>
  <div class="text-gray-500 font-normal text-sm">Set the right pace for Experiences to appear</div>
</div>
</a>
        <a href="/features/templates" class="py-2 w-full flex items-center px-3 rounded-lg transition duration-200 ease-in-out hover:bg-gray-50 hover:no-underline" rel="noopener">

<div class="w-10 h-10  shrink-0 rounded inline-flex items-center justify-center mr-4 text-gray-600">
  <svg class="w-5 h-5" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.558105 1.5C0.558105 1.23478 0.663462 0.98043 0.850999 0.792893C1.03854 0.605357 1.29289 0.5 1.55811 0.5H13.5581C13.8233 0.5 14.0777 0.605357 14.2652 0.792893C14.4527 0.98043 14.5581 1.23478 14.5581 1.5V3.5C14.5581 3.76522 14.4527 4.01957 14.2652 4.20711C14.0777 4.39464 13.8233 4.5 13.5581 4.5H1.55811C1.29289 4.5 1.03854 4.39464 0.850999 4.20711C0.663462 4.01957 0.558105 3.76522 0.558105 3.5V1.5ZM0.558105 7.5C0.558105 7.23478 0.663462 6.98043 0.850999 6.79289C1.03854 6.60536 1.29289 6.5 1.55811 6.5H7.55811C7.82332 6.5 8.07768 6.60536 8.26521 6.79289C8.45275 6.98043 8.55811 7.23478 8.55811 7.5V13.5C8.55811 13.7652 8.45275 14.0196 8.26521 14.2071C8.07768 14.3946 7.82332 14.5 7.55811 14.5H1.55811C1.29289 14.5 1.03854 14.3946 0.850999 14.2071C0.663462 14.0196 0.558105 13.7652 0.558105 13.5V7.5ZM11.5581 6.5C11.2929 6.5 11.0385 6.60536 10.851 6.79289C10.6635 6.98043 10.5581 7.23478 10.5581 7.5V13.5C10.5581 13.7652 10.6635 14.0196 10.851 14.2071C11.0385 14.3946 11.2929 14.5 11.5581 14.5H13.5581C13.8233 14.5 14.0777 14.3946 14.2652 14.2071C14.4527 14.0196 14.5581 13.7652 14.5581 13.5V7.5C14.5581 7.23478 14.4527 6.98043 14.2652 6.79289C14.0777 6.60536 13.8233 6.5 13.5581 6.5H11.5581Z" fill="#475569"></path> </svg>
</div>

<div class="space-y-1">
  <div class="flex items-center space-x-2">
    <h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">Templates</h4>
        </div>
  <div class="text-gray-500 font-normal text-sm">Design Experiences quickly and consistently</div>
</div>
</a>
        <a href="/features/alerts" class="py-2 w-full flex items-center px-3 rounded-lg transition duration-200 ease-in-out hover:bg-gray-50 hover:no-underline" rel="noopener">

<div class="w-10 h-10  shrink-0 rounded inline-flex items-center justify-center mr-4 text-gray-600">
  <svg class="w-5 h-5" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0209 44.021V44.021C22.4455 43.9999 20.8755 43.8332 19.3309 43.5231V43.5231C18.6014 43.3983 17.8534 43.592 17.2763 44.0552V44.0552C14.324 46.2239 10.8577 47.5862 7.21886 48.0079V48.0079C6.6198 48.071 6.083 47.6365 6.01989 47.0375C5.99288 46.7811 6.05756 46.5234 6.20245 46.3102V46.3102C7.60901 44.5588 8.6189 42.5231 9.16245 40.3436V40.3436C9.27222 39.7485 9.03961 39.142 8.56005 38.773V38.773C3.2526 34.8299 0.093482 28.6325 0.020752 22.021C0.020752 9.8857 10.766 0.0209961 24.0208 0.0209961C37.2756 0.0209961 48.0208 9.8857 48.0208 22.021C48.0208 34.1563 37.2755 44.021 24.0209 44.021V44.021ZM24.0148 36.021V36.021C25.6716 36.021 27.0148 34.6778 27.0148 33.021C27.0148 31.3641 25.6716 30.021 24.0148 30.021C22.3579 30.021 21.0148 31.3641 21.0148 33.021V33.0209C21.0148 34.6777 22.3578 36.0208 24.0146 36.0209L24.0148 36.021ZM26.0133 8.021H22.0344V8.021C21.4766 8.01448 21.0191 8.46136 21.0126 9.01912C21.0124 9.03729 21.0127 9.05545 21.0135 9.0736L21.9282 26.0736V26.0736C21.9629 26.6104 22.4112 27.0264 22.9491 27.021H25.0985V27.021C25.6364 27.0264 26.0847 26.6104 26.1196 26.0736L27.0343 9.0736V9.0736C27.0578 8.51629 26.6251 8.04539 26.0678 8.02182C26.0496 8.02106 26.0314 8.02078 26.0133 8.02099V8.021Z" fill="#475569"></path> </svg>
</div>

<div class="space-y-1">
  <div class="flex items-center space-x-2">
    <h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">Alerts</h4>
        </div>
  <div class="text-gray-500 font-normal text-sm">Get a heads-up if something changes</div>
</div>
</a>
        <a href="/features/segmentation" class="py-2 w-full flex items-center px-3 rounded-lg transition duration-200 ease-in-out hover:bg-gray-50 hover:no-underline" rel="noopener">

<div class="w-10 h-10  shrink-0 rounded inline-flex items-center justify-center mr-4 text-gray-600">
  <svg class="w-5 h-5" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9208 31.8285C35.1441 28.8652 37.1562 24.6619 37.1562 20C37.1562 11.0254 29.699 3.75 20.5 3.75C11.301 3.75 3.84375 11.0254 3.84375 20C3.84375 24.6619 5.85592 28.8652 9.07915 31.8285C12.061 34.5699 16.0794 36.25 20.5 36.25C24.9206 36.25 28.939 34.5699 31.9208 31.8285ZM10.4979 29.6872C12.846 26.8297 16.454 25 20.5 25C24.546 25 28.154 26.8297 30.5021 29.6872C27.9488 32.1963 24.4104 33.75 20.5 33.75C16.5896 33.75 13.0512 32.1963 10.4979 29.6872ZM26.9062 15C26.9062 18.4518 24.0381 21.25 20.5 21.25C16.9619 21.25 14.0938 18.4518 14.0938 15C14.0938 11.5482 16.9619 8.75 20.5 8.75C24.0381 8.75 26.9062 11.5482 26.9062 15Z" fill="#475569"></path> </svg>
</div>

<div class="space-y-1">
  <div class="flex items-center space-x-2">
    <h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">Segmentation</h4>
        </div>
  <div class="text-gray-500 font-normal text-sm">Target users with precision</div>
</div>
</a>
  
</div>

  <div class="px-2">
  <a href="/features" class="pt-6 text-gray-900 flex items-center mr-1 text-sm font-bold" rel="noopener">
<span class="mr-1">Explore all features</span>
<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.64982 1.09279C9.82563 0.917033 10.064 0.818298 10.3126 0.818298C10.5612 0.818298 10.7996 0.917033 10.9755 1.09279L14.7255 4.84284C14.9013 5.01865 15 5.25707 15 5.50566C15 5.75426 14.9013 5.99267 14.7255 6.16848L10.9755 9.91853C10.7986 10.0893 10.5618 10.1838 10.316 10.1817C10.0702 10.1795 9.83506 10.0809 9.66124 9.90711C9.48741 9.73329 9.38882 9.49815 9.38668 9.25234C9.38455 9.00652 9.47904 8.76971 9.64982 8.59289L11.7995 6.44317H0.937513C0.688869 6.44317 0.450409 6.3444 0.274591 6.16858C0.0987733 5.99276 0 5.7543 0 5.50566C0 5.25702 0.0987733 5.01856 0.274591 4.84274C0.450409 4.66692 0.688869 4.56815 0.937513 4.56815H11.7995L9.64982 2.41843C9.47406 2.24262 9.37533 2.00421 9.37533 1.75561C9.37533 1.50702 9.47406 1.2686 9.64982 1.09279Z" fill="#1E293B"></path></svg>
</a>
</div>

</div>

    </section>
          <section class="col-span-4">
      <div class="flex flex-col space-y-2">

  <h3 class="pl-3 mb-2 text-xs font-semibold tracking-widest text-gray-500 uppercase">
  Whats New
</h3>

<div class="flex flex-col space-y-2">
  <div class="p-5 rounded-2xl bg-yellow-50">

    <div class="flex flex-col space-y-6">
              <a href="/whats-new/helpbar-actions-and-ai" class="flex items-center space-x-4 hover:no-underline" rel="noopener">
        <div class="object-cover w-32 overflow-hidden rounded-lg shrink-0">
                      {/* <img class="w-full" src="/img/containers/assets/HB-%281%29.png/b8a86656bf670a038273ac54a03bf3b8.png" alt="img"> */}
                    </div>
        <div>
          <div class="mb-1 text-base font-bold text-gray-900">HelpBar is ready to enable your users</div>
          <div class="text-sm font-medium text-gray-500">Add your integrations as Actions, enable AI Answers, and more</div>
        </div>
      </a>
              <a href="/whats-new/native-a-b-testing-for-tours" class="flex items-center space-x-4 hover:no-underline" rel="noopener">
        <div class="object-cover w-32 overflow-hidden rounded-lg shrink-0">
                      {/* <img class="w-full" src="/img/containers/assets/A:B-navbar.png/de4e776b9764701736d31f03f65387dc.png" alt="img"/> */}
                    </div>
        <div>
          <div class="mb-1 text-base font-bold text-gray-900">Native A/B Testing</div>
          <div class="text-sm font-medium text-gray-500">Test different Announcement or Banner variants from your Dashboard</div>
        </div>
      </a>
              <a href="/whats-new/new-additional-actions" class="flex items-center space-x-4 hover:no-underline" rel="noopener">
        <div class="object-cover w-32 overflow-hidden rounded-lg shrink-0">
                      {/* <img class="w-full" src="/img/containers/assets/Screenshot-2023-09-01-at-11.10.32.png/9717af473de0e56fc4f1d9a20d6e5805.png" alt="img"/> */}
                    </div>
        <div>
          <div class="mb-1 text-base font-bold text-gray-900">New Powerful integrations</div>
          <div class="text-sm font-medium text-gray-500">Launch Arcade, Google Drive, Navattic, or any embeddable URL in-app</div>
        </div>
      </a>
      
    </div>

    <a href="/whats-new" class="pt-6 text-gray-900 flex items-center mr-1 text-sm font-bold" rel="noopener">
<span class="mr-1">View changelog</span>
<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.64982 1.09279C9.82563 0.917033 10.064 0.818298 10.3126 0.818298C10.5612 0.818298 10.7996 0.917033 10.9755 1.09279L14.7255 4.84284C14.9013 5.01865 15 5.25707 15 5.50566C15 5.75426 14.9013 5.99267 14.7255 6.16848L10.9755 9.91853C10.7986 10.0893 10.5618 10.1838 10.316 10.1817C10.0702 10.1795 9.83506 10.0809 9.66124 9.90711C9.48741 9.73329 9.38882 9.49815 9.38668 9.25234C9.38455 9.00652 9.47904 8.76971 9.64982 8.59289L11.7995 6.44317H0.937513C0.688869 6.44317 0.450409 6.3444 0.274591 6.16858C0.0987733 5.99276 0 5.7543 0 5.50566C0 5.25702 0.0987733 5.01856 0.274591 4.84274C0.450409 4.66692 0.688869 4.56815 0.937513 4.56815H11.7995L9.64982 2.41843C9.47406 2.24262 9.37533 2.00421 9.37533 1.75561C9.37533 1.50702 9.47406 1.2686 9.64982 1.09279Z" fill="#1E293B"></path></svg>
</a>
  </div>
</div>

</div>
    </section>
    
  </div>
</div>
)}
       </div>













<div>
  
        <div className='flex'>
              <li className="lg:p-3.2 p-[11px] cursor-pointer text-primaryColor font-medium hover:text-black" onClick={aboutDPChange}>About </li>
              <div className=' flex justify-center items-center ml-[-10px]' onClick={aboutDPChange}>  <MdArrowDropDown  /></div>
            
              </div>
{ 
aboutDrop && (
  
  <div class="w-full absolute left-0 bg-white rounded-[10px] border-t-0.5 border-black-300 mt-6" >
    <div class="grid px-4 grid-cols-12 gap-12 w-full mx-auto max-w-7xl overflow-hidden">
            <section class="col-span-6">
        <div class="flex flex-col space-y-4">

			<h3 class="text-gray-500 font-semibold tracking-widest mb-2 text-xs pl-3 uppercase">
			Use Cases
		</h3>
		
	<div class="grid grid-cols-2 gap-2">
					<a href="/use-cases/better-user-onboarding" class="py-2 w-full flex items-start px-3 rounded-lg transition duration-200 ease-in-out hover:bg-gray-50 hover:no-underline space-x-4" rel="noopener">

	<div class="w-10 h-10 shrink-0 rounded inline-flex items-center justify-center text-gray-600">
		<svg class="w-6 h-6" width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.24386 0.5C4.97864 0.5 4.72429 0.605357 4.53675 0.792893C4.34922 0.98043 4.24386 1.23478 4.24386 1.5C4.24386 1.76522 4.34922 2.01957 4.53675 2.20711C4.72429 2.39464 4.97864 2.5 5.24386 2.5H7.24386C7.50907 2.5 7.76343 2.39464 7.95096 2.20711C8.1385 2.01957 8.24386 1.76522 8.24386 1.5C8.24386 1.23478 8.1385 0.98043 7.95096 0.792893C7.76343 0.605357 7.50907 0.5 7.24386 0.5H5.24386Z" fill="#475569"></path> <path d="M0.243858 3.5C0.243858 2.96957 0.454572 2.46086 0.829645 2.08579C1.20472 1.71071 1.71343 1.5 2.24386 1.5C2.24386 2.29565 2.55993 3.05871 3.12254 3.62132C3.68515 4.18393 4.44821 4.5 5.24386 4.5H7.24386C8.03951 4.5 8.80257 4.18393 9.36518 3.62132C9.92779 3.05871 10.2439 2.29565 10.2439 1.5C10.7743 1.5 11.283 1.71071 11.6581 2.08579C12.0331 2.46086 12.2439 2.96957 12.2439 3.5V14.5C12.2439 15.0304 12.0331 15.5391 11.6581 15.9142C11.283 16.2893 10.7743 16.5 10.2439 16.5H2.24386C1.71343 16.5 1.20472 16.2893 0.829645 15.9142C0.454572 15.5391 0.243858 15.0304 0.243858 14.5V3.5ZM3.24386 7.5C2.97864 7.5 2.72429 7.60536 2.53675 7.79289C2.34922 7.98043 2.24386 8.23478 2.24386 8.5C2.24386 8.76522 2.34922 9.01957 2.53675 9.20711C2.72429 9.39464 2.97864 9.5 3.24386 9.5H3.25386C3.51908 9.5 3.77343 9.39464 3.96097 9.20711C4.1485 9.01957 4.25386 8.76522 4.25386 8.5C4.25386 8.23478 4.1485 7.98043 3.96097 7.79289C3.77343 7.60536 3.51908 7.5 3.25386 7.5H3.24386ZM6.24386 7.5C5.97864 7.5 5.72429 7.60536 5.53675 7.79289C5.34922 7.98043 5.24386 8.23478 5.24386 8.5C5.24386 8.76522 5.34922 9.01957 5.53675 9.20711C5.72429 9.39464 5.97864 9.5 6.24386 9.5H9.24386C9.50907 9.5 9.76343 9.39464 9.95096 9.20711C10.1385 9.01957 10.2439 8.76522 10.2439 8.5C10.2439 8.23478 10.1385 7.98043 9.95096 7.79289C9.76343 7.60536 9.50907 7.5 9.24386 7.5H6.24386ZM3.24386 11.5C2.97864 11.5 2.72429 11.6054 2.53675 11.7929C2.34922 11.9804 2.24386 12.2348 2.24386 12.5C2.24386 12.7652 2.34922 13.0196 2.53675 13.2071C2.72429 13.3946 2.97864 13.5 3.24386 13.5H3.25386C3.51908 13.5 3.77343 13.3946 3.96097 13.2071C4.1485 13.0196 4.25386 12.7652 4.25386 12.5C4.25386 12.2348 4.1485 11.9804 3.96097 11.7929C3.77343 11.6054 3.51908 11.5 3.25386 11.5H3.24386ZM6.24386 11.5C5.97864 11.5 5.72429 11.6054 5.53675 11.7929C5.34922 11.9804 5.24386 12.2348 5.24386 12.5C5.24386 12.7652 5.34922 13.0196 5.53675 13.2071C5.72429 13.3946 5.97864 13.5 6.24386 13.5H9.24386C9.50907 13.5 9.76343 13.3946 9.95096 13.2071C10.1385 13.0196 10.2439 12.7652 10.2439 12.5C10.2439 12.2348 10.1385 11.9804 9.95096 11.7929C9.76343 11.6054 9.50907 11.5 9.24386 11.5H6.24386Z" fill="#475569"></path> </svg>
	</div>
	
	<div class="space-y-1">
		<h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">Better User Onboarding</h4>
		<div class="text-gray-500 font-normal text-sm">Activate users quickly with hyper-targeted onboarding flows</div>
	</div>
</a>
					<a href="/use-cases/increase-feature-adoption" class="py-2 w-full flex items-start px-3 rounded-lg transition duration-200 ease-in-out hover:bg-gray-50 hover:no-underline space-x-4" rel="noopener">

	<div class="w-10 h-10 shrink-0 rounded inline-flex items-center justify-center text-gray-600">
		<svg class="w-6 h-6" width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.7439 2.5061C10.4786 2.5061 10.2243 2.40075 10.0368 2.21321C9.84922 2.02567 9.74386 1.77132 9.74386 1.5061C9.74386 1.24089 9.84922 0.986533 10.0368 0.798997C10.2243 0.611461 10.4786 0.506104 10.7439 0.506104H15.7439C16.0091 0.506104 16.2634 0.611461 16.451 0.798997C16.6385 0.986533 16.7439 1.24089 16.7439 1.5061V6.5061C16.7439 6.77132 16.6385 7.02567 16.451 7.21321C16.2634 7.40075 16.0091 7.5061 15.7439 7.5061C15.4786 7.5061 15.2243 7.40075 15.0368 7.21321C14.8492 7.02567 14.7439 6.77132 14.7439 6.5061V3.9201L10.4509 8.2131C10.2633 8.40057 10.009 8.50589 9.74386 8.50589C9.4787 8.50589 9.22439 8.40057 9.03686 8.2131L6.74386 5.9201L2.45086 10.2131C2.26226 10.3953 2.00966 10.4961 1.74746 10.4938C1.48526 10.4915 1.23445 10.3863 1.04904 10.2009C0.863634 10.0155 0.758466 9.7647 0.756187 9.5025C0.753909 9.24031 0.854703 8.98771 1.03686 8.7991L6.03686 3.7991C6.22439 3.61163 6.4787 3.50632 6.74386 3.50632C7.00903 3.50632 7.26333 3.61163 7.45086 3.7991L9.74386 6.0921L13.3299 2.5061H10.7439Z" fill="#475569"></path> </svg>
	</div>
	
	<div class="space-y-1">
		<h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">Increase Feature Adoption</h4>
		<div class="text-gray-500 font-normal text-sm">Nudge users towards new, critical, or undiscovered features</div>
	</div>
</a>
					<a href="/use-cases/reduce-support-tickets" class="py-2 w-full flex items-start px-3 rounded-lg transition duration-200 ease-in-out hover:bg-gray-50 hover:no-underline space-x-4" rel="noopener">

	<div class="w-10 h-10 shrink-0 rounded inline-flex items-center justify-center text-gray-600">
		<svg class="w-6 h-6" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.743858 10.5C0.743858 5.115 5.10886 0.75 10.4939 0.75C15.8789 0.75 20.2439 5.115 20.2439 10.5C20.2439 15.885 15.8789 20.25 10.4939 20.25C5.10886 20.25 0.743858 15.885 0.743858 10.5ZM12.1219 6.583C11.2319 5.806 9.75586 5.806 8.86686 6.583C8.71714 6.71402 8.52151 6.78019 8.32301 6.76697C8.1245 6.75375 7.93938 6.66221 7.80836 6.5125C7.67734 6.36279 7.61116 6.16716 7.62439 5.96865C7.63761 5.77014 7.72914 5.58502 7.87886 5.454C9.33286 4.182 11.6549 4.182 13.1089 5.454C14.6219 6.778 14.6219 8.972 13.1089 10.296C12.8558 10.5166 12.5743 10.7023 12.2719 10.848C11.5959 11.176 11.2439 11.622 11.2439 12V12.75C11.2439 12.9489 11.1648 13.1397 11.0242 13.2803C10.8835 13.421 10.6928 13.5 10.4939 13.5C10.2949 13.5 10.1042 13.421 9.96353 13.2803C9.82288 13.1397 9.74386 12.9489 9.74386 12.75V12C9.74386 10.721 10.8039 9.893 11.6189 9.498C11.8009 9.41 11.9699 9.299 12.1219 9.167C12.9519 8.44 12.9519 7.31 12.1219 6.583V6.583ZM10.4939 16.5C10.6928 16.5 10.8835 16.421 11.0242 16.2803C11.1648 16.1397 11.2439 15.9489 11.2439 15.75C11.2439 15.5511 11.1648 15.3603 11.0242 15.2197C10.8835 15.079 10.6928 15 10.4939 15C10.2949 15 10.1042 15.079 9.96353 15.2197C9.82288 15.3603 9.74386 15.5511 9.74386 15.75C9.74386 15.9489 9.82288 16.1397 9.96353 16.2803C10.1042 16.421 10.2949 16.5 10.4939 16.5Z" fill="#475569"></path> </svg>
	</div>
	
	<div class="space-y-1">
		<h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">Reduce Support Tickets</h4>
		<div class="text-gray-500 font-normal text-sm">Offer self-serve support with in-app guidance, so users find the answers they need</div>
	</div>
</a>
					<a href="/use-cases/get-product-feedback" class="py-2 w-full flex items-start px-3 rounded-lg transition duration-200 ease-in-out hover:bg-gray-50 hover:no-underline space-x-4" rel="noopener">

	<div class="w-10 h-10 shrink-0 rounded inline-flex items-center justify-center text-gray-600">
		<svg class="w-6 h-6" width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.743862 2C0.743862 1.46957 0.954576 0.960859 1.32965 0.585786C1.70472 0.210714 2.21343 0 2.74386 0H9.74386C10.2743 0 10.783 0.210714 11.1581 0.585786C11.5331 0.960859 11.7439 1.46957 11.7439 2V6C11.7439 6.53043 11.5331 7.03914 11.1581 7.41421C10.783 7.78929 10.2743 8 9.74386 8H7.74386L4.74386 11V8H2.74386C2.21343 8 1.70472 7.78929 1.32965 7.41421C0.954576 7.03914 0.743862 6.53043 0.743862 6V2Z" fill="#475569"></path> <path d="M13.7439 4V6C13.7439 7.06087 13.3224 8.07828 12.5723 8.82843C11.8221 9.57857 10.8047 10 9.74386 10H8.57186L6.80586 11.767C7.08586 11.916 7.40486 12 7.74386 12H9.74386L12.7439 15V12H14.7439C15.2743 12 15.783 11.7893 16.1581 11.4142C16.5331 11.0391 16.7439 10.5304 16.7439 10V6C16.7439 5.46957 16.5331 4.96086 16.1581 4.58579C15.783 4.21071 15.2743 4 14.7439 4H13.7439Z" fill="#475569"></path> </svg>
	</div>
	
	<div class="space-y-1">
		<h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">Get Product Feedback</h4>
		<div class="text-gray-500 font-normal text-sm">Gather contextual feedback inside your app and build an effective feedback loop</div>
	</div>
</a>
		
	</div>

	<a href="/use-cases" class="pt-6 text-gray-900 flex items-center mr-1 text-sm font-bold" rel="noopener">
	<span class="mr-1">See all use cases</span>
	<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.64982 1.09279C9.82563 0.917033 10.064 0.818298 10.3126 0.818298C10.5612 0.818298 10.7996 0.917033 10.9755 1.09279L14.7255 4.84284C14.9013 5.01865 15 5.25707 15 5.50566C15 5.75426 14.9013 5.99267 14.7255 6.16848L10.9755 9.91853C10.7986 10.0893 10.5618 10.1838 10.316 10.1817C10.0702 10.1795 9.83506 10.0809 9.66124 9.90711C9.48741 9.73329 9.38882 9.49815 9.38668 9.25234C9.38455 9.00652 9.47904 8.76971 9.64982 8.59289L11.7995 6.44317H0.937513C0.688869 6.44317 0.450409 6.3444 0.274591 6.16858C0.0987733 5.99276 0 5.7543 0 5.50566C0 5.25702 0.0987733 5.01856 0.274591 4.84274C0.450409 4.66692 0.688869 4.56815 0.937513 4.56815H11.7995L9.64982 2.41843C9.47406 2.24262 9.37533 2.00421 9.37533 1.75561C9.37533 1.50702 9.47406 1.2686 9.64982 1.09279Z" fill="#1E293B"></path></svg>
</a>

</div>
      </section>
            <section class="col-span-6">
        <div class="flex flex-col space-y-2">

		
	<div class="flex gap-6 ">

				<a href="/recipes" class=" flex-col  flex-1 hover:no-underline rounded-xl w-full flex  p-6  bg-green-50  " rel="noopener">
	
			{/* <img class=" h-32 mb-6  object-cover rounded-lg" src="/img/containers/assets/recipes.png/80a71c44ddfb0df7f21274492c68bdea.png" alt=""/> */}
			
			<div class="flex flex-col flex-1">
				<div class="mb-1 text-base font-bold text-gray-900">Recipes</div>
				<div class="flex-auto mb-4 text-sm font-medium text-gray-600">Leverage Chameleon with your existing stack with these playbooks</div>
								<div class="flex flex-col justify-end flex-1">
					<div class="flex items-center space-x-2 text-sm font-bold text-gray-900">
						<span class="">View Recipes</span>
						<svg class="w-5" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.64982 1.09279C9.82563 0.917033 10.064 0.818298 10.3126 0.818298C10.5612 0.818298 10.7996 0.917033 10.9755 1.09279L14.7255 4.84284C14.9013 5.01865 15 5.25707 15 5.50566C15 5.75426 14.9013 5.99267 14.7255 6.16848L10.9755 9.91853C10.7986 10.0893 10.5618 10.1838 10.316 10.1817C10.0702 10.1795 9.83506 10.0809 9.66124 9.90711C9.48741 9.73329 9.38882 9.49815 9.38668 9.25234C9.38455 9.00652 9.47904 8.76971 9.64982 8.59289L11.7995 6.44317H0.937513C0.688869 6.44317 0.450409 6.3444 0.274591 6.16858C0.0987733 5.99276 0 5.7543 0 5.50566C0 5.25702 0.0987733 5.01856 0.274591 4.84274C0.450409 4.66692 0.688869 4.56815 0.937513 4.56815H11.7995L9.64982 2.41843C9.47406 2.24262 9.37533 2.00421 9.37533 1.75561C9.37533 1.50702 9.47406 1.2686 9.64982 1.09279Z" fill="#1E293B"></path></svg>
					</div>
				</div>
							</div>
			
		</a>
				<a href="/inspiration" class=" flex-col  flex-1 hover:no-underline rounded-xl w-full flex  p-6  bg-purple-50  " rel="noopener">
{/* 	
			<img class=" h-32 mb-6  object-cover rounded-lg" src="/img/containers/assets/inspiration.png/5e91e19a6bb72fb594f8ed725e0e2a79.png" alt=""/> */}
			
			<div class="flex flex-col flex-1">
				<div class="mb-1 text-base font-bold text-gray-900">Inspiration Gallery</div>
				<div class="flex-auto mb-4 text-sm font-medium text-gray-600">Smart ways to drive product adoption from leading SaaS orgs</div>
								<div class="flex flex-col justify-end flex-1">
					<div class="flex items-center space-x-2 text-sm font-bold text-gray-900">
						<span class="">Find Inspiration</span>
						<svg class="w-5" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.64982 1.09279C9.82563 0.917033 10.064 0.818298 10.3126 0.818298C10.5612 0.818298 10.7996 0.917033 10.9755 1.09279L14.7255 4.84284C14.9013 5.01865 15 5.25707 15 5.50566C15 5.75426 14.9013 5.99267 14.7255 6.16848L10.9755 9.91853C10.7986 10.0893 10.5618 10.1838 10.316 10.1817C10.0702 10.1795 9.83506 10.0809 9.66124 9.90711C9.48741 9.73329 9.38882 9.49815 9.38668 9.25234C9.38455 9.00652 9.47904 8.76971 9.64982 8.59289L11.7995 6.44317H0.937513C0.688869 6.44317 0.450409 6.3444 0.274591 6.16858C0.0987733 5.99276 0 5.7543 0 5.50566C0 5.25702 0.0987733 5.01856 0.274591 4.84274C0.450409 4.66692 0.688869 4.56815 0.937513 4.56815H11.7995L9.64982 2.41843C9.47406 2.24262 9.37533 2.00421 9.37533 1.75561C9.37533 1.50702 9.47406 1.2686 9.64982 1.09279Z" fill="#1E293B"></path></svg>
					</div>
				</div>
							</div>
			
		</a>
		
	
	</div>

</div>




      </section>
      
    </div>
  </div>
)
}
        </div>
        <div>
       <div className='flex'>
       <li className="lg:p-3.2 p-[11px] cursor-pointer text-primaryColor font-medium hover:text-black" onClick={featureDPChange}>Features </li>
       <div className=' flex justify-center items-center ml-[-10px]' onClick={featureDPChange}>  <MdArrowDropDown  /></div>
     
       </div>
       {
        featureDrop && (
          <div class="w-full absolute left-0 bg-white rounded-[10px] border-t-0.5 border-black-300 mt-6" >
    <div class="grid px-4 grid-cols-12 gap-12 w-full mx-auto max-w-7xl overflow-hidden">
            <section class="col-span-7">
        <div class="flex flex-col space-y-4">

			<h3 class="text-gray-500 font-semibold tracking-widest mb-2 text-xs pl-3 uppercase">
			Integrations
		</h3>
		
	<div class="grid grid-cols-2 gap-2 space-y-2">
					<a href="/integrations/hubspot" class="py-2 w-full flex items-center px-3 rounded-lg transition duration-200 ease-in-out hover:bg-gray-50 hover:no-underline space-x-6" rel="noopener">

	<div class="w-8 h-8 shrink-0">
		{/* <img src="/assets/app/HubSpot.png" class="w-full h-full rounded inline-flex object-contain"/> */}
	</div>
	
	<div class="space-y-1">
		<h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">HubSpot</h4>
		<div class="text-gray-500 font-normal text-sm">Better target your users, stay updated with all user behavior, and enable users to quickly book a meeting with your team from inside your product</div>
	</div>
</a>
					<a href="/integrations/salesforce" class="py-2 w-full flex items-center px-3 rounded-lg transition duration-200 ease-in-out hover:bg-gray-50 hover:no-underline space-x-6" rel="noopener">

	<div class="w-8 h-8 shrink-0">
		{/* <img src="/assets/app/salesforce-icon.svg" class="w-full h-full rounded inline-flex object-contain"/> */}
	</div>
	
	<div class="space-y-1">
		<h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">Salesforce</h4>
		<div class="text-gray-500 font-normal text-sm">Use Salesforce contact and account attributes to target product tours</div>
	</div>
</a>
					<a href="/integrations/heap" class="py-2 w-full flex items-center px-3 rounded-lg transition duration-200 ease-in-out hover:bg-gray-50 hover:no-underline space-x-6" rel="noopener">

	<div class="w-8 h-8 shrink-0">
		{/* <img src="/assets/app/Frame.png" class="w-full h-full rounded inline-flex object-contain"/> */}
	</div>
	
	<div class="space-y-1">
		<h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">Heap</h4>
		<div class="text-gray-500 font-normal text-sm">Target your users with relevant in-product experiences, and deeply analyze the results with the rest of your product data</div>
	</div>
</a>
					<a href="/integrations/mixpanel" class="py-2 w-full flex items-center px-3 rounded-lg transition duration-200 ease-in-out hover:bg-gray-50 hover:no-underline space-x-6" rel="noopener">

	<div class="w-8 h-8 shrink-0">
		{/* <img src="/assets/app/Mixpanel-(1).png" class="w-full h-full rounded inline-flex object-contain"/> */}
	</div>
	
	<div class="space-y-1">
		<h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">Mixpanel</h4>
		<div class="text-gray-500 font-normal text-sm">Launch hyper-targeted in-product experiences and better analyze their performance alongside the rest of your data</div>
	</div>
</a>
					<a href="/integrations/segment" class="py-2 w-full flex items-center px-3 rounded-lg transition duration-200 ease-in-out hover:bg-gray-50 hover:no-underline space-x-6" rel="noopener">

	<div class="w-8 h-8 shrink-0">
		{/* <img src="/assets/app/SegmentLogo_Square_Green_RGB-1675695545.png" class="w-full h-full rounded inline-flex object-contain"/> */}
	</div>
	
	<div class="space-y-1">
		<h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">Twilio Segment</h4>
		<div class="text-gray-500 font-normal text-sm">Use Twilio Segment to install Chameleon in your product, and seamlessly send data between all of your tools</div>
	</div>
</a>
					<a href="/integrations/fivetran" class="py-2 w-full flex items-center px-3 rounded-lg transition duration-200 ease-in-out hover:bg-gray-50 hover:no-underline space-x-6" rel="noopener">

	<div class="w-8 h-8 shrink-0">
		{/* <img src="/assets/app/fivetran-logo.png" class="w-full h-full rounded inline-flex object-contain"/> */}
	</div>
	
	<div class="space-y-1">
		<h4 class="text-gray-900 text-base flex items-center leading-5 font-bold mb-0">Fivetran</h4>
		<div class="text-gray-500 font-normal text-sm">Rapidly send Chameleon data to your storage destinations to centralize with the rest of your product data</div>
	</div>
</a>
		
	</div>

	<a href="/integrations" class="pt-6 text-gray-900 flex items-center mr-1 text-sm font-bold" rel="noopener">
	<span class="mr-1">See all integrations</span>
	{/* <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.64982 1.09279C9.82563 0.917033 10.064 0.818298 10.3126 0.818298C10.5612 0.818298 10.7996 0.917033 10.9755 1.09279L14.7255 4.84284C14.9013 5.01865 15 5.25707 15 5.50566C15 5.75426 14.9013 5.99267 14.7255 6.16848L10.9755 9.91853C10.7986 10.0893 10.5618 10.1838 10.316 10.1817C10.0702 10.1795 9.83506 10.0809 9.66124 9.90711C9.48741 9.73329 9.38882 9.49815 9.38668 9.25234C9.38455 9.00652 9.47904 8.76971 9.64982 8.59289L11.7995 6.44317H0.937513C0.688869 6.44317 0.450409 6.3444 0.274591 6.16858C0.0987733 5.99276 0 5.7543 0 5.50566C0 5.25702 0.0987733 5.01856 0.274591 4.84274C0.450409 4.66692 0.688869 4.56815 0.937513 4.56815H11.7995L9.64982 2.41843C9.47406 2.24262 9.37533 2.00421 9.37533 1.75561C9.37533 1.50702 9.47406 1.2686 9.64982 1.09279Z" fill="#1E293B"></path></svg>
 */}
</a>
</div>
      </section>
            <section class="col-span-5">
        <div class="flex flex-col space-y-2">

		<h3 class="text-gray-500 font-semibold tracking-widest mb-4 text-xs uppercase">
		Put your integrations to work with Chameleon Recipes
	</h3>
	
	<div class="flex flex-col space-y-2">
		<div class="flex flex-col space-y-4">
							<a href="/recipes/on-demand-onboarding" class="flex flex-row items-center w-full p-4 space-x-4 rounded-lg hover:no-underline" style={{backgroundColor:'#6172F1'}} rel="noopener">
	<div class="flex space-x-2">
				{/* <img src="/assets/app/logo-intercom-1681221957.png" alt="Intercom" class="p-3 transition duration-200 ease-in-out bg-white rounded-lg w-14 h-14 shrink-0"/> */}
		
		{/* <svg class="p-3 transition duration-200 ease-in-out bg-white rounded-lg w-14 h-14 shrink-0" viewBox="0 0 193 293" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M125.908 173.72C229.688 124.658 181.291 0.736328 181.291 0.736328C-28.4873 0.736328 1.99812 182.251 1.99812 182.251L116.085 182.279C135.097 192.179 156.375 225.893 133.119 255.928C120.936 271.658 97.5217 272.71 82.5961 259.625C76.5326 254.326 64.1724 235.774 78.2118 216.608C89.0794 201.79 109.042 207.946 115.199 214.242C117.746 216.84 118.24 220.817 115.861 223.555C115.306 224.213 114.625 224.753 113.858 225.145C113.092 225.537 112.254 225.772 111.395 225.837C110.536 225.902 109.673 225.795 108.856 225.524C108.039 225.252 107.284 224.82 106.636 224.254C104.182 222.084 95.8892 218.526 89.4432 225.502C86.3555 228.845 81.5514 239.872 91.1504 249.614C99.9938 258.61 115.246 257.064 123.231 247.276C138.203 228.929 126.244 209.669 120.181 204.342C103.818 190.028 79.8816 192.654 64.8627 208.384C51.6163 222.223 53.7618 242.349 55.1704 248.31C62.6705 279.9 94.9564 299.57 125.414 289.335C179.463 271.155 199.715 198.829 179.612 145.706C173.203 153.954 165.088 160.725 155.82 165.56C146.553 170.394 136.35 173.177 125.908 173.72V173.72ZM57.1667 135.434C40.562 111.964 45.6647 79.1537 68.5755 62.1384C91.4769 45.1325 123.502 50.3572 140.116 73.8265C156.72 97.2959 151.618 130.097 128.707 147.112C105.805 164.128 73.7714 158.894 57.1667 135.434V135.434ZM79.7416 126.092C80.724 127.456 81.9665 128.612 83.3976 129.494C84.8288 130.376 86.4205 130.968 88.0813 131.235C89.7421 131.501 91.4392 131.437 93.0753 131.047C94.7114 130.657 96.2542 129.948 97.615 128.961C103.352 124.789 104.621 116.761 100.469 111.005C99.4863 109.64 98.2424 108.482 96.8093 107.599C95.3762 106.716 93.7823 106.124 92.1194 105.859C90.4564 105.593 88.7572 105.658 87.1196 106.051C85.482 106.443 83.9383 107.155 82.5775 108.146C79.827 110.157 77.9852 113.173 77.4539 116.535C76.9226 119.898 77.745 123.333 79.7416 126.092V126.092Z" fill="#23C55E"></path></svg> */}
	</div>
	<div class="flex-1 text-lg font-semibold leading-tight tracking-tight text-white">Enable on-demand onboarding for seamless product adoption</div>
</a>
							<a href="/recipes/rage-clicking" class="flex flex-row items-center w-full p-4 space-x-4 rounded-lg hover:no-underline" style={{backgroundColor:'#F4913D'}} rel="noopener">
	<div class="flex space-x-2">
				{/* <img src="/assets/app/fs-logo---color-copy-3.png" alt="FullStory" class="p-3 transition duration-200 ease-in-out bg-white rounded-lg w-14 h-14 shrink-0"/> */}
		
		{/* <svg class="p-3 transition duration-200 ease-in-out bg-white rounded-lg w-14 h-14 shrink-0" viewBox="0 0 193 293" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M125.908 173.72C229.688 124.658 181.291 0.736328 181.291 0.736328C-28.4873 0.736328 1.99812 182.251 1.99812 182.251L116.085 182.279C135.097 192.179 156.375 225.893 133.119 255.928C120.936 271.658 97.5217 272.71 82.5961 259.625C76.5326 254.326 64.1724 235.774 78.2118 216.608C89.0794 201.79 109.042 207.946 115.199 214.242C117.746 216.84 118.24 220.817 115.861 223.555C115.306 224.213 114.625 224.753 113.858 225.145C113.092 225.537 112.254 225.772 111.395 225.837C110.536 225.902 109.673 225.795 108.856 225.524C108.039 225.252 107.284 224.82 106.636 224.254C104.182 222.084 95.8892 218.526 89.4432 225.502C86.3555 228.845 81.5514 239.872 91.1504 249.614C99.9938 258.61 115.246 257.064 123.231 247.276C138.203 228.929 126.244 209.669 120.181 204.342C103.818 190.028 79.8816 192.654 64.8627 208.384C51.6163 222.223 53.7618 242.349 55.1704 248.31C62.6705 279.9 94.9564 299.57 125.414 289.335C179.463 271.155 199.715 198.829 179.612 145.706C173.203 153.954 165.088 160.725 155.82 165.56C146.553 170.394 136.35 173.177 125.908 173.72V173.72ZM57.1667 135.434C40.562 111.964 45.6647 79.1537 68.5755 62.1384C91.4769 45.1325 123.502 50.3572 140.116 73.8265C156.72 97.2959 151.618 130.097 128.707 147.112C105.805 164.128 73.7714 158.894 57.1667 135.434V135.434ZM79.7416 126.092C80.724 127.456 81.9665 128.612 83.3976 129.494C84.8288 130.376 86.4205 130.968 88.0813 131.235C89.7421 131.501 91.4392 131.437 93.0753 131.047C94.7114 130.657 96.2542 129.948 97.615 128.961C103.352 124.789 104.621 116.761 100.469 111.005C99.4863 109.64 98.2424 108.482 96.8093 107.599C95.3762 106.716 93.7823 106.124 92.1194 105.859C90.4564 105.593 88.7572 105.658 87.1196 106.051C85.482 106.443 83.9383 107.155 82.5775 108.146C79.827 110.157 77.9852 113.173 77.4539 116.535C76.9226 119.898 77.745 123.333 79.7416 126.092V126.092Z" fill="#23C55E"></path></svg> */}
	</div>
	<div class="flex-1 text-lg font-semibold leading-tight tracking-tight text-white">How to engage users who are rage-clicking</div>
</a>
							<a href="/recipes/adopt-product-updates" class="flex flex-row items-center w-full p-4 space-x-4 rounded-lg hover:no-underline" style={{backgroundColor:"#A75EFF"}} rel="noopener">
	<div class="flex space-x-2">
				{/* <img src="/assets/app/customer.io-logo-(1).png" alt="Customer.io" class="p-3 transition duration-200 ease-in-out bg-white rounded-lg w-14 h-14 shrink-0"/> */}
		
		{/* <svg class="p-3 transition duration-200 ease-in-out bg-white rounded-lg w-14 h-14 shrink-0" viewBox="0 0 193 293" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M125.908 173.72C229.688 124.658 181.291 0.736328 181.291 0.736328C-28.4873 0.736328 1.99812 182.251 1.99812 182.251L116.085 182.279C135.097 192.179 156.375 225.893 133.119 255.928C120.936 271.658 97.5217 272.71 82.5961 259.625C76.5326 254.326 64.1724 235.774 78.2118 216.608C89.0794 201.79 109.042 207.946 115.199 214.242C117.746 216.84 118.24 220.817 115.861 223.555C115.306 224.213 114.625 224.753 113.858 225.145C113.092 225.537 112.254 225.772 111.395 225.837C110.536 225.902 109.673 225.795 108.856 225.524C108.039 225.252 107.284 224.82 106.636 224.254C104.182 222.084 95.8892 218.526 89.4432 225.502C86.3555 228.845 81.5514 239.872 91.1504 249.614C99.9938 258.61 115.246 257.064 123.231 247.276C138.203 228.929 126.244 209.669 120.181 204.342C103.818 190.028 79.8816 192.654 64.8627 208.384C51.6163 222.223 53.7618 242.349 55.1704 248.31C62.6705 279.9 94.9564 299.57 125.414 289.335C179.463 271.155 199.715 198.829 179.612 145.706C173.203 153.954 165.088 160.725 155.82 165.56C146.553 170.394 136.35 173.177 125.908 173.72V173.72ZM57.1667 135.434C40.562 111.964 45.6647 79.1537 68.5755 62.1384C91.4769 45.1325 123.502 50.3572 140.116 73.8265C156.72 97.2959 151.618 130.097 128.707 147.112C105.805 164.128 73.7714 158.894 57.1667 135.434V135.434ZM79.7416 126.092C80.724 127.456 81.9665 128.612 83.3976 129.494C84.8288 130.376 86.4205 130.968 88.0813 131.235C89.7421 131.501 91.4392 131.437 93.0753 131.047C94.7114 130.657 96.2542 129.948 97.615 128.961C103.352 124.789 104.621 116.761 100.469 111.005C99.4863 109.64 98.2424 108.482 96.8093 107.599C95.3762 106.716 93.7823 106.124 92.1194 105.859C90.4564 105.593 88.7572 105.658 87.1196 106.051C85.482 106.443 83.9383 107.155 82.5775 108.146C79.827 110.157 77.9852 113.173 77.4539 116.535C76.9226 119.898 77.745 123.333 79.7416 126.092V126.092Z" fill="#23C55E"></path></svg> */}
	</div>
	<div class="flex-1 text-lg font-semibold leading-tight tracking-tight text-white">Get users to adopt any product updates with no friction</div>
</a>
			
		</div>
	</div>

	<a href="/recipes" class="pt-6 text-gray-900 flex items-center mr-1 text-sm font-bold" rel="noopener">
	<span class="mr-1">Explore our recipes</span>
	{/* <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.64982 1.09279C9.82563 0.917033 10.064 0.818298 10.3126 0.818298C10.5612 0.818298 10.7996 0.917033 10.9755 1.09279L14.7255 4.84284C14.9013 5.01865 15 5.25707 15 5.50566C15 5.75426 14.9013 5.99267 14.7255 6.16848L10.9755 9.91853C10.7986 10.0893 10.5618 10.1838 10.316 10.1817C10.0702 10.1795 9.83506 10.0809 9.66124 9.90711C9.48741 9.73329 9.38882 9.49815 9.38668 9.25234C9.38455 9.00652 9.47904 8.76971 9.64982 8.59289L11.7995 6.44317H0.937513C0.688869 6.44317 0.450409 6.3444 0.274591 6.16858C0.0987733 5.99276 0 5.7543 0 5.50566C0 5.25702 0.0987733 5.01856 0.274591 4.84274C0.450409 4.66692 0.688869 4.56815 0.937513 4.56815H11.7995L9.64982 2.41843C9.47406 2.24262 9.37533 2.00421 9.37533 1.75561C9.37533 1.50702 9.47406 1.2686 9.64982 1.09279Z" fill="#1E293B"></path></svg> */}
</a>

</div>
      </section>
      
    </div>
  </div>
        )
       }

       </div>
    <div className=''>
       <div className='flex'>
       <li className="lg:p-3.2 p-[11px] cursor-pointer text-primaryColor font-medium hover:text-black" onClick={servicesDPChange}>Services</li>
       <div className=' flex justify-center items-center ml-[-10px]' onClick={servicesDPChange}>  <MdArrowDropDown  /></div>
     
       </div>

   {
    servicesDrop && (
      <div class="w-full absolute left-0 bg-white rounded-[10px] border-t-0.5 border-black-300 mt-6" >
      <div class="grid px-4 grid-cols-12 gap-12 w-full mx-auto max-w-7xl overflow-hidden">
              <section class="col-span-8">
          <div class="flex flex-col space-y-2">
  
      <h3 class="text-gray-500 font-semibold tracking-widest mb-4 text-xs uppercase">
      Customers
    </h3>
    
    <div class="flex flex-col space-y-2">
      <div class="grid grid-cols-3 gap-6">
                <a href="/customers/mixpanel" class="flex flex-col overflow-hidden transition duration-300 ease-in-out bg-white border border-gray-100 rounded-lg hover:shadow-lg hover:no-underline" rel="noopener">
    <div class="relative flex items-center justify-center h-32 py-6" style={{backgroundColor:"#7061F6"}}>
            {/* <img loading="lazy" src="https://www.chameleon.io/assets/logos/mixpanel.svg" alt="" class="z-20 object-contain w-48 h-8 px-8"/> */}
      
      {/* <img class="absolute z-10 object-cover w-full h-full" src="https://www.chameleon.io/img/containers/assets/customers/mixpanel-office-photo-2@2x.png/984792a95e7198d69495b0b411d925d9.png" alt="How Mixpanel achieved a 4% increase in customer retention using Tours" style="opacity: 15%;"/> */}
    </div>
    <div class="flex flex-col flex-1 p-4 space-y-6">
      <div class="text-lg font-semibold leading-tight text-gray-900">How Mixpanel increases customer retention and satisfaction with Chameleon</div>
    </div>
  </a>
                <a href="/customers/fivetran" class="flex flex-col overflow-hidden transition duration-300 ease-in-out bg-white border border-gray-100 rounded-lg hover:shadow-lg hover:no-underline" rel="noopener">
    <div class="relative flex items-center justify-center h-32 py-6" style={{backgroundColor:"#007FFF"}} >
            {/* <img loading="lazy" src="https://www.chameleon.io/assets/logos/fivetran-logo-white-rgb-2021-08-03-1679325393.png" alt="" class="z-20 object-contain w-48 h-8 px-8">
       */}
      {/* <img class="absolute z-10 object-cover w-full h-full" src="https://www.chameleon.io/img/containers/assets/customers/Copy-of-DSC01587.jpg/ce1fbdf08eaad56173b99eb00131958a.jpg" alt="From announcing UX changes to collecting user feedback, in-app messages are enabling Fivetran to dig deeper into user behavior" style="opacity: 15%;"> */}
    </div>
    <div class="flex flex-col flex-1 p-4 space-y-6">
      <div class="text-lg font-semibold leading-tight text-gray-900">How Fivetran used in-app messages to drive successful product updates</div>
    </div>
  </a>
                <a href="/customers/chili-piper" class="flex flex-col overflow-hidden transition duration-300 ease-in-out bg-white border border-gray-100 rounded-lg hover:shadow-lg hover:no-underline" rel="noopener">
    <div class="relative flex items-center justify-center h-32 py-6" style={{backgroundColor:"#FF5722"}} >
            {/* <img loading="lazy" src="https://www.chameleon.io/assets/logos/CP-Horizontal-reserve-logo.svg" alt="" class="z-20 object-contain w-48 h-8 px-8"> */}
      
      {/* <img class="absolute z-10 object-cover w-full h-full" src="https://www.chameleon.io/img/containers/assets/customers/Chili-Piper-header.png/dccaabcb09d6cfb000a9446498e4b078.png" alt="" style="opacity: 15%;"> */}
    </div>
    <div class="flex flex-col flex-1 p-4 space-y-6">
      <div class="text-lg font-semibold leading-tight text-gray-900">How Chili Piper created a product-led sales motion that generated over $150K+ ARR from upsells in a few weeks</div>
    </div>
  </a>
        
      </div>
    </div>
  
    <a href="/customers" class="pt-6 text-gray-900 flex items-center mr-1 text-sm font-bold" rel="noopener">
    <span class="mr-1">Explore case studies</span>
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.64982 1.09279C9.82563 0.917033 10.064 0.818298 10.3126 0.818298C10.5612 0.818298 10.7996 0.917033 10.9755 1.09279L14.7255 4.84284C14.9013 5.01865 15 5.25707 15 5.50566C15 5.75426 14.9013 5.99267 14.7255 6.16848L10.9755 9.91853C10.7986 10.0893 10.5618 10.1838 10.316 10.1817C10.0702 10.1795 9.83506 10.0809 9.66124 9.90711C9.48741 9.73329 9.38882 9.49815 9.38668 9.25234C9.38455 9.00652 9.47904 8.76971 9.64982 8.59289L11.7995 6.44317H0.937513C0.688869 6.44317 0.450409 6.3444 0.274591 6.16858C0.0987733 5.99276 0 5.7543 0 5.50566C0 5.25702 0.0987733 5.01856 0.274591 4.84274C0.450409 4.66692 0.688869 4.56815 0.937513 4.56815H11.7995L9.64982 2.41843C9.47406 2.24262 9.37533 2.00421 9.37533 1.75561C9.37533 1.50702 9.47406 1.2686 9.64982 1.09279Z" fill="#1E293B"></path></svg>
  </a>
  
  </div>
        </section>
              <section class="col-span-4">
          <div class="flex flex-col space-y-2">
  
      <h3 class="text-gray-500 font-semibold tracking-widest mb-4 text-xs uppercase">
      G2 Digital Adoption Leader
    </h3>
    
              <div class="space-y-6 rounded-2xl border border-gray-100 p-6" style={{backgroundColor:"#FFF2F0"}}>
    <div class="flex space-x-3 items-center justify-between">
  
      <div class="flex space-x-0.5 items-center">
                <svg class="h-4 w-4" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.99833 3.62166C9.61705 1.71743 9.92641 0.765317 10.5 0.765317C11.0736 0.765317 11.3829 1.71743 12.0017 3.62166L12.9519 6.54626C13.1229 7.07258 13.2084 7.33574 13.416 7.48651C13.6235 7.63729 13.9002 7.63729 14.4536 7.63729H17.5287C19.5309 7.63729 20.532 7.63729 20.7093 8.1828C20.8865 8.72831 20.0766 9.31675 18.4568 10.4936L15.969 12.3011C15.5213 12.6264 15.2974 12.7891 15.2181 13.033C15.1389 13.277 15.2244 13.5401 15.3954 14.0665L16.3456 16.9911C16.9644 18.8953 17.2737 19.8474 16.8097 20.1845C16.3456 20.5217 15.5357 19.9332 13.9159 18.7564L11.4281 16.9489C10.9804 16.6236 10.7565 16.4609 10.5 16.4609C10.2435 16.4609 10.0196 16.6236 9.57192 16.9489L7.0841 18.7564C5.46427 19.9332 4.65435 20.5217 4.19031 20.1845C3.72627 19.8474 4.03563 18.8953 4.65435 16.9911L5.60461 14.0665C5.77562 13.5401 5.86113 13.277 5.78186 13.033C5.70259 12.7891 5.47874 12.6264 5.03103 12.3011L2.54321 10.4936C0.923377 9.31675 0.113461 8.72831 0.290709 8.1828C0.467957 7.63729 1.46907 7.63729 3.47129 7.63729H6.5464C7.0998 7.63729 7.3765 7.63729 7.58403 7.48651C7.79156 7.33574 7.87706 7.07258 8.04807 6.54626L8.99833 3.62166Z" fill="#ff492c"></path>
          </svg>
                <svg class="h-4 w-4" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.99833 3.62166C9.61705 1.71743 9.92641 0.765317 10.5 0.765317C11.0736 0.765317 11.3829 1.71743 12.0017 3.62166L12.9519 6.54626C13.1229 7.07258 13.2084 7.33574 13.416 7.48651C13.6235 7.63729 13.9002 7.63729 14.4536 7.63729H17.5287C19.5309 7.63729 20.532 7.63729 20.7093 8.1828C20.8865 8.72831 20.0766 9.31675 18.4568 10.4936L15.969 12.3011C15.5213 12.6264 15.2974 12.7891 15.2181 13.033C15.1389 13.277 15.2244 13.5401 15.3954 14.0665L16.3456 16.9911C16.9644 18.8953 17.2737 19.8474 16.8097 20.1845C16.3456 20.5217 15.5357 19.9332 13.9159 18.7564L11.4281 16.9489C10.9804 16.6236 10.7565 16.4609 10.5 16.4609C10.2435 16.4609 10.0196 16.6236 9.57192 16.9489L7.0841 18.7564C5.46427 19.9332 4.65435 20.5217 4.19031 20.1845C3.72627 19.8474 4.03563 18.8953 4.65435 16.9911L5.60461 14.0665C5.77562 13.5401 5.86113 13.277 5.78186 13.033C5.70259 12.7891 5.47874 12.6264 5.03103 12.3011L2.54321 10.4936C0.923377 9.31675 0.113461 8.72831 0.290709 8.1828C0.467957 7.63729 1.46907 7.63729 3.47129 7.63729H6.5464C7.0998 7.63729 7.3765 7.63729 7.58403 7.48651C7.79156 7.33574 7.87706 7.07258 8.04807 6.54626L8.99833 3.62166Z" fill="#ff492c"></path>
          </svg>
                <svg class="h-4 w-4" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.99833 3.62166C9.61705 1.71743 9.92641 0.765317 10.5 0.765317C11.0736 0.765317 11.3829 1.71743 12.0017 3.62166L12.9519 6.54626C13.1229 7.07258 13.2084 7.33574 13.416 7.48651C13.6235 7.63729 13.9002 7.63729 14.4536 7.63729H17.5287C19.5309 7.63729 20.532 7.63729 20.7093 8.1828C20.8865 8.72831 20.0766 9.31675 18.4568 10.4936L15.969 12.3011C15.5213 12.6264 15.2974 12.7891 15.2181 13.033C15.1389 13.277 15.2244 13.5401 15.3954 14.0665L16.3456 16.9911C16.9644 18.8953 17.2737 19.8474 16.8097 20.1845C16.3456 20.5217 15.5357 19.9332 13.9159 18.7564L11.4281 16.9489C10.9804 16.6236 10.7565 16.4609 10.5 16.4609C10.2435 16.4609 10.0196 16.6236 9.57192 16.9489L7.0841 18.7564C5.46427 19.9332 4.65435 20.5217 4.19031 20.1845C3.72627 19.8474 4.03563 18.8953 4.65435 16.9911L5.60461 14.0665C5.77562 13.5401 5.86113 13.277 5.78186 13.033C5.70259 12.7891 5.47874 12.6264 5.03103 12.3011L2.54321 10.4936C0.923377 9.31675 0.113461 8.72831 0.290709 8.1828C0.467957 7.63729 1.46907 7.63729 3.47129 7.63729H6.5464C7.0998 7.63729 7.3765 7.63729 7.58403 7.48651C7.79156 7.33574 7.87706 7.07258 8.04807 6.54626L8.99833 3.62166Z" fill="#ff492c"></path>
          </svg>
                <svg class="h-4 w-4" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.99833 3.62166C9.61705 1.71743 9.92641 0.765317 10.5 0.765317C11.0736 0.765317 11.3829 1.71743 12.0017 3.62166L12.9519 6.54626C13.1229 7.07258 13.2084 7.33574 13.416 7.48651C13.6235 7.63729 13.9002 7.63729 14.4536 7.63729H17.5287C19.5309 7.63729 20.532 7.63729 20.7093 8.1828C20.8865 8.72831 20.0766 9.31675 18.4568 10.4936L15.969 12.3011C15.5213 12.6264 15.2974 12.7891 15.2181 13.033C15.1389 13.277 15.2244 13.5401 15.3954 14.0665L16.3456 16.9911C16.9644 18.8953 17.2737 19.8474 16.8097 20.1845C16.3456 20.5217 15.5357 19.9332 13.9159 18.7564L11.4281 16.9489C10.9804 16.6236 10.7565 16.4609 10.5 16.4609C10.2435 16.4609 10.0196 16.6236 9.57192 16.9489L7.0841 18.7564C5.46427 19.9332 4.65435 20.5217 4.19031 20.1845C3.72627 19.8474 4.03563 18.8953 4.65435 16.9911L5.60461 14.0665C5.77562 13.5401 5.86113 13.277 5.78186 13.033C5.70259 12.7891 5.47874 12.6264 5.03103 12.3011L2.54321 10.4936C0.923377 9.31675 0.113461 8.72831 0.290709 8.1828C0.467957 7.63729 1.46907 7.63729 3.47129 7.63729H6.5464C7.0998 7.63729 7.3765 7.63729 7.58403 7.48651C7.79156 7.33574 7.87706 7.07258 8.04807 6.54626L8.99833 3.62166Z" fill="#ff492c"></path>
          </svg>
                <svg class="h-4 w-4" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.99833 3.62166C9.61705 1.71743 9.92641 0.765317 10.5 0.765317C11.0736 0.765317 11.3829 1.71743 12.0017 3.62166L12.9519 6.54626C13.1229 7.07258 13.2084 7.33574 13.416 7.48651C13.6235 7.63729 13.9002 7.63729 14.4536 7.63729H17.5287C19.5309 7.63729 20.532 7.63729 20.7093 8.1828C20.8865 8.72831 20.0766 9.31675 18.4568 10.4936L15.969 12.3011C15.5213 12.6264 15.2974 12.7891 15.2181 13.033C15.1389 13.277 15.2244 13.5401 15.3954 14.0665L16.3456 16.9911C16.9644 18.8953 17.2737 19.8474 16.8097 20.1845C16.3456 20.5217 15.5357 19.9332 13.9159 18.7564L11.4281 16.9489C10.9804 16.6236 10.7565 16.4609 10.5 16.4609C10.2435 16.4609 10.0196 16.6236 9.57192 16.9489L7.0841 18.7564C5.46427 19.9332 4.65435 20.5217 4.19031 20.1845C3.72627 19.8474 4.03563 18.8953 4.65435 16.9911L5.60461 14.0665C5.77562 13.5401 5.86113 13.277 5.78186 13.033C5.70259 12.7891 5.47874 12.6264 5.03103 12.3011L2.54321 10.4936C0.923377 9.31675 0.113461 8.72831 0.290709 8.1828C0.467957 7.63729 1.46907 7.63729 3.47129 7.63729H6.5464C7.0998 7.63729 7.3765 7.63729 7.58403 7.48651C7.79156 7.33574 7.87706 7.07258 8.04807 6.54626L8.99833 3.62166Z" fill="#ff492c"></path>
          </svg>
        
      </div>
  
      <div class="w-8 h-8"><svg class="w-full" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_241_1563)">
            <path d="M15.9998 32C24.8364 32 31.9998 24.8366 31.9998 16C31.9998 7.16344 24.8364 0 15.9998 0C7.1632 0 -0.000244141 7.16344 -0.000244141 16C-0.000244141 24.8366 7.1632 32 15.9998 32Z" fill="#FF492C"></path>
            <path d="M22.9247 12.2556H20.1919C20.2655 11.8268 20.5311 11.5868 21.0687 11.3148L21.5711 11.0588C22.4703 10.598 22.9503 10.0764 22.9503 9.22524C22.9503 8.69084 22.7423 8.26844 22.3295 7.96444C21.9167 7.66044 21.4303 7.51004 20.8607 7.51004C20.4201 7.50486 19.9875 7.6283 19.6159 7.86524C19.2415 8.09564 18.9631 8.39324 18.7903 8.76444L19.5807 9.55804C19.8879 8.93724 20.3327 8.63324 20.9183 8.63324C21.4143 8.63324 21.7183 8.88925 21.7183 9.24445C21.7183 9.54205 21.5711 9.78845 21.0015 10.0764L20.6783 10.2332C19.9775 10.5884 19.4911 10.9948 19.2095 11.4556C18.9279 11.9164 18.7903 12.4956 18.7903 13.1964V13.3884H22.9247V12.2556ZM22.5599 14.694H18.0351L15.7727 18.6108H20.2975L22.5599 22.5308L24.8223 18.6108L22.5599 14.694Z" fill="white"></path>
            <path d="M16.1617 21.2247C13.2817 21.2247 10.9361 18.8791 10.9361 15.9991C10.9361 13.1191 13.2817 10.7735 16.1617 10.7735L17.9505 7.03269C17.3615 6.91556 16.7623 6.85661 16.1617 6.85669C11.1121 6.85669 7.01929 10.9495 7.01929 15.9991C7.01929 21.0487 11.1121 25.1415 16.1617 25.1415C18.0968 25.1452 19.9825 24.5308 21.5441 23.3879L19.5665 19.9575C18.6204 20.7748 17.4119 21.2246 16.1617 21.2247Z" fill="white"></path>
        </g>
        <defs>
            <clipPath id="clip0_241_1563">
                <rect width="32" height="32" fill="white"></rect>
            </clipPath>
        </defs>
    </svg>
  </div>
    </div>
    
    <div class="font-semibold text-gray-900 text-lg tracking-tight"><p>An easy-to-use product that has opened new doors for our team</p></div>
    <div class="flex items-center space-x-4">
            {/* <img class="w-10 h-10 border-4 border-white rounded-full" src="https://www.chameleon.io/img/containers/assets/people/G2-Gabrielle-S-Chameleon-Review.png/279661d5b231d8e0721d17c64d65d149.png" alt="<p>&quot;An easy-to-use product that has opened new doors for our team&quot;</p>"> */}
          <div>
        <div class="font-semibold text-gray-900 leading-tight text-base">Gabrielle S</div>
        <div class="text-gray-600 text-sm tracking-tight">Director of Product</div>		</div>
    </div>
  </div>
        
  
    <a href="/go/customer-love" class="pt-6 text-gray-900 flex items-center mr-1 text-sm font-bold" rel="noopener">
    <span class="mr-1">G2 Love</span>
    {/* <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.64982 1.09279C9.82563 0.917033 10.064 0.818298 10.3126 0.818298C10.5612 0.818298 10.7996 0.917033 10.9755 1.09279L14.7255 4.84284C14.9013 5.01865 15 5.25707 15 5.50566C15 5.75426 14.9013 5.99267 14.7255 6.16848L10.9755 9.91853C10.7986 10.0893 10.5618 10.1838 10.316 10.1817C10.0702 10.1795 9.83506 10.0809 9.66124 9.90711C9.48741 9.73329 9.38882 9.49815 9.38668 9.25234C9.38455 9.00652 9.47904 8.76971 9.64982 8.59289L11.7995 6.44317H0.937513C0.688869 6.44317 0.450409 6.3444 0.274591 6.16858C0.0987733 5.99276 0 5.7543 0 5.50566C0 5.25702 0.0987733 5.01856 0.274591 4.84274C0.450409 4.66692 0.688869 4.56815 0.937513 4.56815H11.7995L9.64982 2.41843C9.47406 2.24262 9.37533 2.00421 9.37533 1.75561C9.37533 1.50702 9.47406 1.2686 9.64982 1.09279Z" fill="#1E293B"></path></svg> */}
  </a>
  
  </div>
        </section>
        
      </div>
    </div>
    )
   }
       </div>
       <div className='flex '>
       <li className="lg:p-3.2 p-[11px] cursor-pointer text-primaryColor font-medium hover:text-black"><Link href="/contact">Contact</Link></li>
       <div className=' flex justify-center items-center ml-[-10px]'>  <MdArrowDropDown  /></div>
     
       </div>
      
       </ul>
       
  </div>
       
        
        

       
     
      <ul className="hidden lg:flex  pt-4">
      <div className='flex '>
       <li className="lg:p-3.2 p-[11px] cursor-pointer text-primaryColor font-medium hover:text-black"><Link href="/contact">Sign in</Link></li>
       
     
       </div>

      <li className="lg:p-3.2 p-[11px] cursor-pointer "><a href="" className="border-red-500 border-2
        rounded-[4px] text-black px-8 py-2.5 ">Book Now </a></li>
         <li className="lg:p-3.2 p-[11px] cursor-pointer "><a href="" className="bg-red-500 
        rounded-[4px] text-white px-8 py-2.5 ">Get Started </a></li>
      </ul>
       <div className=' lg:hidden text-[32px] items-center flex pt-4 text-primaryColor'onClick={menuChange}>
       {
        menu ?<IoMenu />: <ImCross className='text-[24px]'/>
       }
{
        !menu ? (
          <div className='absolute left-0 top-20 '>
       <ul className=" uppercase p-4 bg-gray-300 h-full">
          <li className="p-4 border-b border-gray-600 text-[24px] text-white cursor-pointer"><Link href="/">Home</Link></li>
          <li className="p-4 border-b border-gray-600 text-[24px] text-white cursor-pointer"><Link href="/about">About</Link></li>
          <li className="p-4 border-b border-gray-600 text-[24px] text-white cursor-pointer"><Link href="/features">Features</Link></li>
          <li className="p-4 border-b border-gray-600 text-[24px] text-white cursor-pointer"><Link href="/products">Services</Link></li>
          <li className="p-4 text-white cursor-pointer  border-b border-gray-600 text-[24px]"><Link href="/contact">Contact</Link></li>
          <li className=" p-4 cursor-pointer  font-medium text-[24px] text-white"><Link href="/signin">Sign in</Link></li>
        </ul>
       </div>
        ):('')
       }
      
       </div>
       
       

  </div>
  </div>







   

</>








  )
};

export default Navbar;
