import React from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaMapMarkerAlt } from 'react-icons/fa'; 
import properties from '../propertiesData'; 

const PropertyList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Featured Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.slice(0, 3).map((property) => (
          <div key={property.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={property.imageUrl[0]} alt={property.name} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{property.name}</h2>
                <p className="text-lg font-bold text-purple-700">{property.price}</p>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <FaBed className="mr-2" color='#6D28D9'/> {property.rooms} bedrooms
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <FaMapMarkerAlt className="mr-2" color='#6D28D9' /> {property.location}
              </div>
            </div>
            <div className="p-4">
              <Link to={`/properties/${property.id}`}>
                <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded">
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

export default PropertyList;
