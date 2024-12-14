import React from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";


function Header() {
  return (
    <>
      <header className="h-[52px] md:h-[72px] flex justify-between md:gap-[64px] items-center px-[24px] md:px-[64px] bg-[#F7F7F7] border-b-[1px] border-[black]">

        <div className="max-w-[300px] md:max-w-[130.6px]  flex gap-[8.02px] items-center">

        <div className="w-[19px] sm:w-[21px] lg:w-[32px] h-auto">
        <Image
            src="/images/Frame 1.svg"
            alt="Frame 1"
            width={32}
            height={9}            
          />   </div>

     

        <div className="font-latin text-[18.07px] lg:text-[25.07px]  font-[700] leading-[20.34px] sm:leading-[30.34px] lg:w-[90px]"> Ddsgnr</div>
        </div>


        <div className="w-[18px] sm:w-[24px] md:hidden text-[14px] sm:text-[18px]  ">
          <FaBars />
        </div>

        <ul id="roboto-thin" className="hidden md:flex justify-between items-center md:gap-[16px] bg-white max-w-[910px] w-full  pl-[10px]">
          <li className="leading-[15px] md:leading-[24px] sm:text-[10px] lg:text-[13px] xl:text-[16px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">Home</li>
          <li className="leading-[15px] md:leading-[24px] sm:text-[10px] lg:text-[13px] xl:text-[16px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">Courses</li>
          <li className="leading-[15px] md:leading-[24px] sm:text-[10px] lg:text-[13px] xl:text-[16px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">Services</li>
          <li className="leading-[15px] md:leading-[24px] sm:text-[10px] lg:text-[13px] xl:text-[16px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">Achievement</li>
          <li className="leading-[15px] md:leading-[24px] sm:text-[10px] lg:text-[13px] xl:text-[16px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">About Us</li>
          <li className="leading-[15px] md:leading-[24px] sm:text-[10px] lg:text-[13px] xl:text-[16px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">Testimonial</li>

          <div className="btnCon inline-flex gap-5 items-center ">
            <button className="h-[26px] lg:h-[35px] cursor-pointer rounded-[5px] lg:py-[4px] px-[10px] lg:px-[20px] text-[13px] lg:text-[16px] text-center lg:leading-[24px] border-[1px] border-[#000000]">Login</button>
            <button className="h-[26px] lg:h-[35px] cursor-pointer rounded-[5px] lg:py-[4px] px-[10px] lg:px-[20px] text-[13px] lg:text-[16px] text-center  bg-black text-white">Sign Up</button>
          </div>
        </ul>
      </header>
    </>
  );
}

export default Header;
