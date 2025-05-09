import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/listproduct">List Product</Link>
          </li>
          <li>
            <Link to="*">Nopage</Link>
          </li>
          <li>
            <Link to="/Listemployee">Listemployee</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
