import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Display() {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  console.log(useParams());
  useEffect(() => {
    fetch(`http://localhost:5081/newEmployee/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  }, []);

  return (
    <div>
      <label>Id : </label>
      {employee.id}
      <br />
      <label>Name : </label>
      {employee.name}
      <br />
      <label>Email : </label>
      {employee.email}
      <br />
      <label>DepartmentId : </label>
      {employee.departmentId}
      <br />
    </div>
  );
}

export default Display;
