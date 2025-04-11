import React, { useState } from "react";
import Create from "./Create/Create";
import Filter from "./Filter/Filter";

function Header() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
      <div className="py-8 px-2">
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-light-primary me-3"
            onClick={() => setShowFilter((prev) => !prev)}
          >
            <i className="fs-2 fas fa-filter"></i> Filter
          </button>
          <Create />
        </div>
        <Filter showFilter={showFilter} />
      </div>
    </>
  );
}

export default Header;
