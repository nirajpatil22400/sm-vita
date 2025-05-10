import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css"; // external CSS file

function Edit() {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5081/newEmployee/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5081/newEmployee/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(employee),
    }).then(() => {
      navigate("/listemployee");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label className="form-label">ID:</label>
      <input
        type="text"
        name="id"
        value={employee?.id ?? ""}
        disabled={true}
        onChange={handleChange}
        className="form-input"
      />
      <br />

      <label className="form-label">Name:</label>
      <input
        type="text"
        name="name"
        value={employee?.name ?? ""}
        onChange={handleChange}
        className="form-input"
      />
      <br />

      <label className="form-label">Email:</label>
      <input
        type="text"
        name="email"
        value={employee?.email ?? ""}
        onChange={handleChange}
        className="form-input"
      />
      <br />

      <label className="form-label">Department:</label>
      <input
        type="text"
        name="department"
        value={employee?.departmentId ?? ""}
        onChange={handleChange}
        className="form-input"
      />
      <br />

      <input type="submit" value="Update" className="form-submit" />
    </form>
  );
}

export default Edit;
