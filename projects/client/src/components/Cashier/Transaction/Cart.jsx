import React from 'react';

const Cart = ({ cartItems, updateCartItem, deleteCartItem }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => updateCartItem(item.id)}>Update</button>
            <button onClick={() => deleteCartItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
