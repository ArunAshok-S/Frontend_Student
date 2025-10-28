import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function UpdateStudent() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({ name: "", age: "", course: "" });

  const handleChange = (e) => setStudent({ ...student, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/students/${name}`, student);
    alert("Student updated!");
    navigate("/list");
  };

  return (
    <div className="card p-4 shadow col-md-6 mx-auto">
      <h3 className="text-center mb-4 text-warning">Update Student</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input name="name" className="form-control" value={student.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input name="age" className="form-control" value={student.age} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Course</label>
          <input name="course" className="form-control" value={student.course} onChange={handleChange} />
        </div>
        <button className="btn btn-warning w-100">Update</button>
      </form>
    </div>
  );
}
export default UpdateStudent;
 