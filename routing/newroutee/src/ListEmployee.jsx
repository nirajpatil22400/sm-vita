import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Listemployee.css";

function Listemployee() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5081/newEmployee")
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
      });
  }, []);

  return (
    <div className="employee-container">
      <div className="header-row">
        <h2>Employees Data</h2>
        <Link to="/create" className="create-btn">
          + Create New
        </Link>
      </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.departmentId}</td>
              <td>
                <Link className="action view" to={`/display/${employee.id}`}>
                  View
                </Link>
              </td>
              <td>
                <Link className="action edit" to={`/edit/${employee.id}`}>
                  Edit
                </Link>
              </td>
              <td>
                <Link className="action delete" to={`/delete/${employee.id}`}>
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Listemployee;
