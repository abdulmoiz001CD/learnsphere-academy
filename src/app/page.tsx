import React from 'react'
// import Container from "@/app/components/Container"
import MiniHeader from './components/Navbar/MiniHeader'
import Header from './components/Navbar/Header'
import Hero from './components/Hero/Hero'
import Logo from './components/Logo/Logo'
import Courses from './components/Explore/Explore'
import Achiements from './components/Achiements/Achiements'
import PurchaseCouses from './components/Courses/PurchaseCouses'
import Team from './components/OurTeam/Team'
import Test from './components/Testimonial/Test'
import Footer from './components/Footer/Footer'
import UpperFt from '@/app/components/Footer/UpperFt';
import UlFoot from '@/app/components/Footer/MidFt';
export default function page() {
  return (
  <>

   {/* <MiniHeader/> */}
   <Header />
  <Hero />
 <Logo />
   <Courses />
    <Achiements />
     <PurchaseCouses/>
     <Team/>
    <Test />
    <UpperFt/>
    <UlFoot/>
         {/* <Footer/>  */}

  
   </>
  
 
  )
}
