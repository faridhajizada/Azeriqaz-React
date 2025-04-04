import React, { useState } from "react";

function CallListFooter() {
  const [currentPage, setCurrentPage] = useState(2); // Set the current page (for example, 2)
  const [pageSize, setPageSize] = useState(10); // Set the page size (for example, 10)

  const handlePageSizeChange = (e) => {
    setPageSize(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="row px-2">
        <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
          <div className="dataTables_length" id="kt_datatable_example_1_length">
            <label className="d-flex">
              Səhifə başına
              <select
                name="kt_datatable_example_1_length"
                aria-controls="kt_datatable_example_1"
                className="form-select form-select-sm form-select-solid"
                value={pageSize}
                onChange={handlePageSizeChange}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>{" "}
              qeyd göstər
            </label>
          </div>
          <div
            className="dataTables_info"
            id="kt_datatable_example_1_info"
            role="status"
            aria-live="polite"
          >
            Cəmi 18 qeyddən {currentPage}-ci səhifə göstərilir (2 səhifə)
          </div>
        </div>
        <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
          <div
            className="dataTables_paginate paging_simple_numbers"
            id="kt_datatable_example_1_paginate"
          >
            <ul className="pagination">
              <li
                className={`paginate_button page-item previous ${
                  currentPage === 1 ? "disabled" : ""
                }`}
                id="kt_datatable_example_1_previous"
              >
                <a
                  href="#"
                  aria-controls="kt_datatable_example_1"
                  data-dt-idx="0"
                  onClick={() => handlePageChange(currentPage - 1)}
                  tabIndex="0"
                  className="page-link"
                >
                  Əvvəlki
                </a>
              </li>
              <li
                className={`paginate_button page-item ${
                  currentPage === 1 ? "active" : ""
                }`}
                onClick={() => handlePageChange(1)}
              >
                <a
                  href="#"
                  aria-controls="kt_datatable_example_1"
                  data-dt-idx="1"
                  tabIndex="0"
                  className="page-link"
                >
                  1
                </a>
              </li>
              <li
                className={`paginate_button page-item ${
                  currentPage === 2 ? "active" : ""
                }`}
                onClick={() => handlePageChange(2)}
              >
                <a
                  href="#"
                  aria-controls="kt_datatable_example_1"
                  data-dt-idx="2"
                  tabIndex="0"
                  className="page-link"
                >
                  2
                </a>
              </li>
              <li
                className={`paginate_button page-item next ${
                  currentPage === 2 ? "disabled" : ""
                }`}
                id="kt_datatable_example_1_next"
              >
                <a
                  href="#"
                  aria-controls="kt_datatable_example_1"
                  data-dt-idx="3"
                  onClick={() => handlePageChange(currentPage + 1)}
                  tabIndex="0"
                  className="page-link"
                >
                  Növbəti
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CallListFooter;
