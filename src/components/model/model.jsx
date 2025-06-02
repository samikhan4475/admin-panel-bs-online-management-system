import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

const Model = ({ array, setArray }) => {

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        setArray([data, ...array]);
        reset();
        handleClose();

    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add Order
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Plz Fill the Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label>Name:</label>
                        <input
                            type="text"
                            {...register("name", { required: ' Name is required' })}
                            placeholder=' Name'
                        />
                        {errors.name && <p>{errors.name.message}</p>}

                        <label>Email:</label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            placeholder="Email"
                        />
                        {errors.email && <p>{errors.email.message}</p>}

                        <label>Price:</label>
                        <input
                            type="number"
                            {...register("price", { required: 'Price is required' })}
                            placeholder='Price'
                        />
                        {errors.price && <p>{errors.price.message}</p>}

                        <label>Payment:</label>
                        <input
                            type="text"
                            {...register("payment", { required: 'Payment is required' })}
                            placeholder='Payment'
                        />
                        {errors.payment && <p>{errors.payment.message}</p>}


                        <label>Address:</label>
                        <input
                            type="text"
                            {...register("address", { required: "Address is required" })}
                            placeholder="Address"
                        />
                        {errors.address && <p>{errors.address.message}</p>}

                        <label>City:</label>
                        <input
                            type="text"
                            {...register("city", { required: "City is required" })}
                            placeholder="City"
                        />
                        {errors.city && <p>{errors.city.message}</p>}

                        <Button variant="primary" type="submit" disabled={isSubmitting}>
                            Submit Order
                        </Button>
                    </form>

                </Modal.Body>
            </Modal>
        </div>
    );
};

export { Model };
