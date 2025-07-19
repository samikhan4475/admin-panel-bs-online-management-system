import Spinner from 'react-bootstrap/Spinner';
import { Form } from 'formik';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TextField } from '../common/reusable';
import { Formik } from 'formik';
import { initialValuesSignUp, validationSchemaSignUp } from '../common/schema';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import React, { useState } from 'react';

const SignupForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            const response = await axios.post('https://backend-code-mz3qsr6jo-awais-12345s-projects.vercel.app/api/auth/register', values);
            if (response.status === 201) {
                toast.success("Registration submitted successfully!");
                navigate("/");
            } else {
                toast.error("Invalid username or password");
            }
        } catch (error) {
            if (error.response) {
                const message =
                    error.response.data.message ||
                    "Login failed. Please check your credentials.";
                toast.error(message);
            } else if (error.request) {
                toast.error("No response from server. Please try again later.");
            } else {
                toast.error("An unexpected error occurred.");
            }
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
                <Row className="p-4 shadow-lg rounded-4" style={{ backgroundColor: '#e0f7fa', maxWidth: '400px', width: '100%' }}>
                    <Col>
                        <h2 className="text-center mb-4 text-primary">Sign Up</h2>
                        <Formik initialValues={initialValuesSignUp} validationSchema={validationSchemaSignUp}
                            onSubmit={handleSubmit}>
                            <Form>
                                <TextField label='Name' type='name' placeholder='Enter name' name='name' />
                                <TextField label='Email address' type='email' placeholder='Enter email' name='email' />
                                <TextField label='Password' type='password' placeholder='Password' name='password' />
                                <Button variant="primary" className='w-100' type="submit"> {loading ? (
                                    <>
                                        <Spinner animation="border" size="sm" role="status" className="me-2" />
                                        Sbmitting...
                                    </>
                                ) : (
                                    'Submit'
                                )}</Button>
                            </Form>
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export { SignupForm }

