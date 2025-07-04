import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Tasks from "./Pages/Tasks";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import Posts from "./Pages/posts";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <nav className="flex gap-4 border-b pb-2 mb-4">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/tasks" className="text-blue-600 hover:underline">Tasks</Link>
          <Link to="/about" className="text-blue-600 hover:underline">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;