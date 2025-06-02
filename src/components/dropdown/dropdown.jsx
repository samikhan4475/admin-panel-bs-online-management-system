import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { BsPersonCircle } from "react-icons/bs";
import './dropdown.css';
const DropdownMenu = () => {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);

    return (
        <Dropdown show={show} onToggle={handleToggle}>
            <Dropdown.Toggle
                as="span"
                onClick={handleToggle}
                style={{ cursor: 'pointer' }}
                className=' dropdown-toggle'

            >
                <BsPersonCircle className="fs-4 text-secondary" />
            </Dropdown.Toggle>

            <Dropdown.Menu align="start">
                <Dropdown.Item href="#/profile">My Profile</Dropdown.Item>
                <Dropdown.Item href="/">Log Out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export { DropdownMenu };
