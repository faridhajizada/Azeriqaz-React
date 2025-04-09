// PaginationControls.tsx
import React from "react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => {
  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onPageSizeChange(parseInt(e.target.value));
    onPageChange(1);
  };

  return (
    <div className="row p-4 bg-light rounded shadow-sm mt-4">
      <PageSizeSelector
        pageSize={pageSize}
        onChange={handleSizeChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <PageNavigation
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

interface PageSizeSelectorProps {
  pageSize: number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  currentPage: number;
  totalPages: number;
}

const PageSizeSelector: React.FC<PageSizeSelectorProps> = ({
  pageSize,
  onChange,
  currentPage,
  totalPages,
}) => (
  <div className="col-md-5 d-flex align-items-center justify-content-center justify-content-md-start mb-3 mb-md-0">
    <div className="me-3 text-muted">
      <strong>
        Səhifə {currentPage} / {totalPages}
      </strong>
    </div>
    <select
      className="form-select form-select-sm w-auto"
      value={pageSize}
      onChange={onChange}
    >
      {[10, 25, 50, 100].map((size) => (
        <option key={size} value={size}>
          {size}
        </option>
      ))}
    </select>
  </div>
);

interface PageNavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PageNavigation: React.FC<PageNavigationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      if (startPage > 1) pages.push(1);
      if (startPage > 2) pages.push("...");

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages - 1) pages.push("...");
      if (endPage < totalPages) pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
      <ul className="pagination mb-0">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Əvvəlki
          </button>
        </li>

        {getPageNumbers().map((page, index) => (
          <li
            key={index}
            className={`page-item ${page === currentPage ? "active" : ""} ${
              page === "..." ? "disabled" : ""
            }`}
          >
            {page === "..." ? (
              <span className="page-link">...</span>
            ) : (
              <button
                className="page-link"
                onClick={() => onPageChange(page as number)}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Növbəti
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PaginationControls;
