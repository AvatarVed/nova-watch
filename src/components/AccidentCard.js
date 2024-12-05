import React from "react";

function AccidentCard({ accident }) {
  return (
    <div
      style={{
        backgroundColor: "#2c2c54",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      }}
    >
      <h3>{accident.location}</h3>
      <p>Severity: {accident.severity}</p>
      <p>{accident.details}</p>
    </div>
  );
}

export default AccidentCard;
