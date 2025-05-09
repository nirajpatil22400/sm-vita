import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListEmployee() {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7230/api/Employee")
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  }, []);

  return (
    <div>
      <h4>
        <Link to="/create">Create</Link>
      </h4>
      <h2>Employees Data...</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>
                <Link to={`/emp/${emp.id}`}>Display</Link>
                <Link to={`/empup/${emp.id}`}>Edit</Link>
                <Link to={`/empdel/${emp.id}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployee;
