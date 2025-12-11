import { useState } from "react";

function MemberSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.memberEmail.value,
      phone: form.phone.value || "Not provided",
      major: form.major.value,
      year: form.year.value,
      experience: form.experience.value
    };

    localStorage.setItem('userEmail', data.email);
    localStorage.setItem('userName', `${data.firstName} ${data.lastName}`);

    setFormData(data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="alert alert-success mt-4" role="alert">
            <h4 className="alert-heading">Welcome to Code to Connect, {formData.firstName}!</h4>
            <p>Thank you for signing up. We've received your information:</p>
            <hr />
            <p className="mb-1"><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
            <p className="mb-1"><strong>Email:</strong> {formData.email}</p>
            <p className="mb-1"><strong>Phone:</strong> {formData.phone}</p>
            <p className="mb-1"><strong>Major:</strong> {formData.major}</p>
            <p className="mb-1"><strong>Year:</strong> {formData.year}</p>
            <p className="mb-1"><strong>Experience Level:</strong> {formData.experience}</p>
            <hr />
            <p className="mb-0">We'll be in touch soon at {formData.email} with information about upcoming events and meetings!</p>
          </div>
          <button
            className="btn btn-primary mt-3"
            onClick={() => setSubmitted(false)}
          >
            Submit Another Signup
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <form onSubmit={handleSubmit} className="mt-4 text-start">
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label fw-semibold">First Name</label>
              <input type="text" className="form-control" id="firstName" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label fw-semibold">Last Name</label>
              <input type="text" className="form-control" id="lastName" required />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="memberEmail" className="form-label fw-semibold">Email</label>
            <input type="email" className="form-control" id="memberEmail" required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label fw-semibold">Phone Number (Optional)</label>
            <input type="tel" className="form-control" id="phone" />
          </div>
          <div className="mb-3">
            <label htmlFor="major" className="form-label fw-semibold">Major</label>
            <input type="text" className="form-control" id="major" required />
          </div>
          <div className="mb-3">
            <label htmlFor="year" className="form-label fw-semibold">Year</label>
            <select className="form-select" id="year" required>
              <option value="">Select your year</option>
              <option value="freshman">Freshman</option>
              <option value="sophomore">Sophomore</option>
              <option value="junior">Junior</option>
              <option value="senior">Senior</option>
              <option value="graduate">Graduate Student</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="experience" className="form-label fw-semibold">Coding Experience Level</label>
            <select className="form-select" id="experience" required>
              <option value="">Select your experience level</option>
              <option value="beginner">Beginner - Just starting out</option>
              <option value="intermediate">Intermediate - Some projects completed</option>
              <option value="advanced">Advanced - Multiple projects and strong skills</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Sign Up as Member</button>
        </form>
      </div>
    </div>
  );
}

export default MemberSignup;
