import React from 'react';
import ContactForm from './ContactForm';

const AboutUs = () => {
  return (
    <div className="w-full">
      <section className="flex flex-wrap items-center p-6 text-black border border-gray-200 w-full">
        <div className="w-full md:w-1/2">
          <img
            src="https://media.istockphoto.com/id/1363104989/photo/diverse-team-of-professional-businesspeople-meeting-in-the-office-conference-room-creative.jpg?s=612x612&w=0&k=20&c=TGdAKum3fkCmS0R57vk7tbZaGkQ_Lc9EC2uvOhTowIE="
            alt="Real Estate Office"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Welcome to Real Estate</h2>
          <p className="text-center md:text-left">
            At Real Estate, we are dedicated to finding your dream home. Our team of experts
            is here to guide you through every step of the buying or selling process, making
            it smooth and hassle-free.
          </p>
        </div>
      </section>

      <section className="flex flex-wrap items-center p-6 text-black border border-gray-200 w-full">
        <div className="w-full md:w-1/2 md:order-2">
          <img
            src="https://images.pexels.com/photos/17895952/pexels-photo-17895952/free-photo-of-mar-paisaje-vacaciones-relajacion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Real Estate Team"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pr-8 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Our Vision</h2>
          <p className="text-center md:text-left">
            Our vision is to be the leading real estate agency known for our commitment to
            excellence and our unparalleled service. We strive to exceed your expectations
            and help you make informed decisions.
          </p>
        </div>
      </section>

      <section className="flex flex-wrap items-center p-6 text-black border border-gray-200 w-full">
        <div className="w-full md:w-1/2">
          <img
            src="https://media.istockphoto.com/id/519332012/photo/happy-black-family-standing-outside-their-house-dad.jpg?s=612x612&w=0&k=20&c=vhDgDobHuKVlkFIigSSl340I9JyRkh5XcRZIop_wT8s="
            alt="Real Estate Office"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Our Commitment</h2>
          <p className="text-center md:text-left">
            We are committed to providing exceptional service to every client. Whether you're
            buying your first home or looking for a new investment property, we offer personalized
            assistance to ensure your needs are met.
          </p>
        </div>
      </section>

      <section className="text-center my-10 w-full">
        <h2 className="text-2xl font-bold mb-6">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8 w-full">
          <div className="w-1/2 sm:w-1/3 md:w-1/5">
            <img
              src="https://via.placeholder.com/150x150?text=John+Doe"
              alt="John Doe"
              className="w-full h-auto rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold mt-2">John Doe</h3>
            <p className="text-gray-600">Founder</p>
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/5">
            <img
              src="https://via.placeholder.com/150x150?text=Jane+Smith"
              alt="Jane Smith"
              className="w-full h-auto rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold mt-2">Jane Smith</h3>
            <p className="text-gray-600">Lead Agent</p>
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/5">
            <img
              src="https://via.placeholder.com/150x150?text=Emily+Johnson"
              alt="Emily Johnson"
              className="w-full h-auto rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold mt-2">Emily Johnson</h3>
            <p className="text-gray-600">Marketing Director</p>
          </div>
        </div>
      </section>
      
      <ContactForm title={"Get in touch with us"}/>
    </div>
  );
};

export default AboutUs;
