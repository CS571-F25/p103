import { useState, useEffect } from "react";

function EventCard({ title, date, description, location, isPast = false, showRSVP = false }) {
  const [rsvpStatus, setRsvpStatus] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);

  const eventKey = `rsvp_${title}_${date}`.replace(/\s+/g, '_');

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    const storedName = localStorage.getItem('userName');
    if (storedEmail) {
      setUserEmail(storedEmail);
      setUserName(storedName);
    }

    const hasRSVPd = localStorage.getItem(eventKey) === 'true';
    if (hasRSVPd) {
      setRsvpStatus(true);
    }
  }, [eventKey]);

  const handleRSVP = () => {
    let email = userEmail;
    let name = userName;

    if (!email) {
      email = prompt("Please enter your email to RSVP:");
      if (!email) {
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      name = prompt("Please enter your name (optional):");

      localStorage.setItem('userEmail', email);
      if (name) {
        localStorage.setItem('userName', name);
      }

      setUserEmail(email);
      setUserName(name);
    }

    localStorage.setItem(eventKey, 'true');
    setRsvpStatus(true);

    const greeting = name ? `${name}` : 'there';
    alert(`Thanks for RSVPing to ${title}, ${greeting}! We'll send a confirmation email to ${email}.`);
  };

  return (
    <div className="col">
      <div className="card h-100 shadow-sm border-0 d-flex flex-column">
        <div className="card-header text-white border-0">
          <h3 className="card-title mb-0 fw-semibold">{title}</h3>
        </div>
        <div className="card-body d-flex flex-column">
          <p className="card-text text-muted flex-grow-1">{description}</p>
          {location && (
            <p className="card-text mb-0 mt-auto">
              <strong>Location:</strong> {location}
            </p>
          )}
        </div>
        <div className="card-footer bg-transparent border-0 pt-0">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div className="d-flex align-items-center">
              <span className="badge me-2" style={{ backgroundColor: "var(--ctc-dark-green)", color: "white" }}>
                <i className="bi bi-calendar-event"></i>
              </span>
              <small className="fw-semibold" style={{ color: "var(--ctc-dark-green)" }}>{date}</small>
            </div>
            {showRSVP && !isPast && (
              <button
                className={`btn btn-sm ${rsvpStatus ? 'btn-success' : 'btn-primary'}`}
                onClick={handleRSVP}
                disabled={rsvpStatus}
              >
                {rsvpStatus ? 'RSVP\'d ✓' : 'RSVP'}
              </button>
            )}
            {isPast && (
              <span className="badge bg-secondary">Past Event</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
