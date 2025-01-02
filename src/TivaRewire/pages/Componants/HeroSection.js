
import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../../Assets/HeroSection/HeroSection.jpg';

import { motion } from 'framer-motion';
 
const HeroSection = () => {
  const initialFormData = {
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    vehicle_category: '',
    vehicle_registration_number: '',
    location:''
  };
 
  const [formData, setFormData] = useState(initialFormData);
  const [submissionStatus, setSubmissionStatus] = useState(null);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Called Successfully", formData);
    try {
      const response = await axios.post('https://tiva-rewire.tipic.co.in/api/contactUs', formData);
      console.log('Response:', response.data);
      if (response.data.message === "Contact information saved successfully") {
        setSubmissionStatus('success');
        setFormData(initialFormData);
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setSubmissionStatus('error');
    }
  };
 
  return (
    <>
      <div
        className="bg-cover bg-center min-h-[90vh] flex items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover', // Ensures the image covers the entire area
          height: '80vh', // Sets the height to 80% of the viewport height
          backgroundPosition: 'center', // Centers the background image
        }}
      >
        {/* <div className="invisible lg:mt-96 lg:pl-5 lg:visible">
          <motion.h1
            className="invisible md:text-7xl font-serif font-bold mr-5 gradient-text lg:visible"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Prabhuram Gurukul
          </motion.h1>
        </div> */}
 
 {/* form onSubmit={handleSubmit} className="container max-w-sm mx-auto py-4 px-6 bg-sky-950 rounded-lg shadow-lg mr-10" data-aos="fade-left">
  <h1 className="text-xl font-serif text-white font-bold mb-6">Recycle Your Vehicle</h1>
  
  <div className="text-left">
    
    <div className="md:flex">
      <div className="mb-3 md:w-1/2 md:mr-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="first_name"
          type="text"
          placeholder="First Name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
          title="Please enter only alphabets."
        />
      </div>
      <div className="mb-3 md:w-1/2">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="last_name"
          type="text"
          placeholder="Last Name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
          title="Please enter only alphabets."
        />
      </div>
    </div>

    <div className="md:flex">
      <div className="mb-3 md:w-1/2 md:mr-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="location"
          type="text"
          placeholder="Your Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          title="Please enter only alphabets and numbers."
        />

      </div>
      <div className="mb-3 md:w-1/2">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          title="Please enter a valid email address."
        />
      </div>
    </div>

   
    <div className="md:flex">
      <div className="mb-3 md:w-1/2 md:mr-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="mobile"
          type="text"
          placeholder="Mobile Number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          pattern="[0-9]{10}"
          required
          title="Please enter a 10-digit mobile number."
        />
      </div>
      <div className="mb-3 md:w-1/2">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="vehicle_registration_number"
          type="text"
          placeholder="Vehicle Registration Number"
          name="vehicle_registration_number"
          value={formData.vehicle_registration_number}
          onChange={handleChange}
          required
          title="Please enter only alphabets and numbers."
        />
      </div>
    </div>

  
    <div className="mb-6">
      <select
        id="vehicle_category"
        name="vehicle_category"
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      >
        <option value="">Vehicle Type</option>
        <option value="four_wheeler">Four Wheeler</option>
        <option value="heavy_goods_vehicle">Heavy Goods Vehicle</option>
        <option value="others">Others</option>
      </select>
    </div>


    {submissionStatus === 'success' && (
      <div className="top-0 left-0 max-w-sm mx-auto h-full flex items-center justify-start align-top mb-3">
        <div className="bg-green-500 text-white p-5 rounded-lg shadow-lg w-full">
          Form submitted successfully!
        </div>
      </div>
    )}
    {submissionStatus === 'error' && (
      <div className="top-0 left-0 max-w-sm mx-auto h-full flex items-center justify-center mb-3">
        <div className="bg-red-500 text-white p-5 rounded-lg shadow-lg w-full">
          There was an error submitting the form. Please try again later.
        </div>
      </div>
    )}

    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white justify-center flex font-bold py-2 px-4 ml-28 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
    </div>
  </div>
</form>< */}

      </div>
    </>
  );
};
 
export default HeroSection;
 