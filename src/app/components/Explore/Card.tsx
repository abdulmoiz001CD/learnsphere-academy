import React from "react";
import Image from "next/image";

interface Card {
  img: string;
  heading: string;
  para: string;
 

}


const CourseCard: React.FC<Card> = ({ img, heading, para}) => {
  return (
    <div className="flex items-center justify-around gap-[32px] rounded-[5px] bg-[#F7F7F7] p-[16px] xlg:p-[16px] max-w-[380px] md:max-w-[410.67px] w-full max-h-[132px] h-full">
      <div className="ImgCon max-w-[50px] w-full max-h-[100px] p-[4px] bg-[#FFFFFF]">
        <Image src={img} alt="Explorecards" width={100} height={100}></Image>
      </div>

      <div className="HeaCon max-w-[216px] h-57px">
        <h3 className="inter font-[600] text-[18px] leading-[30px]">{heading}</h3>
        <p id="inter" className="text-[16px] leading-[27px]">{para}</p>
      </div>
    </div>
  );

};

export default CourseCard;
