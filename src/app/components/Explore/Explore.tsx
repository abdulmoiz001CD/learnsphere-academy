import React from "react";
import CourseCard from "./Card";

function Courses() {
  return (
    <div className="flex flex-col gap-[64px] items-center w-full h-[1049px] max-sm:h-[1949px] py-[112px]">
      
      <div className="flex flex-col gap-[24px]">
      <h1 className="text-[48px] font-[700] leading-[57.6px]">
        Explore Courses By Category
      </h1>
      <p
        className="text-[18px] font-[400] leading-[27px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>
    
      <div className="grid grid-cols-3 md:grid-cols-3 max-sm:grid-cols-1 max-md:place-items-center gap-[32px] w-full">
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
    
  
       <button  className="w-[155px] h-[48px] cursor-pointer rounded-[5px] py-[12px] px-[14px] text-[16px] leading-[24px] border-[1px] border-[#000000]">View All Courses</button>


    </div>
  );
}

export default Courses;
