function TeamMember({ name, role, bio }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 text-center">
        <div className="card-body">
          <div
            className="rounded-circle bg-secondary mx-auto mb-3 d-flex align-items-center justify-content-center text-white"
            style={{ width: "80px", height: "80px", fontSize: "32px" }}
          >
            {name.charAt(0).toUpperCase()}
          </div>
          <h3 className="card-title">{name}</h3>
          <p className="text-muted">{role}</p>
          <p className="card-text">{bio}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
