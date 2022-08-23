import React from "react";

export default function Header({ handleToggle }) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="toggle-btn"
        onClick={() => handleToggle((prevState) => !prevState)}
      >
        Toggle Mode
      </button>
    </div>
  );
}
