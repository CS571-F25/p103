import { Link } from "react-router";

function Hero() {
  return (
    <div className="bg-light py-5 mb-4">
      <div className="container text-center py-4">
        <p className="text-uppercase fw-semibold mb-3 small tracking-wide" style={{ color: "#495057" }}>
          UW-Madison Student Organization
        </p>
        <h1 className="display-3 fw-bold mb-4" style={{ color: "#212529" }}>
          Code to Connect
        </h1>
        <p className="lead mb-4 mx-auto" style={{ maxWidth: "600px", color: "#495057" }}>
          Learn to code, build projects, and connect with a supportive community of students at all experience levels.
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Link to="/events" className="btn btn-primary btn-lg px-4">
            View Events
          </Link>
          <Link to="/about" className="btn btn-outline-primary btn-lg px-4">
            Meet the Team
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
