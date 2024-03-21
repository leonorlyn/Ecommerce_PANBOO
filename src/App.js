import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductHero from './view/ProductHero';
import withRoot from './withRoot';
import AboutUs from './view/AboutUs';
// import Contact from './view/Contact';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<ProductHero />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/contact" element={<Contact />} />  */}
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default withRoot(App);
