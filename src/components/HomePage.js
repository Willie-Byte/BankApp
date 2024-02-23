import React from 'react';
import { Container, Navbar, Nav, Card, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">BadBank</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/create-account">Create Account</Nav.Link>
            <Nav.Link as={NavLink} to="/deposit">Deposit</Nav.Link>
            <Nav.Link as={NavLink} to="/withdraw">Withdraw</Nav.Link>
            <Nav.Link as={NavLink} to="/all-data">All Data</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="my-5">
        <Card style={{ width: '18rem', margin: '0 auto' }}>
          <Card.Body>
            <Card.Title>Create Account</Card.Title>
            <Card.Text>
              To create an account, all fields must be filled and password must be at least 8 characters.
            </Card.Text>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Create Account
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default HomePage;
