import React, { useState } from 'react';
import axios from 'axios';
import { host } from '../../../util/Constants';

function EnquieryForm() {
  const initialFormData = {
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    vehicle_category: '',
    vehicle_registration_number: '',
    location: ''
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
      const response = await axios.post(`${host}/api/scrapVehicle`, formData);
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
    <div className="container max-w-sm mx-auto p-6 bg-sky-950 rounded-lg shadow-lg z-50">
      <form onSubmit={handleSubmit} data-aos="fade-left">
        <h1 className="text-xl font-serif text-white font-bold mb-6">Recycle Your Vehicle</h1>
        <div className="text-left">
          <div className="mb-3">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Your Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div className="mb-3">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Vehicle Registration Number"
              name="vehicle_registration_number"
              value={formData.vehicle_registration_number}
              onChange={handleChange}
              required
            />
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
            <div className="bg-green-500 text-white p-5 rounded-lg shadow-lg mb-3">
              Form submitted successfully!
            </div>
          )}
          {submissionStatus === 'error' && (
            <div className="bg-red-500 text-white p-5 rounded-lg shadow-lg mb-3">
              There was an error submitting the form. Please try again later.
            </div>
          )}
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EnquieryForm;
