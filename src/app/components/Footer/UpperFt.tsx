



const UpperFt = () => {
    return (
      <div className="w-full mx-auto mt-32 px-3 xlg:px-[100px] flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* First child - Heading and Paragraph */}
        <div className="flex flex-col max-w-[500px] gap-2">
          <h2 className="text-[25px] xlg:text-3xl font-bold">Subscribe to our newsletter</h2>
          <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
  
        {/* Second child - Form Elements */}
        <div className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row gap-4  2xl:w-[600px] w-full">
          <input 
            type="text" 
            className="w-[241px]  px-4 xlg:py-2 h-[40px] xlg:h-[50px] border-black border-[1px] rounded-[5px] focus:outline-none focus:ring-2"
            placeholder="Enter your email"
          />
          <button className="max-w-[119px] xlg:py-2 h-[40px] xlg:h-auto w-full px-[24px]  border-black border-[1px] rounded-[5px] hover:bg-blue-700">
            Subscribe
          </button>
        </div>
        <p className="text-sm">By subscribing you agree to with our Privacy Policy</p>
        </div>
       

      </div>
    );
  };
  
  export default UpperFt;
  