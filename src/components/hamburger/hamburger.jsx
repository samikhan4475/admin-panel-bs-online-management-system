import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './hamburger.css';
import { SideArray } from '../side-bar';

const Hamburger = ({ active, setActive }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='d-md-none'>
            <Button size="sm" className="bg-dark" onClick={handleShow}>
                <AiOutlineMenu size={17} />
            </Button>

            <Offcanvas show={show} onHide={handleClose} backdrop="static" className="custom-offcanvas">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <div className="d-flex flex-md-row align-items-center gap-2 p-3 mb-4">
                            <FiShoppingCart className="fs-3 text-secondary" />
                            <h4 className="text-secondary fw-bold m-0">STORE</h4>
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {SideArray?.map((item) => (
                        <div className="d-flex align-items-center gap-2 p-3 rounded" key={item.id} style={{
                            backgroundColor: active?.id === item.id ? '#007bff' : 'transparent',
                        }}>
                            <div className="fs-4 text-secondary">
                                {item.icon}
                            </div>
                            <Link to={item.route} className="text-decoration-none text-secondary fw-bold" onClick={() => { setActive(item); handleClose(); }}>
                                {item.Name}
                            </Link>
                        </div>
                    ))}
                </Offcanvas.Body>
            </Offcanvas>
        </div >
    )
}

export { Hamburger }
