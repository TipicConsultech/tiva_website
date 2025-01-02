import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


import Logo from '../../Logos/rewireLogoTransperant.png'; // Adjust the import according to your file structure

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [dropdownAbout, setDropdownAbout] = useState(false);
    const [dropdownAdmission, setDropdownAdmission] = useState(false);
    const location = useLocation();

    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setNavbar(false);
        setDropdownAbout(false);
        setDropdownAdmission(false);
    };

    const toggleDropdownAbout = () => {
        setDropdownAbout(!dropdownAbout);
        setDropdownAdmission(false);
    };

    const toggleDropdownAdmission = () => {
        setDropdownAdmission(!dropdownAdmission);
        setDropdownAbout(false);
    };

    return (
        <nav className="w-full sticky top-0 left-0 lg:max-w-7xl z-40 flex bg-[#11186B] max-w-7xl">
            <div className={`flex justify-start ${navbar ? 'hidden' : 'block'}`}>
                <Link to="/" onClick={handleLinkClick}>
                    <img className="opacity-100 mt-0 pt-0 object-scale-down h-12 w-10 md:h-16 ml-1 md:w-20 md:object-scale-down bg-transparent" src={Logo} alt="Logo" />
                </Link>
                <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-serif pt-3 pl-1 uppercase">Tiva Rewire</h1>
            </div>
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 bg-[#11186B] lg:h-16">
                <div>
                    <div className="flex items-center justify-evenly py-3 md:py-5 md:block">
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-300 rounded-md right-3 outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                        <ul className="items-start justify-start md:justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ml-4">
                            <li className="text-white hover:text-white font-serif uppercase hover:bg-gray-700 px-4 py-2 rounded-md">
                                <Link to="/" onClick={handleLinkClick}>Home</Link>
                            </li>

                            {/* <li className="text-white hover:text-white font-serif uppercase hover:bg-gray-700 px-4 py-2 rounded-md">
                                <Link to="/About-us" onClick={handleLinkClick}>ABOUT US</Link>
                            </li> */}
                            <li className="group max-lg:border-b max-lg:py-2 relative">
                                <button onClick={toggleDropdownAbout} className="hover:text-white lg:pt-2 text-white text-[15px] font-serif lg:hover:fill-[#007bff] block uppercase">
                                    About Us
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24">
                                        <path
                                            d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                            data-name="16" data-original="#000000"
                                             fill="#FFFFFF"
                                        />
                                    </svg>
                                </button>
                                <ul className={`absolute ${dropdownAbout ? 'block' : 'hidden'} shadow-lg bg-[#11186B] backdrop-blur-3xl px-6 pb-4 pt-6 space-y-3 lg:top-7 max-lg:top-8 -left-6 min-w-[250px] z-50 max-lg:pl-4`}>
                                    <li className="border-b py-2 max-lg:ml-4">
                                        <Link to="/whoWeAre" onClick={handleLinkClick} className="hover:text-white text-white text-[15px] font-serif block text-left hover:bg-gray-700 px-4 py-2 rounded-md uppercase">Who We Are</Link>
                                    </li>
                                    <li className="border-b py-2 max-lg:ml-4">
                                        <Link to="/mediaAndNews" onClick={handleLinkClick} className="hover:text-white text-white text-[15px] font-serif block text-left hover:bg-gray-700 px-4 py-2 rounded-md uppercase">Media Coverage & Inside &nbsp; Tiva</Link>
                                    </li>
                                    
                                </ul>
                            </li>

                            <li className="group max-lg:border-b max-lg:py-2 relative">
                                <button onClick={toggleDropdownAdmission} className="hover:text-white lg:pt-2 text-white text-[15px] font-serif lg:hover:fill-[#007bff] block uppercase">
                                    Services
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24">
                                        <path
                                            d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                            data-name="16" data-original="#000000"
                                             fill="#FFFFFF"
                                        />
                                    </svg>
                                </button>
                                <ul className={`absolute ${dropdownAdmission ? 'block' : 'hidden'} shadow-lg bg-[#11186B] backdrop-blur-3xl px-6 pb-4 pt-6 space-y-3 lg:top-7 max-lg:top-8 -left-6 min-w-[250px] z-50 max-lg:pl-4`}>
                                    <li className="border-b py-2 max-lg:ml-4">
                                        <Link to="/ScrapVehicle" onClick={handleLinkClick} className="hover:text-white text-white text-[15px] font-serif block text-left hover:bg-gray-700 px-4 py-2 rounded-md uppercase">Scrap Your Vehicle</Link>
                                    </li>
                                    <li className="border-b py-2 max-lg:ml-4">
                                        <Link to="/SpareParts" onClick={handleLinkClick} className="hover:text-white text-white text-[15px] font-serif block text-left hover:bg-gray-700 px-4 py-2 rounded-md uppercase">Buy Refurbished Products</Link>
                                    </li>
                                   
                                </ul>
                            </li>

                            {/* <li className="text-white hover:text-white font-serif hover:bg-gray-700 px-4 py-2 rounded-md uppercase">
                                <Link to="/events" onClick={handleLinkClick}>Events</Link>
                            </li> */}
                             <li className="text-white hover:text-white font-serif hover:bg-gray-700 px-4 py-2 rounded-md uppercase">
                                <Link to="/FAQs" onClick={handleLinkClick}>FAQs</Link>
                            </li>

                            <li className="text-white hover:text-white font-serif hover:bg-gray-700 px-4 py-2 rounded-md uppercase">
                                <Link to="/Contact-us" onClick={handleLinkClick}>Contact Us</Link>
                            </li>
                            <li className="lg:pt-2">
                                <a href="https://www.youtube.com/" className="text-white hover:text-red-600 ">
                                    <span className="sr-only">Youtube</span>
                                    <FaYoutube size={23} />
                                </a>
                            </li>
                            <li className="lg:pt-2">
                                <a href="https://www.youtube.com/" className="text-white hover:text-red-600 ">
                                    <span className="sr-only">Facebook</span>
                                    <FaFacebook size={23} />
                                </a>
                            </li>
                            <li className="lg:pt-2">
                                <a href="https://www.youtube.com/" className="text-white hover:text-red-600 ">
                                    <span className="sr-only">Twitter</span>
                                    <FaXTwitter  size={23} />
                                </a>
                            </li>
                            <li className="lg:pt-2">
                                <a href="https://www.youtube.com/" className="text-white hover:text-red-600 ">
                                    <span className="sr-only">Instagram</span>
                                    <FaInstagram
                                    size={23} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
