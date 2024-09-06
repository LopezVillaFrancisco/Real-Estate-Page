import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50 transition-transform duration-500 ${isLoaded ? 'transform -translate-y-full' : 'transform translate-y-0'}`}>
      <div className="text-4xl font-bold">Real Estate</div>
    </div>
  );
};

export default Loader;
