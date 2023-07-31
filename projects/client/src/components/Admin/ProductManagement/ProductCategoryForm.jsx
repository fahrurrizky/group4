import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductCategory } from '../../redux/actions/adminActions';

const ProductCategoryForm = () => {
  const [categoryName, setCategoryName] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCategoryData = {
      categoryName,
    };

    // Assuming you have an action named addProductCategory in actions/adminActions.js
    dispatch(addProductCategory(newCategoryData));

    // Reset the form after submission
    setCategoryName('');
  };

  return (
    <div>
      <h2>Add Product Category</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="categoryName">Category Name</label>
          <input
            type="text"
            id="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default ProductCategoryForm;
