import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/" className="text-white text-xl font-bold text-center">
            Real Estate
          </Link>
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
        <div
          className={`lg:flex lg:space-x-4 lg:items-center lg:mt-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'flex flex-col text-center' : 'hidden'
          }`}
        >
          <Link
            to="/"
            className="block text-gray-300 py-2 px-4 text-sm lg:text-base cursor-pointer hover:text-purple-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/properties"
            className="block text-gray-300 py-2 px-4 text-sm lg:text-base cursor-pointer hover:text-purple-500"
            onClick={() => setIsOpen(false)}
          >
            Properties
          </Link>
          <Link
            to="/aboutus"
            className="block text-gray-300 py-2 px-4 text-sm lg:text-base cursor-pointer hover:text-purple-500"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-300 py-2 px-4 text-sm lg:text-base cursor-pointer hover:text-purple-500"
            >
              Services
              <FaChevronDown className={`ml-2 ${dropdownOpen ? 'rotate-180' : ''} transition-transform`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-gray-800 rounded-lg shadow-lg z-10">
                <Link
                  to="/services/tenant-representation"
                  className="block text-gray-300 py-2 px-4 text-sm cursor-pointer hover:text-purple-500"
                  onClick={() => {
                    setDropdownOpen(false);
                    setIsOpen(false);
                  }}
                >
                  Tenant Representation
                </Link>
                <Link
                  to="/services/landlord-representation"
                  className="block text-gray-300 py-2 px-4 text-sm cursor-pointer hover:text-purple-500"
                  onClick={() => {
                    setDropdownOpen(false);
                    setIsOpen(false);
                  }}
                >
                  Landlord Representation
                </Link>
                <Link
                  to="/services/location-data-solutions"
                  className="block text-gray-300 py-2 px-4 text-sm cursor-pointer hover:text-purple-500"
                  onClick={() => {
                    setDropdownOpen(false);
                    setIsOpen(false);
                  }}
                >
                  Location Data Solutions
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/contact"
            className="block text-white bg-purple-700 rounded-lg text-sm lg:text-base py-2 px-4 cursor-pointer hover:bg-purple-800"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
