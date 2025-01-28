import React from "react";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";


interface Card {
  img: string;
  heading: string;
  para: string;
  subhead:string;

}

const TestCard: React.FC<Card> = ({ img, heading, para ,subhead}) => {
  return (
    <div className="flex flex-col gap-[14px] rounded-[1px] max-w-[362.67px] p-[32px] border-[1px] border-black">
      
       <ul className="flex max-w-[336px] w-full">
         <li className="text-[20px] font-[400]  cursor-pointer">
         <MdOutlineStarPurple500 />
         </li>
         <li className="text-[20px] font-[400]  cursor-pointer">
         <MdOutlineStarPurple500 />
         </li>
         <li className="text-[20px] font-[400]  cursor-pointer">
         <MdOutlineStarPurple500 />
         </li>

           <li className="text-[20px] font-[400]  cursor-pointer">
         <MdOutlineStarPurple500 />
         </li>
         <li className="text-[20px] font-[400]  cursor-pointer">
         <MdOutlineStarPurple500 />
         </li>
       </ul>

      {/* Description Section */}
        <div className="flex flex-col gap-4">
        <p className="text-[14px] lg:text-[16px] leading-[27px] line-clamp-3">{para}</p>

        {/* Button and Price */}
        <div className="flex gap-[20px] items-center">
        <div className="ImgCon w-[56px] h-[56px]">
        <Image src={img} alt="Rating star" width={0} height={0} className="rounded-[28px] w-full h-auto" /></div>

        <div className="headPara flex flex-col gap-[1px]">  
        <h1 className="font-bold text-[16px]">{heading}</h1>
        <p className="font-[400px] text-[16px] leading-[20px]">{subhead}</p></div>
       
        </div>


      </div>
    </div>
  );
};

export default TestCard;
