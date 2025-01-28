import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-[25rem] sm:h-[28rem] md:max-h-[50rem] xl:h-full md:h-full flex flex-col md:flex-row md:gap-[1rem] md:justify-between">
      <div className="w-full md:w-[50%] my-auto mx-auto flex flex-col justify-center items-center md:items-start md:items-left">
       
        <h2 className="px-[1px] text-center md:text-left md:leading-[3.5rem] lg:leading-[4.5rem] xxl:leading-[6.5rem] text-[30px] sm:text-[36px] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] xxl:text-[6rem] font-bold text-gray-800 ">
          Learn new skills online with ease
        </h2>
        <p className="px-[3px] text-gray-700 text-[15px] sm:text-[16px] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem] xxl:text-[2rem] text-center md:text-left  py-5 lg:py-10 leading-relaxed ">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-white hover:text-gray-900 text-[10px] md:text-[10px] lg:md:text-[15px] xxl:text-[1.5rem] border border-gray-900 transition duration-300 ease-in-out">
            Start learning now
          </button>
          <button className="px-6 py-2 border border-gray-400 text-gray-700  text-[10px] md:text-[10px] lg:md:text-[15px] xxl:text-[1.5rem] rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out">
            Explore Courses
          </button>
        </div>
      </div>

      <div className="mt-8 md:mt-0 w-[40%] hidden md:block">
        <Image
          src="/images/girls.png"
          alt="Learning"
          width={600}
          height={900}
          className="object-center max-w-[800px] w-full h-[600px] md:h-[400px] lg:h-[400px] xl:h-[600px] xxl:h-[800px]"
        />
      </div>
    </section>
  );
};

export default Hero;