import EventCard from "./EventCard";

function UpcomingEvents() {
  const events = [
    { id: 1, title: "Science on the Square", date: "October 16th, 5-9pm", description: "Join us at Science on the Square" },
    { id: 2, title: "Discovery Expo", date: "October 22nd, 9:30am-1:30pm", description: "Come visit us at Discovery Expo" },
  ];

  return (
    <div className="container mt-4">
      <h2>Upcoming Events</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
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