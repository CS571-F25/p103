import EventCard from "./EventCard";
import { RoughNotation } from "react-rough-notation";

function UpcomingEvents() {
  const events = [
    { id: 1, title: "Science on the Square", date: "October 16th, 5-9pm", description: "Join us at Science on the Square" },
    { id: 2, title: "Discovery Expo", date: "October 22nd, 9:30am-1:30pm", description: "Come visit us at Discovery Expo" },
  ];

  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">
          <RoughNotation type="underline" show={true} color="#f6d1d7" strokeWidth={3} iterations={1}>
            Upcoming Events
          </RoughNotation>
        </h2>
        <p className="text-muted">Don't miss out on our latest workshops and meetups</p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;