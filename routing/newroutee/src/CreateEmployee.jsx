// import { useState, useEffect } from "react"; // ✅ Fixed: added useEffect
// import { useNavigate } from "react-router-dom";
// import "./CreateEmployee.css";

// function CreateEmployee() {
//   const [employee, setFormData] = useState({});
//   const navigate = useNavigate();

//   // ✅ Redirect to login if session key is missing or invalid
//   useEffect(() => {
//     const chks = sessionStorage.getItem("key");
//     if (!chks || chks === "" || chks === "null" || chks === "undefined") {
//       navigate("/"); // redirect to login/home
//     }
//   }, [navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     fetch("http://localhost:5081/newEmployee", {
//       method: "POST",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify(employee),
//     })
//       .then((res) => {
//         if (res.ok) {
//           console.log("Data sent successfully");
//           navigate("/listemployee"); // go to list only if data sent
//         } else {
//           console.error("Error sending data");
//         }
//       })
//       .catch((err) => console.error("Fetch error:", err));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form-container">
//       <label className="form-label">Name:</label>
//       <input
//         type="text"
//         name="name"
//         onChange={handleChange}
//         className="form-input"
//         required
//       />
//       <br />

//       <label className="form-label">Email:</label>
//       <input
//         type="email"
//         name="email"
//         onChange={handleChange}
//         className="form-input"
//         required
//       />
//       <br />

//       <label className="form-label">Department:</label>
//       <input
//         type="text"
//         name="departmentId"
//         onChange={handleChange}
//         className="form-input"
//         required
//       />
//       <br />

//       <input type="submit" value="Submit" className="form-submit" />
//     </form>
//   );
// }

// export default CreateEmployee;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateEmployee.css";

function CreateEmployee() {
  const [employee, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const chks = sessionStorage.getItem("key");
    if (!chks || chks === "" || chks === "null" || chks === "undefined") {
      navigate("/"); // redirect to login/home
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:5081/newEmployee", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(employee),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Data sent successfully");
          navigate("/listemployee"); // go to list only if data sent
        } else {
          console.error("Error sending data");
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form-container">
        <h2 className="form-title">Create Employee</h2>

        <label className="form-label">Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="form-input"
          required
        />

        <label className="form-label">Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="form-input"
          required
        />

        <label className="form-label">Department:</label>
        <input
          type="text"
          name="departmentId"
          onChange={handleChange}
          className="form-input"
          required
        />

        <button type="submit" className="form-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateEmployee;
