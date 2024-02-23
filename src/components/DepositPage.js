import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

function DepositPage() {
  const [deposit, setDeposit] = useState('');
  const [balance, setBalance] = useState(0);

  const handleDeposit = (e) => {
    e.preventDefault();
    const depositAmount = parseFloat(deposit);
    if (!isNaN(depositAmount) && depositAmount > 0) {
      setBalance(balance + depositAmount);
      setDeposit(''); // Clear the input field
    }
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}> {/* Gray background for the page */}
      <Card className="mt-5 mx-auto navy-blue-background" style={{ maxWidth: '30rem' }}> {/* Navy blue card background */}
        <Card.Body>
          <Card.Title className="navy-blue-text">Deposit Funds</Card.Title> {/* Navy blue text */}
          <Form onSubmit={handleDeposit}>
            <Form.Group className="mb-3" controlId="depositAmount">
              <Form.Label className="navy-blue-text">Amount to Deposit</Form.Label> {/* Navy blue text */}
              <Form.Control 
                type="number" 
                value={deposit} 
                onChange={(e) => setDeposit(e.target.value)} 
                placeholder="Enter deposit amount" 
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="navy-blue-background">Deposit</Button> {/* Navy blue button */}
          </Form>
          <div className="mt-3 navy-blue-text"> {/* Navy blue text */}
            <strong>Current Balance:</strong> ${balance.toFixed(2)}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DepositPage;
