import EventCard from "./EventCard";
import { RoughNotation } from "react-rough-notation";

function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: "Intro to Web Development Workshop",
      date: "December 15th, 2024, 6-8pm",
      description: "Learn the basics of HTML, CSS, and JavaScript. Perfect for beginners!",
      location: "Computer Sciences 1325"
    },
    {
      id: 2,
      title: "React Fundamentals",
      date: "January 10th, 2025, 6-8pm",
      description: "Build your first React application with modern hooks and components.",
      location: "Computer Sciences 1325"
    },
    {
      id: 3,
      title: "Weekly General Meeting",
      date: "Every Thursday, 7-8pm",
      description: "Join us for our weekly meeting to discuss upcoming events and projects.",
      location: "Computer Sciences 1240"
    },
  ];

  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">
          <RoughNotation type="underline" show={true} color="#1b9d88" strokeWidth={3} iterations={1}>
            Upcoming Events
          </RoughNotation>
        </h2>
        <p className="text-muted">Don't miss out on our latest workshops and meetups</p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            description={event.description}
            location={event.location}
            showRSVP={false}
            isPast={false}
          />
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;