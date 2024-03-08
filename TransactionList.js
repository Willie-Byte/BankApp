import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/transactions');
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <span>{transaction.date}:</span> 
            <span>{transaction.type === 'deposit' ? 'Deposited' : 'Withdrew'} </span>
            <span>${Math.abs(transaction.amount).toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
