import React from 'react';
import ContactForm from './ContactForm';

const LocationDataPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-500 md:text-left md:mb-8">Location Data Solutions</h1>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
          <p className="text-lg leading-relaxed">
            Our Location Data Solutions provide you with comprehensive insights into the best
            locations for your business or personal needs. We analyze various data points, including
            demographics, traffic patterns, and competitive landscapes, to help you make informed
            decisions on where to establish your presence.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/fa3730ba77e7313cbec57301a2d8be6337be19b0/c0b36/_next/static/images/header-60575468562fa5f2aee652b7f758a470.png"
            alt="Location Data Solutions"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      <ContactForm title={"Are you interested? Don't hesitate to contact us"} />
    </div>
  );
};

export default LocationDataPage;
