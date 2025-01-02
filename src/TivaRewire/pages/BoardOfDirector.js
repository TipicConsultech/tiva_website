import React from 'react';

 
export default function BoardOfDirector() {
  return (
    <div className="max-w-screen-xl mx-auto mt-1  lg:ml-20 lg:mr-20 lg:mt-16 text-start flex flex-col items-center justify-center bg-transparent">
        <div>
        <h1 className='lg:text-3xl font-serif text-center'>About Us</h1>
       <p className='lg:mt-3 mr-6'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tata International DLT business has changed its name. It has been formally changed to Tata International Vehicle Applications Private Limited (TIVA). Tata International DLT is a 100-per cent subsidiary of Tata International. Established in 2005, the company started their journey with single point aim of providing the best trailers to TATA Motors. After a series of successful years with TATA Motors, company expanded its journey to the open market with one agenda in its psyche to provide India with the trailers of international quality. With so much experience in hand in the commercial vehicle industry TIVAPL emerges out as the first choice for all the trailer buyers throughout the country.
In September 2011, the company started its mega infrastructure plant in Waki, Maharashtra with total capacity of producing 500 trailers per month, it was just a matter of time that TIVAPL (Tata International Vehicle Applications Private Limited) became India’s largest trailer manufacturer, with outrunning its nearest competitor by miles.
 <br/><br/>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tata International Vehicle Applications Private Limited (TIVA) is expanding its business portfolio by entering the vehicle scrappage industry. The company is setting up a registered vehicle scrappage facility in Pune, Maharashtra. This move aligns with the growing focus on sustainable and environmentally responsible practices in the automotive sector.
By venturing into the vehicle scrappage business, TIVA aims to leverage its expertise in the commercial vehicle industry and its strong presence in the Indian market. The facility in Pune will likely adhere to the Ministry of Road Transport and Highways (MoRTH) guidelines, as well as Central and Maharashtra Pollution Control Board regulations for End-of-Life Vehicles (ELV). This expansion into vehicle scrappage further demonstrates TIVA's commitment to innovation, sustainability, and supporting India's automotive ecosystem. </p>
        </div>
        <div className="max-w-screen-xl  lg:mt-9 bg-[#FEFFFB] flex flex-col lg:flex-row items-center justify-center  ">
      
            <div className=" sm:w-5/6 p-14 mr-0 bg-orange-200 text-start lg:justify-center border-4 ">
                <div>
                   
                    <p className="text-black text-justify font-serif lg:mt-2 mt-3 ">
                    <b className='font-serif text-14px'>"Pioneering Green Solutions for a Brighter Future"<br/> "Turning Waste into Opportunity for a Brighter Future.”<br/></b><br/>
                    Our commitment goes beyond merely recycling vehicles. We are dedicated to ensuring that every vehicle we process is dismantled and disposed of in the most environmentally responsible manner, adhering strictly to MoRTH, CPCB, and MPCB guidelines. Our goal is to turn the end of a vehicle's life into the beginning of a sustainable future for our planet 
                    </p>
          
                </div>
            </div>
            <div className="sm:w-1/2 mt-1 px-9 flex justify-center animate__animated animate__fadeInLeft lg:justify-center">
                <div className="image text-center bg-orange-200	border-4  ">
                    <img className="h-[30vh] w-[45vh] lg:h-[37vh] lg:w-[55vh] " src={require('../Assets/BoardOfDirectors/Rajeer_CEO-removebg-preview.png')} alt="Oncology" />
                    <h2 className="my-4   font-serif lg:text-3xl text-black ">
                    Mr. Rajeev Batra<span className="text-amber-900"></span>
                    </h2>
                    <h2 className='font-serif text-2xl'>Chief Executive Officer</h2>
                </div>
            </div>
        </div>

        <div className="max-w-screen-xl mr-8 flex flex-col md:flex-row items-center justify-center">

         <div className=" p-10 lg:w-1/2 mr-0 ">
                <div className="image text-center  bg-orange-200 ml-1 border-4">

                    <img className="h-[30vh] w-[45vh] lg:h-[38vh] lg:w-[55vh]" src={require('../Assets/BoardOfDirectors/Anjani_CFO_BG-removebg-preview.png')} alt="Panchakarma"/>
                    <h2 className=" font-serif lg:text-3xl text-3xl  mt-0 lg:mt-10">
                        Mr. Anjani Kumar Srivastava <span className=""></span>
                    </h2>
                    <p className=' font-serif text-2xl'>Chief Finance Officer</p>
                </div>
            </div>

            <div className="sm:w-5/6 sm:mt-2 mb-1 p-4 px-7 bg-orange-200 text-start lg:justify-center border-4">
                <div className="mt-1">
                    <p className="font-serif p-6 mt-1 justify-start  ">
                    <b className='font-serif p-4 text-14px'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"From Rust to Renewal, for a Cleaner Future."<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Eco-Smart and Cost-Savvy, We Care Everyone"</b><br/><br/>
                    "At TIVA, our financial strategies are deeply aligned with our commitment to environmental stewardship. By optimizing our operations and ensuring compliance with MoRTH, CPCB, and MPCB guidelines, we not only create value for our stakeholders but also contribute to a sustainable economy. For our customers, scrapping their vehicles with us means not only adhering to legal requirements but also receiving fair and transparent valuations, efficient service, and the peace of mind that their vehicle's end is contributing to a cleaner environment. We turn their old vehicles into new opportunities, driving both profitability and positive environmental impact.
                   
                    </p>
                 </div>
            </div>
        </div>
    </div>

  );
}
 
