import React from "react";

function SearchBar({ searchQuery, onSearch }) {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input
        type="text"
        placeholder="Search accidents..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "5px",
          width: "300px",
        }}
      />
    </div>
  );
}

export default SearchBar;
