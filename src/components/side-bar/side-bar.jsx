import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { SideArray } from './array';


const SideBar = ({ setActive, active }) => {
    return (
        <div>
            <div className="d-flex flex-column flex-md-row align-items-center gap-2 p-3 mb-4">
                <FiShoppingCart className="fs-3 text-secondary" />
                <h4 className="text-secondary fw-bold m-0">STORE</h4>
            </div>
            {SideArray.map((item) => (
                <div className="d-flex align-items-center gap-2 p-3 rounded" key={item.id} style={{
                    backgroundColor: active === item ? '#007bff' : 'transparent',
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
