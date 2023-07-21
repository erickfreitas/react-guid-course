import { NavLink } from "react-router-dom";

const EVENTS_DUMMY = [
  { id: 'e1', name: 'Event 1'},
  { id: 'e2', name: 'Event 2'},
  { id: 'e3', name: 'Event 3'},
];  

const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {EVENTS_DUMMY.map((event) => (
          <li key={event.id}><NavLink to={`/events/${event.id}`}>{event.name}</NavLink></li>
        ))}
      </ul>
    </>
  )
}

export default EventsPage;