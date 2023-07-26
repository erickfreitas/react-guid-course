import { useParams, useRouteLoaderData, Link, json } from "react-router-dom";

import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const params = useParams();
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <h1>Event Detail Page</h1>
      <EventItem event={data.event} />
      <p>
        <Link to='..' relative='path'>
          Go back
        </Link>
      </p>
    </>
  );
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/events/${params.id}`);

  if (!response.ok) {
    throw new json({ message: "Could not fetch the event" }, { status: 500 });
  } else {
    return response;
  }
};
