import React from 'react';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector((state) => state.admin.products);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>Product Name:</strong> {product.productName}, <strong>Price:</strong> {product.productPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
