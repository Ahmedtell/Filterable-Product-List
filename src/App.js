import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css'; // استيراد ملف CSS


const App = () => {
  // Array of products
  const products = [
    { name: 'Laptop', category: 'Electronics', price: 800 },
    { name: 'Smartphone', category: 'Electronics', price: 500 },
    { name: 'T-Shirt', category: 'Clothing', price: 20 },
    { name: 'Jeans', category: 'Clothing', price: 40 },
    { name: 'Book: JavaScript for Beginners', category: 'Books', price: 15 },
    { name: 'Book: CSS Mastery', category: 'Books', price: 25 }
  ];

  // State to manage the active filter
  const [activeCategory, setActiveCategory] = useState('All');

  // Function to filter products based on the selected category
  const filterProducts = (category) => {
    setActiveCategory(category);
  };

  // Filtered products based on the selected category
  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="app">
      <h1>Product List</h1>

      {/* Pass the filter function and filtered products as props */}
      <ProductList 
        products={filteredProducts} 
        filterProducts={filterProducts} 
        activeCategory={activeCategory}
      />
    </div>
  );
};

export default App;

