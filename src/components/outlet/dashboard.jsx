import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { ColumnChart } from "../graphs";
import { AreaChart } from "../graphs";

import GoogleMaps from "../google-map/google-map";
import { OrderCard } from "../cards";
import "./dasboard.css";
const Dashboard = () => {
  return (
    <div className="mb-3">
      <Row>
        <Col md={12}>
          <OrderCard showTable={false} showButton={false} />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6} className="mb-4">
          <ColumnChart />
        </Col>

        <Col xs={12} md={6}>
          <AreaChart />
        </Col>

        <Col xs={12} md={6} className="mt-4">
          <Card className="p-4">
            <GoogleMaps />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export { Dashboard };
