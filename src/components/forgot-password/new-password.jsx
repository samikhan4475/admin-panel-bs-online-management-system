import React from 'react'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const NewPassword = () => {
    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
                <Row className="p-4 shadow-lg rounded-4" style={{ backgroundColor: '#e0f7fa', maxWidth: '400px', width: '100%' }}>
                    <Col>
                        <h2 className="text-center mb-4 text-primary">New Password</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="create new password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="create new password" />
                            </Form.Group>
                            <Link to={'/login-form'}><Button variant="primary" type="submit">Change</Button></Link>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export { NewPassword }
