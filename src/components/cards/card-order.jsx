import { Button, Card } from 'react-bootstrap'
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { OrderTable } from '../table';
import { Model } from '../model';
import { useState } from 'react';
const OrderCard = ({ showTable = true, showButton = true }) => {

    const [array, setArray] = useState([]);

    const data = [
        { value: 400 }, { value: 300 }, { value: 500 },
        { value: 600 }, { value: 200 }, { value: 350 }, { value: 450 },
    ];
    return (
        <div>
            <Card className='mb-5' style={{ backgroundColor: 'lightsalmon' }} >
                <Card.Header>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="">
                            <h3>Orders</h3>
                            <h4>$424,852</h4>
                        </div>
                        {showButton && (
                            <div className="">
                                <Model array={array} setArray={setArray} />
                            </div>
                        )}
                    </div>
                </Card.Header>
                <Card.Body>
                    <ResponsiveContainer width="100%" height={30}>
                        <LineChart data={data}>
                            <Line
                                dataKey="value"
                                stroke={"#8884d8"}
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </Card.Body>
            </Card>
            {showTable && (
                <div>
                    <div className="d-flex align-items-center justify-content-between p-2 rounded" style={{ backgroundColor: 'lightblue' }}>
                        <h4>Recent Orders</h4>
                        <Button size='sm'>View All</Button>
                    </div>
                    <OrderTable array={array} />
                </div>
            )}
        </div>
    )
}

export { OrderCard }
