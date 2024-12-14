// import React from 'react'
// // import Header from '@/app/styles/Header.module.css'
// import Image from 'next/image'


// function Hero() {
//     return (
//         <>
//             <div className="w-full flex flex-col md:flex-row md:items-center gap-[25px] md:gap-0 md:h-[800px]  sm:my-[1px]">

//                 <div className="h-[390px] flex flex-col justify-center md:items-center flex-grow-1 md:h-[800px] pl-[26px] gap-[24px] px-[24px] md:pl-[14px]">
//                     <h1 id="roboto-thin" className="font-[700] text-[35px] sm:text-[40px] lg:text-[56px] leading-[48px] ">Learn new skills online with ease</h1>
//                     <p id="roboto-thin" className="text-[18px] leading-[27px]  w-full">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

//                     <div className="btnCon w-full flex gap-[16px] items-center pt-[16px]">
//                         <button className="h-[48px] w-[178px] cursor-pointer rounded-[5px]  md:px-[20px] text-[14px] sm:text-[16px]  font-semibold md:text-[16px] leading-[24px] border-[1px] border-[#000000]">Start learning now</button>
//                         <button className="h-[48px] w-[178px] cursor-pointer rounded-[5px]  md:px-[20px] text-[14px] sm:text-[16px]  font-semibold md:text-[16px] leading-[24px] bg-black text-white">Explore Courses</button>
//                     </div>
//                 </div>
               
             
         

// <div className="w-full h-[390px] md:h-[800px] relative">
//   <Image
//     src="/images/girls.png"
//     alt="girl"
//     width={640}
//     height={800}
//     style={{ 
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover'
//     }}
   
//     priority
//   />
// </div>


//             </div>
//         </>
//     )
// }

// export default Hero;









import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container mx-auto  flex flex-col md:flex-row items-center">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h2 className="text-5xl font-bold text-gray-800 leading-tight w-full md:w-[600px]">
          Learn new skills online with ease
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed w-full md:w-[600px]">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
        <div className="flex space-x-4 justify-center md:justify-start">
          <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-white hover:text-gray-900 border border-gray-900 transition duration-300 ease-in-out">
            Start learning now
          </button>
          <button className="px-6 py-2 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out">
            Explore Courses
          </button>
        </div>
      </div>

      <div className="flex-1 mt-8 md:mt-0">
        <Image
          src="/images/girls.png"
          alt="Learning"
          width={600}
          height={900}
          className="object-cover mx-auto  shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;