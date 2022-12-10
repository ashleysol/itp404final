import { NavLink } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";

export default function Navigation() {
  const activeStyle = {
    color:"#00008B",
  };
  return (
    <div>
      <nav>
        <ul className="nav justify-content-end">
          <li className="nav-item">
          <NavLink className="nav-link" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/">
            Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/reviews" className="nav-link" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              Reviews
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin" className="nav-link" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              Admin
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
