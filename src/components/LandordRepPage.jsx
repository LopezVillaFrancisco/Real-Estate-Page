import React from 'react';
import ContactForm from './ContactForm';

const LandlordRepPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-500 md:text-left md:mb-8">Landlord Representation</h1>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
          <p className="text-lg leading-relaxed">
            Our Landlord Representation services focus on helping property owners maximize their
            rental income and manage their properties effectively. We provide expert advice on
            property marketing, tenant screening, and lease agreements to ensure that you get
            the best possible returns on your investment.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://media.istockphoto.com/id/1408150775/es/foto/pareja-comprando-una-casa-y-revisando-el-contrato-con-su-agente-inmobiliario.jpg?s=612x612&w=0&k=20&c=N_xayTXYeA5aB6LDRTTnqbLQkwLqt9KdVDoBrPwCTGU="
            alt="Landlord Representation"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      <ContactForm title={"Are you interested? Don't hesitate to contact us"} />
    </div>
  );
};

export default LandlordRepPage;
