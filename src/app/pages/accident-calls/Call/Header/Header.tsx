import React, { useState } from "react";
import CreateModal from "./CreateModal";
import Filter from "./Filter";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import "./Header.scss";

function Header() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <PageTitle
        title="Qəza çağırışları"
        breadcrumb={[
          { label: "Dashboard", path: "/dashboard" },
          { label: "Qəza Çağırışı", path: "/dashboard/accident-calls/call" },
          { label: "Çağırışlar", path: "/dashboard/accident-calls/call" },
        ]}
      />

      <div className="py-8 px-2">
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-light-primary me-3"
            onClick={() => setShowFilter((prev) => !prev)}
          >
            <i className="fs-2 fas fa-filter"></i> Filter
          </button>
          <CreateModal />
        </div>
        <Filter showFilter={showFilter} />
      </div>
    </>
  );
}

export default Header;
