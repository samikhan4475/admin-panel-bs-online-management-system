import React from 'react';
import { FiBell } from "react-icons/fi";
import { CgSearch } from "react-icons/cg";
import { BsEnvelopeFill } from "react-icons/bs";
import { Hamburger } from '../hamburger/hamburger';
import { Row, Col } from 'react-bootstrap';
import { DropdownMenu } from '../dropdown';
import './header.css';

const Header = ({ active, setActive }) => {
    return (
        <>
            {/* Top header with logo and title */}
            <Row className='p-3 align-items-center header-top'>
                <Col xs={8} md={6} className="d-flex align-items-center gap-2">
                    {/* <img 
                        src="http://www.giccl.edu.pk/assets/images/logonewgic-144x144.jpg" // Replace with your logo path
                        alt="GIGCCL Logo"
                        className="admin-logo"
                    /> */}
                    <h2 className="admin-title m-0">GIGCCL Admin Panel</h2>
                </Col>
                <Col xs={4} md={6} className="d-flex justify-content-end align-items-center gap-3">
                    <FiBell className="fs-5 text-secondary" />
                    <BsEnvelopeFill className="fs-5 text-secondary" />
                    <DropdownMenu />
                </Col>
            </Row>

            {/* Existing search + hamburger row */}
            <Row className='p-3' style={{ backgroundColor: '' }}>
                <Col xs={10} md={9} className="d-flex align-items-center gap-2">
                    <Hamburger setActive={setActive} active={active} />
                    {/* <CgSearch className="fs-5 text-secondary" /> */}
                </Col>
                <Col xs={2} md={3} className="d-flex align-items-center gap-2">
                    {/* Icons already included above; you can remove duplicates if desired */}
                </Col>
            </Row>
        </>
    )
}

export { Header };
