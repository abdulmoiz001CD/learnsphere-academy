import React from 'react'
import TestCard from './TestCard';
import Image from 'next/image';

export default function Test() {
   return (

   <div className="flex flex-col items-start gap-[80px] py-[112px] my-[412px] px-[64px] h-auto bg-[#F7F7F7] max-sm:items-center max-sm:mt-[1300px]">


       <div className="flex flex-col gap-[24px] max:sm:text-center">
         <h1 className="text-[48px] font-[700] leading-[57.6px]">Customer testimonials</h1>
         <p className="text-[18px] font-[400] leading-[27px]">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         </p>
       </div>
 
    
 
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-sm:place-items-center max-sm:gap-[20px] gap-[1px] md:gap-[42px] w-[1152px]">
         <TestCard img="/images/Test/img3.svg" subhead="Software Developer" heading="James Nduku" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare." />
         <TestCard img="/images/Test/img1.svg" subhead="Scrum Master" heading="Erick Kipkemboi" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare." />
         <TestCard img="/images/Test/img6.svg" subhead="UI/UX Designer" heading="Stephen Kerubo" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare." />
     
       </div>

       {/* Arrow and Dot */}
 
       <div className=' flex justify-between items-center w-full pr-5 md:w-full'>
 

     <div className='flex gap-[7px] items-center'>
     <div className='w-[8px] h-[8px] relative'><Image src='/images/Test/dot1.svg' alt='logo' layout='fill' objectFit='cover'></Image></div>
     <div className='w-[8px] h-[8px] relative'> <Image src='/images/Test/dot2.svg' alt='logo' layout='fill' objectFit='cover'></Image></div>
     <div className='w-[8px] h-[8px] relative'> <Image src='/images/Test/dot2.svg' alt='logo' layout='fill' objectFit='cover'></Image></div>
     <div className='w-[8px] h-[8px] relative'> <Image src='/images/Test/dot2.svg' alt='logo' layout='fill' objectFit='cover'></Image></div>
     <div className='w-[8px] h-[8px] relative'> <Image src='/images/Test/dot2.svg' alt='logo' layout='fill' objectFit='cover'></Image></div>
     
     </div>


 <div className='h-[58px] w-[88px] '>
<Image src='/images/Test/arrow.svg' alt='logo' width={88} height={58}></Image>


 </div>


</div>




    
     </div>
   );
 }
 