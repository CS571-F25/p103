import MemberSignup from "../components/MemberSignup";
import PageHeader from "../components/PageHeader";

function JoinNow() {
  return (
    <div className="container mt-4">
      <PageHeader
        header="Join Now"
        subheader="Join our community of learners and builders. Fill out the form below to sign up!"
      />
      <MemberSignup />
    </div>
  );
}

export default JoinNow;
