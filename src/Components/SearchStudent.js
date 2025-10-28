import { useState } from "react";
import axios from "axios";

function SearchStudent() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await axios.get(`https://backend-student-ex5n.onrender.com/search/${query}`);
    setResults(res.data);
  };

  return (
    <div className="card p-4 shadow col-md-6 mx-auto">
      <h3 className="text-center mb-4 text-info">Search Student</h3>
      <form onSubmit={handleSearch}>
        <div className="mb-3">
          <input className="form-control" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter name" />
        </div>
        <button className="btn btn-info w-100">Search</button>
      </form>

      <ul className="list-group mt-4">
        {results.map((s, index) => (
          <li key={index} className="list-group-item">
            {s.name} - {s.course} ({s.age})
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SearchStudent;
