import UpcomingEvents from "../components/UpcomingEvents";
import PageHeader from "../components/PageHeader";

function Events() {
  return (
    <div className="container mt-4">
      <PageHeader
        header="Events"
        subheader="Check out our upcoming workshops and meetings."
      />
      <UpcomingEvents />
    </div>
  );
}

export default Events;
