import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCashier } from '../actions/adminActions';

const CashierList = () => {
  const cashiers = useSelector((state) => state.admin.cashiers);
  const dispatch = useDispatch();

  const handleDeleteCashier = (cashierId) => {
    dispatch(deleteCashier(cashierId));
  };

  return (
    <div>
      <h2>Cashier List</h2>
      <ul>
        {cashiers.map((cashier) => (
          <li key={cashier.id}>
            <strong>Username:</strong> {cashier.username}, <strong>Email:</strong> {cashier.email}
            <button onClick={() => handleDeleteCashier(cashier.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CashierList;
