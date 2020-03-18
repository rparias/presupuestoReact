import React from 'react';

function Expense({ expense }) {
  return (
    <li className="gastos">
      <p>
        {expense.descriptionExpense}{' '}
        <span className="gasto">$ {expense.quantity}</span>
      </p>
    </li>
  );
}

export default Expense;
