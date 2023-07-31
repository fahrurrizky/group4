import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the product list from an API or Redux store (e.g., using an action)
    // Update the products state with the fetched data and set isLoading to false
    const fetchedProducts = [
      { id: 1, name: 'Product 1', price: 10.99 },
      { id: 2, name: 'Product 2', price: 20.49 },
      // Add more products as needed
    ];
    setProducts(fetchedProducts);
    setIsLoading(false);
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - Price: {product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
