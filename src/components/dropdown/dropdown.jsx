import React, { useState, useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ActiveContext } from '../../App';
import { getInitials } from './value'; // Adjust the import path as necessary
import './dropdown.css';

const DropdownMenu = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const { user } = useContext(ActiveContext);

    const initials = user?.name ? getInitials(user.name) : '';

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        navigate('/');
    };

    return (
        <Dropdown show={show} onToggle={() => setShow(!show)}>
            <Dropdown.Toggle as="span" className="dropdown-toggle">
                {user?.image ? (
                    <img
                        src={user.image}
                        alt="Profile"
                        className="avatar-img"
                    />
                ) : (
                    <div className="avatar-placeholder">
                        {initials}
                    </div>
                )}
            </Dropdown.Toggle>

            <Dropdown.Menu align="start">
                <Dropdown.Item href="#/profile">My Profile</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export { DropdownMenu };
