import { useParams, Link } from "react-router-dom";
import { useContext } from "react";




export default function ResourceDetails() {
  const { id } = useParams();
  const { resources } = useContext();
const resource = resources.find((r) => r.id === Number(id));


  if (!resource) {
    return <p>Resource not found.</p>;
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <Link to="/" style={{ display: "block", marginBottom: "1rem" }}>
        ← Back to list
      </Link>

      <h2>{resource.name}</h2>
      <p><strong>Type:</strong> {resource.type}</p>
      <p><strong>Address:</strong> {resource.address}</p>
      <p><strong>Phone:</strong> {resource.phone}</p>

      <p style={{ marginTop: "2rem", color: "#666" }}>
        (More details coming soon: hours, map, website, etc.)
      </p>
    </div>
  );
}
