import { useState } from "react";
import axios from "axios";

function AddStudent() {
  const [student, setStudent] = useState({ name: "", age: "", course: "" });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://backend-student-1.onrender.com/students", student);
    alert("Student added successfully!");
    setStudent({ name: "", age: "", course: "" });
  };

  return (
    <div className="card p-4 shadow col-md-6 mx-auto">
      <h3 className="text-center mb-4 text-success">Add Student</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input name="name" className="form-control" value={student.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input name="age" className="form-control" value={student.age} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Course</label>
          <input name="course" className="form-control" value={student.course} onChange={handleChange} required />
        </div>
        <button className="btn btn-primary w-100">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
