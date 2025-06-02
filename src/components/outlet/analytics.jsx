import React from 'react'
import { AreaChart, ColumnChart, LineChart, PieChart } from '../graphs'
import { Row, Col } from 'react-bootstrap';
const Analytics = () => {
    return (
        <div>
            <Row className='mb-4'>
                <Col><h3>DashBoard</h3></Col>
            </Row>
            <Row className="">
                <Col xs={12} md={6} className='mb-4' >
                    <h5 className='m-0 p-2' style={{ backgroundColor: '#F0F0F0' }}>Sales Chart</h5>
                    <div style={{ backgroundColor: '#00B8D9' }}>
                        <ColumnChart />
                    </div>
                </Col>

                <Col xs={12} md={6} >
                    <h5 className='m-0 p-2' style={{ backgroundColor: '#F0F0F0' }}>Revenue Trend</h5>
                    <div style={{ backgroundColor: '#6554C0' }}>
                        <AreaChart />
                    </div>
                </Col>

                <Col xs={12} md={6}>
                    <h5 className='m-0 p-2' style={{ backgroundColor: '#F0F0F0' }}>Product Distribution</h5>
                    <div style={{ backgroundColor: '#FF5630' }}>
                        <PieChart />
                    </div>
                </Col>

                <Col xs={12} md={6} >
                    <h5 className='m-0 p-2' style={{ backgroundColor: '#F0F0F0' }}>Customer Growth</h5>
                    <div style={{ backgroundColor: '#FF7A00' }}>
                        <LineChart />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export { Analytics }
