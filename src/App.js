import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './view/LandingPage';
import withRoot from './withRoot';
import AboutUsPage from './view/AboutUsPage';
import WhyPanbooPage from './view/WhyPanbooPage';
import WhyBambooPage from './view/WhyBamboo';
import OurCreationPage from './view/OurCreationsPage';

// import Contact from './view/Contact';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/why-panboo" element={<WhyPanbooPage />} />
          <Route path="/why-bamboo" element={<WhyBambooPage />} />
          <Route path="/products-list" element={<OurCreationPage />} />
          
          {/* <Route path="/contact" element={<Contact />} />  */}
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default withRoot(App);
