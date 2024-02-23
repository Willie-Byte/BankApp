import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';

const CreateAccountPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    if (!name) {
      alert("Name cannot be blank.");
      return false;
    }
    if (!email) {
      alert("Email cannot be blank.");
      return false;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccess(true);
      setFormSubmitted(true);
      // Reset form for next submission
      resetForm();
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleAddAnotherAccount = () => {
    setShowSuccess(false);
    setFormSubmitted(false);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Create Account</Card.Title>
        {showSuccess && (
          <Alert variant="success">
            Account created successfully!
            <Button onClick={handleAddAnotherAccount} variant="info" className="ml-2">Add Another Account</Button>
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={!name || !email || password.length < 8}>
            Create Account
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CreateAccountPage;
