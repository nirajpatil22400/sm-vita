import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Employeedel() {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5081/newEmployee/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      })
      .catch((error) => {
        console.error("Error fetching employee:", error);
      });
  }, [id]);

  const handleDelete = (event) => {
    event.preventDefault();

    fetch(`http://localhost:5081/newEmployee/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          console.log("Employee deleted");
          navigate("/");
        } else {
          console.error("Failed to delete employee");
        }
      })
      .catch((error) => {
        console.error("Error during delete:", error);
      });
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>
        Are you sure you want to delete this employee?
      </h1>
      <p>
        <strong>Id:</strong> {employee.id}
      </p>
      <p>
        <strong>Name:</strong> {employee.name}
      </p>
      <p>
        <strong>Email:</strong> {employee.email}
      </p>
      <p>
        <strong>Department:</strong> {employee.id}
      </p>

      <form onSubmit={handleDelete}>
        <input type="submit" value="Confirm Delete" />
      </form>
    </div>
  );
}

export default Employeedel;
