import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { SideArray } from './array';


const SideBar = ({ setActive, active }) => {
    return (
        <div>
            <div className="d-flex flex-column flex-md-row align-items-center gap-2 p-3 mb-4">
                <img
                    src="http://www.giccl.edu.pk/assets/images/logonewgic-144x144.jpg" // Replace with your logo path
                    alt="GIGCCL Logo"
                    className="admin-logo"
                />
            </div>
            {SideArray.map((item) => (
                <div className="d-flex align-items-center gap-2 p-3 rounded" key={item.id} style={{
                    backgroundColor: active === item ? '#3c444dff' : 'transparent',
                }}>
                    <div className="fs-4 text-secondary">
                        {item.icon}
                    </div>
                    <Link to={item.route} className="text-decoration-none text-secondary fw-bold" onClick={() => setActive(item)}>
                        {item.Name}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export { SideBar };
