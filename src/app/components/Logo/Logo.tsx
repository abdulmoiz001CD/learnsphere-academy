import React from 'react';
import Header from '@/app/styles/Header.module.css';
import Image from 'next/image';

function Logo() {
  return (
   <>
   <div className='md:h-[6rem] lg:h-[8rem]  xxl:h-[239.34px] flex flex-col md:flex-row  md:justify-between max-sm:justify-center  gap-[34px]  md:items-center bg-[#F7F7F7]  md:px-2'>
 
    <div className=''>
        <h3 id='roboto-thin' className='max-w-[340px] w-full text-[24px] md:text-[15px] lg:text-[19px] xxl:text-[30px] pl-3 font-[700]  text-start pt-6 md:p-0'>Trusted by 2000+ companies worldwide.</h3>
    </div>

    <ul className='grid grid-cols-3 md:grid-cols-6  gap-[19.12px]'>
<li className='max-w-[123.8px] w-full h-[38.52px]'><Image src='/images/Logo/logo1.svg' alt='logo' width={123.8} height={38.52}></Image></li>
<li className='max-w-[123.8px] w-full h-[38.52px]'><Image src='/images/Logo/logo2.svg' alt='logo' width={123.8} height={38.52}></Image></li>
<li className='max-w-[123.8px] w-full h-[38.52px]'><Image src='/images/Logo/logo3.svg' alt='logo' width={123.8} height={38.52}></Image></li>
<li className='max-w-[123.8px] w-full h-[38.52px]'><Image src='/images/Logo/logo4.svg' alt='logo' width={123.8} height={38.52}></Image></li>
<li className='max-w-[123.8px] w-full h-[38.52px]'><Image src='/images/Logo/logo5.svg' alt='logo' width={123.8} height={38.52}></Image></li>
<li className='max-w-[123.8px] w-full h-[38.52px]'><Image src='/images/Logo/logo6.svg' alt='logo' width={123.8} height={38.52}></Image></li>

    </ul>


   </div>

   
   </>
  )
}

export default Logo
