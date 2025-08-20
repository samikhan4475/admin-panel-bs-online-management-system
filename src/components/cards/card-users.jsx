import React from 'react'
import { Card, Table, Badge } from 'react-bootstrap'
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import './card-user.css'; // import CSS

const UserCard = () => {
    const data = [
        { value: 400 }, { value: 300 }, { value: 500 },
        { value: 600 }, { value: 200 }, { value: 350 }, { value: 450 },
    ];

    const students = [
        { id: "2021-001", name: "Ali Khan", semester: "5th", cnic: "35202-1234567-8", fee: "Submitted" },
        { id: "2021-002", name: "Sara Ahmed", semester: "3rd", cnic: "35201-9876543-1", fee: "Pending" },
        { id: "2021-003", name: "Usman Ali", semester: "7th", cnic: "35200-5555555-2", fee: "Submitted" },
        { id: "2021-004", name: "Ayesha Noor", semester: "1st", cnic: "35203-3333333-4", fee: "Pending" },
        { id: "2021-005", name: "Hassan Raza", semester: "2nd", cnic: "35202-4444444-5", fee: "Submitted" },
        { id: "2021-006", name: "Maria Khan", semester: "4th", cnic: "35201-6666666-6", fee: "Submitted" },
        { id: "2021-007", name: "Bilal Ahmed", semester: "6th", cnic: "35200-7777777-7", fee: "Pending" },
        { id: "2021-008", name: "Zoya Malik", semester: "3rd", cnic: "35203-8888888-8", fee: "Submitted" },
        { id: "2021-009", name: "Omar Farooq", semester: "5th", cnic: "35202-9999999-9", fee: "Submitted" },
        { id: "2021-010", name: "Hina Iqbal", semester: "2nd", cnic: "35201-1111111-0", fee: "Pending" },
        { id: "2021-011", name: "Faisal Shah", semester: "7th", cnic: "35200-2222222-1", fee: "Submitted" },
    ];

    return (
        <div>
            <Card className="user-card shadow-sm">
                <Card.Header className="user-card-header d-flex justify-content-between align-items-center">
                    <div>
                        <h3>Registered Students</h3>
                        <h5>Total: {students.length}</h5>
                    </div>
                </Card.Header>
                <Card.Body>
                    <ResponsiveContainer width="100%" height={40}>
                        <LineChart data={data}>
                            <Line
                                dataKey="value"
                                stroke={"#ff6f61"}
                                strokeWidth={3}
                                type="monotone"
                            />
                        </LineChart>
                    </ResponsiveContainer>

                    <div className="student-table-container mt-4">
                        <Table hover responsive className="student-table">
                            <thead>
                                <tr>
                                    <th>Registration ID</th>
                                    <th>Name</th>
                                    <th>Semester</th>
                                    <th>CNIC</th>
                                    <th>Fee Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.semester}</td>
                                        <td>{student.cnic}</td>
                                        <td>
                                            <Badge 
                                                bg={student.fee === "Submitted" ? "success" : "danger"} 
                                                className="py-1 px-2"
                                            >
                                                {student.fee}
                                            </Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export { UserCard }
