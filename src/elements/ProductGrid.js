import Grid from '@mui/material/Grid';
import {ProductCard} from '../components/ProductCard'; // Ensure this import matches the named/default export

function ProductGrid({ products }) {
  // Add a check to ensure products is not undefined
  if (!products) {
    // Return null or some loading indicator as appropriate
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductGrid; // Make sure the export matches how you import it
