import React from "react";

function Achiements() {
  return (
    <div className="flex flex-col gap-[24px] items-center  py-[16px] px-[126px] h-[488px]">
      <h1 className="text-[48px] font-[700] leading-[57.6px]">
        Our Achivements
      </h1>
      <p className="text-[18px] font-[400] leading-[27px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>

      <ul className="flex justify-between max-w-[910px] w-full gap-[80px] ">
        <li className="text-center">
          <h1 className="text-[48px] font-[700] leading-[57.6px]">+200</h1>
          <p className="text-[18px] font-[400] leading-[27px]">Courses</p>
        </li>

        <li className="text-center">
          <h1 className="text-[48px] font-[700] leading-[57.6px]">50K</h1>
          <p className="text-[18px] font-[400] leading-[27px]">Mentors</p>
        </li>

        <li className="text-center">
          <h1 className="text-[48px] font-[700] leading-[57.6px]">370k</h1>
          <p className="text-[18px] font-[400] leading-[27px]">Students</p>
        </li>

        <li className="text-center">
          <h1 className="text-[48px] font-[700] leading-[57.6px]">100+</h1>
          <p className="text-[18px] font-[400] leading-[27px]">Recognition</p>
        </li>
      </ul>
    </div>
  );
}

export default Achiements;
