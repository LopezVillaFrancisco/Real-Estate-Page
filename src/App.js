import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PropertiesPage from './components/PropertiesPage';
import PropertyDetail from './components/PropertyDetail';
import Navbar from './components/Navbar';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';
import TenantRepPage from './components/TenantRepPage';
import LandordRepPage from './components/LandordRepPage';
import LocationDataPage from './components/LocationDataPage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/properties/:id" element={<PropertyDetail />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/tenant-representation" element={<TenantRepPage />} />
        <Route path="/services/landlord-representation" element={<LandordRepPage />} />
        <Route path="/services/location-data-solutions" element={<LocationDataPage />} />
      </Routes>
    </Router>
  );
}

export default App;
