import React from 'react'

interface ContainerProps {
    children: React.ReactNode;
  }

const Container:React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='max-w-[1280px] md:w-[1440px] max-sm:w-[1440px] w-full  h-auto border-[1px] border-[#676767]'>

      {children} 
    </div>
  )
}

export default Container
