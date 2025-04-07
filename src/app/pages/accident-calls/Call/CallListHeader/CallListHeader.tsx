import React, { useState } from "react";
import CreateModal from "./CreateModal";
import CallListFilter from "./CallListFilter";
import PageTitle from "./../../../../components/PageTitle/PageTitle";
import "./CallListHeader.scss";

function CallListHeader() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <PageTitle
        title="Qəza çağırışları"
        breadcrumb="Dashboard / Qəza Çağırışı  / Çağırışlar"
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
        <CallListFilter showFilter={showFilter} />
      </div>
    </>
  );
}

export default CallListHeader;
