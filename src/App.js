import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import AddStudent from "./Components/AddStudent";
import StudentList from "./Components/StudentList";
import UpdateStudent from "./Components/UpdateStudent";
import SearchStudent from "./Components/SearchStudent";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Student Manager</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/add">Add</Link>
            <Link className="nav-link" to="/list">List</Link>
            <Link className="nav-link" to="/search">Search</Link>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/list" element={<StudentList />} />
          <Route path="/update/:name" element={<UpdateStudent />} />
          <Route path="/search" element={<SearchStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
