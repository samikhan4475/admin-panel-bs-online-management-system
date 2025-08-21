import { Link } from "react-router-dom";
import { SideArray } from "./array";

const SideBar = ({ setActive, active }) => {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center gap-2 p-3 mb-4">
        <img
          src="http://www.giccl.edu.pk/assets/images/logonewgic-144x144.jpg"
          alt="GIGCCL Logo"
          className="admin-logo rounded-circle"
        />
        <span
          style={{
            fontSize: "20px",
            color: "white",
            fontWeight: "700",
          }}
        >
          GIGCCL
        </span>
      </div>
      {SideArray.map((item) => (
        <div
          className="d-flex gap-2 p-3"
          key={item.id}
          style={{
            backgroundColor: active === item ? "#000" : "transparent",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <div className="fs-4  text-white">{item.icon}</div>
          <Link
            to={item.route}
            className="text-decoration-none text-white pt-1 fw-bold"
            onClick={() => setActive(item)}
          >
            {item.Name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export { SideBar };
