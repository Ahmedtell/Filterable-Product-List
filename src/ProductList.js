import React from 'react';

const ProductList = ({ products, filterProducts, activeCategory }) => {
  // Categories for filtering
    const categories = ['All', 'Electronics', 'Clothing', 'Books'];

    return (
        <div>
        {/* Filter Buttons */}
        <div id="filter-section">
            {categories.map(category => (
            <button
                key={category}
                className={category === activeCategory ? 'active' : ''}
                onClick={() => filterProducts(category)}
            >
                {category}
            </button>
            ))}
        </div>

        {/* Product Display */}
        <div id="product-list">
            {products.length > 0 ? (
            products.map(product => (
                <div key={product.name} className="product-item">
                <div className="product-name">{product.name}</div>
                <div className="product-category">{product.category}</div>
                <div className="product-price">${product.price}</div>
                </div>
            ))
            ) : (
            <p>No products available.</p>
            )}
        </div>
        </div>
    );
};

export default ProductList;
