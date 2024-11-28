import React from 'react'
import Container from "@/app/components/Container"
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

export default function page() {
  return (
  <>
   <Container>
   <MiniHeader/>
   <Header />
   <Hero />
   <Logo />
   <Courses />
   <Achiements />
   <PurchaseCouses/>
   <Team/>
   <Test />
   <Footer/>
  </Container>
  
   </>
  
 
  )
}
