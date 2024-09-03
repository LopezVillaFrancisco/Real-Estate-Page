import React from 'react';

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Client Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-4 border rounded-lg shadow-lg">
          <p className="text-gray-600 italic">"Thanks to this company, I found the home of my dreams. The service was exceptional."</p>
          <p className="mt-4 font-semibold text-right">- Juan Pérez</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg">
          <p className="text-gray-600 italic">"The team was very professional and helped me find a property in record time."</p>
          <p className="mt-4 font-semibold text-right">- María López</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg">
          <p className="text-gray-600 italic">"Excellent experience from start to finish. I would recommend them to anyone looking for a new home."</p>
          <p className="mt-4 font-semibold text-right">- Carlos García</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
