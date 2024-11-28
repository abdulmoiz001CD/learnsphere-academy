import React from 'react'
import CardEnroll from './TeamCard'


export default function OurTeam() {
   return (
     <div className="flex flex-col gap-[96px] items-center py-[112px] px-[126px] h-[895px]">
       <div className="flex flex-col gap-[24px] items-center">
         <h1 className="text-[48px] font-[700] leading-[57.6px]">Our team</h1>
         <p className="text-[18px] font-[400] leading-[27px] text-center">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         </p>
       </div>
 
   
 
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-md:place-items-center gap-[64px] w-[1280px]">
         <CardEnroll img="/images/OurTeam/img1.svg"  heading="James Nduku" para="Marketing Coordinator" />
         <CardEnroll img="/images//OurTeam/img2.svg"  heading="Joseph Munyambu" para="Nursing Assistant" />
         <CardEnroll img="/images//OurTeam/img3.svg"  heading="Joseph Ngumbau" para="Medical Assistant" />
         <CardEnroll img="/images/OurTeam/img4.svg"  heading="Erick Kipkemboi" para="Web Designer" />
         <CardEnroll img="/images/OurTeam/img5.svg"  heading="Stephen Kerubo" para="President of Sales" />
         <CardEnroll img="/images/OurTeam/img6.svg"  heading="John Leboo" para="Dog Trainer" />
       </div>
 
      
     </div>
   );
 }
 