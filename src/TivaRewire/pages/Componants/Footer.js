import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#11186B] font-sans dark:bg-gray-900 ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="flex flex-col">
            <div className='justify-center'>
              <img src={require("../../Logos/rewireLogoTransperant.png") } className='object-scale-down h-32 w-32' />
            </div>
            <p className="text-lg pb-3 text-white text-left text-wrap dark:text-white font-serif ">
            Tiva Rewire has grown into a leading, diversified automotive group with a pan-India presence.
            </p>
          </div>
          {/* Connect With Us */}
          <div className="text-lg font-serif flex mr-14 flex-col w-full pt-12">
            <p className="font-semibold text-white pr-10  font-serif ml-16  text-lg mb-4">Connect With Us</p>
            <div className="flex flex-col space-y-4 pt-7">
              <div className="flex items-center">
                <div className="ml-10 pl-10 text-lg font-serif">
                  <p className="text-white dark:text-gray-300 font-sans">+91 7741085107</p>
                  <p className="text-white dark:text-gray-300 font-sans">+91 7741085107</p>
                  <p className="text-white dark:text-gray-300 font-sans">+91 7741085107</p>
                </div>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div className="text-lg font-serif flex mr-14 flex-col">
            <p className="font-semibold text-white dark:text-white mb-4 pt-12">Quick Links</p>
            <div className="flex flex-col space-y-2 pt-6">
              <Link to="/" onClick={scrollToTop} className="text-white dark:text-gray-300 transition-colors duration-300 underline hover:cursor-pointer text-blue-500 hover:text-red-500 dark:hover:text-blue-400">Home</Link >
              <Link to="/whoWeAre" onClick={scrollToTop} className="text-white dark:text-gray-300 transition-colors duration-300 underline hover:cursor-pointer hover:text-red-500 text-blue-500 dark:hover:text-blue-400">About Us</Link >
              <Link to="/ScrapVehicle" onClick={scrollToTop} className="text-white dark:text-gray-300 transition-colors duration-300 underline hover:cursor-pointer hover:text-red-500 text-blue-500 dark:hover:text-blue-400">Scrap Your Vehicle</Link >
            </div>
          </div>
          {/* Visit Us */}
          <div className="flex flex-col">
            <p className="font-semibold font-serif text-white dark:text-white text-lg pr-14 mb-4 pt-12">Visit Us</p>
            <div className="flex items-center pt-6">
              <div>
                <p className="text-left text-white text-sm dark:text-gray-300 align-middle pl-10 flex justify-end text-lg font-sans">
                TATA INTERNATIONAL VEHICAL APPLICATIONS PVT LTD,<br />
                Gat No. 281 & 284,<br />
                Village Santosh Nagar ,Waki<br />
                Taluka Khed, Pune, Maharashtra 410501
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-8 space-x-4">
        {/* Social media icons */}
        <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="Facebook" />
        <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="Twitter" />
        <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="Instagram" />
      </div>
      {/* Divider */}
      <hr className="my-6 border-gray-200 dark:border-gray-700" />
      {/* Copyright */}
      <div className="bg-[#11186B] h-16 flex items-center justify-center">
        <p className="font-sans text-[#FFF6E7] text-center text-md">© {new Date().getFullYear()} Tiva Rewire. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
