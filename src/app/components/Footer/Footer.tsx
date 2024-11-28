import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
   <>
   <header className='max-w-[1120px] w-full h-[57px] flex max-sm:flex-col max-sm:gap-6 justify-between items-center pt-[32px] mb-[120px] ml-[68px] border-t-[1px] border-[#000000]'> 

<div className='ConContact flex max-sm:flex-col gap-[24px] items-center'>

<div>2023 Ddsgnr. All right reserved.</div>
<div className='max-sm:flex flex'>
<div>Privacy Policy</div>
<div>Terms of Service</div>
<div>Cookies Settings</div>
</div>

</div>


<ul className='ConIcon flex gap-[12px]  '>
<li className='w-[24px] h-[24px] text-[20px]'><FaFacebookF/></li>
<li className='w-[24px] h-[24px] text-[20px]'><FaInstagram/></li>
<li className='w-[24px] h-[24px] text-[20px]'><FaTwitter/></li>
<li className='w-[24px] h-[24px] text-[20px]'><FaLinkedin/></li>
</ul>

   </header>
   
   </>
  )
}

export default Footer
