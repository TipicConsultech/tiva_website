import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './SpareParts.css'; // Ensure your CSS styles are updated
import ConnectWithUs from './Componants/ConnectWithUs';
import Modal from './Componants/Modal';
import axios from 'axios';
import { host } from '../../util/Constants';

function SpareParts() {
  
  const [data,setData] = useState([]);
    // {
    //   catalog_name: "Engine Spare Part",
    //   catalog_desc: "High-quality refurbished engine spare part.",
    //   img_address: "engine-part.jpg"
    // },
    // {
    //   catalog_name: "Brake Pads",
    //   catalog_desc: "Durable and reliable brake pads for all car models.",
    //   img_address: "brake-pads.jpg"
    // },
    // {
    //   catalog_name: "Transmission",
    //   catalog_desc: "Refurbished transmission with warranty.",
    //   img_address: "transmission.jpg"
    // }


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCatalogName, setSelectedCatalogName] = useState('');
  const [types, setType] = useState('');

  const handleOpenModal = (catalogName, type) => {
    setSelectedCatalogName(catalogName);
    setType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const getCatalog =async()=>{
     const responce= await axios.get(`${host}/api/allCatalogs`)
     setData(responce.data);

  }
  useEffect(() => {
    getCatalog();
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <div className="container mx-auto max-w-full px-8 py-6 bg-gray-100 shadow-lg rounded-lg">
        <div className="flex flex-col lg:flex-row">
          {/* Cards Section */}
          <div className="flex-1 lg:h-screen overflow-hidden">
            <h1 className="text-3xl font-semibold font-serif text-black mb-6">
              Want To Buy Genuine Refurbished Spare Parts
            </h1>
            <div className="h-full overflow-y-auto scrollbar-hidden hover:overflow-y-auto">
              <div className="flex flex-wrap justify-end">
                {data.length > 0 ? (
                  data.map((card, index) => (
                    <div
                      key={index}
                      className={`w-full sm:w-1/2 lg:w-1/3 p-2 ${index >= data.length - (data.length % 3) ? 'mb-8' : ''}`}
                    >
                      <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full p-8">
                        <img
                          src={`${host}/img/${card.img_address}`}
                          alt={card.catalog_name}
                          className="w-full h-20 lg:h-40 object-cover"
                        />
                        <div className="px-6 py-4 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="font-bold text-xl mb-2">{`${card.catalog_name} Quantity : ${card.qty}`}</div>
                            <p className="text-gray-700 text-base">{card.catalog_desc}</p>
                          </div>
                          {/* Buttons added here */}
                          <div className="mt-4 flex justify-between">
                            <button
                              onClick={() => handleOpenModal(card.catalog_name, 1)}
                              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                              Buy
                            </button>
                            <button
                              onClick={() => handleOpenModal(card.catalog_name, 2)}
                              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                              Sell
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 w-full">No spare parts available at the moment.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ConnectWithUs catalogName={selectedCatalogName} type={types} />
      </Modal>
    </>
  );
  
}

export default SpareParts;
