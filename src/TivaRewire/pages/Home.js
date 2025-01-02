import React from 'react'
import CardType1 from './Componants/CardType1'
import FAQ from './FAQ'
import { Crousel } from './Componants/HeroSectionCrousel'
import EnquieryForm from './Componants/EnquieryForm'
import ScrapEnquiryForm from './Componants/ScrapEnquiryForm'


function Home() {
  return (
    <div>
      
  <div className="lg:relative">
  <Crousel />
  <div px-3 className="lg:absolute lg:top-3 lg:right-0 lg:w-1/3 lg:h-full">
    {/* <EnquieryForm /> */}
    <ScrapEnquiryForm/>
  </div>
</div>
 


    
      <CardType1/>
      <FAQ/>
    
    </div>
  )
}

export default Home
