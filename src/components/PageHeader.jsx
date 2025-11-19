function PageHeader({ header, subheader }) {
  return (
    <div className="mb-4 page-header">
      <h1 className="display-5 fw-bold">{header}</h1>
      {subheader && <p className="lead text-muted">{subheader}</p>}
    </div>
  );
}

export default PageHeader;
