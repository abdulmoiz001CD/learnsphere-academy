import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function MiniHeader() {
  return (
   <>
   <header className='max-w-[1280px] w-full max-sm:hidden flex  justify-between items-center py-[16px] md:px-[126px] lg:px-[126px] border-b-[1px] border-[#000000]'> 

<div className='ConContact flex gap-3 items-center'>

<div>Phone Number: 956 742 455 678</div>
<div className="w-[0.5px] h-8 bg-black"></div>
<div>Email: info@ddsgnr.com</div>
</div>


<div className='barItem sm:hidden'><FaBars/></div>

<ul className='ConIcon flex gap-[12px]'>
<li className='w-[24px] h-[24px] text-[20px]'><FaFacebookF/></li>
<li className='w-[24px] h-[24px] text-[20px]'><FaInstagram/></li>
<li className='w-[24px] h-[24px] text-[20px]'><FaTwitter/></li>
<li className='w-[24px] h-[24px] text-[20px]'><FaLinkedin/></li>
</ul>

   </header>
   
   </>
  )
}

export default MiniHeader
