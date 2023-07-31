import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCashier } from '../../redux/actions/adminActions';

const CashierForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCashierData = {
      username,
      email,
      password,
    };

    // Assuming you have an action named createCashier in actions/adminActions.js
    dispatch(createCashier(newCashierData));

    // Reset the form after submission
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Create Cashier</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Create Cashier</button>
      </form>
    </div>
  );
};

export default CashierForm;
