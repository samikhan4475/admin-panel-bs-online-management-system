import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TextField } from '../common/reusable';
import { Formik } from 'formik';
import { initialValuesEmail, validationSchemaEmail } from '../common/schema';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Email = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        console.log('Form submitted with values:', values);
        // Here you would typically handle the form submission, e.g., sending a request to your backend
        setLoading(true);
        try {
            const response = await axios.post("https://backend-code-mz3qsr6jo-awais-12345s-projects.vercel.app/api/auth/forgotpassword", values);
            if (response.status === 200) {
                toast.success("Reset link sent to your email!");
            } else {
                toast.error("Something went wrong.");
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Server error. Try again.");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
                <Row className="p-4 shadow-lg rounded-4" style={{ backgroundColor: '#e0f7fa', maxWidth: '400px', width: '100%' }}>
                    <Col>
                        <h2 className="text-center mb-4 text-primary">Forgot Password</h2>
                        <Formik initialValues={initialValuesEmail} validationSchema={validationSchemaEmail} onSubmit={handleSubmit}>
                            <Form>
                                <TextField label='Email' placeholder='Enter email' type='email' name='email' />
                                <Button variant="primary" className='w-100' type="submit"> {loading ? (
                                    <>
                                        <Spinner animation="border" size="sm" role="status" className="me-2" />
                                        Sending...
                                    </>
                                ) : (
                                    'Send Reset Link'
                                )}</Button>
                            </Form>
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export { Email }
