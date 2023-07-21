import { useParams, Link } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();

  return <>
    <h1>Event Detail Page</h1>
    <p>ID: {params.id}</p>
    <p>
      <Link to=".." relative="path">Go back</Link>
    </p>
  </>
};

export default EventDetailPage;