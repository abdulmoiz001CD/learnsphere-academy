import React from 'react'
import CardEnroll from './CardEnroll'


export default function PurchaseCourses() {
   return (
     <div className="flex flex-col gap-[30px] lg:gap-[30px] xl:gap-[40px] mx-auto w-full items-center pt-[16px] h-auto ">
       <div className="flex flex-col gap-[24px] items-center">
         <h1 id="Rye" className="text-[32px] md:text-[38px] lg:text-[48px] font-[700] leading-[41.6px] md:leading-[67.2px]">Courses</h1>
         <p id='inter' className="text-[13px] lg:text-[18px] font-[400] leading-[27px]">
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
 
  
       <div className="mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[104px] gap-x-[10rem]">
  <CardEnroll 
      img="/images/CardEn/cardEn1.svg" 
      subhead="Design" 
      heading="UX/UI Design 201" 
      para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." 
    />

<CardEnroll 
      img="/images/CardEn/cardEn2.svg" 
      subhead="Programming" 
      heading="Introduction to Python" 
      para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." 
    />
    <CardEnroll 
      img="/images/CardEn/cardEn3.svg" 
      subhead="Business" 
      heading="Data Analysis for Beginners" 
      para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." 
    />
    <CardEnroll 
      img="/images/CardEn/cardEn4.svg" 
      subhead="Art" 
      heading="Art Specialization" 
      para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." 
    />
    <CardEnroll 
      img="/images/CardEn/cardEn5.svg" 
      subhead="Law" 
      heading="Rule of Law" 
      para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." 
    />
    <CardEnroll 
      img="/images/CardEn/cardEn6.svg" 
      subhead="Tech" 
      heading="Introduction to Webflow" 
      para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." 
    />


  </div>
</div>




         <button className="max-w-[175px] max-h-[48px]  h-full cursor-pointer rounded-[5px] mt-[3rem] lg:mt-[5rem] py-[8px] lg:py-[12px] px-[14px] text-[13px] lg:text-[16px] leading-[24px] border-[1px] border-[#000000]">
          View All Courses
        </button>
      </div>


   ) }



//    );
//  }
{/* <div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-[24px] max-w-[1200px] mx-auto max-md:place-items-center md:pl-3">
  <CardEnroll 
    img="/images/CardEn/cardEn1.svg" 
    subhead="Design" 
    heading="UX/UI Design 201" 
    para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." 
  />
  <CardEnroll 
    img="/images/CardEn/cardEn2.svg" 
    subhead="Programming" 
    heading="Introduction to Python" 
    para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." 
  />
  <CardEnroll 
    img="/images/CardEn/cardEn3.svg" 
    subhead="Business" 
    heading="Data Analysis for Beginners" 
    para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." 
  />
  <CardEnroll 
    img="/images/CardEn/cardEn4.svg" 
    subhead="Art" 
    heading="Art Specialization" 
    para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." 
  />
  <CardEnroll 
    img="/images/CardEn/cardEn5.svg" 
    subhead="Law" 
    heading="Rule of Law" 
    para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." 
  />
  <CardEnroll 
    img="/images/CardEn/cardEn6.svg" 
    subhead="Tech" 
    heading="Introduction to Webflow" 
    para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." 
  />
</div>
</div> */}
