import React, { Children } from 'react'


export default function Scrap() {
  return (
    <div className=" min-h-screen">
      

      {/* Main Content */}
      <div className="container mx-auto mt-8">
        <div className=" p-8 rounded shadow-md">
          <h1 className="text-4xl font-bold text-center mb-8"></h1>
          <div className="flex justify-center">
            <img src={require('../Assets/workflow.png')} alt="School Image" className="rounded shadow-lg w-3/5 h-97 w96" />
          </div>
          <p className="mt-8 text-lg ml-4 text-gray-700">
<div className='flex justify-center'>
<h1 className='text-4xl'>Steel and Metals Recovery: </h1>
</div>
<br/>
<div className='mb-7'>
Cars are made up of a significant amount of steel, aluminum, and other metals that can be recovered and reused. Crushing cars allows for the extraction and recycling of these materials, reducing the need for new raw materials.
</div>
<h1 className='text-4xl flex justify-center '>Reduces Waste: </h1>
<br/>
By recycling the materials from old cars, the amount of waste sent to landfills is significantly reduced.
Conserves Energy: Recycling metals from crushed cars consumes less energy compared to producing new metals from ore.
          </p>
        </div>
      </div>
   
    </div>
  );
  
}
