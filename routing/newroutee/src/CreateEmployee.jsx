import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateEmployee.css";

function CreateEmployee() {
  const [employee, setFormData] = useState({});
  let navigate = useNavigate();

  const handleChange = (e) => {
    // const { name, value } = e.target;
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    let demo = JSON.stringify(employee);
    fetch("http://localhost:5081/newEmployee", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: demo,
    }).then((r) => {
      console.log(r); // Check the response from the server it's ok or not
      if (r.ok) {
        console.log("Data sent successfully");
      } else {
        console.error("Error sending data");
      }
    });

    event.preventDefault();

    navigate("/listemployee"); //after sending data to server means after click on submit button it will redirect to listemployee page
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label className="form-label">Name:</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        className="form-input"
      />
      <br />

      <label className="form-label">Email:</label>
      <input
        type="text"
        name="email"
        onChange={handleChange}
        className="form-input"
      />
      <br />

      <label className="form-label">Department:</label>
      <input
        type="text"
        name="departmentId"
        onChange={handleChange}
        className="form-input"
      />
      <br />

      <input type="submit" className="form-submit" />
    </form>
  );
}

export default CreateEmployee;

// Example Flow
// The user types "John" in the name field:

// handleChange updates the employee state to { name: "John" }.
// The user types "john@example.com" in the email field:

// handleChange updates the employee state to { name: "John", email: "john@example.com" }.
// The user types "101" in the departmentId field:

// handleChange updates the employee state to { name: "John", email: "john@example.com", departmentId: "101" }.
// The user clicks the submit button:

// handleSubmit sends the employee state ({ name: "John", email: "john@example.com", departmentId: "101" }) to the server and navigates to the home page.
