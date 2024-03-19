import React from 'react';
import ProductHero from './view/ProductHero';
import withRoot from './withRoot';

function App() {
  return (
    <React.Fragment>
      <ProductHero />
    </React.Fragment>
  );
}

export default withRoot(App);
