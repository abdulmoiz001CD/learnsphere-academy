import React from "react";
import Image from "next/image";
import Style from "@/app/styles/Header.module.css";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <>
      <header className="flex max-sm:justify-between gap-[45px] h-[72px] mt-4 items-center py-[16px] px-[126px] border-b-[1px] border-b-[1px] border-[black] bg-[#F7F7F7]">
        <div className="ImgTag max-w-[130.6px] w-full flex gap-[8.02px]">
          <Image
            src="/images/Frame 1.svg"
            alt="Frame 1"
            width={32.58}
            height={30.38}
            layout="responsive"
          ></Image>
          <span className="font-latin text-[25.07px] font-[700] leading-[30.34px] ">
            Ddsgnr
          </span>
        </div>


     
<div className='barItem sm:hidden text-[18px] py-[8px] pl-[10px]'><FaBars/></div>

        
   <ul id="roboto-thin" className="flex max-sm:hidden  justify-between items-center bg-white max-w-[910px] w-full  py-[8px] pl-[10px]">
  <li className="leading-[24px] text-[16px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">
    Home
  </li>
  <li className="leading-[24px] text-[16px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">
    Courses
  </li>
  <li className="leading-[24px] text-[16px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">
    Services
  </li>
  <li className="leading-[24px] text-[16px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">
    Achievement
  </li>
  <li className="leading-[24px] text-[16px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">
    About Us
  </li>
  <li className="leading-[24px] text-[16px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">
    Testimonial
  </li>
 
  <div className="btnCon flex gap-5 items-center h-[15px]">
  <button className="h-[40px] cursor-pointer rounded-[5px] py-[8px] px-[20px] text-[16px] leading-[24px] border-[1px] border-[#000000]">Login</button>
  <button className="h-[40px] cursor-pointer rounded-[5px] py-[8px] px-[20px] text-[16px]  bg-black text-white">Sign Up</button>
  </div>
  
 </ul>

  

      </header>
    </>
  );
}

export default Header;
