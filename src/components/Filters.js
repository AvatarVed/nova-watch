import React from "react";

function Filters({ onFilter }) {
  const handleFilter = (filter) => {
    onFilter((prevData) =>
      filter === "All"
        ? prevData
        : prevData.filter((item) => item.severity === filter)
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      {["All", "Severe", "Moderate", "Minor"].map((filter) => (
        <button key={filter} onClick={() => handleFilter(filter)}>
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Filters;
