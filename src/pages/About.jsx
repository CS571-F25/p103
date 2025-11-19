import TeamMember from "../components/TeamMember";

function About() {
  const team = [
    { id: 1, name: "Sudeeksha", role: "Founder, Senior Advisor", bio: "Senior - CS & DS" },
    { id: 2, name: "Annie", role: "Internal Comms Chair", bio: "Junior - CS & Stats" },
    { id: 3, name: "Anya", role: "External Comms Chair", bio: "Junior - CS & DS" },
    { id: 4, name: "Alan", role: "Outreach Chair", bio: "Senior - CS & Env Studies" },
    { id: 5, name: "Xixi", role: "Finance Chair", bio: "Sophomore - CS" },
    { id: 6, name: "Angel", role: "Education Chair", bio: "Senior - CS" },
    { id: 7, name: "Om", role: "Education Chair", bio: "Senior - CS" },
    { id: 8, name: "Hasti", role: "Social Media Manager", bio: "Junior - CS" },
  ];

  return (
    <div className="container mt-4">
      <h1>About Us</h1>
      <p>Code to Connect is a student organization at UW-Madison dedicated to teaching coding skills and fostering community.</p>
      <p>We welcome students of all experience levels.</p>

      <h2 className="mt-5">Board Members</h2>
      <div className="row">
        {team.map((member) => (
          <TeamMember
            key={member.id}
            name={member.name}
            role={member.role}
            bio={member.bio}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
