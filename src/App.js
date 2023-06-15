import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <div className="app">
      <div className="brand">Website ala-ala</div>
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>

        <Link to="/aboutme" className="nav-item">Profile</Link>

        <Link to="/blog" className="nav-item">Blog</Link>

        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="aboutme" element={<AboutMe />}></Route>
        <Route path="blog/:id" element={<BlogDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
