import eventk from "../data/Eventk";
import EventCard from "./EventCard";

function Events() {
  return (
    <section id="events" className="py-16 px-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Explore Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventk.map((event) => (
          <EventCard
            key={event.id}
            {...event}
          />
        ))}
      </div>
    </section>
  );
}

export default Events;
