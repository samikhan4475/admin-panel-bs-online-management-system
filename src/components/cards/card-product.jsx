import React from 'react'
import { Card } from 'react-bootstrap'
import { LineChart, Line, ResponsiveContainer } from 'recharts';
const ProductCard= () => {
    const data = [
        { value: 400 }, { value: 300 }, { value: 500 },
        { value: 600 }, { value: 200 }, { value: 350 }, { value: 450 },
    ];
    return (
        <div>
            <Card style={{backgroundColor:'lightcoral'}} >
                <Card.Header>
                    <h3>Products</h3>
                    <h4>$139,985</h4>
                </Card.Header>
                <Card.Body>
                    <ResponsiveContainer width="100%" height={30}>
                        <LineChart data={data}>
                            <Line
                                dataKey="value"
                                stroke={"#4287f5"}
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </Card.Body>
            </Card>
        </div>
    )
}

export { ProductCard }