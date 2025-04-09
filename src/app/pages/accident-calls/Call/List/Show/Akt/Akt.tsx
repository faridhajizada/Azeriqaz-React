import React from "react";

function Akt() {
  return (
    <>
      <h4 className="mb-4 text-primary">Akt sənədi</h4>

      <div className="card shadow-sm border border-dashed p-10 text-center bg-light-primary bg-opacity-25">
        <div className="mb-4">
          <i
            className="fas fa-file-alt fa-4x text-primary"
            style={{ fontSize: "50px" }}
          ></i>
        </div>

        <h5 className="mb-2 text-gray-800">Texniki akt</h5>

        <button className="btn btn-primary mt-4">
          <i className="fas fa-upload me-2"></i> Akt yüklə
        </button>
      </div>
    </>
  );
}

export default Akt;
