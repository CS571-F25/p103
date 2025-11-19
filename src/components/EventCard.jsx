function EventCard({ title, date, description }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div className="card-header text-white">
          <h5 className="card-title mb-0">{title}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer bg-transparent">
          <small className="text-muted">{date}</small>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
