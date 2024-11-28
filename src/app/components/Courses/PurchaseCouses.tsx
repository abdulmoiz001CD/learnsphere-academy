import React from 'react'
import CardEnroll from './CardEnroll'


export default function PurchaseCourses() {
   return (
     <div className="flex flex-col gap-[60px] items-center py-[16px] px-[126px] h-auto ">
       <div className="flex flex-col gap-[24px] items-center">
         <h1 className="text-[56px] font-[700] leading-[67.2px]">Courses</h1>
         <p className="text-[18px] font-[400] leading-[27px] text-center">
           Your Ultimate Guide to Learning
         </p>
       </div>
 
       <ul className="flex justify-center max-w-[336px] w-full h-[40px] gap-[30px]">
         <li className="text-[16px] font-[400] leading-[24px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">
           Courses
         </li>
         <li className="text-[16px] font-[400] leading-[24px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">
           Recommended
         </li>
         <li className="text-[16px] font-[400] leading-[24px] border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer">
           Best Price
         </li>
       </ul>
 
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-[1278px]  max-md:place-items-center md:pl-3">
         <CardEnroll img="/images/CardEn/cardEn1.svg" subhead="Design" heading="UX/UI Design 201" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
         <CardEnroll img="/images/CardEn/cardEn2.svg" subhead="Programming" heading="Introduction to Python" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
         <CardEnroll img="/images/CardEn/cardEn3.svg" subhead="Business" heading="Data Analysis for Beginners" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
         <CardEnroll img="/images/CardEn/cardEn4.svg" subhead="Art" heading="Art Specialization" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
         <CardEnroll img="/images/CardEn/cardEn5.svg" subhead="Law" heading="Rule of Law" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
         <CardEnroll img="/images/CardEn/cardEn6.svg" subhead="Tech" heading="Introduction to Webflow" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
       </div>
 
       <button className="w-[155px] h-[48px] cursor-pointer rounded-[5px] py-[12px] px-[14px] text-[16px] leading-[24px] border-[1px] border-[#000000]">
         View All Courses
       </button>
     </div>
   );
 }
 