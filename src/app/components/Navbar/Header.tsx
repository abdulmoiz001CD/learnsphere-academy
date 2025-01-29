import React from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


function Header() {
  return (
    <>
      <header className="h-[50px] md:h-[52px] lg:h-[92px] flex justify-between md:gap-[64px] items-center px-[24px] md:px-[64px] bg-[#F7F7F7] border-b-[1px] border-[black]">

        <div className="max-w-[300px] md:max-w-[130.6px]  flex gap-[8.02px] items-center">

        <div className="w-[19px] sm:w-[21px] lg:w-[32px]  xxl:w-[42px] h-[9x]">
        <Image
            src="/images/Frame1.svg"
            alt="Frame 1"
            width={52}
            height={9}         
            className="w-full h-full"
            
          />   </div>

     

        <div id="Rye" className="text-[18.07px] lg:text-[25.07px]  xxl:text-[30.07px]  font-[700] leading-[20.34px] sm:leading-[30.34px] lg:w-[90px]"> Ddsgnr</div>
        </div>




              <Sheet>
        <SheetTrigger><FaBars className="w-[20px] sm:w-[24px] md:hidden text-[16px] sm:text-[18px]"/></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle id="Rye" className="mt-[2rem] mb-[1rem] text-center sm:text-[1.5rem]">Learn Sphere Academy</SheetTitle>
            <SheetDescription>
        

<ul id="inter" className="flex flex-col  space-y-4 text-center">
          <li className="leading-[15px] pb-[3px] md:leading-[24px]  border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">
            Home
          </li>
          <li className="leading-[15px]  pb-[3px] md:leading-[24px]  border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">
            Courses
          </li>
          <li className="leading-[15px]   pb-[3px] md:leading-[24px]  border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">
            Services
          </li>
          <li className="leading-[15px]  pb-[3px] md:leading-[24px]  border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">
            Achievement
          </li>
          <li className="leading-[15px]   pb-[3px] md:leading-[24px]  border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">
            About Us
          </li>
          <li className="leading-[15px]  pb-[3px] md:leading-[24px]  border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">
            Testimonial
          </li>
        </ul>

        {/* Buttons */}
        <div className="btnCon mt-6 flex flex-col space-y-4">
          <button className="h-[26px] md:h-[21px] lg:h-[35px] cursor-pointer rounded-[3px] lg:rounded-[5px] lg:pb-[4px] px-[10px] lg:px-[20px] text-[10px] lg:text-[16px] xxl:text-[19px] text-center lg:leading-[24px] border-[1px] border-[#000000]">
            Login
          </button>
          <button className="h-[26px] md:h-[21px] lg:h-[35px] cursor-pointer rounded-[3px] lg:rounded-[5px] lg:pb-[4px] px-[10px] lg:px-[20px] text-[10px] lg:text-[16px] xxl:text-[19px] text-center bg-black text-white">
            Sign Up
          </button>
          </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>









        <ul id="Rye" className="hidden md:flex text-base justify-between items-center md:gap-[16px] bg-white max-w-[910px] w-full  pl-[10px]">
          <li className="leading-[15px] md:leading-[24px] sm:text-[9px] lg:text-[13px] xl:text-[16px] xxl:text-[20px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">Home</li>
          <li className="leading-[15px] md:leading-[24px] sm:text-[9px] lg:text-[13px] xl:text-[16px] xxl:text-[20px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">Courses</li>
          <li className="leading-[15px] md:leading-[24px] sm:text-[9px] lg:text-[13px] xl:text-[16px] xxl:text-[20px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">Services</li>
          <li className="leading-[15px] md:leading-[24px] sm:text-[9px] lg:text-[13px] xl:text-[16px] xxl:text-[20px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">Achievement</li>
          <li className="whitespace-nowrap leading-[15px] md:leading-[24px] sm:text-[9px] lg:text-[13px] xl:text-[16px] xxl:text-[20px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">About Us</li>
          <li className="leading-[15px] md:leading-[24px] sm:text-[9px] lg:text-[13px] xl:text-[16px] xxl:text-[20px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">Testimonial</li>

          <div className="btnCon inline-flex gap-5 items-center ">
            <button className="h-[26px] md:h-[21px] lg:h-[35px] xxl:h-[39px] cursor-pointer rounded-[3px] lg:rounded-[5px] pb-6 lg:pb-[4px] px-[10px] lg:px-[20px] text-[10px] lg:text-[16px] xxl:text-[19px] text-center lg:leading-[24px] border-[1px] border-[#000000]">Login</button>
            <button className="h-[26px] md:h-[21px]  lg:h-[35px] xxl:h-[39px] cursor-pointer rounded-[3px] lg:rounded-[5px] pb-6 lg:pb-[4px] px-[10px] lg:px-[20px] text-[10px] lg:text-[16px] xxl:text-[19px] text-center  bg-black text-white">Sign Up</button>
          </div>
        </ul>
      </header>
    </>
  );
}

export default Header;
