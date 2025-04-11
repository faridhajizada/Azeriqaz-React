import React from "react";

const Actions = () => {
  return (
    <>
      {[
        { label: "Axtar", icon: "fas fa-search", className: "btn btn-primary" },
      ].map((button, index) => (
        <div key={index} className="mb-3 col-md-12">
          <div className="d-flex align-items-end h-100">
            <button className={`${button.className} w-100 fw-bold py-3`}>
              <i className={`${button.icon} me-2`}></i> {button.label}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Actions;
