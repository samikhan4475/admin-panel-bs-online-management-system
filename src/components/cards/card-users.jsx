import React from 'react'
import { Card } from 'react-bootstrap'
import { LineChart, Line, ResponsiveContainer } from 'recharts';
const UserCard = () => {
    const data = [
        { value: 400 }, { value: 300 }, { value: 500 },
        { value: 600 }, { value: 200 }, { value: 350 }, { value: 450 },
    ];
    return (
        <div>
            <Card style={{backgroundColor:'lightsteelblue'}} >
                <Card.Header>
                    <h3>users</h3>
                    <h4>$235,312</h4>
                </Card.Header>
                <Card.Body>
                    <ResponsiveContainer width="100%" height={30}>
                        <LineChart data={data}>
                            <Line
                                dataKey="value"
                                stroke={"#82ca9d"}
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </Card.Body>
            </Card>
        </div>
    )
}

export { UserCard }