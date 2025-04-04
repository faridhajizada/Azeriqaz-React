import React, { useState } from "react";
import CreateModal from "./CreateModal/CreateModal";
import ExportBtn from "./ExportBtn/ExportBtn";

function UserHeader() {
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <>
      <div className="card-header border-0">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-1 mb-1 text-gray-900">
            İstifadəçilər
          </span>
          <span className="text-muted mt-1 fw-semibold fs-7 text-gray-800">
            Dashboard / Istifadəçilər
          </span>
        </h3>
      </div>
      <div className="py-8 px-10">
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-light-primary me-3"
            onClick={toggleFilter}
          >
            <i className="fs-2 fas fa-filter"></i> Filter
          </button>
          <CreateModal />
        </div>

        {/* Аккордеон */}
        <div className={`filter-accordion mt-3 ${showFilter ? "open" : ""}`}>
          <div className="card p-4 shadow-sm">
            <div className="row">
              <div className="mb-3 col-md-6">
                <label className="form-label">İstifadəçi adı</label>
                <input type="text" className="form-control" placeholder="Ad" />
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label">Rolu</label>
                <select className="form-control">
                  <option value="">Seçin</option>
                  <option value="admin">Admin</option>
                  <option value="user">İstifadəçi</option>
                </select>
              </div>
              <div className="mb-3 col-md-6">
                <div className="d-flex align-items-end h-100">
                  <button className="btn btn-primary w-100">Axtar</button>
                </div>
              </div>
            </div>
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
    </>
  );
}

export default UserHeader;
