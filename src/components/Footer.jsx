function Footer() {
  return (
    <footer className="mt-5 py-4" style={{ backgroundColor: "var(--ctc-dark-green)", color: "white" }}>
      <div className="container text-center">
        <p className="mb-1">Code to Connect - UW-Madison</p>
        <p className="mb-1">Email: codetoconnect@wisc.edu</p>
        <p className="mb-1">
          <a href="http://linkedin.com/company/code-to-connect" className="text-white" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
        <p className="mb-0">&copy; {new Date().getFullYear()} Code to Connect</p>
      </div>
    </footer>
  );
}

export default Footer;
