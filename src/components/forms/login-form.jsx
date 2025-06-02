import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LoginForm = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
            <Row className="p-4 shadow-lg rounded-4" style={{ backgroundColor: '#f0f8ff', maxWidth: '400px', width: '100%' }}>
                <Col>
                    <h2 className="text-center mb-4 text-primary">Login</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Link to={'/email' }><span>Forgot password</span></Link>
                        </Form.Group>
                        <div className="d-flex align-items-center justify-content-between">
                            <Link to="/dashboard">
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </Link>
                            <span>
                                <Link to={"/SignupForm"}>
                                    Register
                                </Link>
                            </span>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export { LoginForm };
