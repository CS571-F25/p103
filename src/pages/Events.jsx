import EventCard from "../components/EventCard";
import PageHeader from "../components/PageHeader";
import { RoughNotation } from "react-rough-notation";

function Events() {
  const upcomingEvents = [
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

  const pastEvents = [
    {
      id: 4,
      title: "Science on the Square",
      date: "October 16th, 2024, 5-9pm",
      description: "We showcased our organization at Science on the Square on Library Mall.",
      location: "Library Mall"
    },
    {
      id: 5,
      title: "Discovery Expo",
      date: "October 22nd, 2024, 9:30am-1:30pm",
      description: "Presented our organization to incoming students at Discovery Expo.",
      location: "Kohl Center"
    },
    {
      id: 6,
      title: "Python Basics Workshop",
      date: "November 5th, 2024, 6-8pm",
      description: "Covered Python fundamentals including variables, loops, and functions.",
      location: "Computer Sciences 1325"
    },
  ];

  return (
    <div className="container mt-4 mb-5">
      <PageHeader
        header="Events"
        subheader="Check out our upcoming workshops and meetings, and see what we've done in the past."
      />

      <div className="mt-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">
            <RoughNotation type="underline" show={true} color="#1b9d88" strokeWidth={3} iterations={1}>
              Upcoming Events
            </RoughNotation>
          </h2>
          <p className="text-muted">Don't miss out on our latest workshops and meetups</p>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              description={event.description}
              location={event.location}
              showRSVP={true}
              isPast={false}
            />
          ))}
        </div>
      </div>

      <div className="mt-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">
            <RoughNotation type="underline" show={true} color="#063832" strokeWidth={3} iterations={1}>
              Past Events
            </RoughNotation>
          </h2>
          <p className="text-muted">Take a look at what we've accomplished</p>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
          {pastEvents.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              description={event.description}
              location={event.location}
              showRSVP={false}
              isPast={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
