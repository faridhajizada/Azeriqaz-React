import React from "react";
import CallListForm from "./CallListForm";
import CallListActions from "./CallListActions";

const CallListFilter = ({ showFilter }) => {
  return (
    <div className={`filter-accordion mt-3 ${showFilter ? "open" : ""}`}>
      <div className="card p-4 shadow-sm">
        <div className="row">
          <div className="col-md-10">
            <CallListForm />
          </div>
          <div className="col-md-2">
            <CallListActions />
          </div>
        </div>
      </div>

      <style jsx>{`
        .filter-accordion {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
          opacity: 0;
        }
        .filter-accordion.open {
          max-height: 300px;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default CallListFilter;
