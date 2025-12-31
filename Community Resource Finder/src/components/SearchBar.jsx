export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search for resources..."
      onChange={(e) => onSearch(e.target.value)}
      style={{
        width: "100%",
        padding: "0.75rem",
        fontSize: "1rem",
        borderRadius: "8px",
        border: "1px solid #ccc",
        marginBottom: "1rem",
      }}
    />
  );
}
