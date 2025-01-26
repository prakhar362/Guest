import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HotelCard() {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();
  const URL = "https://hotelfinder-admin.onrender.com"; 

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("https://hotelfinder-admin.onrender.com/api/main/displayHotel");
        const data = await response.json();
        if (Array.isArray(data)) {
          setHotels(data);
        } else if (data.data && Array.isArray(data.data)) {
          setHotels(data.data);
          console.log("data array: ",data.data);
        } else {
          console.error("Unexpected data format:", data.data);
          setHotels([]);
        }
      } catch (error) {
        console.error("Error fetching hotel data:", error);
        setHotels([]);
      }
    };

    fetchHotels();
  }, []);

  const handleBookNow = (hotelId) => {
    console.log(hotelId);
    navigate(`/form`, { state: { hotelId } }); // Pass hotelId directly to the form
  };
  
  return (
    <div>
      <section id="featured-hotels" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Featured Hotels
            </h2>
            <p className="text-xl text-gray-600">
              Discover our hand-picked selection of premium accommodations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                
                {/* Hotel Logo */}
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <img
                    src={
                      hotel.logo.startsWith("https")
                        ? hotel.logo
                        : `${URL}${hotel.logo}`
                    }
                    alt={`${hotel.name} logo`}
                    className="w-12 h-12 object-cover rounded-full mx-auto"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-600 ml-1">5</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    <svg
                      className="w-5 h-5 inline-block text-gray-500 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {hotel.address}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      $ 300
                    </span>
                    <button
                      onClick={() => handleBookNow(hotel._id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      Book Now
                    </button>
                  </div>
                  {/* QR Code */}
                  {hotel.qrCode && (
                    <div className="mt-4">
                      <img
                        src={hotel.qrCode}
                        alt={`${hotel.name} QR Code`}
                        className="mx-auto w-24 h-24"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HotelCard;
