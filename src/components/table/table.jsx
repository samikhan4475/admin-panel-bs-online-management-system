import React from 'react'
import Table from 'react-bootstrap/Table';
const OrderTable = ({ array }) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Payment</th>
                        <th>Address</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {array?.map((ele, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.price}</td>
                            <td>{ele.payment}</td>
                            <td>{ele.address}</td>
                            <td>{ele.city}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export { OrderTable }
