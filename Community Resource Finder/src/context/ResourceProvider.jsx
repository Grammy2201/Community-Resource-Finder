import { useState, useEffect } from "react";
import { ResourceContext } from "./ResourceContext";

export default function ResourceProvider({ children }) {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadResources() {
      try {
        const response = await fetch("http://localhost:4000/resources");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setResources(data);
      } catch (error) {
        console.error("Failed to load resources:", error);
        setResources([]); // fallback to empty array
      } finally {
        setLoading(false);
      }
    }

    loadResources();
  }, []);

  return (
    <ResourceContext.Provider value={{ resources, loading }}>
      {children}
    </ResourceContext.Provider>
  );
}


