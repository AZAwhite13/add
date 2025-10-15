import React from 'react';
import ProductList from '../components/Product/ProductList';

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <ProductList />
      </div>
    </div>
  );
};

export default Products;