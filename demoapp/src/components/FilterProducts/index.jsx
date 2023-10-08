import React, { useState, useMemo } from 'react';

// Dummy data: List of products
const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
  { id: 2, name: 'Shirt', category: 'Clothing', price: 20 },
  { id: 3, name: 'Coffee Maker', category: 'Home Appliances', price: 80 },
  // ... imagine more products
];

function FilterProducts() {
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name'); // can be 'name' or 'price'

  const filteredAndSortedProducts = useMemo(() => {
    let filteredProducts = filterCategory === 'All' ? products : products.filter(product => product.category === filterCategory);

    return filteredProducts.sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      }
      return a.name.localeCompare(b.name);
    });
  }, [filterCategory, sortBy]);

  return (
    <div>
      <h1>Product List</h1>
      
      <div>
        <label>
          Filter by Category: 
          <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home Appliances">Home Appliances</option>
          </select>
        </label>

        <label>
          Sort by: 
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </label>
      </div>

      <ul>
        {filteredAndSortedProducts.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterProducts;
