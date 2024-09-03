import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="border rounded-lg shadow-lg">
          <div 
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleOpen(0)}
          >
            <h3 className="text-xl font-semibold">How can I schedule a property visit?</h3>
            {openIndex === 0 ? (
              <AiOutlineMinus className="text-xl" />
            ) : (
              <AiOutlinePlus className="text-xl" />
            )}
          </div>
          <div 
            className={`overflow-hidden transition-all duration-300 ${openIndex === 0 ? 'max-h-screen' : 'max-h-0'}`}
          >
            <p className="p-4 text-gray-600">
              You can schedule a visit through our contact form or by calling our offices directly.
            </p>
          </div>
        </div>
        <div className="border rounded-lg shadow-lg">
          <div 
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleOpen(1)}
          >
            <h3 className="text-xl font-semibold">Do you offer financing?</h3>
            {openIndex === 1 ? (
              <AiOutlineMinus className="text-xl" />
            ) : (
              <AiOutlinePlus className="text-xl" />
            )}
          </div>
          <div 
            className={`overflow-hidden transition-all duration-300 ${openIndex === 1 ? 'max-h-screen' : 'max-h-0'}`}
          >
            <p className="p-4 text-gray-600">
              Yes, we work with several banks to offer flexible financing options to our clients.
            </p>
          </div>
        </div>
        <div className="border rounded-lg shadow-lg">
          <div 
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleOpen(2)}
          >
            <h3 className="text-xl font-semibold">How can I list my property on your site?</h3>
            {openIndex === 2 ? (
              <AiOutlineMinus className="text-xl" />
            ) : (
              <AiOutlinePlus className="text-xl" />
            )}
          </div>
          <div 
            className={`overflow-hidden transition-all duration-300 ${openIndex === 2 ? 'max-h-screen' : 'max-h-0'}`}
          >
            <p className="p-4 text-gray-600">
              You can list your property by contacting us directly, and one of our agents will handle the process for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
