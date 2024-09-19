// src/context/ProductContext.js

import React, { createContext, useState } from 'react';

// Create a Context for the product data
export const ProductContext = createContext();

// Create a Provider component
export const ProductProvider = ({ children }) => {
  const [products] = useState([
    { id: 1, name: 'Assorted Coffee', description: 'Rich and aromatic coffee.', image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-768x768.jpg', price: '5.99' },
    { id: 2, name: 'Hand Sanitizer', description: 'Hand sanitizer with 70% alcohol.', image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer.jpg', price: '1.99' },
    { id: 3, name: 'Handpicked Red Chillies', description: 'Spicy and flavorful chili.', image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies.jpg', price: '4.99' },
    { id: 4, name: 'Natural Extracted Edible Oil', description: 'High-quality cooking oil.', image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil.jpg', price: '6.49' },
    { id: 5, name: 'Fresh Orange juice', description: '', image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz.jpg', price: '6.49' },
  ]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
