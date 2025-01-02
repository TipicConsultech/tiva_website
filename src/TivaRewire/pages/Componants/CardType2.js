import React from 'react'
const firstHalf = [];
function CardType2() {
  return (
    <div className="flex  justify-end max-w-7xl">
                    {firstHalf.map((card, index) => (
                        <div key={index} className="w-full sm:w-1/2  lg:w-60 p-2 lg:h-80">
                            <div className="bg-white shadow-md rounded-lg overflow-hidden lg:flex-col h-full p-8" data-aos="zoom-in">
                                <img src={card.image} alt={card.title} className="w-full h-20 lg: object-cover" />
                            <div className="px-6 py-4 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="font-bold text-xl mb-2">{card.title} </div>
                                    <p className="text-gray-700 text-base">{card.description}</p>
                                </div>
                            </div>
                        </div>
                 </div>
                 ))} 
            </div>
  )
}

export default CardType2
