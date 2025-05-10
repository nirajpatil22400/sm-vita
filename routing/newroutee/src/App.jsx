//this code crud
// import { Outlet, Link } from "react-router-dom";

// export default function App() {
//   return (
//     <div>
//       <h1>My Website</h1>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/home">Home</Link>
//           </li>
//           <li>
//             <Link to="/contactus">Contact Us</Link>
//           </li>
//           <li>
//             <Link to="/listproduct">List Product</Link>
//           </li>
//           <li>
//             <Link to="/Listemployee">Listemployee</Link>
//           </li>
//           <li>
//             <Link to="/create">Create Employee</Link>
//           </li>
//           <li>
//             <Link to="*">Nopage</Link>
//           </li>
//         </ul>
//       </nav>
//       <Outlet />
//     </div>
//   );
// }

//trying for login
/*
import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(null);
  const [readVal, setReadVal] = useState("");
  const navigate = useNavigate();

  const handleData = (event) => {
    setReadVal(event.target.value);
  };

  const check = (event) => {
    if (event.target.value === "LoggedIn") {
      const data = { readVal };
      sessionStorage.setItem("key", JSON.stringify(data));
      setReadVal("");
      setLoggedIn(true);
    } else {
      sessionStorage.removeItem("key");
      setLoggedIn(false);
    //   navigate("/"); // Optional redirection
    }
  };

  return (
    <div>
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
        </ul>
      </nav>

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          value={readVal}
          onChange={handleData}
          placeholder="Enter value"
        />
        {isLoggedIn ? (
          <button onClick={check} value="LoggedOut">
            Log Out
          </button>
        ) : (
          <button onClick={check} value="LoggedIn">
            Log In
          </button>
        )}
      </div>

      <hr />
      <Outlet />
    </div>
  );
}

export default App;
*/

import { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(null);
  const [readVal, setReadVal] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const sessionData = sessionStorage.getItem("key");
    if (sessionData) {
      setLoggedIn(true);
    }
  }, []);

  const handleData = (event) => {
    setReadVal(event.target.value);
  };

  const check = (event) => {
    if (event.target.value === "LoggedIn") {
      const data = { readVal };
      sessionStorage.setItem("key", JSON.stringify(data));
      setReadVal("");
      setLoggedIn(true);
      navigate("/listemployee"); // 👉 Redirect to employee list
    } else {
      sessionStorage.removeItem("key");
      setLoggedIn(false);
      navigate("/home"); // 👉 Redirect to home on logout
    }
  };

  return (
    <div>
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
            <Link to="/listemployee">List Employee</Link>
          </li>
          <li>
            <Link to="/create">Create Employee</Link>
          </li>
        </ul>
      </nav>

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          value={readVal}
          onChange={handleData}
          placeholder="Enter value"
        />
        {isLoggedIn ? (
          <button onClick={check} value="LoggedOut">
            Log Out
          </button>
        ) : (
          <button onClick={check} value="LoggedIn">
            Log In
          </button>
        )}
      </div>

      <hr />
      <Outlet />
    </div>
  );
}

export default App;
