import Image from "next/image";
import Footer from "./Footer";



const FooterListComponent = () => {
    return (
      <>
        <div className="w-full mx-auto mt-32 px-3 xlg:px-[100px] flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4  mx-auto md:mx-0 place-content-between gap-9 md:gap-20 lg:gap-[250px]">
          {/* First list with heading */}



<div className="max-w-[300px] md:max-w-[130.6px] h-[25px] flex gap-[8.02px] items-center">

    <Image
      src="/images/Frame1.svg"
      alt="Frame 1"
      width={32}
      height={9}
      className="w-full h-auto"
    />

  <div className="inter text-[29.07px] md:text-[25.07px] font-bold tracking-[4px] md:tracking-normal leading-[30.34px]">
    Ddsgnr
  </div>
</div>



  
          {/* Second list with 4 items */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h3 id="inter" className="font-semibold mb-2 text-[25.07px] md:text-sm">Courses</h3>
            <a href="#" className="text-gray-600 hover:text-gray-800">Resource</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Resource</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Resource</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Resource</a>
          </div>
  
          {/* Third list with 4 items */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h3 id="inter" className="font-semibold mb-2 text-[25.07px] md:text-sm">Resources</h3>
            <a href="#" className="text-gray-600 hover:text-gray-800">About Us</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Careers</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">News</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
          </div>
  
          {/* Fourth list with 4 items */}
          <div className="flex flex-col gap-3 items-center md:items-start mb-4">
          <h3 id="inter" className="font-semibold mb-2 text-[25.07px] md:text-sm">About Us</h3>
            <a href="#" className="text-gray-600 hover:text-gray-800">Terms</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Cookies</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Settings</a>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    );
  };
  
  export default FooterListComponent;
  