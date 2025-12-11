import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import JoinNow from "./pages/JoinNow";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/p103">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand mb-0 h1" to="/">Code to Connect</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`} to="/" end>Home</NavLink></li>
              <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`} to="/about">About</NavLink></li>
              <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`} to="/events">Events</NavLink></li>
              <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`} to="/join-now">Join Now</NavLink></li>
              <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`} to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/join-now" element={<JoinNow />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
