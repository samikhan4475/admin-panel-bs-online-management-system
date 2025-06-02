import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const CodeVerification = () => {
    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
                <Row className="p-4 shadow-lg rounded-4" style={{ backgroundColor: '#e0f7fa', maxWidth: '400px', width: '100%' }}>
                    <Col>
                        <h2 className="text-center mb-4 text-primary">Code Verification</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="number" placeholder="Enter your code" />
                            </Form.Group>
                            <Link to={'/new-password'}><Button variant="primary" type="submit">Continue</Button></Link>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export { CodeVerification }
