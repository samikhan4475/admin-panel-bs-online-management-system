import { React } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TextField } from '../common/reusable';
import { Formik } from 'formik';
import { initialvaluesnewpassword, validationSchemanewpassword } from '../common/schema';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axiosInstance from '../utils/interceptor';

const NewPassword = () => {
    const { token } = useParams(); // Grab token from URL
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (values) => {
        setLoading(true);
        console.log('Form submitted with values:', values);
        try {
            const response = await axiosInstance.put(`/api/auth/resetpassword/${token}`,
                values);
            if (response.status === 200) {
                toast.success("Password updated successfully!");
                navigate("/login");
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
                        <h2 className="text-center mb-4 text-primary">New Password</h2>
                        <Formik initialValues={initialvaluesnewpassword} validationSchema={validationSchemanewpassword} onSubmit={handleSubmit}>
                            <Form>
                                <TextField label='New Password' placeholder='Enter new password' type='password' name='newPassword' />
                                <TextField label='Confirm Password' placeholder='Confirm new password' type='password' name='confirmPassword' />
                                <Button variant="primary" type="submit"> {loading ? (
                                    <>
                                        <Spinner animation="border" size="sm" role="status" className="me-2" />
                                        Updating...
                                    </>
                                ) : (
                                    'Reset Password'
                                )}</Button>
                            </Form>
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export { NewPassword }
