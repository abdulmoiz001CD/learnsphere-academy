import React from "react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";

interface Card {
  img: string;
  heading: string;
  para: string;
  

}

const TeamCard: React.FC<Card> = ({ img, heading, para }) => {
  return (
    <div className="flex flex-col gap-3 items-center rounded-[5px] max-w-[394.67px] w-full">
      
      {/* Image Section */}
      <div className="relative max-w-[80px] w-full h-[80px] overflow-hidden">
        {/* Ensure the parent container is properly constrained */}
        <Image
          src={img}
          alt={`Image for ${heading}`}
          layout="fill"
          objectFit="cover"/>
      </div>



      {/* Description Section */}
      <div className="flex flex-col gap-[16px] w-full items-center p-2 pb-[22px]">
        <h1 className="font-[600] text-[20px] leading-[30px]">{heading}</h1>
        <p className="text-[18px] leading-[27px] line-clamp-3 text-center ">{para}</p>

        {/* Button and Price */}
                <ul className="flex gap-[14px] items-center">
       <li className="w-[24px] h-[24px]"><FaLinkedin/></li>
       <li className="w-[24px] h-[24px]"><FaTwitter/></li>
       <li className="w-[24px] h-[24px]"> <CiBasketball /></li>
      
        </ul>


      </div>
    </div>
  );
};

export default TeamCard;
