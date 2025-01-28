import React from "react";
import Image from "next/image";

interface Card {
  img: string;
  heading: string;
  para: string;
  subhead:string;

}

const CardEnroll: React.FC<Card> = ({ img, heading, para ,subhead}) => {
  return (
    <div className="flex flex-col  xl:gap-3 items-center rounded-[5px] bg-[#F7F7F7] max-w-[380px] md:max-w-[416px] w-full  shadow-md"> 
      {/* h-[534px] */}
      {/* Image Section */}
      <div className="max-w-[416px] w-full h-[300px] overflow-hidden rounded-t-[5px]">
      {/* h-[300px] */}
        {/* Ensure the parent container is properly constrained */}
        <Image
          src={img}
          alt={`Image for ${heading}`}
          width={0}
          height={0}
          className="rounded-t-[5px] object-cover w-full h-auto"
        />
      </div>




      {/* Heading and Rating */}
      <div className="flex justify-between items-center w-full px-2 pt-1">
        <h3 className="w-[320px] text-[14px] font-[600] truncate">{subhead}</h3>
        <ul className="flex items-center gap-6  lg:gap-1">
          <li>
            <Image src="/images/star.svg" alt="Rating star" width={18} height={18}  className="w-full h-full"/>
          </li>
          <li className="font-bold text-[14px]">5.0</li>
        </ul>
      </div>

      {/* Description Section */}
      <div className="flex flex-col gap-2 xl:gap-4 w-full p-2">
        <h1 className="font-bold text-[14px] xl:text-[24px]">{heading}</h1>
        <p className="text-[10px] lg:text-[11px]  line-clamp-3">{para}</p>

        {/* Button and Price */}
        <div className="flex gap-6 items-center">
          <button className="p-1 xl:px-4 xl:py-2 rounded border text-[10px] xl:text-[16px] border-black">Enroll now</button>
          <p className="font-bold text-[10px] xl:text-[16px]">$ 400</p>
        </div>
      </div>
    </div>
  );
};

export default CardEnroll;
