import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/video-placeholder.png')" }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/3446263-uhd_3840_2160_24fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex justify-center items-center h-full px-4">
        <div className="text-center text-white max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Find Your Dream Property
          </h1>
          <Link to="/properties">
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded text-sm sm:text-base md:text-lg">
              View Properties
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
