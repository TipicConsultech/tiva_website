import React from 'react'
import { Accordion } from "flowbite-react";

function FAQ() {
  return (
    <div>
      
      <div className='flex justify-center'>
        <h1 className='text-4xl mt-6'>Frequently Asked Questions</h1>
        </div>

<Accordion className='m-3 lg:flex-col grid-cols-2 lg:ml-44   lg:mr-44 lg:mt-10'>
      <Accordion.Panel className=''>
        <Accordion.Title>What is vehicle scrappage policy? </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-black dark:text-black text-start">
          The Vehicle Scrappage Policy, introduced by MoRTH (Ministry of Road, Transport and Highways)  in September 2021, requires commercial vehicles over 15 years old and passenger vehicles over 20 years old to pass a fitness test. Vehicles that fail must be scrapped through an RVSF. 
          The policy offers incentives for scrapping and disincentives for keeping old vehicles. 
             </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How Tiva Rewire  works?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-black dark:text-black text-start">
          In the coming years, all vehicles older than 15 years will be required to undergo a mandatory fitness test. Vehicles that fail the test will have a limited time to obtain a fitness certificate. If the owner fails to do so, the vehicle will be classified as End-Of-Life and must be deregistered on the Vahan Portal with assistance from an RVSF.
          
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Why should I scrap vehicle with REWIRE? </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-black dark:text-black text-start">
          However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
          technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-black dark:text-black text-start">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-black dark:text-black text-start">Learn more about these technologies:</p>
          
            
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>How deregistration of commercial and passenger vehicles will take place?  </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-start">
          In the coming years, all vehicles older than 15 years will be required to undergo a mandatory fitness test. Vehicles that fail the test will have a limited time to obtain a fitness certificate. If the owner fails to do so, the vehicle will be classified as End-Of-Life and must be deregistered on the Vahan Portal with assistance from an RVSF. </p>
          
            
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>What amount do I receive for scrap vehicle? </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-start">
          The amount you receive for scrapping a vehicle depends on its condition, age, make, model, current scrap metal prices, and the scrappage policy in your country. </p>
          
            
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>What document do I need to scrap my vehicle?  </Accordion.Title>
        <Accordion.Content>
         
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 text-start">
            <li>
                Vehicle Registration Certificate (RC) 
            </li>
            <li>
                Identity Proof 
            </li>
            <li>
            Identity Proof 
            </li>
            <li>
            No Objection Certificate (NOC) (if applicable) 
            </li>
            <li>
            Pollution Under Control (PUC) Certificate (if applicable) 
            </li>
            <li>
            Insurance Certificate 
            </li>
            <li>
            Scrap Yard or Dealer Forms 
            </li>
            <li>
            Deregistration Certificate (after scrapping) 
            </li>
          </ul>
            
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Are there any environmental benefits to scrapping my vehicle?  </Accordion.Title>
        <Accordion.Content>
        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 text-start">
            <li>
            Reduced Air Pollution 
            </li>
            <li>
            Lower Greenhouse Gas Emissions 
            </li>
            <li>
            Decreased Resource Consumption 
            </li>
            <li>
            Energy Savings 
            </li>
            <li>
            Reduced Environmental Hazard 
            </li>
            <li>
            Encourages Adoption of Cleaner Technology 
            </li>
        </ul>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>How will I get Certificate of Deposite and Scrappage Certificate ?  </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-start">
          You will receive the Certificate of Deposit and Scrappage Certificate from the authorized scrapping facility after your vehicle is dismantled and processed.  
            </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Can I scrap the vehicle if I outstanding loan on the vehicle? </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-start">
          You typically need to clear the outstanding loan before scrapping the vehicle, as the lender must provide a No Objection Certificate (NOC). 
            </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Can I scrap the vehicle from other state or city?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-start">
          Yes, you can scrap a vehicle from another state or city, but you may need to follow specific procedures and regulations for that region. 

 
            </p>
        </Accordion.Content>
      </Accordion.Panel>


    </Accordion>

    </div>
  )
}

export default FAQ