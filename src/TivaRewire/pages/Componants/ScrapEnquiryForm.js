import axios from 'axios';
import React, { useState } from 'react';
import { host } from '../../../util/Constants';

function ScrapEnquiryForm() {
    const initialFormData = {
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        vehicle_category: '',
        vehicle_registration_number: '',
        location: '',
        vehicle_description: '',
        vehicle_manufacturer: '',
        registration_source: '',
        scrap_purpose: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        let error = '';
        if (name === 'first_name' || name === 'last_name') {
            if (!/^[A-Za-z]+$/.test(value)) {
                error = 'Only alphabets are allowed';
            }
        } else if (name === 'mobile') {
            if (!/^[0-9]{0,10}$/.test(value)) {
                error = 'Only 10 digits are allowed';
            }
        } else if (name === 'email') {
            if (!/\S+@\S+\.\S+/.test(value)) {
                error = 'Please enter a valid email';
            }
        } else if (name === 'vehicle_category' || name === 'registration_source' || name === 'scrap_purpose') {
            if (!value) {
                error = `Please select a ${name.replace('_', ' ')}`;
            }
        } else if (!value) {
            error = `${name.replace('_', ' ')} is required`;
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Validate the field as user types
        validateField(name, value);

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = true;
        for (const field in formData) {
            if (!formData[field]) {
                validateField(field, formData[field]);
                isValid = false;
            }
        }
        if (!isValid) return; // Stop form submission if validation fails

        try {
            const response = await axios.post(`${host}/api/scrapVehicle`, formData);
            if (response.data.message === "Contact information saved successfully") {
                alert('Form submitted successfully!');
                setFormData(initialFormData); // Reset form after successful submission
            } else {
                alert('Form submission failed. Please try again.');
            }
        } catch (error) {
            console.error('There was an error!', error);
            alert('There was an error submitting the form. Please try again later.');
        }
    };

    return (
        <div className="container max-w-md mx-auto p-6 bg-sky-950 rounded-lg shadow-lg z-50">
            <form onSubmit={handleSubmit} data-aos="fade-left">
                <h1 className="text-xl font-serif text-white font-bold mb-6">Recycle Your Vehicle</h1>
                <div className="text-left">
                    <div className='md:flex'>
                        <div className="mb-3 px-1">
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.first_name ? 'border-red-500' : ''}`}
                                type="text"
                                placeholder="First Name"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                pattern="[A-Za-z]+" // Restrict to alphabets
                                required
                            />
                            {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name}</p>}
                        </div>
                        <div className="mb-3 px-1">
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.last_name ? 'border-red-500' : ''}`}
                                type="text"
                                placeholder="Last Name"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                pattern="[A-Za-z]+" // Restrict to alphabets
                                required
                            />
                            {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name}</p>}
                        </div>
                    </div>

                    <div className='md:flex'>
                        <div className="mb-3 px-1">
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.mobile ? 'border-red-500' : ''}`}
                                type="text"
                                placeholder="Mobile Number"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                pattern="[0-9]{10}" // Restrict to numbers only
                                required
                            />
                            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                        </div>

                        <div className="mb-3 px-1">
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                    </div>

                    <div className='md:flex '>
                        <div className="mb-3 px-1">
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.location ? 'border-red-500' : ''}`}
                                type="text"
                                placeholder="Location eg. Pune"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
                        </div>

                        <div className="mb-3 px-1">
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.vehicle_registration_number ? 'border-red-500' : ''}`}
                                type="text"
                                placeholder="Registration Number"
                                name="vehicle_registration_number"
                                value={formData.vehicle_registration_number}
                                onChange={handleChange}
                                required
                            />
                            {errors.vehicle_registration_number && <p className="text-red-500 text-sm">{errors.vehicle_registration_number}</p>}
                        </div>
                    </div>

                    <div className='md:flex'>
                        <div className="mb-3 px-1">
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.vehicle_manufacturer ? 'border-red-500' : ''}`}
                                type="text"
                                placeholder="Manufacturer eg. TATA"
                                name="vehicle_manufacturer"
                                value={formData.vehicle_manufacturer}
                                onChange={handleChange}
                                required
                            />
                            {errors.vehicle_manufacturer && <p className="text-red-500 text-sm">{errors.vehicle_manufacturer}</p>}
                        </div>

                        <div className="mb-3 px-1">
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.vehicle_description ? 'border-red-500' : ''}`}
                                type="text"
                                placeholder="Description eg. SUV"
                                name="vehicle_description"
                                value={formData.vehicle_description}
                                onChange={handleChange}
                                required
                            />
                            {errors.vehicle_description && <p className="text-red-500 text-sm">{errors.vehicle_description}</p>}
                        </div>
                    </div>

                    <div className='md:flex'>
                        <div className="mb-3 px-1">
                            <select
                                id="vehicle_category"
                                name="vehicle_category"
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.vehicle_category ? 'border-red-500' : ''}`}
                                required
                                   >
                                            <option value="" disabled selected hidden>Vehicle Category</option>
                                            <option value="Personal Vehicle">Personal Vehicle</option>
                                            <option value="Commercial Vehicle">Commercial Vehicle</option>
                                            <option value="Corporate (Individual)">Corporate (Individual)</option>
                                            <option value="Corporate (People)">Corporate (People)</option>
                                        </select>
                                        {errors.vehicle_category && <p className="text-red-500 text-sm">{errors.vehicle_category}</p>}
                                    </div>
                                
                                    <div className="mb-3 px-1">
                                        <select
                                             id="scrap_purpose"
                                            name="scrap_purpose"
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                         >
                                             <option value="" disabled selected hidden>Scrap Purpose</option>
                                             <option value="End of vehicle life">End of vehicle life</option>
                                             <option value="Insurance write-off">Insurance write-off</option>
                                             <option value="Severe damage">Severe damage</option>
                                             <option value="Costly repairs">Costly repairs</option>
                                             <option value="Government regulations">Government regulations</option>

                                             

                                        </select>
                                        {errors.scrap_purpose && <p className="text-red-500 text-sm">{errors.scrap_purpose}</p>}
                                    </div>
                                </div>
                                
                                <div className='md:flex mb-2'>
                                    <div className="w-full px-1">
                                        <select
                                             id="registration_source"
                                            name="registration_source"
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        >
                                            <option value="" disabled selected hidden>Source of Registration</option>
                                            <option value="Department of Motor Vehicles (DMV)">Department of Motor Vehicles (DMV)</option>
                                            <option value="State Vehicle Registration Authority">State Vehicle Registration Authority</option>
                                            <option value="Private Registration Services">Private Registration Services</option>
                                            <option value="Online Portals">Online Portals</option>
                                            <option value="Other">Other</option>


                                        </select>
                                        {errors.registration_source && <p className="text-red-500 text-sm">{errors.registration_source}</p>}
                                    </div>
                                </div>
                                
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
                               
                       export default ScrapEnquiryForm;
