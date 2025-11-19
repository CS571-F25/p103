import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/p103">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <NavLink className="navbar-brand mb-0 h1 ms-3" to="/">Code to Connect</NavLink>
        <ul className="navbar-nav">
          <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`} to="/" end>Home</NavLink></li>
          <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`} to="/about">About</NavLink></li>
          <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`} to="/events">Events</NavLink></li>
          <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`} to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
