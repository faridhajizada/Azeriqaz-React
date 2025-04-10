import React from "react";
import Filter from "./Filter/Filter";
import Create from "./Create/Create";

function Header() {
  return (
    <div className="py-8 px-2">
      <div className="d-flex justify-content-between">
        <Filter />
        <Create />
      </div>
    </div>
  );
}

export default Header;
