import React from "react";

interface PageTitleProps {
  title: string;
  breadcrumb: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, breadcrumb }) => {
  const content = (
    <div className="row">
      <div className="card-header border-0">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-1 mb-1 text-gray-900">
            {title}
          </span>
          <span className="text-muted mt-1 fw-semibold fs-7 text-gray-800">
            {breadcrumb}
          </span>
        </h3>
      </div>
    </div>
  );

  return content;
};

export default PageTitle;
