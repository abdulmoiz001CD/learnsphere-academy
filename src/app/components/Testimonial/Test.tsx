import React from 'react'
import TestCard from './TestCard';
import Image from 'next/image';

export default function Test() {
   return (

   <div className="flex flex-col md:items-start gap-[80px] py-[112px] px-[34px] md:px-[64px]  h-auto bg-[#F7F7F7] items-center mt-[100px] md:mt-[60px]">


       <div className="flex flex-col gap-[24px] text-start">
         <h1 id="Rye" className="text-[48px] font-[700] leading-[57.6px]">Customer testimonials</h1>
         <p id="inter" className="text-[18px]  font-[400] leading-[27px]">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         </p>
       </div>
 
    
 
       <div className="hidden md:grid  md:grid-cols-2 lg:grid-cols-3  max-sm:place-items-center max-sm:gap-[20px] gap-[1px] md:gap-[42px]  w-full">
         <TestCard img="/images/Test/img3.svg" subhead="Software Developer" heading="James Nduku" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare." />
         <TestCard img="/images/Test/img1.svg" subhead="Scrum Master" heading="Erick Kipkemboi" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare." />
         <TestCard img="/images/Test/img6.svg" subhead="UI/UX Designer" heading="Stephen Kerubo" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare." />
     
       </div>


       <div className="grid grid-cols-1 md:hidden max-sm:place-items-center max-sm:gap-[20px] gap-[1px] md:gap-[42px] max-w-[1152px] w-full">
         <TestCard img="/images/Test/img3.svg" subhead="Software Developer" heading="James Nduku" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare." />
       </div>

       {/* Arrow and Dot */}
 
       <div className=' flex justify-between items-center w-full pr-5'>
 

     <div className='flex gap-[7px] items-center'>
     <div className='w-[8px] h-[8px]'><Image src='/images/Test/dot1.svg' alt='logo'  width={8} height={8} className="object-cover w-full h-full"></Image></div>
     <div className='w-[8px] h-[8px]'> <Image src='/images/Test/dot2.svg' alt='logo' width={8} height={8} className="object-cover w-full h-full"></Image></div>
     <div className='w-[8px] h-[8px]'> <Image src='/images/Test/dot2.svg' alt='logo' width={8} height={8} className="object-cover w-full h-full"></Image></div>
     <div className='w-[8px] h-[8px]'> <Image src='/images/Test/dot2.svg' alt='logo' width={8} height={8} className="object-cover w-full h-full"></Image></div>
     <div className='w-[8px] h-[8px]'> <Image src='/images/Test/dot2.svg' alt='logo' width={8} height={8} className="object-cover w-full h-full"></Image></div>
     
     </div>


 <div className='h-[58px] w-[88px] '>
<Image src='/images/Test/arrow.svg' alt='logo' width={88} height={58} className='w-full h-full'></Image>


 </div>


</div>




    
     </div>
   );
 }
 