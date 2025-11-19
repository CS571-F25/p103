import { Link } from "react-router";
import { RoughNotation } from "react-rough-notation";

function Hero() {
  return (
    <div className="bg-light py-5 mb-4">
      <div className="container text-center py-4">
        <p className="text-uppercase fw-semibold text-muted mb-3 small tracking-wide">
          UW-Madison Student Organization
        </p>
        <h1 className="display-3 fw-bold mb-4">
          <RoughNotation type="highlight" show={true} color="#f6d1d7" iterations={1} multiline={true}>
            Code to Connect
          </RoughNotation>
        </h1>
        <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: "600px" }}>
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
