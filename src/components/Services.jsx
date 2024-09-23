import React from 'react';
import { FaHome, FaLandmark, FaMapMarkerAlt } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaHome className="text-4xl text-blue-500" />,
    title: 'Tenant Representation',
    description: 'Expert guidance for tenants in finding their ideal rental property.',
  },
  {
    id: 2,
    icon: <FaLandmark className="text-4xl text-blue-500" />,
    title: 'Landlord Representation',
    description: 'Professional services for landlords to manage and lease their properties.',
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt className="text-4xl text-blue-500" />,
    title: 'Location Data Solutions',
    description: 'Advanced analytics to find the best locations for your needs.',
  },
];

const Services = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center items-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <a href="/" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                View More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
