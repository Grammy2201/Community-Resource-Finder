export default function FilterPanel({ selectedType, onSelectType }) {
  const types = ["All", "Food Bank", "Shelter", "Clinic"];

  return (
    <div style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem" }}>
      {types.map((type) => (
        <button
          key={type}
          onClick={() => onSelectType(type)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            background: selectedType === type ? "#007bff" : "white",
            color: selectedType === type ? "white" : "black",
            cursor: "pointer",
          }}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
