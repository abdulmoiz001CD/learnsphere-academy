// import React from 'react'
// import Header from '@/app/styles/Header.module.css'
// import Image from 'next/image'

// function Hero() {
//     return (
//         <>
//             <div className="flex max-sm:flex-col gap-[45px] w-[1280px] h-[800px] max-sm:h-auto max-sm:py-[64px] max-sm:px-[24px] sm:items-center">

//                 <div className='w-[600px] h-[300px] flex flex-col justify-center pl-[126px] gap-[44px]'>
//                     <h1 id='roboto-thin' className='font-[700] text-[56px] leading-[67.2px] '>Learn new skills online with ease</h1>
//                     <p id='roboto-thin' className='text-[18px] leading-[27px] max-w-[500px] w-full'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

//                      <div className="btnCon flex gap-[8px] items-center h-[15px]">
//                         <button className="h-[48px] w-[178px] cursor-pointer rounded-[5px] py-[8px] px-[20px] text-[16px] leading-[24px] border-[1px] border-[#000000]">Start learning now</button>
//                         <button className="h-[48px] w-[178px] cursor-pointer rounded-[5px] py-[8px] px-[20px] text-[16px] leading-[24px] bg-black text-white">Explore Courses</button>
//                     </div>

//                 </div>
               
//                  <div className ="w-633px max-sm:w-[1280px] max-sm:h-[800px] h-[800px] relative"  style={{width: '633px', height: '800px'}} >  
//                   <Image src="/images/girl.svg" alt='girl'  layout='fill' objectFit='cover'></Image>
//                  </div>

//             </div>

//         </>
//     )
// }

// export default Hero







// import React from 'react'
// import Header from '@/app/styles/Header.module.css'
// import Image from 'next/image'

// function Hero() {
//     return (
//         <>
//             <div className="flex max-sm:flex-col gap-[45px] w-[1280px] h-[800px] max-sm:h-auto max-sm:py-[64px] max-sm:px-[24px] sm:items-center">

//                 <div className='w-[600px] h-[300px] flex flex-col justify-center pl-[126px] gap-[44px]'>
//                     <h1 id='roboto-thin' className='font-[700] text-[56px] leading-[67.2px] '>Learn new skills online with ease</h1>
//                     <p id='roboto-thin' className='text-[18px] leading-[27px] max-w-[500px] w-full'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

//                     <div className="btnCon flex gap-[8px] items-center h-[15px]">
//                         <button className="h-[48px] w-[178px] cursor-pointer rounded-[5px] py-[8px] px-[20px] text-[16px] leading-[24px] border-[1px] border-[#000000]">Start learning now</button>
//                         <button className="h-[48px] w-[178px] cursor-pointer rounded-[5px] py-[8px] px-[20px] text-[16px] leading-[24px] bg-black text-white">Explore Courses</button>
//                     </div>
//                 </div>
               
//                 <div className="w-[633px] max-sm:w-full max-sm:h-auto h-[800px] relative">
//                     <Image src="/images/girl.svg" alt="girl" layout="fill" objectFit="cover" />
//                 </div>

//             </div>
//         </>
//     )
// }

// export default Hero;








import React from 'react'
import Header from '@/app/styles/Header.module.css'
import Image from 'next/image'

function Hero() {
    return (
        <>
            <div className="flex max-sm:flex-col gap-[45px] w-[1280px] h-[800px] max-sm:h-auto max-sm:py-[64px]  sm:items-center">

                <div className="w-[600px] h-[300px] flex flex-col justify-center pl-[126px] gap-[44px] max-sm:px-[24px]">
                    <h1 id="roboto-thin" className="font-[700] text-[56px] leading-[67.2px]">Learn new skills online with ease</h1>
                    <p id="roboto-thin" className="text-[18px] leading-[27px] max-w-[500px] w-full">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

                    <div className="btnCon flex gap-[8px] items-center h-[15px]">
                        <button className="h-[48px] w-[178px] cursor-pointer rounded-[5px] py-[8px] px-[20px] text-[16px] leading-[24px] border-[1px] border-[#000000]">Start learning now</button>
                        <button className="h-[48px] w-[178px] cursor-pointer rounded-[5px] py-[8px] px-[20px] text-[16px] leading-[24px] bg-black text-white">Explore Courses</button>
                    </div>
                </div>
               
                <div className="w-[633px] max-sm:w-full h-auto max-sm:h-[390] relative aspect-[3/4]">
                    <Image src="/images/girl.svg" alt="girl" layout="fill" objectFit="contain" />
                </div>

{/* <div className="w-[633px] max-sm:w-full h-auto relative aspect-[3/4]">
    <Image src="/images/girl.svg" alt="girl" layout="fill" objectFit="contain" />
</div> */}



            </div>
        </>
    )
}

export default Hero;
