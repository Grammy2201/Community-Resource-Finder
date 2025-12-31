import { Link } from "react-router-dom";

export default function ResourceCard({ resource }) {
  return (
    <Link
      to={`/resource/${resource.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          background: "white",
          padding: "1rem",
          borderRadius: "8px",
          marginBottom: "1rem",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ margin: "0 0 0.5rem 0" }}>{resource.name}</h3>
        <p style={{ margin: "0.25rem 0" }}>
          <strong>Type:</strong> {resource.type}
        </p>
        <p style={{ margin: "0.25rem 0" }}>
          <strong>Address:</strong> {resource.address}
        </p>
        <p style={{ margin: "0.25rem 0" }}>
          <strong>Phone:</strong> {resource.phone}
        </p>
      </div>
    </Link>
  );
}

