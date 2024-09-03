import React from 'react';
import Hero from './Hero';
import PropertyList from './PropertyList';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import ContactForm from './ContactForm';
import Services from './Services';

const Home = () => {
  return (
    <div>
      <Hero />
      <PropertyList />
      <Services/>
      <Testimonials />
      <FAQ />
      <ContactForm title={"Contact us"} />
    </div>
  );
};

export default Home;
