import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

function WithdrawPage() {
  const [withdraw, setWithdraw] = useState('');
  const [balance, setBalance] = useState(100); // Starting balance for demonstration

  const handleWithdraw = (e) => {
    e.preventDefault();
    // Add validation for input (ensure it's a number, not negative, and less than balance)
    const withdrawAmount = parseFloat(withdraw);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= balance) {
      setBalance(balance - withdrawAmount);
      setWithdraw(''); // Clear the input field
      // Add any additional logic or alerts as needed
    }
  };

  return (
    <Card className="mt-5 mx-auto" style={{ maxWidth: '30rem', backgroundColor: '#f8f9fa' }}>
      <Card.Body>
        <Card.Title style={{ color: '#003366' }}>Withdraw Funds</Card.Title>
        <Form onSubmit={handleWithdraw}>
          <Form.Group className="mb-3" controlId="withdrawAmount">
            <Form.Label>Amount to Withdraw</Form.Label>
            <Form.Control 
              type="number" 
              value={withdraw} 
              onChange={(e) => setWithdraw(e.target.value)} 
              placeholder="Enter withdrawal amount" 
              style={{ borderColor: '#003366' }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" style={{ backgroundColor: '#003366' }}>
            Withdraw
          </Button>
        </Form>
        <div className="mt-3" style={{ color: '#003366' }}>
          <strong>Available Balance:</strong> ${balance.toFixed(2)}
        </div>
      </Card.Body>
    </Card>
  );
}

export default WithdrawPage;
