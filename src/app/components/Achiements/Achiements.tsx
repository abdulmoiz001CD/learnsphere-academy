import React from "react";

function Achiements() {
  return (
    <div className="grid grid-col-1 gap-8 md:gap-[40px] xl:gap-[60px] w-full mx-auto items-center py-[58px] md:py-20 lg:mt-[80px]  px-[24px] md:px-[126px] min-h-auto">
      <h1 id="Rye" className="text-[32px] md:text-[38px] lg:text-[48px] font-[700] md:leading-[41.6px] leading-[57.6px] text-center">
        Our Achivements
      </h1>
      <p className="text-[13px] lg:text-[18px] font-[400] leading-[27px] text-center max-w-[1152px] w-full mx-auto line-clamp-2  md:line-clamp-3">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>

      <ul className="grid grid-cols-2 md:grid-cols-4  mx-auto gap-[40px] md:gap-[80px] max-w-[1152px] w-full">
        <li className="text-center">
          <h1 className="text-[20px] lg:text-[48px] font-[700]  leading-[28px] lg:leading-[57.6px]">+200</h1>
          <p className="text-[16px] md:text-[18px] font-[400] leading-[24px] lg:leading-[27px]">Courses</p>
        </li>

        <li className="text-center">
          <h1 className="text-[20px] lg:text-[48px] font-[700] leading-[28px] lg:leading-[57.6px]">50K</h1>
          <p className="text-[16px] lg:text-[18px] font-[400] leading-[24px] lg:leading-[27px]">Mentors</p>
        </li>

        <li className="text-center">
          <h1 className="text-[20px] lg:text-[48px] font-[700] leading-[28px] lg:leading-[57.6px]">370k</h1>
          <p className="text-[16px] lg:text-[18px] font-[400] leading-[24px] lg:leading-[27px]">Students</p>
        </li>

        <li className="text-center">
          <h1 className="text-[20px] lg:text-[48px] font-[700] leading-[28px] lg:leading-[57.6px]">100+</h1>
          <p className="text-[16px] lg:text-[18px] font-[400] leading-[24px] lg:leading-[27px]">Recognition</p>
        </li>
      </ul>
    </div>
  );
}

export default Achiements;
