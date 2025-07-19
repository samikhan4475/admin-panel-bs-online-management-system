import React from 'react';
import { FiBell } from "react-icons/fi";
import { CgSearch } from "react-icons/cg";
import { BsEnvelopeFill } from "react-icons/bs";
import { Hamburger } from '../hamburger/hamburger';
import { Row, Col } from 'react-bootstrap';
import { DropdownMenu } from '../dropdown';
// import { ActiveContext } from '../../App'; // Adjust the import path as necessary
// import { useContext } from "react";


const Header = ({ active, setActive }) => {
    // const { user } = useContext(ActiveContext);
    return (
        <>
            <Row className='p-3' style={{ backgroundColor: 'lightgray' }}>
                <Col xs={10} md={9} className="d-flex align-items-center gap-2">
                    <Hamburger setActive={setActive} active={active} />
                    <CgSearch className="fs-5 text-secondary" />
                </Col>
                <Col xs={2} md={3} className="d-flex align-items-center gap-2">
                    <FiBell className="fs-5 text-secondary" />
                    <BsEnvelopeFill className="fs-5 text-secondary" />
                    <DropdownMenu />
                </Col>
            </Row>
        </>
    )
}

export { Header };
