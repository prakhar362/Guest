import React from 'react'
import HotelCard from './HotelCard'
import Testimonials from './Testimonials'

function Content() {
  return (
    <>
  <div>
    <section
      id="hero"
      className="bg-white min-h-[70vh] relative flex items-center">
        
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-800/80" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate__animated animate__fadeInDown">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 animate__animated animate__fadeInUp">
            Discover luxurious hotels and comfortable accommodations at the best
            prices across prime locations.
          </p>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 max-w-4xl mx-auto lg:mx-0 animate__animated animate__fadeIn">
            <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full px-4 py-3 bg-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                Search Hotels
              </button>
            </form>
          </div>
          <div className="mt-12 flex flex-wrap justify-center lg:justify-between gap-10 animate__animated animate__fadeInUp">
            <div className="flex items-center">
              <span className="text-4xl text-white font-bold">500+</span>
              <span className="ml-2 text-gray-300">Hotels</span>
            </div>
            <div className="flex items-center">
              <span className="text-4xl text-white font-bold">100+</span>
              <span className="ml-2 text-gray-300">Cities</span>
            </div>
            <div className="flex items-center">
              <span className="text-4xl text-white font-bold">10k+</span>
              <span className="ml-2 text-gray-300">Happy Guests</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  <HotelCard/>
      
  
      <div>
        <section id="popular-destinations" className="bg-neutral-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4 animate__animated animate__fadeIn">
                Popular Destinations
              </h2>
              <p className="text-xl text-gray-600 animate__animated animate__fadeIn">
                Explore our most sought-after hotel locations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Destination Card 1 */}
              <div className="relative group animate__animated animate__fadeInUp">
  <div className="bg-neutral-200 rounded-xl h-72 overflow-hidden relative">
    {/* Adjusting the img styling */}
    <img
      src="https://lh3.googleusercontent.com/proxy/g-ljxmC9hqYpgbNRM2dhT4x30UsLIeylGkNR8j7xU75F3uXUHTB-hNcdjNy_H5_ZxgnbUxNUvne8TOZBcYT-BwoIQZgXwXlkyciXBHBPkNH2SavG7WhWDqT383O5PPPhie3Pw0fSRriv3TF8TEb8cu7JuH5-_Q=w675-h390-n-k-no"
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    {/* Content */}
    <div className="absolute bottom-0 p-6 text-white">
      <h3 className="text-2xl font-bold mb-2">New York City</h3>
      <div className="flex items-center justify-between">
        <span className="text-sm">256 Hotels</span>
        <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">
          From $199
        </span>
      </div>
    </div>
  </div>
</div>

              {/* Destination Card 2 */}
              <div className="relative group animate__animated animate__fadeInUp">
  <div className="bg-neutral-200 rounded-xl h-72 overflow-hidden relative">
    {/* Adjusting the img styling */}
    <img
      src="https://149990825.v2.pressablecdn.com/wp-content/uploads/2023/09/Paris1.jpg"
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    {/* Content */}
    <div className="absolute bottom-0 p-6 text-white">
      <h3 className="text-2xl font-bold mb-2">Paris</h3>
      <div className="flex items-center justify-between">
        <span className="text-sm">288 Hotels</span>
        <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">
          From $199
        </span>
      </div>
    </div>
  </div>
</div>

              {/* Destination Card 3 */}
              <div className="relative group animate__animated animate__fadeInUp">
  <div className="bg-neutral-200 rounded-xl h-72 overflow-hidden relative">
    {/* Adjusting the img styling */}
    <img
      src="https://lh5.googleusercontent.com/p/AF1QipOuXeybui4g1ZXerVKQLh0sI_ctFAb3WDQxU0_n=w675-h390-n-k-no"
      alt="Tokyo"
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    {/* Content */}
    <div className="absolute bottom-0 p-6 text-white">
      <h3 className="text-2xl font-bold mb-2">Tokyo</h3>
      <div className="flex items-center justify-between">
        <span className="text-sm">312 Hotels</span>
        <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">
          From $179
        </span>
      </div>
    </div>
  </div>
</div>

            </div>
            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center animate__animated animate__fadeIn">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Destinations</div>
              </div>
              <div className="text-center animate__animated animate__fadeIn">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  10k+
                </div>
                <div className="text-gray-600">Properties</div>
              </div>
              <div className="text-center animate__animated animate__fadeIn">
                <div className="text-4xl font-bold text-blue-600 mb-2">2M+</div>
                <div className="text-gray-600">Happy Guests</div>
              </div>
              <div className="text-center animate__animated animate__fadeIn">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  150+
                </div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 animate__animated animate__fadeIn">
                Explore All Destinations
              </button>
            </div>
          </div>
        </section>
      </div>
   
  
      <div >
        <section id="amenities" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4 animate__animated animate__fadeIn">
                World-Class Amenities
              </h2>
              <p className="text-xl text-gray-600 animate__animated animate__fadeIn">
                Experience luxury with our premium facilities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Amenity 1 */}
              <div className="bg-neutral-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 animate__animated animate__fadeInUp">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  High-Speed WiFi
                </h3>
                <p className="text-gray-600">
                  Stay connected with complimentary high-speed internet access
                  throughout your stay.
                </p>
              </div>
              {/* Amenity 2 */}
              <div className="bg-neutral-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 animate__animated animate__fadeInUp">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Swimming Pool
                </h3>
                <p className="text-gray-600">
                  Refresh yourself in our temperature-controlled swimming pools
                  with stunning views.
                </p>
              </div>
              {/* Amenity 3 */}
              <div className="bg-neutral-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 animate__animated animate__fadeInUp">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Spa &amp; Wellness
                </h3>
                <p className="text-gray-600">
                  Rejuvenate your body and mind at our luxury spa and wellness
                  center.
                </p>
              </div>
              {/* Amenity 4 */}
              <div className="bg-neutral-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 animate__animated animate__fadeInUp">
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  24/7 Service
                </h3>
                <p className="text-gray-600">
                  Round-the-clock concierge and room service for your
                  convenience.
                </p>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-neutral-50 p-8 rounded-xl shadow-sm animate__animated animate__fadeInLeft">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Premium Features
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Fitness Center with Personal Trainers
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Fine Dining Restaurants
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Business Center &amp; Meeting Rooms
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-50 p-8 rounded-xl shadow-sm animate__animated animate__fadeInRight">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Additional Services
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Airport Transfer Service
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Childcare Services
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Valet Parking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    
  
      <div>
        <section id="special-offers" className="bg-neutral-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4 animate__animated animate__fadeIn">
                Special Offers &amp; Deals
              </h2>
              <p className="text-xl text-gray-600 animate__animated animate__fadeIn">
                Exclusive deals and packages for your perfect stay
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Offer Card 1 */}
<div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
  <div className="relative">
    {/* Image Section */}
    <img
      src="https://www.shutterstock.com/image-photo/girl-standing-car-sunroof-enjoying-260nw-1789455020.jpg" // Replace with your image URL
      alt="Weekend Getaway"
      className="w-full h-48 object-cover"
    />
    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
      Save 25%
    </div>
  </div>
  <div className="p-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      Weekend Getaway
    </h3>
    <div className="flex items-center mb-4">
      <span className="text-3xl font-bold text-blue-600">$199</span>
      <span className="text-gray-500 line-through ml-2">$265</span>
      <span className="text-sm text-gray-600 ml-2">/night</span>
    </div>
    <ul className="space-y-2 mb-6">
      <li className="flex items-center text-gray-600">
        <svg
          className="w-5 h-5 text-green-500 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        Breakfast Included
      </li>
      <li className="flex items-center text-gray-600">
        <svg
          className="w-5 h-5 text-green-500 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        Free Spa Access
      </li>
      <li className="flex items-center text-gray-600">
        <svg
          className="w-5 h-5 text-green-500 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        Late Checkout
      </li>
    </ul>
    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
      Book This Offer
    </button>
  </div>
