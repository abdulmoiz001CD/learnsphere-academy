import React from 'react';
import Header from '@/app/styles/Header.module.css';
import Image from 'next/image';

function Logo() {
  return (
   <>
   <div className='h-[228px] flex max-sm:flex-col justify-between max-sm:justify-center  sm:gap-[64px] max-sm:gap-[34px] sm:items-center bg-[#F7F7F7] max-sm:py-6 px-2'>
 
    <div className=''>
        <h3 id='roboto-thin' className='w-[320px] text-[24px] font-[700] leading-[33.6px]'>Trusted by 2000+ companies worldwide.</h3>
    </div>

    <ul className='flex h-[56px] gap-[19.12px]'>
<li className='w-[123.8px] h-[38.52px]'><Image src='/images/Logo/logo1.svg' alt='logo' width={123.8} height={38.52}></Image></li>
<li className='w-[123.8px] h-[38.52px]'><Image src='/images/Logo/logo2.svg' alt='logo' width={123.8} height={38.52}></Image></li>
<li className='w-[123.8px] h-[38.52px]'><Image src='/images/Logo/logo3.svg' alt='logo' width={123.8} height={38.52}></Image></li>
<li className='w-[123.8px] h-[38.52px]'><Image src='/images/Logo/logo4.svg' alt='logo' width={123.8} height={38.52}></Image></li>
<li className='w-[123.8px] h-[38.52px]'><Image src='/images/Logo/logo5.svg' alt='logo' width={123.8} height={38.52}></Image></li>
<li className='w-[123.8px] h-[38.52px]'><Image src='/images/Logo/logo6.svg' alt='logo' width={123.8} height={38.52}></Image></li>

    </ul>


   </div>

   
   </>
  )
}

export default Logo
