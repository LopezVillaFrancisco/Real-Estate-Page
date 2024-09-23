import React from 'react';
import ContactForm from './ContactForm';

const TenantRepPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-500 md:text-left md:mb-8">Tenant Representation</h1>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
          <p className="text-lg leading-relaxed">
            Our Tenant Representation services are designed to assist tenants in finding and securing
            the perfect property that meets their needs. We offer personalized support throughout
            the leasing process, from identifying suitable properties to negotiating lease terms.
            Our goal is to ensure that you find a space that aligns with your business or personal
            requirements, while also getting the best possible deal.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://urbania.pe/blog/wp-content/uploads/2023/07/agente-exitoso.jpeg"
            alt="Tenant Representation"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      <ContactForm title={"Are you interested? Don't hesitate to contact us"} />
    </div>
  );
};

export default TenantRepPage;
