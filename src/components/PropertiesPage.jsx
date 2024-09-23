import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import properties from '../propertiesData';
import { FaBed, FaMapMarkerAlt, FaTag } from 'react-icons/fa';

const PropertiesPage = () => {
  const [filters, setFilters] = useState({
    bedrooms: '',
    location: '',
    priceRange: ''
  });

  const uniqueBedrooms = [1, 2, 3, 4, 5, 6, 8];
  const uniquePriceRanges = [
    '$100,000 - $200,000',
    '$200,000 - $300,000',
    '$300,000 - $400,000',
    '$400,000 - $500,000',
    '$500,000 - $600,000',
    '$600,000 - $1,000,000',
    '$1,000,000+'
  ];
  const uniqueLocations = Array.from(new Set(properties.map(p => p.location)));

  const priceRangeMatches = (price, range) => {
    const priceNumber = parseInt(price.replace(/[^0-9]/g, ''));
    if (range.includes('+')) {
      const min = parseInt(range.split('+')[0].replace(/[^0-9]/g, ''));
      return priceNumber >= min;
    } else {
      const [min, max] = range.split(' - ').map(r => parseInt(r.replace(/[^0-9]/g, '')));
      return priceNumber >= min && priceNumber <= max;
    }
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }));
  };

  const handleRemoveFilter = (filterType) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: ''
    }));
  };

  const filteredProperties = properties.filter(property => {
    return (
      (filters.bedrooms ? property.rooms === parseInt(filters.bedrooms) : true) &&
      (filters.location ? property.location === filters.location : true) &&
      (filters.priceRange ? priceRangeMatches(property.price, filters.priceRange) : true)
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Available Properties</h1>
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="flex flex-col justify-start w-full sm:flex-row sm:items-center">
          <div className="flex items-center mb-2 justify-center sm:mb-0 md:justify-start">
            <FaBed className="text-blue-500 mr-2 text-xl" />
            <label className="block text-sm font-medium text-gray-700 mr-2">Bedrooms</label>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
            {uniqueBedrooms.map(bedroom => (
              <button
                key={bedroom}
                onClick={() => handleFilterChange('bedrooms', bedroom.toString())}
                className={`px-4 py-2 rounded-lg text-white ${filters.bedrooms === bedroom.toString() ? 'bg-blue-500' : 'bg-gray-400'} hover:bg-blue-600`}
              >
                {bedroom}
              </button>
            ))}
            {filters.bedrooms && (
              <button
                onClick={() => handleRemoveFilter('bedrooms')}
                className="ml-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                Remove Bedrooms Filter
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-start w-full sm:flex-row sm:items-center">
          <div className="flex items-end mb-2 justify-center sm:mb-0 md:justify-start">
            <FaMapMarkerAlt className="text-blue-500 mr-2 text-xl" />
            <label className="block text-sm font-medium text-gray-700">Location</label>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
            {uniqueLocations.map(location => (
              <button
                key={location}
                onClick={() => handleFilterChange('location', location)}
                className={`px-4 py-2 rounded-lg text-white ${filters.location === location ? 'bg-blue-500' : 'bg-gray-400'} hover:bg-blue-600`}
              >
                {location}
              </button>
            ))}
            {filters.location && (
              <button
                onClick={() => handleRemoveFilter('location')}
                className="ml-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                Remove Location Filter
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-start w-full sm:flex-row sm:items-center">
          <div className="flex items-center mb-2 justify-center sm:mb-0 md:justify-start">
            <FaTag className="text-blue-500 mr-2 text-xl" />
            <label className="block text-sm font-medium text-gray-700">Price Range</label>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
            {uniquePriceRanges.map(range => (
              <button
                key={range}
                onClick={() => handleFilterChange('priceRange', range)}
                className={`px-4 py-2 rounded-lg text-white ${filters.priceRange === range ? 'bg-blue-500' : 'bg-gray-400'} hover:bg-blue-600`}
              >
                {range}
              </button>
            ))}
            {filters.priceRange && (
              <button
                onClick={() => handleRemoveFilter('priceRange')}
                className="ml-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                Remove Price Filter
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map(property => (
          <div key={property.id} className="border rounded-lg overflow-hidden shadow-lg bg-white">
            <img
              src={property.imageUrl[0]}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col h-44">
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{property.name}</h2>
                <div className="flex items-center mt-2">
                  <FaBed className="text-gray-500 mr-2" />
                  <p>{property.rooms} Bedrooms</p>
                </div>
                <div className="flex items-center mt-2">
                  <FaMapMarkerAlt className="text-gray-500 mr-2" />
                  <p>{property.location}</p>
                </div>
              </div>
              <div>
                <p className="text-lg font-bold text-blue-500">{property.price}</p>
              </div>
            </div>
            <div className="p-4">
              <Link to={`/properties/${property.id}`}>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
