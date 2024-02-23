import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AccountDetails() {
  const [account, setAccount] = useState({});

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/account');
        setAccount(response.data);
      } catch (error) {
        console.error("Error fetching account details:", error);
      }
    };

    fetchAccountDetails();
  }, []);

  return (
    <div>
      <h2>Account Details</h2>
      <p>Name: {account.name}</p>
      <p>Balance: ${account.balance}</p>
      {/* Display other account details as needed */}
    </div>
  );
}

export default AccountDetails;
