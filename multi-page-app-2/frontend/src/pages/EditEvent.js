import { Await, useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";
import { Suspense } from "react";

const EditEventPage = () => {
  const { event } = useRouteLoaderData("event-detail");

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={event}>
        {(loadedEvent) => <EventForm method='PATCH' event={loadedEvent} />}
      </Await>
    </Suspense>
  );
};

export default EditEventPage;
