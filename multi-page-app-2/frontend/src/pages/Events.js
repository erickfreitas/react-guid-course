import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  if (data.isError) {
    return <h1>{data.message}</h1>;
  }

  const events = data.events;

  return <>{<EventsList events={events} />}</>;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/eventss");

  if (!response.ok) {
    // return {
    //   isError: true,
    //   message: "Could not fetch events",
    // };
    throw new Error("Could not fetch events");
  } else {
    return response;
  }
};
