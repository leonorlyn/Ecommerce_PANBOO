import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import CategoryFilter from '../components/CategoryFilter'; // 假设你有这个组件
import productsData from '../data/data.json';

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
    <div>
      <CategoryFilter onFilterChange={handleFilterChange} />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}

export default ProductPage;
