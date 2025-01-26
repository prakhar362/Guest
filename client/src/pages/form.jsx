import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Form = (hotelId) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    purposeOfVisit: "Business",
    stayFrom: "",
    stayTo: "",
    email: "",
    idProofNumber: "",
    hotelId: hotelId,  // Add hotelId to the form data
  });

  const navigate = useNavigate();
  const location = useLocation();

  // Extract hotelId from location state (passed from the HotelCard component)
  useEffect(() => {
    if (location.state && location.state.hotelId) {
      console.log(location.state.hotelId);
      setFormData((prevData) => ({
        ...prevData,
        hotelId: location.state.hotelId, // Set the hotelId in the form data
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://hotelfinder-admin.onrender.com/api/guest/addGuest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // If request is successful, navigate to the thank you page
        navigate("/thankyou");
      } else {
        // If there is an error from the server, log it
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Error saving guest details:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-gray-50 shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">
        Guest Registration
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Full Name</span>
          <input
            type="text"
            name="name" // Fixed name attribute
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </label>

        {/* Mobile Number */}
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Mobile Number</span>
          <input
            type="tel"
            name="phone" // Fixed name attribute
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </label>

        {/* Address */}
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Address</span>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </label>

        {/* Purpose of Visit */}
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Purpose of Visit</span>
          <select
            name="purposeOfVisit" // Fixed name attribute
            value={formData.purposeOfVisit}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="Business">Business</option>
            <option value="Personal">Personal</option>
            <option value="Tourist">Tourist</option>
          </select>
        </label>

        {/* Stay Dates */}
        <div className="flex gap-4 mb-4">
          <label className="flex-1">
            <span className="text-gray-700 font-medium">Stay From</span>
            <input
              type="date"
              name="stayFrom"
              value={formData.stayFrom}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </label>
          <label className="flex-1">
            <span className="text-gray-700 font-medium">Stay To</span>
            <input
              type="date"
              name="stayTo"
              value={formData.stayTo}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </label>
        </div>

        {/* Email ID */}
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Email ID</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </label>

        {/* ID Proof Number */}
        <label className="block mb-6">
          <span className="text-gray-700 font-medium">ID Proof Number</span>
          <input
            type="text"
            name="idProofNumber"
            value={formData.idProofNumber}
            onChange={handleChange}
            placeholder="Enter your ID proof number"
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
