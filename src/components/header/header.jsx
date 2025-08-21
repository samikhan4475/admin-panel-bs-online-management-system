import React from "react";
import { Hamburger } from "../hamburger/hamburger";
import { Row, Col, Button } from "react-bootstrap";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ active, setActive }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <>
      {/* Top header with logo and title */}
      <Row
        className="p-3 align-items-center header-top"
        style={{ justifyContent: "space-between", maxWidth: "84%" }}
      >
        <Col xs={8} md={6}>
          <h2 className="admin-title">Admin Panel</h2>
        </Col>
        <Col xs={4} md={6} className="text-end ">
          <Button
            style={{
              background: "#fff",
              color: "#000",
            }}
            className="shadow-none"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Col>
      </Row>

      {/* Existing search + hamburger row */}
      <Row className="p-3" style={{ backgroundColor: "" }}>
        <Col xs={10} md={9} className="d-flex align-items-center gap-2">
          {/* <Hamburger setActive={setActive} active={active} /> */}
          {/* <CgSearch className="fs-5 text-secondary" /> */}
        </Col>
        <Col xs={2} md={3} className="d-flex align-items-center gap-2">
          {/* Icons already included above; you can remove duplicates if desired */}
        </Col>
      </Row>
    </>
  );
};

export { Header };
