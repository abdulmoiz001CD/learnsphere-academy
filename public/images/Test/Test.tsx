import React from 'react'
import CardEnroll from './TestCard'
import TestCard from './TestCard';


export default function Test() {
   return (
     <div className="flex flex-col gap-[80px] py-[112px] px-[64px] h-auto">
       <div className="flex flex-col gap-[24px]">
         <h1 className="text-[48px] font-[700] leading-[57.6px]">Customer testimonials</h1>
         <p className="text-[18px] font-[400] leading-[27px]">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         </p>
       </div>
 
    
 
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] w-[1152px]">
         <TestCard img="/images/Test/img1.svg" subhead="Software Developer" heading="James Nduku" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare." />
         <TestCard img="/images/Test/img2.svg" subhead="Scrum Master" heading="Erick Kipkemboi" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare." />
         <TestCard img="/images/Test/img3.svg" subhead="UI/UX Designer" heading="Stephen Kerubo" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare." />
        
        
       </div>
 
    
     </div>
   );
 }
 