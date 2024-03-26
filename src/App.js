import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './view/LandingPage';
import withRoot from './withRoot';
import AboutUsPage from './view/AboutUsPage';
import WhyPanbooPage from './view/WhyPanbooPage';
import WhyBambooPage from './view/WhyBamboo';
import ClassicSeriesPage from './view/ClassicSeriesPage';
import OurWorkPage from './view/OurWorkPage';
import ManufacturingProcessPage from './view/ManufacturingProcessPage';

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
          <Route path="/classic-list" element={<ClassicSeriesPage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
          <Route path="/manufacturing-process" element={<ManufacturingProcessPage />} />
          {/* <Route path="/contact" element={<Contact />} />  */}
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default withRoot(App);