</div>

              {/* Offer Card 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
                <div className="relative">
                  {/* Image Section */}
    <img
      src="https://media1.thrillophilia.com/filestore/jezkw1hz3yrpmiqlbobdguc5f54m_shutterstock_1938178192.jpg?w=400&dpr=2" // Replace with your image URL
      alt="Family Package"
      className="w-full h-48 object-cover"
    />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save 30%
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Family Package
                  </h3>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-blue-600">
                      $299
                    </span>
                    <span className="text-gray-500 line-through ml-2">
                      $429
                    </span>
                    <span className="text-sm text-gray-600 ml-2">/night</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Connecting Rooms
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Kids Eat Free
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Theme Park Tickets
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Book This Offer
                  </button>
                </div>
              </div>
              {/* Offer Card 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
                <div className="relative">
                   {/* Image Section */}
    <img
      src="https://www.conradpune.com/wp-content/uploads/2022/07/8.png" // Replace with your image URL
      alt="Family Package"
      className="w-full h-48 object-cover"
    />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save 20%
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Business Package
                  </h3>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-blue-600">
                      $249
                    </span>
                    <span className="text-gray-500 line-through ml-2">
                      $309
                    </span>
                    <span className="text-sm text-gray-600 ml-2">/night</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Business Lounge Access
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Meeting Room Hours
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Airport Transfer
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Book This Offer
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                * Terms and conditions apply. Offers valid for a limited time
                only.
              </p>
              <button className="bg-neutral-800 text-white px-8 py-3 rounded-lg hover:bg-neutral-900 transition duration-300 animate__animated animate__fadeIn">
                View All Offers
              </button>
            </div>
          </div>
        </section>
      </div>
    
 
      <Testimonials/>
    
 
      <div >
        <section id="newsletter" className="bg-neutral-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4 animate__animated animate__fadeIn">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-xl text-gray-300 mb-8 animate__animated animate__fadeIn">
                Stay updated with exclusive offers, travel tips, and special
                deals
              </p>
              <form className="animate__animated animate__fadeInUp">
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required=""
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="mt-6 text-sm text-gray-400 animate__animated animate__fadeIn">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
              <div className="mt-12 flex justify-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">10k+</div>
                  <div className="text-gray-400">Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">150+</div>
                  <div className="text-gray-400">Monthly Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400">Exclusive Offers</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    
      
    
</>

    
      
    
  )
}

export default Content
