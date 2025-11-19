function Footer() {
  return (
    <footer
      className="mt-5 py-4"
      style={{ backgroundColor: "var(--ctc-dark-green)", color: "white" }}
    >
      <div className="container text-center">
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 mb-2">
          <span>University of Wisconsin-Madison</span>
          <span className="d-none d-sm-inline">&middot;</span>
          <a
            href="mailto:codetoconnect.uw@gmail.com"
            className="text-white text-decoration-none"
          >
            codetoconnect.uw@gmail.com
          </a>
          <span className="d-none d-sm-inline">&middot;</span>
          <a
            href="http://linkedin.com/company/code-to-connect"
            className="text-white text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/company/code-to-connect
          </a>
          <span className="d-none d-sm-inline">&middot;</span>
          <p className="mb-0 small">
            &copy; {new Date().getFullYear()} Code to Connect
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
