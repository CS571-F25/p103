function Footer() {
  return (
    <footer
      className="mt-5 py-4"
      style={{ backgroundColor: "var(--ctc-dark-green)", color: "white" }}
    >
      <div className="container text-center">
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 mb-2">
          <span>Code to Connect</span>
          <span
            className="d-none d-sm-inline"
            style={{ color: "var(--ctc-pink)" }}
          >
            &middot;
          </span>
          <span>University of Wisconsin-Madison</span>
          <span
            className="d-none d-sm-inline"
            style={{ color: "var(--ctc-pink)" }}
          >
            &middot;
          </span>
          <a
            href="mailto:codetoconnect.uw@gmail.com"
            className="text-white text-decoration-none"
          >
            Email
          </a>
          <span
            className="d-none d-sm-inline"
            style={{ color: "var(--ctc-pink)" }}
          >
            &middot;
          </span>
          <a
            href="http://linkedin.com/company/code-to-connect"
            className="text-white text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <p className="mb-0 small">
          &copy; {new Date().getFullYear()} Code to Connect{" "}
          <span style={{ color: "var(--ctc-pink)" }}>&middot;</span> Made with
          ❤️ by Danny
        </p>
      </div>
    </footer>
  );
}

export default Footer;
