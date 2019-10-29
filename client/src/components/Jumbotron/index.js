import React from "react";

function Jumbotron({ title, description }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}

export default Jumbotron;