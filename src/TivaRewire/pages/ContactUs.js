
import React, { useState } from 'react';
import axios from 'axios';
import { host } from '../../util/Constants';
 
export default function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    queries: '',
    mobile: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errors, setErrors] = useState({});
 
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (id === 'mobile') {
      validateMobile(value);
    }
  };
 
  const validateMobile = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobile: 'Mobile number must be 10 digits long and contain only numbers.',
      }));
    } else {
      setErrors((prevErrors) => {
        const { mobile, ...rest } = prevErrors;
        return rest;
      });
    }
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${host}/api/contactUs`,formData,);
      console.log('Response:', response.data);
      if (response.data.message === "Contact information saved successfully") {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', queries: '', mobile: '' });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setSubmissionStatus('error');
    }
  };
 
 
 
  return (
    <section className="bg-[#eee2cf]">
      <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <iframe
        
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15107.111086450346!2d73.8783757!3d18.8080545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c9e764d68103%3A0x827606a25a5153b9!2sTata%20International%20Vehicle%20Applications%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1724328040620!5m2!1sen!2sin"
          width="100%"
          height="480"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="container justify-center px-6 md:px-12 lg:max-w-6xl bg">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
          {submissionStatus === 'success' && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
              <p>Form submitted successfully!</p>
            </div>
          )}
          {submissionStatus === 'error' && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
              <p>There was an error submitting the form!</p>
            </div>
          )}
 
 
 
 
          <div className=" flex flex-col col-1">
            <h1 className='uppercase md:text-3xl text-2xl text-center font-serif font-bold text-gray-900 mb-10'>Contact Us</h1>
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form onSubmit={handleSubmit}>
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear ${errors.name ? 'border-red-500' : ''}`}
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                    />
                    {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
                  </div>
                  <div className="relative mb-6">
                    <input
                      type="email"
                      className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear ${errors.email ? 'border-red-500' : ''}`}
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address"
                    />
                    {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                  </div>
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className={`peer text-black block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear ${errors.mobile ? 'border-red-500' : ''}`}
                      id="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile Number"
                    />
                    {errors.mobile && <p className="text-red-600 text-sm">{errors.mobile}</p>}
                  </div>
                  <div className="relative mb-6">
                    <textarea
                      className={`peer text-black block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear ${errors.queries ? 'border-red-500' : ''}`}
                      id="queries"
                      rows="3"
                      value={formData.queries}
                      onChange={handleChange}
                      placeholder="Message"
                    ></textarea>
                    {errors.queries && <p className="text-red-600 text-sm">{errors.queries}</p>}
                  </div>
                  <button
                    type="submit"
                    className="mb-6 w-full rounded bg-sky-500 text-black px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal lg:mb-0"
                  >
                    Send
                  </button>
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <div className="flex items-center mb-6">
                    <div className=''>
                    <h6 className="text-xl font-semibold pr-56 pb-3 pl-8 ">Address :</h6>
                      <p className="pl-14 text-left text-gray-700 dark:text-gray-300 align-middle flex justify-end text-lg font-sans">
                      TATA INTERNATIONAL VEHICAL APPLICATIONS PVT LTD<br />
                      Gat No. 281 & 284, <br />
                      Village Santosh Nagar ,Waki,<br />
                      Taluka Khed, Pune, Maharashtra 410501
                      </p>
                    </div>
                
                  </div>
                  <div className="flex items-center mb-6">
                    <div className='mb-10 text-gray-700 pl-14'>
                      <h6 className="text-xl font-semibold pr-56 mb-0 pb-3 ">Phone :</h6>
                      <p className="text-gray-700 dark:text-gray-300 pr-40 text-lg font-sans">+91&nbsp;7741085107</p>
                      <p className="text-gray-700 dark:text-gray-300 pr-40 text-lg font-sans">+91&nbsp;7741085107</p>
                      <p className="text-gray-700 dark:text-gray-300 pr-40 text-lg font-sans">+91&nbsp;7741085107</p>
                    </div>
                  </div>
                  {/* Add more contact details here if needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 