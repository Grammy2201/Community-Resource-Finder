export default function SkeletonCard() {
  return (
    <div
      style={{
        background: "white",
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "1rem",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        opacity: 0.6,
      }}
    >
      <div style={{ height: "20px", background: "#ddd", marginBottom: "0.5rem", borderRadius: "4px" }} />
      <div style={{ height: "16px", background: "#eee", marginBottom: "0.3rem", borderRadius: "4px" }} />
      <div style={{ height: "16px", background: "#eee", marginBottom: "0.3rem", borderRadius: "4px" }} />
      <div style={{ height: "16px", background: "#eee", width: "60%", borderRadius: "4px" }} />
    </div>
  );
}
