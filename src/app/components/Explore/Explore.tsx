import React from "react";
import CourseCard from "./Card";

function Courses() {
  return (
    <div className="flex flex-col gap-[64px] items-center w-full mx-auto h-auto pt-[62px] lg:mt-[80px]">
      
      <div className="flex flex-col text-center gap-[24px]">
      <h1 id="Rye" className="text-[32px] md:text-[38px] lg:text-[48px] font-[700] leading-[41.6px] md:leading-[57.6px]">
        Explore Courses By Category
      </h1>
      <p id="inter"
        className="px-3 text-[15px] lg:text-[18px] font-[400] leading-[27px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>
    
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  place-items-center gap-[32px] w-full px-3 mx-auto">
      <CourseCard img='/images/Cards/card1.svg' heading ='Design & Development' para="50+ Courses Available" />
      <CourseCard img='/images/Cards/card2.svg' heading ='Marketing' para="50+ Courses Available" />
      <CourseCard img='/images/Cards/card3.svg' heading ='Development' para="50+ Courses Available" />
      <CourseCard img='/images/Cards/card4.svg' heading ='Communication' para="50+ Courses Available" />
      <CourseCard img='/images/Cards/card5.svg' heading ='Digital Marketing' para="50+ Courses Available" />
      <CourseCard img='/images/Cards/card6.svg' heading ='Self Developmentt' para="50+ Courses Available" />
      <CourseCard img='/images/Cards/card7.svg' heading ='Business' para="50+ Courses Available" />
      <CourseCard img='/images/Cards/card8.svg' heading ='Finance' para="50+ Courses Available" />
      <CourseCard img='/images/Cards/card9.svg' heading ='Consulting' para="50+ Courses Available" />

      </div>
    
  
      <button className="max-w-[175px] max-h-[48px]  h-full cursor-pointer rounded-[5px] mt-[3rem] lg:mt-[5rem] py-[8px] lg:py-[12px] px-[14px] text-[13px] lg:text-[16px] leading-[24px] border-[1px] border-[#000000]">
          View All Courses
        </button>


    </div>
  );
}

export default Courses;
