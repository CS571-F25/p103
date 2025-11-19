import { RoughNotation } from "react-rough-notation";

function PageHeader({ header, subheader }) {
  return (
    <div className="mb-4 page-header">
      <h1 className="display-5 fw-bold">
        <RoughNotation type="underline" show={true} color="#f6d1d7" strokeWidth={3} iterations={1}>
          {header}
        </RoughNotation>
      </h1>
      {subheader && <p className="lead text-muted">{subheader}</p>}
    </div>
  );
}

export default PageHeader;
