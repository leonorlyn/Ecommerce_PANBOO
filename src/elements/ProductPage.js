import React, { useState } from 'react';
import Grid from '@mui/material/Grid'; // 导入Grid组件
import ProductGrid from './ProductGrid';
import CategoryFilter from '../components/CategoryFilter';
import productsData from '../data/data.json';
import { Typography, Divider } from '@mui/material';

function ProductPage() {
  const [products, setProducts] = useState(productsData);
  const [filter, setFilter] = useState({
    color: '',
    pattern: '',
    size: '',
  });

  const handleFilterChange = (type, value) => {
    setFilter(prev => ({
      ...prev,
      [type]: value,
    }));
  };

  const getFilteredProducts = () => {
    return products.filter(product => {
      return (
        (filter.color ? product.color === filter.color : true) &&
        (filter.pattern ? product.pattern === filter.pattern : true) &&
        (filter.size ? product.size === filter.size : true)
      );
    });
  };

  const filteredProducts = getFilteredProducts();

  return (
    <Grid container spacing={8}> 
      <Grid item xs={12} sm={4} md={3}>
        <Typography sx={{ mb:2, fontSize:25, color: 'primary.main',fontWeight:'bold' }}>
        Product List
        </Typography>
        <Divider sx={{ mb: 2 }} /> {/* 在这里添加分隔线 */}
        <CategoryFilter onFilterChange={handleFilterChange} />
      </Grid>
      <Grid item xs={12} sm={8} md={9}>
        <ProductGrid products={filteredProducts} />
      </Grid>
    </Grid>
  );
}

export default ProductPage;
