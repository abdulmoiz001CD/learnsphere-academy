import React from "react";
import Image from "next/image";

interface Card {
  img: string;
  heading: string;
  para: string;
 

}


const CourseCard: React.FC<Card> = ({ img, heading, para}) => {
  return (
    <div className="flex items-center max-sm:justify-around gap-[32px] rounded-[5px] bg-[#F7F7F7] p-[16px] max-w-[410.67px] max-sm:max-w-[70%]  w-full h-[132px]">
      <div className="ImgCon w-[100px] h-[100px] p-[34px] bg-[#FFFFFF]">
        <Image src={img} alt="" width={100} height={100}></Image>
      </div>

      <div className="HeaCon">
        <h3 className="font-[600] text-[20px] leading-[30px]">{heading}</h3>
        <p className="text-[18px] leading-[27px]">{para}</p>
      </div>
    </div>
  );

};

export default CourseCard;
