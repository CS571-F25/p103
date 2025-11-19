import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";

function Contact() {
  return (
    <div className="container mt-4">
      <PageHeader
        header="Contact Us"
        subheader="Have questions? Reach out to us at codetoconnect.uw@gmail.com!"
      />
      <ContactForm />
    </div>
  );
}

export default Contact;
