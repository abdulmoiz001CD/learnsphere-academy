'use client'
import React, { useEffect, useState } from 'react'

interface dataType{
  userId: number,
  id: number,
  title: string,
  body:string
}


const Page = () => {
  const [data, setData] = useState<dataType[]>([]);

  

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
      const data = await res.json();
      setData(data);
    };

    fetchData(); 
  }, []); 

  return (
    <div className='h-auto pt-12'>
<div className='flex flex-col justify-center text-center'> <h1 className='text-[2rem] font-bold text-center'>Client Side Rendering</h1>
<h4>( The previous API was not working, so I switched to an alternative API that works as expected)</h4></div>
      
      <div>
        {data ? (
            data.slice(0,3).map((value)=> {
               return(
                <div key={value.id} className="max-w-sm mx-auto my-10 bg-white rounded-lg shadow-md overflow-hidden">
            
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">
                   {value.body}
                  </p>
               
                </div>
              </div>
               )
            })
        
        ) : (
          `Loading....`
        )}
      </div>
    </div>
  );
};

export default Page;
