import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function StudentList() {
  const [students, setStudents] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://backend-student-1.onrender.com/students");
    setStudents(res.data);
  };

  const handleDelete = async (name) => {
    await axios.delete(`https://backend-student-1.onrender.com/students/${name}`);
    getData();
  };

  useEffect(() => { getData(); }, []);

  return (
    <div>
      <h3 className="text-center mb-4 text-primary">Student List</h3>
      <table className="table table-bordered table-striped shadow">
        <thead className="table-dark">
          <tr>
            <th>Name</th><th>Age</th><th>Course</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={index}>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.course}</td>
              <td>
                <Link to={`/update/${s.name}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <button onClick={() => handleDelete(s.name)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default StudentList;
