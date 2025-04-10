import React from "react";

function Filter() {
  return (
    <div className="input-group" style={{ width: "300px" }}>
      <span className="input-group-text">
        <i className="fas fa-search"></i>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Axtar"
        aria-label="Search"
      />
    </div>
  );
}

export default Filter;
