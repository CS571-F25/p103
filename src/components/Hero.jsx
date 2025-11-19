import { Link } from "react-router";

function Hero() {
  return (
    <div className="bg-light py-5 mb-4">
      <div className="container text-center">
        <h1 className="display-4 fw-bold">Welcome to Code to Connect</h1>
        <p className="lead text-muted mb-4">
          UW-Madison's club for learning to code and building community.
        </p>
        <Link to="/events" className="btn btn-primary btn-lg">
          View Events
        </Link>
      </div>
    </div>
  );
}

export default Hero;
