function EventCard({ title, date, description }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm border-0">
        <div className="card-header text-white border-0">
          <h5 className="card-title mb-0 fw-semibold">{title}</h5>
        </div>
        <div className="card-body">
          <p className="card-text text-muted">{description}</p>
        </div>
        <div className="card-footer bg-transparent border-0 pt-0">
          <div className="d-flex align-items-center">
            <span className="badge bg-pink text-dark me-2">
              <i className="bi bi-calendar-event"></i>
            </span>
            <small className="fw-semibold" style={{ color: "var(--ctc-dark-green)" }}>{date}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
