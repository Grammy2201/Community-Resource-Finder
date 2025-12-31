import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import ResourceCard from "./components/ResourceCard";
import FilterPanel from "./components/FilterPanel";
import { ResourceContext } from "./context/ResourceContext";
import ResourceDetails from "./pages/ResourceDetails";
import SkeletonCard from "./components/SkeletonCard";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const { resources, loading } = useContext(ResourceContext);

  const filteredResources = resources.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(searchText.toLowerCase()) ||
      r.type.toLowerCase().includes(searchText.toLowerCase());

    const matchesType =
      selectedType === "All" || r.type === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
            <h1>Community Resource Finder</h1>
            <p>Welcome! </p>

            <SearchBar onSearch={setSearchText} />
            <FilterPanel
              selectedType={selectedType}
              onSelectType={setSelectedType}
            />

            {loading ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
              ) : filteredResources.length === 0 ? ( <p>No resources found.</p>
            ) : (
              filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))
            )}
          </div>
        }
      />

      <Route path="/resource/:id" element={<ResourceDetails />} />
    </Routes>
  );
}




